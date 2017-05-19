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
import oracle.adf.view.rich.component.rich.layout.RichPanelGroupLayout;
import oracle.adf.view.rich.component.rich.nav.RichCommandButton;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.data.Node;
import oracle.apps.uikit.memoryCache.SessionState;

public class SpringboardBean {
    private UtilsBean _utils = new UtilsBean();
    private RichPanelGroupLayout _featureGridCanvas;

    //Accessors
    public void setFeatureGridCanvas(RichPanelGroupLayout l) { _featureGridCanvas = l; }
    public RichPanelGroupLayout getFeatureGridCanvas() { return _featureGridCanvas; }

    public void handleNodeSelection(ActionEvent userActionEvent){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        int nodeId = sessionState.getAccessedNodeId();
        Node node = _getNodeFromListUsingId(nodeId);
        if (node.isGroup()){
            //This is a group node. Show/Hide children as required.
            if (node.getShowChildren()) {
                node.setShowChildren(false);
                sessionState.setShowChildren(false);
            } else {
                node.setShowChildren(true);
                sessionState.setShowChildren(true);
                _closeAllOtherGroups(node);
            }
            _utils.refresh(getFeatureGridCanvas());
        } else {
            //This is not a group node. Prepare to navigate to target.
            _closeAllGroups();
            if (_isGroupChild(nodeId))
                sessionState.setFilmStripMode("strip");
            else
                sessionState.setFilmStripMode("single");
            _utils.getSessionScope().put("navigateTo", "filmStrip");
            _utils.getSessionScope().put("disableGoHome", "N");
            //Initiate Navigation
            FacesContext fctx = FacesContext.getCurrentInstance();
            UIViewRoot vr = fctx.getViewRoot();
            RichCommandButton actionTrigger = (RichCommandButton)vr.findComponent("pt1:pt_navigationTrigger");
            ActionEvent actionEvent = new ActionEvent(actionTrigger);
            actionEvent.queue();
        }//Check node type
    }//_handleNodeSelection

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

    //Close all group nodes except passed reference
    private void _closeAllOtherGroups(Node nodeToKeepOpen){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Node> nodeList = sessionState.getNodeList();
        for (Node node : nodeList)
            if (node.isGroup())
                if (node.getId() != nodeToKeepOpen.getId())
                    node.setShowChildren(false);
    }//_closeAllOtherGroups

    //Close all group nodes
    private void _closeAllGroups(){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Node> nodeList = sessionState.getNodeList();
        for (Node node : nodeList)
            if (node.isGroup())
                node.setShowChildren(false);
    }//_closeAllGroups

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

}//SpringboardBean
