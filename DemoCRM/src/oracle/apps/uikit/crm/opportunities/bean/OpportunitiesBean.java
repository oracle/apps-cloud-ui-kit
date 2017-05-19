package oracle.apps.uikit.crm.opportunities.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import javax.faces.event.ValueChangeEvent;
import javax.faces.model.SelectItem;
import oracle.adf.view.rich.component.rich.input.RichInputDate;
import oracle.adf.view.rich.component.rich.input.RichInputNumberSpinbox;
import oracle.adf.view.rich.component.rich.input.RichInputText;
import oracle.adf.view.rich.component.rich.input.RichSelectOneChoice;
import oracle.adf.view.rich.component.rich.layout.RichPanelGroupLayout;
import oracle.adf.view.rich.component.rich.nav.RichCommandButton;
import oracle.adf.view.rich.util.ResetUtils;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.data.Opportunity;
import oracle.apps.uikit.memoryCache.SessionState;

public class OpportunitiesBean {
    private UtilsBean _utils = new UtilsBean();
    private RichInputText _nameSearchField;
    private String _nameString;
    private String _listFilterType;
    private List<SelectItem> _accountsList;
    //Create Fields
    private RichPanelGroupLayout _createPageContainer;
    private RichInputText _createNameField;
    private RichSelectOneChoice _createCustomerField;
    private RichInputNumberSpinbox _createWinProbabilityField;
    private RichInputDate _createCloseDateField;
    private RichSelectOneChoice _createCurrencyField;
    private RichInputText _createRevenueField;
    private RichSelectOneChoice _createSalesStageField;
    private RichSelectOneChoice _createSalesMethodField;
    //Edit Fields
    private Opportunity _editedOpportunity;
    private RichPanelGroupLayout _editPageContainer;
    private RichInputText _editNameField;
    private RichSelectOneChoice _editCustomerField;
    private RichInputNumberSpinbox _editWinProbabilityField;
    private RichInputDate _editCloseDateField;
    private RichSelectOneChoice _editStatusField;
    private RichSelectOneChoice _editCurrencyField;
    private RichInputText _editRevenueField;
    private RichSelectOneChoice _editSalesStageField;
    private RichSelectOneChoice _editSalesMethodField;

    public OpportunitiesBean(){
        super();
        _buildFilteredOpportunitiesList();
        if (_accountsList == null)
            _buildAccountsList();
    }//constructor

    //==========================================================================
    // Handle User Events - Search and Filter
    //==========================================================================

    public void handleNameSearch(ActionEvent actionEvent) {
        _nameString = (String)getNameSearchField().getValue();
        _buildFilteredOpportunitiesList();
    }//handleNameSearch

    public void handleListFilter(ValueChangeEvent valueChangeEvent) {
        _listFilterType = (String)valueChangeEvent.getNewValue();
        _buildFilteredOpportunitiesList();
    }//handleListFilter

    //==========================================================================
    // Create Opportunity
    //==========================================================================

    public void handleCreateOpportunity(ActionEvent actionEvent) {
        _switchInlineMode("ON");
    }//handleCreateOpportunity

    public void handleCreateSaveAndClose(ActionEvent actionEvent){
        if (getCreateNameField().getValue() != null && getCreateCustomerField().getValue() != null &&
            getCreateRevenueField().getValue() != null && getCreateSalesStageField().getValue() != null){
            SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
            List<Opportunity> opportunitiesList = sessionState.getOpportunitiesList();
            int opportunityId = opportunitiesList.get(opportunitiesList.size()-1).getId()+1;
            int probabilityPercent = 50;
            if (getCreateWinProbabilityField().getValue() != null)
                probabilityPercent = Integer.parseInt(getCreateWinProbabilityField().getValue().toString());
            int amount = Integer.parseInt(getCreateRevenueField().getValue().toString());
            Date closeDate = (Date)getCreateCloseDateField().getValue();
            //id, name, account, winPercent, amount, status, salesStage, closeDate, owner, lastUpdated
            Opportunity newOpportunity = new Opportunity(opportunityId, getCreateNameField().getValue().toString(), getCreateCustomerField().getValue().toString(),
                                                         probabilityPercent, amount, "Open", getCreateSalesStageField().getValue().toString(),
                                                         closeDate, "lisa.jones", Calendar.getInstance().getTime());
            opportunitiesList.add(newOpportunity);
            _buildFilteredOpportunitiesList();
        }//null check
        _resetCreatePageInputFields();
        _switchInlineMode("OFF");
    }//handleCreateSaveAndClose

