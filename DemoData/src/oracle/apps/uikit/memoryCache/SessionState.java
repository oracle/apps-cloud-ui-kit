package oracle.apps.uikit.memoryCache;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.faces.context.FacesContext;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import oracle.adf.share.ADFContext;
import oracle.apps.uikit.data.Evaluation;
import oracle.apps.uikit.data.EvaluationTask;
import oracle.apps.uikit.data.FinancialReport;
import oracle.apps.uikit.data.Infolet;
import oracle.apps.uikit.data.ItemNode;
import oracle.apps.uikit.data.Opportunity;
import oracle.apps.uikit.data.Person;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class SessionState {
    //Shell
    private boolean _welcomePopupActive;
    private String _welcomeMode; //'springboard', 'infolets'
    private List<Infolet> _infoletsList;
    private int _actionedInfoletId = -1;
    private String _skinFamily;
    private String _skinFamilyLabel;
    private String _homePageView; //'BANNER', 'GRID'
    private String _homePageOption; //'social', 'announcements', 'coverImage', 'none'
    private String _bannerPanelView; //'summary', 'detail'
    //Application Nodes
    private Map<String, ItemNode> _clusterMap = new HashMap<String, ItemNode>(); //for quick access to ItemNode from Id
    private Map<String, ItemNode> _gridNodeMap = new LinkedHashMap<String, ItemNode>(); //for display in welcome page springboard
    private List<ItemNode> _navNodeList = new ArrayList<ItemNode>(); //for display in navigator
    //CRM Contacts
    private List<Person> _contactsList;
    private List<Person> _filteredContactsList;
    private List<Person> _mapContactsList;
    //CRM Opportunities
    private List<Opportunity> _opportunitiesList;
    private List<Opportunity> _filteredOpportunitiesList;
    //ERP Financial Reports
    private List<FinancialReport> _financialReportsList;
    private List<FinancialReport> _filteredFinancialReportsList;
    //HCM Performance
    private List<Person> _myTeamList;

    public SessionState(){
        super();
        //Check for headless mode
        HttpServletRequest request=(HttpServletRequest)FacesContext.getCurrentInstance().getExternalContext().getRequest();
        String headless = request.getParameter("headless");
        if (headless == null)
            headless = "no";
        else if (headless.length() == 0)
            headless = "no";
        else if (headless.toUpperCase().equals("YES"))
            headless = "yes";
        else
            headless = "no";
        ADFContext.getCurrent().getSessionScope().put("headless", headless);
        //Set up the application user
        ADFContext.getCurrent().getSessionScope().put("loggedInUserName", "Lisa Jones");
        ADFContext.getCurrent().getSessionScope().put("loggedInUserJob", "Group Manager");
        //Activate RDK welcome banner
        setWelcomePopupActive(true);
        //Show icon grid rather than infolets at the start
        setWelcomeMode("springboard");
        //Set default theme
        _skinFamily = "SkyBlueTheme";
        _skinFamilyLabel = "Sky Blue";
        //Set default home page view
        _homePageView = "BANNER";
        //Set default home page option
        _homePageOption = "social";
        //Set banner/panel default view
        if (_homePageOption.equals("social"))
            _bannerPanelView = "summary";
        else
            _bannerPanelView = "detail";
        //Set up application nodes
        if (_gridNodeMap.size() == 0)
            _parseRootMenu();
        //Infolets
        if (_infoletsList == null)
            _buildInfoletsList();
        //CRM Contacts
        if (_contactsList == null)
            _buildContactsList();
        if (_filteredContactsList == null)
            _filteredContactsList = new ArrayList<Person>();
        if (_mapContactsList == null)
            _mapContactsList = new ArrayList<Person>();
        //CRM Opportunities
        if (_opportunitiesList == null)
            _buildOpportunitiesList();
        if (_filteredOpportunitiesList == null)
            _filteredOpportunitiesList = new ArrayList<Opportunity>();
        //ERP Financial Reports
        if (_financialReportsList == null)
            _buildFinancialReportsList();
        if (_filteredFinancialReportsList == null)
            _filteredFinancialReportsList = new ArrayList<FinancialReport>();
        //HCM Performance & My Team
        if (_myTeamList == null)
            _buildMyTeamList();
    }//constructor

    //Get Host
    public String getHost(){
        FacesContext fctx = FacesContext.getCurrentInstance();
        HttpServletRequest request = (HttpServletRequest)fctx.getExternalContext().getRequest();
        return request.getServerName();
    }//getHost
    
    //Get Port
    public String getPort(){
        FacesContext fctx = FacesContext.getCurrentInstance();
        HttpServletRequest request = (HttpServletRequest)fctx.getExternalContext().getRequest();
        return Integer.toString(request.getServerPort());
    }//getPort

    //Called from SpringboardBean.java to build and display grid nodes
    public String fetchGridNodes(String groupId){
        Map<String, ItemNode> gridNodeMap = new HashMap<String, ItemNode>();
        //Extract specific group if groupId specified
        if (groupId == null){
            gridNodeMap = _gridNodeMap;
        } else {
            //Extract specific group
            Iterator i = getGridNodeMap().entrySet().iterator();
            while (i.hasNext()){
                Map.Entry pair = (Map.Entry)i.next();
                if (groupId.equalsIgnoreCase(pair.getKey().toString())){
                    ItemNode requiredNode = (ItemNode)pair.getValue();
                    gridNodeMap.put(groupId, requiredNode);
                    break;
                }//check for required group node
            }//loop through nodes
        }//check if specific group required
        //
        StringBuilder jsonArrayStrBld = new StringBuilder();
        jsonArrayStrBld.append("[");
        String jsonArrayStr = "[]";
        String topLevelObj = null;
        String childObj = null;
        //
        try{
            for (Map.Entry<String, ItemNode> entry : gridNodeMap.entrySet()) {
                ItemNode node = entry.getValue();
                topLevelObj = _createJsonString(node, true, node.getId());
                if (node.isGroupNode()){
                    childObj = null;
                    for (ItemNode itemNode : (node).getChildren()) {
                        childObj = _createJsonString(itemNode, false, node.getId());
                        if (childObj != null && !childObj.isEmpty())
                            jsonArrayStrBld.append(childObj.toString() + "},");
                    }//loop
                }//if
                //
                if (topLevelObj != null && !topLevelObj.isEmpty())
                    jsonArrayStrBld.append(topLevelObj.toString() + "},");
            }//for loop 
            //
            jsonArrayStrBld.append("]");
            jsonArrayStr = jsonArrayStrBld.toString();
            //Strip out last comma
            if (jsonArrayStr.length() > 2)
                jsonArrayStr = jsonArrayStr.replace(",]", "]");
            //
        } catch (Exception e){
            e.printStackTrace();
        }//try-catch
        //
        return jsonArrayStr;
    }//fetchGridNodes

    private String _createJsonString(ItemNode node, boolean isTopLevel, String groupId){
        String jsonStr = null;
        try {
            StringBuilder jsonStrBld = new StringBuilder();
            jsonStrBld.append("{\"id\"" + ":\"" + node.getId() + "\"" + ",");
            jsonStrBld.append("\"label\"" + ":\"" + node.getName() + "\"" + ",");
            //
            String cardIcon = "";
            if (node.isGroupNode())
                cardIcon = node.getIcon();
            else
                cardIcon = node.getCardIcon();
            if (cardIcon != null && cardIcon.contains("images/"))
                cardIcon = cardIcon.substring((cardIcon.lastIndexOf("_") + 1), (cardIcon.lastIndexOf(".")));
            if (cardIcon.endsWith(".png"))
                cardIcon = cardIcon.substring(0, cardIcon.indexOf(".png"));
            jsonStrBld.append("\"icon\"" + ":\"" + cardIcon + "\"" + ",");
            //
            jsonStrBld.append("\"visible\"" + ":" + (node.isGroupNode() ? true : node.isRender()) + ",");
            jsonStrBld.append("\"type\"" + ":\"" + (node.isGroupNode() ? "cluster" : (isTopLevel) ? "toplevel" : "subcluster") + "\"" + ",");
            jsonStrBld.append("\"group\"" + ":\"" + groupId + "\"");
            //
            if (node != null){
                String destinationUrl = node.getDestinationUrl();
                jsonStrBld.append(",\"isDestUrlExist\"" + ":\"" + ((destinationUrl == null || destinationUrl.isEmpty()) ? "false" : "true") + "\"");
                //
                if (node.getDestinationUrl() != null)
                    jsonStrBld.append(",\"destinationUrl\"" + ":\"" + node.getDestinationUrl() + "\"");
                //
                jsonStrBld.append(",\"targetFrame\"" + ":\"" + node.getTargetFrame() + "\"");
            }//null check
            //
            jsonStr = jsonStrBld.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }//try-catch
        //
        return jsonStr;
    }//_createJsonString

    private void _parseRootMenu(){
        _gridNodeMap = new LinkedHashMap<String, ItemNode>();
        Map<String, ItemNode> navNodeMap = new LinkedHashMap<String, ItemNode>(); //feeds into _navNodeList
        _clusterMap = new HashMap<String, ItemNode>();
        try {
            //Read the root menu file
            ServletContext servletCtx = (ServletContext)FacesContext.getCurrentInstance().getExternalContext().getContext();
            InputStream inputStream = servletCtx.getResourceAsStream("/oracle/apps/uikit/menu/root.xml");
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(inputStream);
            doc.getDocumentElement().normalize();
            NodeList allGroupNodeList = doc.getElementsByTagName("groupNode"); // all nodes with <groupNode> tag
            NodeList allItemNodeList = doc.getElementsByTagName("itemNode"); // all nodes with <itemNode> tag
            //
            for (int i = 0; i < allGroupNodeList.getLength(); i++){
                org.w3c.dom.Node pNode = allGroupNodeList.item(i);
                if (pNode.getNodeType() == org.w3c.dom.Node.ELEMENT_NODE) {
                    Element pElement = (Element)pNode;
                    ItemNode parentNode = new ItemNode(pElement.getAttribute("id"), pElement.getAttribute("label"), 
                                                       pElement.getAttribute("icon"), "", true);
                    //
                    //Get all children for pElement
                    NodeList childNodeList = pElement.getElementsByTagName("itemNode");
                    ArrayList<ItemNode> navChildren = new ArrayList<ItemNode>();
                    ArrayList<ItemNode> gridChildren = new ArrayList<ItemNode>();
                    //
                    for (int j = 0; j < childNodeList.getLength(); j++){
                        org.w3c.dom.Node cNode = childNodeList.item(j);
                        Element cElement  = (Element)cNode;
                        ItemNode childNode = new ItemNode(cElement.getAttribute("id"), cElement.getAttribute("label"), 
                                                          cElement.getAttribute("icon"), cElement.getAttribute("cardIcon"), 
                                                          true, "", "", "", cElement.getAttribute("securedResourceName"), 
                                                          "", "", "_blank", "");
                        //
                        navChildren.add(childNode);
                        if ("true".equalsIgnoreCase(cElement.getAttribute("showOnHomeGrid")))
                            gridChildren.add(childNode);
                        _clusterMap.put(cElement.getAttribute("id"), childNode);
                    }//loop through childNodeList
                    //
                    parentNode.setChildren(gridChildren);
                    _gridNodeMap.put(pElement.getAttribute("id"), parentNode);
                    //
                    parentNode.setChildren(navChildren);
                    navNodeMap.put(pElement.getAttribute("id"), parentNode);
                }//check dom node type
            }//loop thru allGroupNodeList
            //
            //Process top level item nodes with no children
            for (int k = 0; k < allItemNodeList.getLength(); k++){
                org.w3c.dom.Node iNode = allItemNodeList.item(k);
                Element iElement = (Element)iNode;
                //Check parent
                if (iElement.getParentNode() != null &&
                    !("groupNode".equalsIgnoreCase(iElement.getParentNode().getNodeName()))) { 
                    //Parent node will be <menu> tag

                    ItemNode childNode = new ItemNode(iElement.getAttribute("id"), iElement.getAttribute("label"), 
                                                      iElement.getAttribute("icon"), iElement.getAttribute("cardIcon"), 
                                                      true, "", "", "", iElement.getAttribute("securedResourceName"), 
                                                      "", "", "_blank", "");
                    //
                    navNodeMap.put(iElement.getAttribute("id"), childNode);
                    if ("true".equalsIgnoreCase(iElement.getAttribute("showOnHomeGrid")))
                        _gridNodeMap.put(iElement.getAttribute("id"), childNode);
                    _clusterMap.put(iElement.getAttribute("id"), childNode);
                }//check parent tag
            }//loop through allItemNodeList
            //
            _navNodeList = new ArrayList<ItemNode>(navNodeMap.values());
        } catch (Exception e) {
            e.printStackTrace();
        }//try-catch
    }//_parseRootMenu

    private void _buildInfoletsList(){
        int idx = 1;
        _infoletsList = new ArrayList<Infolet>();
        //id, rendered, contentTFId, contentTFName
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/crm/infolets/flow/LeadsFlow.xml", "LeadsFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/crm/infolets/flow/OpportunitiesFlow.xml", "OpportunitiesFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/crm/infolets/flow/DealRegistrationFlow.xml", "DealRegistrationFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/crm/infolets/flow/MaintenanceSRsFlow.xml", "MaintenanceSRsFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/crm/infolets/flow/YTDEarningsFlow.xml", "YTDEarningsFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/hcm/infolets/flow/WellnessFlow.xml", "WellnessFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/fin/infolets/flow/APReconciliationFlow.xml", "APReconciliationFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/fin/infolets/flow/ARReconciliationFlow.xml", "ARReconciliationFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/fin/infolets/flow/PeriodCloseFlow.xml", "PeriodCloseFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/hcm/infolets/flow/RequisitionsFlow.xml", "RequisitionsFlow"));
        _infoletsList.add(new Infolet(idx++, true, "WEB-INF/oracle/apps/uikit/hcm/infolets/flow/MyTeamsGoalsFlow.xml", "MyTeamsGoalsFlow"));
    }//_buildInfoletsList

    private void _buildContactsList(){
        int idx = 1;
        _contactsList = new ArrayList<Person>();
        //id, photo, photoLarge, firstName, lastName, prefix, company, job, email, phone, location
        _contactsList.add(new Person(idx++, "", "", "Alfred", "Lee", "Dr.", "Usable Apps", "Senior Director", "ALee@oaux.rdk", "+1 650-123-1234", "Redwood City, United States"));
        _contactsList.add(new Person(idx++, "", "", "Bill", "Kermit", "Mr.", "Usable Apps", "Systems Consultant", "BKermit@oaux.rdk", "+91 11-123-1234", "Mumbai, India"));
        _contactsList.add(new Person(idx++, "", "", "Avril", "Jones", "Ms.", "Usable Apps", "Sales Representative", "AJones@oaux.rdk", "+44 118-123-1234", "Reading, United Kingdom"));
        _contactsList.add(new Person(idx++, "", "", "Bob", "Smith", "Dr.", "Usable Apps", "Strategy Director", "BSmith@oaux.rdk", "+86 10-123-1234", "Beijing, China"));
        _contactsList.add(new Person(idx++, "", "", "Cole", "Mitchell", "Mr.", "Usable Apps", "Senior Director", "CMitchell@oaux.rdk", "+52 33-123-1234", "Mexico City, Mexico"));
        _contactsList.add(new Person(idx++, "", "", "Catherine", "Wisdom", "Ms.", "Usable Apps", "Systems Consultant", "CWisdom@oaux.rdk", "+1 650-234-1234", "Foster City, United States"));
        _contactsList.add(new Person(idx++, "", "", "David", "Dealey", "Dr.", "Usable Apps", "Sales Representative", "DDealey@oaux.rdk", "+91 11-234-1234", "Pune, India"));
        _contactsList.add(new Person(idx++, "", "", "Derek", "Peterson", "Mr.", "Usable Apps", "Strategy Director", "DPeterson@oaux.rdk", "+44 118-234-1234", "London, United Kingdom"));
        _contactsList.add(new Person(idx++, "", "", "Dona", "Whiley", "Ms.", "Usable Apps", "Senior Director", "DWhiley@oaux.rdk", "+86 10-234-1234", "Chengde, China"));
        _contactsList.add(new Person(idx++, "", "", "Dominic", "Bennet", "Dr.", "Usable Apps", "Systems Consultant", "DBennet@oaux.rdk", "+52 33-234-1234", "Guadalajara, Mexico"));
        _contactsList.add(new Person(idx++, "", "", "Jamie", "Dawson", "Mr.", "Usable Apps", "Sales Representative", "JDawson@oaux.rdk", "+1 650-345-1234", "Palo Alto, United States"));
        _contactsList.add(new Person(idx++, "", "", "Jane", "Jefferson", "Ms.", "Usable Apps", "Strategy Director", "JJefferson@oaux.rdk", "+91 11-345-1234", "Bangalore, India"));
        _contactsList.add(new Person(idx++, "", "", "John", "Smith", "Dr.", "Usable Apps", "Senior Director", "JSmith@oaux.rdk", "+44 118-345-1234", "Oxford, United Kingdom"));
        _contactsList.add(new Person(idx++, "", "", "Julian", "Henderson", "Mr.", "Usable Apps", "Systems Consultant", "JHenderson@oaux.rdk", "+86 10-345-1234", "Shangai, China"));
        _contactsList.add(new Person(idx++, "", "", "Jennifer", "Tan", "Ms.", "Usable Apps", "Sales Representative", "JTan@oaux.rdk", "+52 33-345-1234", "Campeche, Mexico"));
        _contactsList.add(new Person(idx++, "", "", "Karl", "Jones", "Dr.", "Usable Apps", "Strategy Director", "KJones@oaux.rdk", "+1 650-456-1234", "Menlo Park, United States"));
        _contactsList.add(new Person(idx++, "", "", "Mike", "Bell", "Mr.", "Usable Apps", "Senior Director", "MBell@oaux.rdk", "+91 11-456-1234", "Hyderabad, India"));
        _contactsList.add(new Person(idx++, "", "", "Maggie", "Edwards", "Ms.", "Usable Apps", "Systems Consultant", "MEdwards@oaux.rdk", "+44 118-456-1234", "Birmingham, United Kingdom"));
        _contactsList.add(new Person(idx++, "", "", "Roderic", "Du-Pont", "Dr.", "Usable Apps", "Sales Representative", "RDuPont@oaux.rdk", "+86 10-456-1234", "Dalian, China"));
        _contactsList.add(new Person(idx++, "", "", "Victor", "Venables", "Mr.", "Usable Apps", "Strategy Director", "VVenables@oaux.rdk", "+52 33-456-1234", "Monterrey, Mexico"));
        _contactsList.add(new Person(idx++, "", "", "Samantha", "Saunders", "Ms.", "Usable Apps", "Senior Director", "SSaunders@oaux.rdk", "+1 650-567-1234", "Sunnyvale, United States"));
    }//_buildContactsList

    private void _buildFinancialReportsList(){
        int idx = 1;
        _financialReportsList = new ArrayList<FinancialReport>();
        //id, name, description, taskFlowId, taskFlowName, favourite, enabled, category, status
        _financialReportsList.add(new FinancialReport(idx++, "Global Sales Revenue Report", "Interactive Sunburst to explore sales revenue by region and quarter.",
                                                      "WEB-INF/oracle/apps/uikit/fin/reports/flow/GlobalSalesRevenueReportFlow.xml", "GlobalSalesRevenueReportFlow", false, true,
                                                      "Sales", "Successful previous run"));
        _financialReportsList.add(new FinancialReport(idx++, "Trial Balance Report", "Lists period debits, period credits, start balances and end balances organised by accounting segments.",
                                                      "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow", false, false,
                                                      "General Ledger", "Error in previous run"));
        _financialReportsList.add(new FinancialReport(idx++, "Invoice Audit Report", "Lists invoices to review and audit organised by customer and invoice creation date.",
                                                      "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow", false, false,
                                                      "Receivables", "Error in previous run"));
    }//_buildFinancialReportsList

    private void _buildMyTeamList(){
        int personIdx = 1;
        int evaluationIdx = 1;
        int evaluationTaskIdx = 1;
        _myTeamList = new ArrayList<Person>();
        //Person: id, photo, photoLarge, firstName, lastName, prefix, company, job,
        //        email, phone, location, grade, serviceYears, directReports, totalReports
        //Evaluation: id, name, type, status, remainingDays, completionDate, finalRating
        //Evaluation Task: id, name, status, remainingDays, completionDate
        Person teamMember;
        Evaluation evaluation;
        //
        //Jen Jacobs
        //
        teamMember = new Person(personIdx++, "", "", "Jen", "Jacobs", "Dr.", "Usable Apps", "Sales Representative",
                                "JJacobs@UsableApps.rdk", "+1 123-456-1234", "Austin, Texas", "IC3", 5, 0, 0);
        evaluation = new Evaluation(evaluationIdx++, "FY2015", "Annual Review", "Open", 4, _getNow(), 0);
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Worker Self-Evaluation", "Closed", 0, _getNowPlusDays(-5)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Evaluation of Worker", "Open", 5, _getNow()));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Share Performance Document", "Hold", 20, _getNow()));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Discussion with Worker", "Hold", 30, _getNow()));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Set Next Review Period Goals", "Hold", 40, _getNow()));
        teamMember.addEvaluation(evaluation);
        _myTeamList.add(teamMember);
        //
        //Ravi Chouhan
        //
        teamMember = new Person(personIdx++, "", "", "Ravi", "Chouhan", "Mr.", "Usable Apps", "Sales Manager",
                                "RChouhan@UsableApps.rdk", "+1 123-456-2345", "Dallas, Texas", "M2", 7, 2, 2);
        evaluation = new Evaluation(evaluationIdx++, "FY2015", "Annual Review", "Open", 7, _getNow(), 0);
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Worker Self-Evaluation", "Closed", 0, _getNowPlusDays(-15)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Evaluation of Worker", "Closed", 0, _getNowPlusDays(-5)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Share Performance Document", "Open", 10, _getNow()));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Discussion with Worker", "Hold", 20, _getNow()));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Set Next Review Period Goals", "Hold", 30, _getNow()));
        teamMember.addEvaluation(evaluation);
        evaluation = new Evaluation(evaluationIdx++, "FY2015", "Mid-Year Review", "Closed", 0, _getNowPlusDays(-200), 3);
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Worker Self-Evaluation", "Closed", 0, _getNowPlusDays(-250)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Evaluation of Worker", "Closed", 0, _getNowPlusDays(-240)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Share Performance Document", "Closed", 0, _getNowPlusDays(-230)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Discussion with Worker", "Closed", 0, _getNowPlusDays(-220)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Set Next Review Period Goals", "Closed", 0, _getNowPlusDays(-210)));
        teamMember.addEvaluation(evaluation);
        _myTeamList.add(teamMember);
        //
        //Jason Blake
        //
        teamMember = new Person(personIdx++, "", "", "Jason", "Blake", "Mr.", "Usable Apps", "Sales Associate",
                                "JBlake@UsableApps.rdk", "+1 123-456-3456", "Redwood City, California", "IC1", 2, 0, 0);
        evaluation = new Evaluation(evaluationIdx++, "FY2015", "Annual Review", "Open", 11, _getNow(), 0);
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Worker Self-Evaluation", "Closed", 0, _getNowPlusDays(-25)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Evaluation of Worker", "Closed", 0, _getNowPlusDays(-15)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Share Performance Document", "Closed", 0, _getNowPlusDays(-6)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Discussion with Worker", "Open", 4, _getNow()));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Set Next Review Period Goals", "Hold", 10, _getNow()));
        teamMember.addEvaluation(evaluation);
        _myTeamList.add(teamMember);
        //
        //Pat Miller
        //
        teamMember = new Person(personIdx++, "", "", "Pat", "Miller", "Ms.", "Usable Apps", "Sales Associate",
                                "PMiller@UsableApps.rdk", "+1 123-456-4567", "Menlo Park, California", "IC2", 3, 0, 0);
        evaluation = new Evaluation(evaluationIdx++, "FY2015", "Annual Review", "Closed", 0, _getNowPlusDays(-3), 5);
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Worker Self-Evaluation", "Closed", 0, _getNowPlusDays(-50)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Evaluation of Worker", "Closed", 0, _getNowPlusDays(-40)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Share Performance Document", "Closed", 0, _getNowPlusDays(-30)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Discussion with Worker", "Closed", 0, _getNowPlusDays(-20)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Set Next Review Period Goals", "Closed", 0, _getNowPlusDays(-10)));
        teamMember.addEvaluation(evaluation);
        _myTeamList.add(teamMember);
        //
        //Terry Lucca
        //
        teamMember = new Person(personIdx++, "", "", "Terry", "Lucca", "Ms.", "Usable Apps", "Sales Manager",
                                "TLucca@UsableApps.rdk", "+1 123-456-5678", "Palo Alto, California", "M3", 9, 2, 4);
        evaluation = new Evaluation(evaluationIdx++, "FY2015", "Project Review", "Closed", 0, _getNowPlusDays(-8), 4);
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Worker Self-Evaluation", "Closed", 0, _getNowPlusDays(-49)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Evaluation of Worker", "Closed", 0, _getNowPlusDays(-39)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Share Performance Document", "Closed", 0, _getNowPlusDays(-29)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Discussion with Worker", "Closed", 0, _getNowPlusDays(-19)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Set Next Review Period Goals", "Closed", 0, _getNowPlusDays(-9)));
        teamMember.addEvaluation(evaluation);
        _myTeamList.add(teamMember);
        //
        //Stella Smith
        //
        teamMember = new Person(personIdx++, "", "", "Stella", "Smith", "Ms.", "Usable Apps", "Sales Representative",
                                "SSmith@UsableApps.rdk", "+1 123-456-7890", "Foster City, California", "IC3", 5, 0, 0);
        evaluation = new Evaluation(evaluationIdx++, "FY2015", "Project Review", "Open", 11, _getNow(), 0);
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Worker Self-Evaluation", "Closed", 0, _getNowPlusDays(-25)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Evaluation of Worker", "Closed", 0, _getNowPlusDays(-15)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Share Performance Document", "Closed", 0, _getNowPlusDays(-6)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Discussion with Worker", "Open", 4, _getNow()));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Set Next Review Period Goals", "Hold", 10, _getNow()));
        teamMember.addEvaluation(evaluation);
        _myTeamList.add(teamMember);
        //
        //Peter Cadand
        //
        teamMember = new Person(personIdx++, "", "", "Peter", "Cadand", "Mr.", "Usable Apps", "Sales Associate",
                                "PCadand@UsableApps.rdk", "+1 123-911-3456", "Redwood City, California", "IC1", 1, 0, 0);
        evaluation = new Evaluation(evaluationIdx++, "FY2015", "Annual Review", "Closed", 0, _getNowPlusDays(-3), 5);
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Worker Self-Evaluation", "Closed", 0, _getNowPlusDays(-50)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Evaluation of Worker", "Closed", 0, _getNowPlusDays(-40)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Share Performance Document", "Closed", 0, _getNowPlusDays(-30)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Discussion with Worker", "Closed", 0, _getNowPlusDays(-20)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Set Next Review Period Goals", "Closed", 0, _getNowPlusDays(-10)));
        teamMember.addEvaluation(evaluation);
        _myTeamList.add(teamMember);
        //
        //Susan Wong
        //
        teamMember = new Person(personIdx++, "", "", "Susan", "Wong", "Ms.", "Usable Apps", "Sales Representative",
                                "Swong@UsableApps.rdk", "+1 123-922-3456", "Redwood City, California", "IC4", 7, 0, 0);
        evaluation = new Evaluation(evaluationIdx++, "FY2015", "Annual Review", "Closed", 0, _getNowPlusDays(-3), 5);
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Worker Self-Evaluation", "Closed", 0, _getNowPlusDays(-50)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Evaluation of Worker", "Closed", 0, _getNowPlusDays(-40)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Share Performance Document", "Closed", 0, _getNowPlusDays(-30)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Manager Discussion with Worker", "Closed", 0, _getNowPlusDays(-20)));
        evaluation.addEvaulationTask(new EvaluationTask(evaluationTaskIdx++, "Set Next Review Period Goals", "Closed", 0, _getNowPlusDays(-10)));
        teamMember.addEvaluation(evaluation);
        _myTeamList.add(teamMember);
    }//_buildMyTeamList

    private void _buildOpportunitiesList(){
        int minWinPercent = 10;
        int maxWinPercent = 95;
        int idx = 1;
        _opportunitiesList = new ArrayList<Opportunity>();
        //id, name, account, winPercent,
        //amount, status, salesStage, closeDate, owner, lastUpdated
        _opportunitiesList.add(new Opportunity(idx++, "Database Enterprise Edition", "Pinnacle Technologies", _getRandomInRange(minWinPercent, maxWinPercent),
                                               125000, "Open", "Qualification", _getNow(), "lisa.jones", _getNowPlusDays(-1)));
        _opportunitiesList.add(new Opportunity(idx++, "Apex Systems DG 750-20 Green Rack Server", "Apex Systems", _getRandomInRange(minWinPercent, maxWinPercent),
                                               150000, "Open", "Building Visions", _getNow(), "john.doe", _getNowPlusDays(-1)));
        _opportunitiesList.add(new Opportunity(idx++, "JK Steel Ultra Pro R9000 Server", "Pinnacle Technologies", _getRandomInRange(minWinPercent, maxWinPercent),
                                               540000, "Closed", "Agreement", _getNow(), "john.doe", _getNowPlusDays(-1)));
        _opportunitiesList.add(new Opportunity(idx++, "Premier Energy Z4600 Alpha Server", "Premier Energy", _getRandomInRange(minWinPercent, maxWinPercent),
                                               1500000, "Open", "Discovery", _getNow(), "lisa.jones", _getNowPlusDays(-3)));
        _opportunitiesList.add(new Opportunity(idx++, "Premier Energy Z4000 Server", "Premier Energy", _getRandomInRange(minWinPercent, maxWinPercent),
                                               875000, "Closed", "Agreement", _getNowPlusDays(2), "john.doe", _getNowPlusDays(-3)));
        _opportunitiesList.add(new Opportunity(idx++, "Network Xpress Corp X2020", "Pinnacle Technologies", _getRandomInRange(minWinPercent, maxWinPercent),
                                               2000000, "Open", "Presentation", _getNowPlusDays(2), "john.doe", _getNowPlusDays(-3)));
        _opportunitiesList.add(new Opportunity(idx++, "System Solutions Hardware XX4", "System Solutions", _getRandomInRange(minWinPercent, maxWinPercent),
                                               450000, "Open", "Agreement", _getNowPlusDays(3), "lisa.jones", _getNowPlusDays(-6)));
        _opportunitiesList.add(new Opportunity(idx++, "Network Xpress Corp X1100", "Apex Systems", _getRandomInRange(minWinPercent, maxWinPercent),
                                               125000, "Open", "Qualification", _getNowPlusDays(3), "john.doe", _getNowPlusDays(-6)));
        _opportunitiesList.add(new Opportunity(idx++, "JK Steel Ultra R7000 Server", "Premier Energy", _getRandomInRange(minWinPercent, maxWinPercent),
                                               100000, "Open", "Building Visions", _getNowPlusDays(6), "john.doe", _getNowPlusDays(-6)));
        _opportunitiesList.add(new Opportunity(idx++, "V R Worlds Server", "System Solutions", _getRandomInRange(minWinPercent, maxWinPercent),
                                               1100000, "Open", "Agreement", _getNowPlusDays(6), "lisa.jones", _getNowPlusDays(-9)));
        _opportunitiesList.add(new Opportunity(idx++, "Zefer Tech Server", "Apex Systems", _getRandomInRange(minWinPercent, maxWinPercent),
                                               300000, "Open", "Agreement", _getNowPlusDays(9), "john.doe", _getNowPlusDays(-9)));
        _opportunitiesList.add(new Opportunity(idx++, "Cool Cucumber Server", "Premier Energy", _getRandomInRange(minWinPercent, maxWinPercent),
                                               350000, "Open", "Qualification", _getNowPlusDays(9), "john.doe", _getNowPlusDays(-9)));
        _opportunitiesList.add(new Opportunity(idx++, "OWL Systems Integrated Z4", "System Solutions", _getRandomInRange(minWinPercent, maxWinPercent),
                                               120000, "Open", "Qualification", _getNowPlusDays(11), "lisa.jones", _getNowPlusDays(-11)));
        _opportunitiesList.add(new Opportunity(idx++, "Elite Pro Tech Server", "Apex Systems", _getRandomInRange(minWinPercent, maxWinPercent),
                                               180000, "Open", "Discovery", _getNowPlusDays(12), "john.doe", _getNowPlusDays(-11)));
        _opportunitiesList.add(new Opportunity(idx++, "Walt Disney S6000 Server", "Premier Energy", _getRandomInRange(minWinPercent, maxWinPercent),
                                               190000, "Open", "Qualification", _getNowPlusDays(13), "john.doe", _getNowPlusDays(-11)));
    }//_buildOpportunitiesList

    private int _getRandomInRange(int min, int max){
        int range = (max - min) + 1;
        return (int) (Math.random() * range) + min;
    }//_getRandomInRange

    private Date _getNow(){
        return Calendar.getInstance().getTime();
    }//_getNow

    private Date _getNowPlusDays(int days){
        Calendar nowPlusDays = Calendar.getInstance();
        nowPlusDays.add(Calendar.DATE, days);
        return nowPlusDays.getTime();
    }//_getNowPlusDays

    //Accessors
    public void setWelcomePopupActive(boolean b) { _welcomePopupActive = b; }
    public boolean isWelcomePopupActive() { return _welcomePopupActive; }
    public void setWelcomeMode(String s) { _welcomeMode = s; }
    public String getWelcomeMode() { return _welcomeMode; }
    public void setInfoletsList(List<Infolet> l) { _infoletsList = l; }
    public List<Infolet> getInfoletsList() { return _infoletsList; }
    public void setActionedInfoletId(int i) { _actionedInfoletId = i; }
    public int getActionedInfoletId() { return _actionedInfoletId; }
    public void setSkinFamily(String s) { _skinFamily = s; }
    public String getSkinFamily() { return _skinFamily; }
    public void setSkinFamilyLabel(String s) { _skinFamilyLabel = s; }
    public String getSkinFamilyLabel() { return _skinFamilyLabel; }
    public void setHomePageView(String s) { _homePageView = s; }
    public String getHomePageView() { return _homePageView; }
    public void setHomePageOption(String s) { _homePageOption = s; }
    public String getHomePageOption() { return _homePageOption; }
    public void setBannerPanelView(String s) { _bannerPanelView = s; }
    public String getBannerPanelView() { return _bannerPanelView; }
    //Application Nodes
    public void setClusterMap(Map<String, ItemNode> m) { _clusterMap = m; }
    public Map<String, ItemNode> getClusterMap() { return _clusterMap; }
    public void setGridNodeMap(Map<String, ItemNode> m) { _gridNodeMap = m; }
    public Map<String, ItemNode> getGridNodeMap() { return _gridNodeMap; }
    public void setNavNodeList(List<ItemNode> l) { _navNodeList = l; }
    public List<ItemNode> getNavNodeList() { return _navNodeList; }
    //CRM Contacts
    public void setContactsList(List<Person> l) { _contactsList = l; }
    public List<Person> getContactsList() { return _contactsList; }
    public void setFilteredContactsList(List<Person> l) { _filteredContactsList = l; }
    public List<Person> getFilteredContactsList() { return _filteredContactsList; }
    public void setMapContactsList(List<Person> l) { _mapContactsList = l; }
    public List<Person> getMapContactsList() { return _mapContactsList; }
    //CRM Opportunities
    public void setOpportunitiesList(List<Opportunity> l) { _opportunitiesList = l; }
    public List<Opportunity> getOpportunitiesList() { return _opportunitiesList; }
    public void setFilteredOpportunitiesList(List<Opportunity> l) { _filteredOpportunitiesList = l; }
    public List<Opportunity> getFilteredOpportunitiesList() { return _filteredOpportunitiesList; }
    //ERP Financial Reports
    public void setFinancialReportsList(List<FinancialReport> l) { _financialReportsList = l; }
    public List<FinancialReport> getFinancialReportsList() { return _financialReportsList; }
    public void setFilteredFinancialReportsList(List<FinancialReport> l) { _filteredFinancialReportsList = l; }
    public List<FinancialReport> getFilteredFinancialReportsList() { return _filteredFinancialReportsList; }
    //HCM Performance & My Team
    public void setMyTeamList(List<Person> l) { _myTeamList = l; }
    public List<Person> getMyTeamList() { return _myTeamList; }

}//SessionState
