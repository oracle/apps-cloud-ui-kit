package oracle.apps.uikit.hcm.performance.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.List;
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import oracle.adf.view.rich.component.rich.layout.RichDeck;
import oracle.adf.view.rich.component.rich.layout.RichPanelGroupLayout;
import oracle.adf.view.rich.component.rich.nav.RichCommandButton;
import oracle.apps.uikit.common.bean.InfoTile;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.common.declarativeComponents.InfotilesDCComponent;
import oracle.apps.uikit.data.Evaluation;
import oracle.apps.uikit.data.Person;
import oracle.apps.uikit.memoryCache.SessionState;

public class PerformanceBean {
    private static String _CLOSED = "CLOSED";
    private static String _ANNUAL = "ANNUAL REVIEW";
    private static String _MIDYEAR = "MID-YEAR REVIEW";
    private static String _PROJECT = "PROJECT REVIEW";
    private UtilsBean _utils = new UtilsBean();
    private Person _selectedPerson;
    private Evaluation _selectedEvaluation;
    private List<InfoTile> _infoTilesList;
    private RichPanelGroupLayout _evaluationDetailContainer;
    private List<String> _competenciesList;
    private List<String> _goalsList;
    private RichDeck _tileDetailDeck;
    private InfotilesDCComponent _infotilesDC;

    public PerformanceBean(){
        if (_infoTilesList == null)
            _buildInfoTilesList();
        if (_competenciesList == null)
            _buildCompetenciesList();
        if (_goalsList == null)
            _buildGoalsList();
    }//constructor

    //==========================================================================
    // Statistics Dials Data
    //==========================================================================

    public int getTotalEvaluations(){
        return _countEvaluations(true, false, false, false, false, false, false, false);
    }//getTotalEvaluations

    public int getTotalClosedEvaluations(){
        return _countEvaluations(false, true, false, false, false, false, false, false);
    }//getTotalClosedEvaluations

    public int getAnnualEvaluations(){
        return _countEvaluations(false, false, true, false, false, false, false, false);
    }//getAnnualEvaluations

    public int getAnnualClosedEvaluations(){
        return _countEvaluations(false, false, false, true, false, false, false, false);
    }//getAnnualClosedEvaluations

    public int getMidyearEvaluations(){
        return _countEvaluations(false, false, false, false, true, false, false, false);
    }//getMidyearEvaluations

    public int getMidyearClosedEvaluations(){
        return _countEvaluations(false, false, false, false, false, true, false, false);
    }//getMidyearClosedEvaluations

    public int getProjectEvaluations(){
        return _countEvaluations(false, false, false, false, false, false, true, false);
    }//getProjectEvaluations

    public int getProjectClosedEvaluations(){
        return _countEvaluations(false, false, false, false, false, false, false, true);
    }//getProjectClosedEvaluations

    //==========================================================================
    // User Event Handlers
    //==========================================================================

    public void handleReviewClick(ActionEvent actionEvent) {
        Integer personId = (Integer)actionEvent.getComponent().getAttributes().get("PERSONID");
        Integer evaluationId = (Integer)actionEvent.getComponent().getAttributes().get("EVALUATIONID");
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        for (Person person : sessionState.getMyTeamList()){
            if (person.getId() == personId){
                _selectedPerson = person;
                for (Evaluation evaluation : person.getEvaluationsList()){
                    if (evaluation.getId() == evaluationId){
                        _selectedEvaluation = evaluation;
                        break;
                    }//check selected evaluation
                }//loop through evaluations
                break;
            }//check selected person
        }//loop through my team
        _switchInlineMode("ON");
    }//handleReviewClick

    public void handleReturnFromDetail(ActionEvent actionEvent){
        _switchInlineMode("OFF");
    }//handleReturnFromDetail

    public void handleTileSelection(ActionEvent actionEvent){
        Integer selectedTileIdx = (Integer)_utils.getPageFlowScope().get("selectedTileIdx");
        if (selectedTileIdx == 0)
            getTileDetailDeck().setDisplayedChild("r1");
        else if (selectedTileIdx == 1)
            getTileDetailDeck().setDisplayedChild("r2");
        else if (selectedTileIdx == 2)
            getTileDetailDeck().setDisplayedChild("r3");
        else if (selectedTileIdx == 3)
            getTileDetailDeck().setDisplayedChild("r4");
        _utils.refresh(getInfotilesDC());
    }//handleTileSelection

    //==========================================================================
    // Helpers
    //==========================================================================

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

