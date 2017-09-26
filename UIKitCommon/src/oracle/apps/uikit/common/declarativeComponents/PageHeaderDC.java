package oracle.apps.uikit.common.declarativeComponents;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import javax.faces.context.FacesContext;
import oracle.adf.view.rich.component.rich.fragment.RichDeclarativeComponent;
import oracle.adf.view.rich.component.rich.layout.RichPanelGroupLayout;
import oracle.adf.view.rich.component.rich.layout.RichPanelStretchLayout;
import org.apache.myfaces.trinidad.render.ExtendedRenderKitService;
import org.apache.myfaces.trinidad.util.Service;

public abstract class PageHeaderDC extends RichDeclarativeComponent {
    private RichPanelStretchLayout _facetContainer;
    private RichPanelGroupLayout _parentContainer;  
    
    public PageHeaderDC(){
        super();
    }//constructor

    //Accessors
    public void setFacetContainer(RichPanelStretchLayout rpsl) { _facetContainer = rpsl; }
    public RichPanelStretchLayout getFacetContainer() { return _facetContainer; }
    public void setParentContainer(RichPanelGroupLayout rpgl) { _parentContainer = rpgl; } 
    public RichPanelGroupLayout getParentContainer() { return _parentContainer; }

    /**
     * Method to inject javascript which enables the simple panel to stick
     * to the top of the viewport on page scroll.
     */
    private void invokeStickyHeaderJS(){
      FacesContext fctx = FacesContext.getCurrentInstance();
      ExtendedRenderKitService erks = Service.getRenderKitService(fctx, ExtendedRenderKitService.class);
      String js = "simplePanelscroll.initSimplePanelscroll('" + _facetContainer.getClientId(fctx) +
                  "','" + _parentContainer.getClientId(fctx) + "');";
      erks.addScript(fctx, js);
    }//invokeStickyHeaderJS

    /**
     * Method to get page title and activate sticky header is required.
     */
    public String getPageStickyTitle(){
        if(getStickyHeaderEnabled())
          invokeStickyHeaderJS();
        //
        return this.getPageTitle();
    }//getPageStickyTitle
    
    //**************************************************************************
    // Abstract Methods for DC Attributes
    //**************************************************************************
    
    public abstract String getPageTitle();

    public abstract Boolean getStickyHeaderEnabled();

}//PageHeaderDC