    public void handleCreateCancel(ActionEvent actionEvent){
        _resetCreatePageInputFields();
        _switchInlineMode("OFF");
    }//handleCreateCancel

    //Used in PageHeaderDC for Save-And-Close & Cancel actions
    public String customCreateReturnAction(){
        return "doneCreate";
    }//customCreateReturnAction

    public List<RevenueItem> getCreateRevenueItemList(){
        List<RevenueItem> revenueItemList = new ArrayList<RevenueItem>();
        //type, product, uom, quantity, estimatedPrice, revenue
        revenueItemList.add(new RevenueItem("", "", "", 0, 0, 0));
        return revenueItemList;
    }//getCreateRevenueItemList

    //==========================================================================
    // Edit Opportunity
    //==========================================================================

    public void handleEditOpportunity(ActionEvent actionEvent) {
        Integer opportunityId = (Integer)actionEvent.getComponent().getAttributes().get("ID");
        if (opportunityId != null){
            SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
            for (Opportunity opportunity : sessionState.getOpportunitiesList()){
                if (opportunity.getId() == opportunityId){
                    //id, name, account, winPercent, amount, status, salesStage, closeDate, owner, lastUpdated
                    _editedOpportunity = new Opportunity(opportunity.getId(), opportunity.getName(), opportunity.getAccount(),
                                                         opportunity.getWinPercent(), opportunity.getAmount(), opportunity.getStatus(),
                                                         opportunity.getSalesStage(), opportunity.getCloseDate(), opportunity.getOwner(),
                                                         opportunity.getLastUpdated());
                    break;
                }//check opty being edited
            }//loop through list
        }//null check
        _switchInlineMode("ON");
    }//handleEditOpportunity

    public void handleEditSave(ActionEvent actionEvent){
        String oldRevenueAmountStr = "";
        if (getEditNameField().getValue() != null && !getEditNameField().getValue().toString().isEmpty() &&
            getEditCustomerField().getValue() != null && !getEditCustomerField().getValue().toString().isEmpty() &&
            getEditRevenueField().getValue() != null && !getEditRevenueField().getValue().toString().isEmpty() &&
            getEditSalesStageField().getValue() != null && !getEditSalesStageField().getValue().toString().isEmpty()){
            //Mandatory values supplied. Save changes.
            SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
            for (Opportunity opportunity : sessionState.getOpportunitiesList()){
                if (opportunity.getId() == getEditedOpportunity().getId()){
                    oldRevenueAmountStr = String.valueOf(opportunity.getAmount());
                    opportunity.setName(getEditNameField().getValue().toString());
                    opportunity.setAccount(getEditCustomerField().getValue().toString());
                    if (getEditWinProbabilityField().getValue() == null)
                        opportunity.setWinPercent(50);
                    else
                        opportunity.setWinPercent(Integer.parseInt(getEditWinProbabilityField().getValue().toString()));
                    opportunity.setCloseDate((Date)getEditCloseDateField().getValue());
                    opportunity.setStatus(getEditStatusField().getValue().toString());
                    opportunity.setAmount(Integer.parseInt(getEditRevenueField().getValue().toString()));
                    opportunity.setSalesStage(getEditSalesStageField().getValue().toString());
                    opportunity.setLastUpdated(Calendar.getInstance().getTime());
                    break;
                }//check opportunity being edited
            }//loop through list
        }//null check
    }//handleEditSave

    public void handleEditSaveAndClose(ActionEvent actionEvent){
        handleEditSave(actionEvent);
        _buildFilteredOpportunitiesList();
        _switchInlineMode("OFF");
    }//handleEditSaveAndClose

