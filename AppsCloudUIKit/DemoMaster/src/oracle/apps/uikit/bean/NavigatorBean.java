package oracle.apps.uikit.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.List;
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import oracle.adf.view.rich.component.rich.nav.RichCommandButton;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.data.Node;
import oracle.apps.uikit.memoryCache.SessionState;

public class NavigatorBean {
    private UtilsBean _utils = new UtilsBean();

    public void handleNavNodeSelection(ActionEvent ae) {
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        int nodeId = sessionState.getAccessedNodeId();
        Node node = _getNodeFromListUsingId(nodeId);
        if (_isGroupChild(nodeId))
            sessionState.setFilmStripMode("strip");
        else
            sessionState.setFilmStripMode("single");
        FacesContext fctx = FacesContext.getCurrentInstance();
        UIViewRoot vr = fctx.getViewRoot();
        if (vr.getViewId().equals("/Welcome")){
            _utils.getSessionScope().put("navigateTo", "filmStrip");
            _utils.getSessionScope().put("disableGoHome", "N");
            RichCommandButton actionTrigger = (RichCommandButton)vr.findComponent("pt1:pt_navigationTrigger");
            ActionEvent actionEvent = new ActionEvent(actionTrigger);
            actionEvent.queue();
        } else if (vr.getViewId().equals("/FilmStrip")){
            RichCommandButton actionTrigger = (RichCommandButton)vr.findComponent("pt1:pt_refreshTrigger");
            ActionEvent actionEvent = new ActionEvent(actionTrigger);
            actionEvent.queue();
        }//check if navigation required
    }//handleNavNodeSelection

    private Node _getNodeFromListUsingId(int nodeId){
        boolean found = false;
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Node> nodeList = sessionState.getNodeList();
        Node requiredNode = nodeList.get(0);
        for (Node node : nodeList){
            if (node.getId() == nodeId){
                requiredNode = node;
                found = true;
            } else {
                if (node.getChildren() != null){
                    for (Node childNode : node.getChildren()){
                        if (childNode.getId() == nodeId){
                            requiredNode = childNode;
                            found = true;
                        }//check if required node
                        if (found)
                            break;
                    }//loop through children
                }//null check
            }//check if required node
            if (found)
                break;
        }//loop through nodes
        return requiredNode;
    }//_getNodeFromListUsingId

    //Check if node is a group child and if so, build peer list
    private boolean _isGroupChild(int nodeId){
        boolean isGroupChild = false;
        boolean found = false;
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Node> nodeList = sessionState.getNodeList();
        List<Node> filmStripNodeList = new ArrayList<Node>();
        for (Node node : nodeList){
            if (node.getId() == nodeId){
                //Found at top level, so no peers
                found = true;
            } else {
                //Check if this is a group node with children
                if (node.isGroup() && node.getChildren() != null){
                    //Look through children
                    for (Node childNode : node.getChildren()){
                        filmStripNodeList.add(childNode);
                        if (childNode.getId() == nodeId){
                            isGroupChild = true;
                            found = true;
                        }//check if required node
                    }//loop through children
                    if (!found)
                        filmStripNodeList.clear();
                }//check group node
            }//check if required node
            if (found)
                break;
        }//loop through nodes
        sessionState.setFilmStripNodeList(filmStripNodeList);
        return isGroupChild;
    }//_isGroupChild

}//NavigatorBean
