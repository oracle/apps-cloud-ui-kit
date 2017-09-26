package oracle.apps.uikit.bean;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import javax.faces.context.FacesContext;
import oracle.adf.view.rich.component.rich.layout.RichPanelGroupLayout;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.memoryCache.SessionState;
import org.apache.myfaces.trinidad.render.ExtendedRenderKitService;
import org.apache.myfaces.trinidad.util.Service;

public class SpringboardBean {
    private UtilsBean _utils = new UtilsBean();
    private RichPanelGroupLayout _featureGridCanvas;

    //Accessors
    public void setFeatureGridCanvas(RichPanelGroupLayout l) { _featureGridCanvas = l; }
    public RichPanelGroupLayout getFeatureGridCanvas() { return _featureGridCanvas; }

    //Load icon grid to home page. Invoked from springboard page.
    public String getIconGrid(){
        FacesContext fctx = FacesContext.getCurrentInstance();
        SessionState sessionState =(SessionState)_utils.getSessionScope().get("SessionState");
        String rootMenuData = sessionState.fetchGridNodes(null);
        //
        ExtendedRenderKitService erks = Service.getRenderKitService(fctx, ExtendedRenderKitService.class);
        String js = "homeLayoutManager.handleDocumentLoad('" + rootMenuData + "');";
        erks.addScript(fctx, js);
        //
        return null;
    }//getIconGrid

}//SpringboardBean
