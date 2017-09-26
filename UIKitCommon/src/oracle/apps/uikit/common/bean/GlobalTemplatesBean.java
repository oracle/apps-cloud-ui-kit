package oracle.apps.uikit.common.bean;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import oracle.adf.share.ADFContext;
import oracle.adf.view.rich.component.rich.nav.RichCommandButton;

public class GlobalTemplatesBean {
    private UtilsBean _utils = new UtilsBean();

    //==========================================================================
    // SimpleUIShell.jspx Routines
    //==========================================================================

    public void handleGoHome(ActionEvent ae) {
        FacesContext fctx = FacesContext.getCurrentInstance();
        UIViewRoot vr = fctx.getViewRoot();
        if (vr.getViewId().equals("/FilmStrip")){
            RichCommandButton actionTrigger = (RichCommandButton)vr.findComponent("pt1:pt_navigationTrigger");
            ActionEvent actionEvent = new ActionEvent(actionTrigger);
            actionEvent.queue();
        }//check if navigation required
    }//handleGoHome
    
    public boolean isHeadless(){
        String headless = (String)ADFContext.getCurrent().getSessionScope().get("headless");
        if (headless.equals("no"))
            return false;
        else 
            return true;
    }//isHeadless

    public void handleNavigationClick(ActionEvent actionEvent) {
        String itemNodeId = (String)_utils.evaluateEL("#{sessionScope.selectedItemId}");
        String groupNodeId = (String)_utils.evaluateEL("#{sessionScope.selectedGroupId}");
        if (itemNodeId.equalsIgnoreCase(groupNodeId)){
            ADFContext.getCurrent().getSessionScope().put("hideStrip", true);
            ADFContext.getCurrent().getSessionScope().put("hideStripToggle", true);
        } else {
            ADFContext.getCurrent().getSessionScope().put("hideStrip", false);
            ADFContext.getCurrent().getSessionScope().put("hideStripToggle", false);
        }//check group and item
        ADFContext.getCurrent().getSessionScope().put("disableGoHome", "N");
        FacesContext context = FacesContext.getCurrentInstance();
        UIViewRoot vr = context.getViewRoot();
        if (vr.getViewId().equalsIgnoreCase("/FilmStrip")) {
            context.getApplication().getNavigationHandler().handleNavigation(context, null, "refresh");   
        } else {
            context.getApplication().getNavigationHandler().handleNavigation(context, null, "filmStrip");
        }//check view
    }//handleNavigationClick
    
}//GlobalTemplatesBean
