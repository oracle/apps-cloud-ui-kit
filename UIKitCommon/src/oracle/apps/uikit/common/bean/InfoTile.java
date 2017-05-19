package oracle.apps.uikit.common.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import oracle.adf.controller.TaskFlowId;
import oracle.adf.controller.binding.TaskFlowBindingAttributes;

public class InfoTile extends TaskFlowBindingAttributes {
    private String _tfName;
    private String _tfId;

    public InfoTile(String tfName, String tfId){
        _tfName = tfName;
        _tfId = tfId;
        super.setTaskFlowId(new TaskFlowId(_tfName, _tfId));
        super.setId(_tfId);
    }//constructor

    //Accessors
    public void setTfName(String s) { _tfName = s; }
    public String getTfName() { return _tfName; }
    public void setTfId(String s) { _tfId = s; }
    public String getTfId() { return _tfId; }
}//InfoTile
