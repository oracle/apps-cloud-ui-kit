package oracle.apps.uikit.data;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ItemNode {
    private String _id;
    private String _name;
    private String _icon;
    private String _cardIcon;
    private boolean _groupNode;
    private boolean _showOnHomeGrid;
    private boolean _showChildren;
    private List<ItemNode> _children;
    private String _focusViewId;
    private String _webAppModule;
    private String _webAppDestination;
    private String _destinationUrl;
    private String _securityStripe;
    private String _taskMenuSource;
    private boolean _render;
    private boolean _showPanelDrawer;
    private String _targetFrame;
    private String _action;
    private Map _customProperties;

    //No argument constructor
    public ItemNode(){
        super();
        _id = "";
        _name = "";
        _icon = "";
        _cardIcon = "";
        _groupNode = false;
        _showOnHomeGrid = true;
        _showChildren = false;
        _children = new ArrayList<ItemNode>();
        _focusViewId = "";
        _webAppModule = "";
        _webAppDestination = "";
        _destinationUrl = "";
        _securityStripe = "";
        _taskMenuSource = "";
        _render = true;
        _showPanelDrawer = false;
        _targetFrame = "";
        _action = "";
        _customProperties = new HashMap();
    }//constructor

    //Group node constructor
    public ItemNode(String id, String name, String icon, String cardIcon, boolean showOnHomeGrid){
        super();
        _id = id;
        _name = name;
        _icon = icon;
        _cardIcon = cardIcon;
        _groupNode = true;
        _showOnHomeGrid = showOnHomeGrid;
        _showChildren = false;
        _children = new ArrayList<ItemNode>();
        _focusViewId = "";
        _webAppModule = "";
        _webAppDestination = "";
        _destinationUrl = "";
        _securityStripe = "";
        _taskMenuSource = "";
        _render = true;
        _showPanelDrawer = false;
        _targetFrame = "";
        _action = "";
        _customProperties = new HashMap();
    }//constructor

    //Leaf node constructor
    public ItemNode(String id, String name, String icon, String cardIcon, boolean showOnHomeGrid, 
                    String focusViewId, String webAppModule, String webAppDestination, 
                    String destinationUrl, String securityStripe, String taskMenuSource, 
                    String targetFrame, String action){
        super();
        _id = id;
        _name = name;
        _icon = icon;
        _cardIcon = cardIcon;
        _groupNode = false;
        _showOnHomeGrid = showOnHomeGrid;
        _showChildren = false;
        _children = new ArrayList<ItemNode>();
        _focusViewId = focusViewId;
        _webAppModule = webAppModule;        
        _webAppDestination = webAppDestination;
        _destinationUrl = destinationUrl;
        _securityStripe = securityStripe;
        _taskMenuSource = taskMenuSource;
        _render = true;
        _showPanelDrawer = false;
        _targetFrame = targetFrame;
        _action = action;
        _customProperties = new HashMap();
    }//constructor

    //Accessors
    public void setId(String s) { _id = s; }
    public String getId() { return _id; }
    public void setName(String s) { _name = s; }
    public String getName() { return _name; }
    public void setIcon(String s) { _icon = s; }
    public String getIcon() { return _icon; }
    public void setCardIcon(String s) { _cardIcon = s; }
    public String getCardIcon() { return _cardIcon; }
    public void setGroupNode(boolean b) { _groupNode = b; }
    public boolean isGroupNode() { return _groupNode; }
    public void setShowOnHomeGrid(boolean b) { _showOnHomeGrid = b; }
    public boolean isShowOnHomeGrid() { return _showOnHomeGrid; }
    public void setShowChildren(boolean b) { _showChildren = b; }
    public boolean isShowChildren() { return _showChildren; }
    public void setChildren(List<ItemNode> l) { _children = l; }
    public List<ItemNode> getChildren() { return _children; }
    public void setFocusViewId(String s) { _focusViewId = s; }
    public String getFocusViewId() { return _focusViewId; }
    public void setWebAppModule(String s) { _webAppModule = s; }
    public String getWebAppModule() { return _webAppModule; }
    public void setWebAppDestination(String s) { _webAppDestination = s; }
    public String getWebAppDestination() { return _webAppDestination; }
    public void setDestinationUrl(String s) { _destinationUrl = s; }
    public String getDestinationUrl() { return _destinationUrl; }
    public void setSecurityStripe(String s) { _securityStripe = s; }
    public String getSecurityStripe() { return _securityStripe; }
    public void setTaskMenuSource(String s) { _taskMenuSource = s; }
    public String getTaskMenuSource() { return _taskMenuSource; }
    public void setRender(boolean b) { _render = b; }
    public boolean isRender() { return _render; }
    public void setShowPanelDrawer(boolean b) { _showPanelDrawer = b; }
    public boolean getShowPanelDrawer() { return _showPanelDrawer; }
    public void setTargetFrame(String s) { _targetFrame = s; }
    public String getTargetFrame() { return _targetFrame; }
    public void setAction(String s) {_action = s; }
    public String getAction() { return _action; }
    public void setCustomProperties(Map m) { _customProperties = m; }
    public Map getCustomProperties() { return _customProperties; }

}//ItemNode
