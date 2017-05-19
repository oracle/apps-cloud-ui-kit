package oracle.apps.uikit.hcm.myTeam.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.Calendar;
import java.util.Date;
import javax.faces.event.ActionEvent;
import javax.faces.event.ValueChangeEvent;
import oracle.apps.uikit.memoryCache.SessionState;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.data.Person;

public class MyTeamBean {
    private UtilsBean _utils = new UtilsBean();
    private String _sortBy;

    public MyTeamBean(){
        _sortBy = "Name";
    }//constructor

    public void handleSortBy(ValueChangeEvent valueChangeEvent) {
        //TODO
    }//handleSortBy

    public void handleFlipTeamCard(ActionEvent actionEvent) {
        Integer teamMemberId = (Integer)actionEvent.getComponent().getAttributes().get("ID");
        if (teamMemberId != null){
            SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
            for (Person teamMember : sessionState.getMyTeamList()){
                if (teamMember.getId() == teamMemberId){
                    teamMember.setSelected(!teamMember.isSelected());
                    break;
                }//check required person
            }//loop through team
        }//null check
    }//handleFlipTeamCard

    public Date getNow(){
        return Calendar.getInstance().getTime();
    }//getNow

    //Accessors
    public void setSortBy(String s) { _sortBy = s; }
    public String getSortBy() { return _sortBy; }
}//MyTeamBean
