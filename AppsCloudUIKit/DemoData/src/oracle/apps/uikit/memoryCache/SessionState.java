package oracle.apps.uikit.memoryCache;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import oracle.adf.share.ADFContext;

import oracle.apps.uikit.data.Evaluation;
import oracle.apps.uikit.data.EvaluationTask;
import oracle.apps.uikit.data.FinancialReport;
import oracle.apps.uikit.data.Infolet;
import oracle.apps.uikit.data.Node;
import oracle.apps.uikit.data.Opportunity;
import oracle.apps.uikit.data.Person;

public class SessionState {
    private boolean _welcomePopupActive;
    private String _welcomeMode; //'springboard', 'infolets'
    private boolean _showChildren; //grid cluster children
    private List<Node> _nodeList;
    private List<Node> _childNodeList;
    private String _filmStripShowStrip; //'', 'noShow'
    private boolean _filmStripShowHandle;
    private String _filmStripMode; //'strip', 'single'
    private int _accessedNodeId;
    private List<Node> _filmStripNodeList;
    private List<Infolet> _infoletsList;
    private int _actionedInfoletId = -1;
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
        ADFContext.getCurrent().getSessionScope().put("loggedInUserName", "Lisa Jones");
        ADFContext.getCurrent().getSessionScope().put("loggedInUserJob", "Group Manager");
        setWelcomePopupActive(true);
        setWelcomeMode("springboard"); //Show icon grid by default
        setShowChildren(false); //Do not open any functional groups by default
        if (_nodeList == null)
            _buildNodeList();
        setFilmStripShowStrip(""); //Show film strip by default
        setFilmStripShowHandle(true);
        setFilmStripMode("strip"); //Default mode is strip
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