    public void handleEditCancel(ActionEvent actionEvent){
        _switchInlineMode("OFF");
    }//handleEditCancel

    //Used in PageHeaderDC for Save-And-Close & Cancel actions
    public String customEditReturnAction(){
        return "doneEdit";
    }//customEditReturnAction

    public List<RevenueItem> getEditRevenueItemList(){
        List<RevenueItem> revenueItemList = new ArrayList<RevenueItem>();
        //type, product, uom, quantity, estimatedPrice, revenue
        revenueItemList.add(new RevenueItem("", "", "", 0, 0, 0));
        return revenueItemList;
    }//getEditRevenueItemList

    public List<Appointment> getEditAppointmentList(){
        List<Appointment> appointmentsList = new ArrayList<Appointment>();
        //subject, date, time, location, participants
        appointmentsList.add(new Appointment("Apex Systems Project Status Update", _getNow(),
                                             "09:00", "X3 Meeting Room", "Alfred Lee, Bill Kermit"));
        appointmentsList.add(new Appointment("Permier Energy Counter Offer Update", _getNow(),
                                             "11:00", "X9 Meeting Room", "Avril Jones, Bob Smith, others ..."));
        appointmentsList.add(new Appointment("System Solutions Management Training", _getNow(),
                                             "14:30", "XD Vision Conference Room", "Derek Peterson, Dona Whiley"));
        return appointmentsList;
    }//getEditAppointmentList

    public List<Task> getEditTaskList(){
        List<Task> tasksList = new ArrayList<Task>();
        //priority, subject, dueDate, status, owner
        tasksList.add(new Task("Highest", "Apex Systems Project Plan Update", _getNowPlusDays(20), "In Progress", "Alfred Lee"));
        tasksList.add(new Task("Medium", "Permier Energy Revised Offer Review", _getNowPlusDays(30), "In Progress", "Bob Smith"));
        tasksList.add(new Task("Low", "System Solutions Management Training Material", _getNowPlusDays(40), "In Progress", "Derek Peterson"));
        return tasksList;
    }//getEditTaskList

    //==========================================================================
    // Helpers
    //==========================================================================

    private Date _getNow(){
        return Calendar.getInstance().getTime();
    }//_getNow

    private Date _getNowPlusDays(int days){
        Calendar nowPlusDays = Calendar.getInstance();
        nowPlusDays.add(Calendar.DATE, days);
        return nowPlusDays.getTime();
    }//_getNowPlusDays

    private void _buildAccountsList(){
        _accountsList = new ArrayList<SelectItem>();
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Opportunity> opportunitiesList = sessionState.getOpportunitiesList();
        if (opportunitiesList != null){
            for (Opportunity opportunity : opportunitiesList){
                boolean exists = false;
                for (SelectItem si : _accountsList){
                    String str = (String)si.getValue();
                    if (str.equals(opportunity.getAccount())){
                        exists = true;
                        break;
                    }//check exists
                }//loop through current list
                if (!exists)
                    _accountsList.add(new SelectItem(opportunity.getAccount(), opportunity.getAccount()));
            }//loop through opportunities
        }//null check
    }//_buildAccountsList

    private void _buildFilteredOpportunitiesList(){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        if (_nameString == null)
            _nameString = "";
        if (_listFilterType == null)
            _listFilterType = "ALL";
        List<Opportunity> opportunitiesList = sessionState.getOpportunitiesList();
        List<Opportunity> filteredOpportunitiesList = sessionState.getFilteredOpportunitiesList();
        filteredOpportunitiesList.clear();
        if (opportunitiesList != null){
            for (Opportunity opportunity : opportunitiesList){
                //Check search criteria
                if (_nameString.length() == 0 || (_nameString.length() > 0 && opportunity.getName().toUpperCase().contains(_nameString.toUpperCase()))){
                    //Check filter criteria
                    if (_listFilterType.equals("ALL") || (_listFilterType.equals("OPEN") && opportunity.getStatus().toUpperCase().equals(_listFilterType))
                                                      || (_listFilterType.equals("MY") && opportunity.getOwner().equals("lisa.jones")))
                        filteredOpportunitiesList.add(opportunity);
                }//name contains check
            }//loop through master list
        }//master list null check
    }//_buildFilteredOpportunitiesList

