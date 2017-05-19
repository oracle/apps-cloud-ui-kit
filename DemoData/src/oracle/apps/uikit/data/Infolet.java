package oracle.apps.uikit.data;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import oracle.adf.controller.TaskFlowId;
import oracle.adf.controller.binding.TaskFlowBindingAttributes;

public class Infolet extends TaskFlowBindingAttributes{
    private int _infoletId;
    private boolean _rendered;
    private String _contentTFName;
    private String _contentTFId;

    //Constructor
    public Infolet(int infoletId, boolean rendered,
                   String contentTFName, String contentTFId){
        _infoletId = infoletId;
        _rendered = rendered;
        _contentTFName = contentTFName;
        _contentTFId = contentTFId;
        super.setTaskFlowId(new TaskFlowId(_contentTFName, _contentTFId));
        super.setId(_contentTFId);
    }//constructor

    //Accessors
    public void setInfoletId(int i) { _infoletId = i; }
    public int getInfoletId() { return _infoletId; }
    public void setRendered(boolean b) { _rendered = b; }
    public boolean isRendered() { return _rendered; }
    public void setContentTFId(String s) { _contentTFId = s; }
    public String getContentTFId() { return _contentTFId; }
    public void setContentTFName(String s) { _contentTFName = s; }
    public String getContentTFName() { return _contentTFName; }
}//Infolet