    private void _buildNodeList(){
        int idx = 1;
        _nodeList = new ArrayList<Node>();
        Node newNode;
        List<Node> children;
        //
        //Node Structure
        //unique id, name, base icon, task flow id, task flow name
        //
        //Build the Sales group and children
        newNode = new Node(idx++, "Sales", "cluster", "", "");
        children = new ArrayList<Node>();
        children.add(new Node(idx++, "Dashboard", "dashboard", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Leads", "contactbowl", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Campaigns", "envelopechart", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Opportunities", "briefcasecash", "WEB-INF/oracle/apps/uikit/crm/opportunities/flow/OpportunitiesFlow.xml", "OpportunitiesFlow"));
        children.add(new Node(idx++, "Forecasts", "crystalball", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Accounts", "buildings", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Contacts", "contacts", "WEB-INF/oracle/apps/uikit/crm/contacts/flow/ContactsFlow.xml", "ContactsFlow"));
        children.add(new Node(idx++, "Activities", "calendarclipboard", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Light Box", "lightbulbbox", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Service Feedback", "envelope", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        newNode.setChildren(children);
        _nodeList.add(newNode);
        //Build the My Team group and children
        newNode = new Node(idx++, "My Team", "cluster", "", "");
        children = new ArrayList<Node>();
        children.add(new Node(idx++, "Dashboard", "dashboard", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "New Person", "personnew", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "My Team", "group", "WEB-INF/oracle/apps/uikit/hcm/myTeam/flow/MyTeamFlow.xml", "MyTeamFlow"));
        children.add(new Node(idx++, "Manage Users", "personselect", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Team Talent", "persongrid", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Team Goals", "persontarget", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Team Performance", "persongraph", "WEB-INF/oracle/apps/uikit/hcm/performance/flow/PerformanceFlow.xml", "PerformanceFlow"));
        newNode.setChildren(children);
        _nodeList.add(newNode);
        //Build the Finance group and children
        newNode = new Node(idx++, "General Accounting", "cluster", "", "");
        children = new ArrayList<Node>();
        children.add(new Node(idx++, "Journals", "ledger", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Period Close", "ledgerclock", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        children.add(new Node(idx++, "Financial Reports", "report", "WEB-INF/oracle/apps/uikit/fin/reports/flow/FinancialReportsFlow.xml", "FinancialReportsFlow"));
        newNode.setChildren(children);
        _nodeList.add(newNode);
        //Add Show My Contacts node
        _nodeList.add(new Node(idx++, "Map My Contacts", "signpost", "WEB-INF/oracle/apps/uikit/crm/contacts/flow/ContactsMapFlow.xml", "ContactsMapFlow"));
        //Add Directory node
        _nodeList.add(new Node(idx++, "Directory", "directory", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
        //Add Cloud Plug node
        _nodeList.add(new Node(idx++, "PaaS Cloud", "cloudplug", "WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow"));
    }//_buildNodeList

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
        _contactsList.add(new Person(idx++, "", "", "Alfred", "Lee", "Dr.", "Usable Apps", "Senior Director", "ALee@UsableApps.rdk", "+1 650-123-1234", "Redwood City, United States"));
        _contactsList.add(new Person(idx++, "", "", "Bill", "Kermit", "Mr.", "Usable Apps", "Systems Consultant", "BKermit@UsableApps.rdk", "+91 11-123-1234", "Mumbai, India"));
        _contactsList.add(new Person(idx++, "", "", "Avril", "Jones", "Ms.", "Usable Apps", "Sales Representative", "AJones@UsableApps.rdk", "+44 118-123-1234", "Reading, United Kingdom"));
        _contactsList.add(new Person(idx++, "", "", "Bob", "Smith", "Dr.", "Usable Apps", "Strategy Director", "BSmith@UsableApps.rdk", "+86 10-123-1234", "Beijing, China"));
        _contactsList.add(new Person(idx++, "", "", "Cole", "Mitchell", "Mr.", "Usable Apps", "Senior Director", "CMitchell@UsableApps.rdk", "+52 33-123-1234", "Mexico City, Mexico"));
        _contactsList.add(new Person(idx++, "", "", "Catherine", "Wisdom", "Ms.", "Usable Apps", "Systems Consultant", "CWisdom@UsableApps.rdk", "+1 650-234-1234", "Foster City, United States"));
        _contactsList.add(new Person(idx++, "", "", "David", "Dealey", "Dr.", "Usable Apps", "Sales Representative", "DDealey@UsableApps.rdk", "+91 11-234-1234", "Pune, India"));
        _contactsList.add(new Person(idx++, "", "", "Derek", "Peterson", "Mr.", "Usable Apps", "Strategy Director", "DPeterson@UsableApps.rdk", "+44 118-234-1234", "London, United Kingdom"));
        _contactsList.add(new Person(idx++, "", "", "Dona", "Whiley", "Ms.", "Usable Apps", "Senior Director", "DWhiley@UsableApps.rdk", "+86 10-234-1234", "Chengde, China"));
        _contactsList.add(new Person(idx++, "", "", "Dominic", "Bennet", "Dr.", "Usable Apps", "Systems Consultant", "DBennet@UsableApps.rdk", "+52 33-234-1234", "Guadalajara, Mexico"));
        _contactsList.add(new Person(idx++, "", "", "Jamie", "Dawson", "Mr.", "Usable Apps", "Sales Representative", "JDawson@UsableApps.rdk", "+1 650-345-1234", "Palo Alto, United States"));
        _contactsList.add(new Person(idx++, "", "", "Jane", "Jefferson", "Ms.", "Usable Apps", "Strategy Director", "JJefferson@UsableApps.rdk", "+91 11-345-1234", "Bangalore, India"));
        _contactsList.add(new Person(idx++, "", "", "John", "Smith", "Dr.", "Usable Apps", "Senior Director", "JSmith@UsableApps.rdk", "+44 118-345-1234", "Oxford, United Kingdom"));
        _contactsList.add(new Person(idx++, "", "", "Julian", "Henderson", "Mr.", "Usable Apps", "Systems Consultant", "JHenderson@UsableApps.rdk", "+86 10-345-1234", "Shangai, China"));
        _contactsList.add(new Person(idx++, "", "", "Jennifer", "Tan", "Ms.", "Usable Apps", "Sales Representative", "JTan@UsableApps.rdk", "+52 33-345-1234", "Campeche, Mexico"));
        _contactsList.add(new Person(idx++, "", "", "Karl", "Jones", "Dr.", "Usable Apps", "Strategy Director", "KJones@UsableApps.rdk", "+1 650-456-1234", "Menlo Park, United States"));
        _contactsList.add(new Person(idx++, "", "", "Mike", "Bell", "Mr.", "Usable Apps", "Senior Director", "MBell@UsableApps.rdk", "+91 11-456-1234", "Hyderabad, India"));
        _contactsList.add(new Person(idx++, "", "", "Maggie", "Edwards", "Ms.", "Usable Apps", "Systems Consultant", "MEdwards@UsableApps.rdk", "+44 118-456-1234", "Birmingham, United Kingdom"));
        _contactsList.add(new Person(idx++, "", "", "Roderic", "Du-Pont", "Dr.", "Usable Apps", "Sales Representative", "RDuPont@UsableApps.rdk", "+86 10-456-1234", "Dalian, China"));
        _contactsList.add(new Person(idx++, "", "", "Victor", "Venables", "Mr.", "Usable Apps", "Strategy Director", "VVenables@UsableApps.rdk", "+52 33-456-1234", "Monterrey, Mexico"));
        _contactsList.add(new Person(idx++, "", "", "Samantha", "Saunders", "Ms.", "Usable Apps", "Senior Director", "SSaunders@UsableApps.rdk", "+1 650-567-1234", "Sunnyvale, United States"));
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
    public void setShowChildren(boolean b) { _showChildren = b; }
    public boolean isShowChildren() { return _showChildren; }
    public void setNodeList(List<Node> l) { _nodeList = l; }
    public List<Node> getNodeList() { return _nodeList; }
    public void setChildNodeList(List<Node> l) { _childNodeList = l; }
    public List<Node> getChildNodeList() { return _childNodeList; }
    public int getChildNodeListSize() { return _childNodeList.size(); }
    public void setFilmStripShowStrip(String s) { _filmStripShowStrip = s; }
    public String getFilmStripShowStrip() { return _filmStripShowStrip; }
    public void setFilmStripShowHandle(boolean b) { _filmStripShowHandle = b; }
    public boolean isFilmStripShowHandle() { return _filmStripShowHandle; }
    public void setFilmStripMode(String s) { _filmStripMode = s; }
    public String getFilmStripMode() { return _filmStripMode; }
    public void setAccessedNodeId(int i) { _accessedNodeId = i; }
    public int getAccessedNodeId() { return _accessedNodeId; }
    public void setFilmStripNodeList(List<Node> l) { _filmStripNodeList = l; }
    public List<Node> getFilmStripNodeList() { return _filmStripNodeList; }
    public void setInfoletsList(List<Infolet> l) { _infoletsList = l; }
    public List<Infolet> getInfoletsList() { return _infoletsList; }
    public void setActionedInfoletId(int i) { _actionedInfoletId = i; }
    public int getActionedInfoletId() { return _actionedInfoletId; }
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