    private void _switchInlineMode(String mode){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        if (mode.equals("ON")){
            sessionState.setFilmStripShowHandle(false);
            sessionState.setFilmStripShowStrip("noShow");
        } else {
            sessionState.setFilmStripShowHandle(true);
            sessionState.setFilmStripShowStrip("");
        }//mode check
        //Initiate Refresh
        FacesContext fctx = FacesContext.getCurrentInstance();
        UIViewRoot vr = fctx.getViewRoot();
        RichCommandButton actionTrigger = (RichCommandButton)vr.findComponent("pt1:pt_refreshTrigger");
        ActionEvent actionEvent = new ActionEvent(actionTrigger);
        actionEvent.queue();
    }//_switchInlineMode

    private void _resetCreatePageInputFields(){
        ResetUtils.reset(getCreatePageContainer());
        getCreateWinProbabilityField().setValue(50);
        getCreateCurrencyField().setValue("USD");
        getCreateSalesMethodField().setValue("Standard Sales Process");
    }//_resetCreatePageInputFields

    //==========================================================================
    // Accessors
    //==========================================================================

    public void setNameSearchField(RichInputText t) { _nameSearchField = t; }
    public RichInputText getNameSearchField() { return _nameSearchField; }
    public void setNameString(String s) { _nameString = s; }
    public String getNameString() { return _nameString; }
    public void setListFilterType(String s) { _listFilterType = s; }
    public String getListFilterType() { return _listFilterType; }
    public void setAccountsList(List<SelectItem> l) { _accountsList = l; }
    public List<SelectItem> getAccountsList() { return _accountsList; }
    //Create Page
    public void setCreatePageContainer(RichPanelGroupLayout l) { _createPageContainer = l; }
    public RichPanelGroupLayout getCreatePageContainer() { return _createPageContainer; }
    public void setCreateNameField(RichInputText t) { _createNameField = t; }
    public RichInputText getCreateNameField() { return _createNameField; }
    public void setCreateCustomerField(RichSelectOneChoice c) { _createCustomerField = c; }
    public RichSelectOneChoice getCreateCustomerField() { return _createCustomerField; }
    public void setCreateWinProbabilityField(RichInputNumberSpinbox s) { _createWinProbabilityField = s; }
    public RichInputNumberSpinbox getCreateWinProbabilityField() { return _createWinProbabilityField; }
    public void setCreateCloseDateField(RichInputDate d) { _createCloseDateField = d; }
    public RichInputDate getCreateCloseDateField() { return _createCloseDateField; }
    public void setCreateCurrencyField(RichSelectOneChoice c) { _createCurrencyField = c; }
    public RichSelectOneChoice getCreateCurrencyField() { return _createCurrencyField; }
    public void setCreateRevenueField(RichInputText t) { _createRevenueField = t; }
    public RichInputText getCreateRevenueField() { return _createRevenueField; }
    public void setCreateSalesStageField(RichSelectOneChoice c) { _createSalesStageField = c; }
    public RichSelectOneChoice getCreateSalesStageField() { return _createSalesStageField; }
    public void setCreateSalesMethodField(RichSelectOneChoice c) { _createSalesMethodField = c; }
    public RichSelectOneChoice getCreateSalesMethodField() { return _createSalesMethodField; }
    //Edit Page
    public void setEditedOpportunity(Opportunity o) { _editedOpportunity = o; }
    public Opportunity getEditedOpportunity() { return _editedOpportunity; }
    public void setEditPageContainer(RichPanelGroupLayout l) { _editPageContainer = l; }
    public RichPanelGroupLayout getEditPageContainer() { return _editPageContainer; }
    public void setEditNameField(RichInputText t) { _editNameField = t; }
    public RichInputText getEditNameField() { return _editNameField; }
    public void setEditCustomerField(RichSelectOneChoice c) { _editCustomerField = c; }
    public RichSelectOneChoice getEditCustomerField() { return _editCustomerField; }
    public void setEditWinProbabilityField(RichInputNumberSpinbox s) { _editWinProbabilityField = s; }
    public RichInputNumberSpinbox getEditWinProbabilityField() { return _editWinProbabilityField; }
    public void setEditCloseDateField(RichInputDate d) { _editCloseDateField = d; }
    public RichInputDate getEditCloseDateField() { return _editCloseDateField; }
    public void setEditStatusField(RichSelectOneChoice c) { _editStatusField = c; }
    public RichSelectOneChoice getEditStatusField() { return _editStatusField; }
    public void setEditCurrencyField(RichSelectOneChoice c) { _editCurrencyField = c; }
    public RichSelectOneChoice getEditCurrencyField() { return _editCurrencyField; }
    public void setEditRevenueField(RichInputText t) { _editRevenueField = t; }
    public RichInputText getEditRevenueField() { return _editRevenueField; }
    public void setEditSalesStageField(RichSelectOneChoice c) { _editSalesStageField = c; }
    public RichSelectOneChoice getEditSalesStageField() { return _editSalesStageField; }
    public void setEditSalesMethodField(RichSelectOneChoice c) { _editSalesMethodField = c; }
    public RichSelectOneChoice getEditSalesMethodField() { return _editSalesMethodField; }

