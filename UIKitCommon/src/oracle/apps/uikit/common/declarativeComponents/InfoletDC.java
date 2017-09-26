package oracle.apps.uikit.common.declarativeComponents;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import oracle.adf.view.rich.component.rich.fragment.RichDeclarativeComponent;

public class InfoletDC extends RichDeclarativeComponent {
    private String _viewMode;

    public InfoletDC(){
        super();
    }//constructor

    public void setViewMode(String s) { _viewMode = s; }

    public String getViewMode() {
        if (_viewMode == null)
            _viewMode = "dc_frontFace";
        return _viewMode;
    }//getViewMode
}//InfoletDC
