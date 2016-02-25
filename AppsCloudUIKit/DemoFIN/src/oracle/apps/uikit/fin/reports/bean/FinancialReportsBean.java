package oracle.apps.uikit.fin.reports.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.List;
import javax.faces.event.ActionEvent;
import javax.faces.event.ValueChangeEvent;
import oracle.adf.controller.TaskFlowId;
import oracle.adf.view.rich.component.rich.input.RichInputText;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.data.FinancialReport;
import oracle.apps.uikit.memoryCache.SessionState;

public class FinancialReportsBean {
    private UtilsBean _utils = new UtilsBean();
    private RichInputText _nameSearchField;
    private String _nameString;
    private String _listFilterType;
    private int _selectedReportId;
    private String _defaultTaskFlowId = "/WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml#NotImplementedFlow";

    public FinancialReportsBean(){
        _buildFilteredFinancialReportsList();
    }//constructor

    public TaskFlowId getDynamicTaskFlowId() {
        String taskFlowId = _defaultTaskFlowId;
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<FinancialReport> financialReportsList = sessionState.getFinancialReportsList();
        if (financialReportsList != null){
            for (FinancialReport report : financialReportsList){
                if (report.getId() == getSelectedReportId()){
                    taskFlowId = "/" + report.getTaskFlowId() + "#" + report.getTaskFlowName();
                    break;
                }//check required report
            }//loop through master list
        }//master list null check
        return TaskFlowId.parse(taskFlowId);
    }//getDynamicTaskFlowId

    //==========================================================================
    // User Event Handlers
    //==========================================================================

    public void handleNameSearch(ActionEvent actionEvent) {
        _nameString = (String)getNameSearchField().getValue();
        _buildFilteredFinancialReportsList();
    }//handleNameSearch

    public void handleListFilter(ValueChangeEvent valueChangeEvent) {
        _listFilterType = (String)valueChangeEvent.getNewValue();
        _buildFilteredFinancialReportsList();
    }//handleListFilter

    public void handleToggleFavourite(ActionEvent actionEvent) {
        Integer reportId = (Integer)actionEvent.getComponent().getAttributes().get("ID");
        _toggleFavourites(reportId);
        _buildFilteredFinancialReportsList();
    }//handleToggleFavourite

    //==========================================================================
    // Helpers
    //==========================================================================

    private void _toggleFavourites(Integer reportId){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<FinancialReport> financialReportsList = sessionState.getFinancialReportsList();
        if (financialReportsList != null){
            for (FinancialReport report : financialReportsList){
                if (report.getId() == reportId){
                    report.setFavourite(!report.isFavourite());
                    break;
                }//check required report
            }//loop through master list
        }//master list null check
    }//_toggleFavourites

    private void _buildFilteredFinancialReportsList(){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        if (_nameString == null)
            _nameString = "";
        if (_listFilterType == null)
            _listFilterType = "ALL";
        List<FinancialReport> financialReportsList = sessionState.getFinancialReportsList();
        List<FinancialReport> filteredFinancialReportsList = sessionState.getFilteredFinancialReportsList();
        filteredFinancialReportsList.clear();
        if (financialReportsList != null){
            for (FinancialReport report : financialReportsList){
                //Check search criteria
                if (_nameString.length() == 0 || (_nameString.length() > 0 && report.getName().toUpperCase().contains(_nameString.toUpperCase()))){
                    if (_listFilterType.equals("ALL") || (_listFilterType.equals("FAV") && report.isFavourite())){
                        //Add current report to display list
                        filteredFinancialReportsList.add(report);
                    }//favourite check
                }//name contains check
            }//loop through master list
        }//master list null check
    }//_buildFilteredFinancialReportsList

    //Accessors
    public void setNameSearchField(RichInputText t) { _nameSearchField = t; }
    public RichInputText getNameSearchField() { return _nameSearchField; }
    public void setNameString(String s) { _nameString = s; }
    public String getNameString() { return _nameString; }
    public void setListFilterType(String s) { _listFilterType = s; }
    public String getListFilterType() { return _listFilterType; }
    public void setSelectedReportId(int i) { _selectedReportId = i; }
    public int getSelectedReportId() { return _selectedReportId; }
}//FinancialReportsBean
