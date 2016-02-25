package oracle.apps.uikit.data;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.List;

public class Node {
    private int _id;
    private String _name;
    private String _icon; //base icon name only e.g. 'dashboard'
    private String _taskFlowId;
    private String _taskFlowName;
    private String _iconType = "dot";
    private boolean _group;
    private boolean _showChildren;
    private List<Node> _children;

    public Node(int id, String name, String icon, String taskFlowId, String taskFlowName){
        _id = id;
        _name = name;
        _icon = icon;
        _taskFlowId = taskFlowId;
        _taskFlowName = taskFlowName;
        _group = false;
        _showChildren = false;
        _children = new ArrayList<Node>();
    }//constructor

    public Node(int id, String name, String icon, String taskFlowId, String taskFlowName,
                String iconType){
        _id = id;
        _name = name;
        _icon = icon;
        _taskFlowId = taskFlowId;
        _taskFlowName = taskFlowName;
        _iconType = iconType;
        _group = false;
        _showChildren = false;
        _children = new ArrayList<Node>();
    }//constructor

    //Accessors
    public void setId(int i) { _id = i; }
    public int getId() { return _id; }
    public void setName(String s) { _name = s; }
    public String getName() { return _name; }
    public void setIcon(String s) { _icon = s; }
    public String getIcon() {
        String icon = "";
        if (_iconType.equals("shiny"))
            icon = "/images/grid_shiny_" + _icon + ".png";
        else if (_iconType.equals("matte"))
            icon = "/images/grid_matte_" + _icon + ".png";
        else if (_iconType.equals("light"))
            icon = "/images/grid_light_" + _icon + ".png";
        else if (_iconType.equals("dark"))
            icon = "/images/grid_dark_" + _icon + ".png";
        else if (_iconType.equals("dot"))
            icon = "/images/grid_dot_" + _icon + ".png";
        else if (_iconType.equals("rich"))
            icon = "/images/grid_rich_" + _icon + ".png";
        else
            icon = "/images/grid_matte_" + _icon + ".png";
        return icon;
    }//getIcon
    public String getNavIcon() {
        return "/images/qual_" + _icon + "_16.png";
    }//getNavIcon
    public void setTaskFlowId(String s) { _taskFlowId = s; }
    public String getTaskFlowId() { return _taskFlowId; }
    public void setTaskFlowName(String s) { _taskFlowName = s; }
    public String getTaskFlowName() { return _taskFlowName; }
    public void setIconType(String s) { _iconType = s; }
    public String getIconType() { return _iconType; }
    public void setGroup(boolean b) { _group = b; }
    public boolean isGroup() { return _group; }
    public void setShowChildren(boolean b) { _showChildren = b; }
    public boolean getShowChildren() { return _showChildren; }
    public void setChildren(List<Node> l) {
        _children = l;
        if (l.size() > 0)
            setGroup(true);
        else
            setGroup(false);
    }//setChildren
    public List<Node> getChildren() { return _children; }
}//Node