    private int _countEvaluations(boolean total, boolean totalClosed, boolean annual, boolean annualClosed,
                                  boolean midYear, boolean midYearClosed, boolean project, boolean projectClosed){
        int evaluationsCount = 0;
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        for (Person person : sessionState.getMyTeamList()){
            for (Evaluation evaluation : person.getEvaluationsList()){
                if (total){
                    evaluationsCount++;
                } else if (totalClosed){
                    if (_CLOSED.equals(evaluation.getStatus().toUpperCase()))
                        evaluationsCount++;
                } else if (annual){
                    if (_ANNUAL.equals(evaluation.getType().toUpperCase()))
                        evaluationsCount++;
                } else if (annualClosed){
                    if (_CLOSED.equals(evaluation.getStatus().toUpperCase()) && _ANNUAL.equals(evaluation.getType().toUpperCase()))
                        evaluationsCount++;
                } else if (midYear){
                    if (_MIDYEAR.equals(evaluation.getType().toUpperCase()))
                        evaluationsCount++;
                } else if (midYearClosed){
                    if (_CLOSED.equals(evaluation.getStatus().toUpperCase()) && _MIDYEAR.equals(evaluation.getType().toUpperCase()))
                        evaluationsCount++;
                } else if (project){
                    if (_PROJECT.equals(evaluation.getType().toUpperCase()))
                        evaluationsCount++;
                } else if (projectClosed){
                    if (_CLOSED.equals(evaluation.getStatus().toUpperCase()) && _PROJECT.equals(evaluation.getType().toUpperCase()))
                        evaluationsCount++;
                }//check type
            }//loop through evaluations
        }//loop through my team
        return evaluationsCount;
    }//_countEvaluations

    private void _buildInfoTilesList(){
        _infoTilesList = new ArrayList<InfoTile>();
        //taskflowName, taskflowId
        _infoTilesList.add(new InfoTile("WEB-INF/oracle/apps/uikit/hcm/performance/flow/CompetenciesTileFlow.xml", "CompetenciesTileFlow"));
        _infoTilesList.add(new InfoTile("WEB-INF/oracle/apps/uikit/hcm/performance/flow/GoalsTileFlow.xml", "GoalsTileFlow"));
        _infoTilesList.add(new InfoTile("WEB-INF/oracle/apps/uikit/hcm/performance/flow/QuestionnairesTileFlow.xml", "QuestionnairesTileFlow"));
        _infoTilesList.add(new InfoTile("WEB-INF/oracle/apps/uikit/hcm/performance/flow/OverallSummaryTileFlow.xml", "OverallSummaryTileFlow"));
    }//_buildInfoTilesList

    public void _buildCompetenciesList(){
        _competenciesList = new ArrayList<String>();
        _competenciesList.add("Adapting to Change");
        _competenciesList.add("Customer Focus");
        _competenciesList.add("Influencing and Negotiating");
        _competenciesList.add("Building Relationships");
    }//_buildCompetenciesList

    public void _buildGoalsList(){
        _goalsList = new ArrayList<String>();
        _goalsList.add("Design, develop and deliver three customer validations");
        _goalsList.add("Drive customer satisfaction score to 89 points");
        _goalsList.add("Execute 5% increase in Q1 and Q2 against NA competitors");
        _goalsList.add("Execute 10% increase in Q3 and Q4 against NA competitors");
    }//_buildGoalsList

    //==========================================================================
    // Accessors
    //==========================================================================

    public void setSelectedPerson(Person p) { _selectedPerson = p; }
    public Person getSelectedPerson() { return _selectedPerson; }
    public void setSelectedEvaluation(Evaluation e) { _selectedEvaluation = e; }
    public Evaluation getSelectedEvaluation() { return _selectedEvaluation; }
    public void setInfoTilesList(List<InfoTile> l) { _infoTilesList = l; }
    public List<InfoTile> getInfoTilesList() { return _infoTilesList; }
    public void setEvaluationDetailContainer(RichPanelGroupLayout l) { _evaluationDetailContainer = l; }
    public RichPanelGroupLayout getEvaluationDetailContainer() { return _evaluationDetailContainer; }
    public void setCompetenciesList(List<String> l) { _competenciesList = l; }
    public List<String> getCompetenciesList() { return _competenciesList; }
    public void setGoalsList(List<String> l) { _goalsList = l; }
    public List<String> getGoalsList() { return _goalsList; }
    public void setTileDetailDeck(RichDeck d) { _tileDetailDeck = d; }
    public RichDeck getTileDetailDeck() { return _tileDetailDeck; }
    public void setInfotilesDC(InfotilesDCComponent dc) { _infotilesDC = dc; }
    public InfotilesDCComponent getInfotilesDC() { return _infotilesDC; }
}//PerformanceBean
