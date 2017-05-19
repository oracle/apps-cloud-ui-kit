package oracle.apps.uikit.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import javax.faces.event.ActionEvent;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.data.Node;
import oracle.apps.uikit.memoryCache.SessionState;

public class ExperimentalBean {
    private UtilsBean _utils = new UtilsBean();

    public void handleShiny(ActionEvent actionEvent) {
        _iconTypeSelection("shiny");
    }//handleShiny

    public void handleMatte(ActionEvent actionEvent) {
        _iconTypeSelection("matte");
    }//handleMatte

    public void handleLight(ActionEvent actionEvent) {
        _iconTypeSelection("light");
    }//handleLight

    public void handleDark(ActionEvent actionEvent) {
        _iconTypeSelection("dark");
    }//handleDark

    public void handleDot(ActionEvent actionEvent) {
        _iconTypeSelection("dot");
    }//handleDot

    public void handleRich(ActionEvent actionEvent) {
        _iconTypeSelection("rich");
    }//handleRich

    private void _iconTypeSelection(String iconType){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        //Apply the icon type change
        for (Node node : sessionState.getNodeList()){
            node.setIconType(iconType);
            if (node.getChildren() != null && node.getChildren().size() > 0){
                for (Node child : node.getChildren())
                    child.setIconType(iconType);
            }//check for children
        }//loop through nodes
        //Refresh the application view
        _utils.refreshView();
    }//_iconTypeSelection

}//ExperimentalBean
