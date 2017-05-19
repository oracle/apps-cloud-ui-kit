package oracle.apps.uikit.data;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

public class FinancialReport {
    private int _id;
    private String _name;
    private String _description;
    private String _taskFlowId;
    private String _taskFlowName;
    private boolean _favourite;
    private boolean _enabled;
    private String _category;
    private String _status;

    public FinancialReport(int id, String name, String description, String taskFlowId,
                           String taskFlowName, boolean favourite, boolean enabled,
                           String category, String status){
        _id = id;
        _name = name;
        _description = description;
        _taskFlowId = taskFlowId;
        _taskFlowName = taskFlowName;
        _favourite = favourite;
        _enabled = enabled;
        _category = category;
        _status = status;
    }//constructor

    //Accessors
    public void setId(int i) { _id = i; }
    public int getId() { return _id; }
    public void setName(String s) { _name = s; }
    public String getName() { return _name; }
    public void setDescription(String s) { _description = s; }
    public String getDescription() { return _description; }
    public void setTaskFlowId(String s) { _taskFlowId = s; }
    public String getTaskFlowId() { return _taskFlowId; }
    public void setTaskFlowName(String s) { _taskFlowName = s; }
    public String getTaskFlowName() { return _taskFlowName; }
    public void setFavourite(boolean b) { _favourite = b; }
    public boolean isFavourite() { return _favourite; }
    public void setEnabled(boolean b) { _enabled = b; }
    public boolean isEnabled() { return _enabled; }
    public void setCategory(String s) { _category = s; }
    public String getCategory() { return _category; }
    public void setStatus(String s) { _status = s; }
    public String getStatus() { return _status; }
}//FinancialReport