    //==========================================================================
    // Inner Classes
    //==========================================================================

    public class RevenueItem {
        private String _type;
        private String _product;
        private String _uom;
        private int _quantity;
        private int _estimatedPrice;
        private int _revenue;

        public RevenueItem(String type, String product, String uom,
                           int quantity, int estimatedPrice, int revenue) {
            _type = type;
            _product = product;
            _uom = uom;
            _quantity = quantity;
            _estimatedPrice = estimatedPrice;
            _revenue = revenue;
        }//constructor

        //Accessors
        public void setType(String s) { _type = s; }
        public String getType() { return _type; }
        public void setProduct(String s) { _product = s; }
        public String getProduct() { return _product; }
        public void setUom(String s) { _uom = s; }
        public String getUom() { return _uom; }
        public void setQuantity(int i) { _quantity = i; }
        public int getQuantity() { return _quantity; }
        public void setEstimatedPrice(int i) { _estimatedPrice = i; }
        public int getEstimatedPrice() { return _estimatedPrice; }
        public void setRevenue(int i) { _revenue = i; }
        public int getRevenue() { return _revenue; }
    }//RevenueItem

    public class Task {
        private String _priority;
        private String _subject;
        private Date _dueDate;
        private String _status;
        private String _owner;

        public Task(String priority, String subject, Date dueDate,
                    String status, String owner){
            _priority = priority;
            _subject = subject;
            _dueDate = dueDate;
            _status = status;
            _owner = owner;
        }//constrcutor

        //Accessors
        public void setPriority(String s) { _priority = s; }
        public String getPriority() { return _priority; }
        public void setSubject(String s) { _subject = s; }
        public String getSubject() { return _subject; }
        public void setDueDate(Date d) { _dueDate = d; }
        public Date getDueDate() { return _dueDate; }
        public void setStatus(String s) { _status = s; }
        public String getStatus() { return _status; }
        public void setOwner(String s) { _owner = s; }
        public String getOwner() { return _owner; }
    }//Task

    public class Appointment {
        private String _subject;
        private Date _date;
        private String _time;
        private String _location;
        private String _participants;

        public Appointment(String subject, Date date, String time,
                           String location, String participants){
            _subject = subject;
            _date = date;
            _time = time;
            _location = location;
            _participants = participants;
        }//constructor

        //Accessors
        public void setSubject(String s) { _subject = s; }
        public String getSubject() { return _subject; }
        public void setDate(Date d) { _date = d; }
        public Date getDate() { return _date; }
        public void setTime(String s) { _time = s; }
        public String getTime() { return _time; }
        public void setLocation(String s) { _location = s; }
        public String getLocation() { return _location; }
        public void setParticipants(String s) { _participants = s; }
        public String getParticipants() { return _participants; }
    }//Appointment

}//OpportunitiesBean
