package oracle.apps.uikit.bean;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import javax.faces.context.FacesContext;
import oracle.adf.share.ADFContext;
import oracle.adf.view.rich.component.rich.RichPopup;
import oracle.adf.view.rich.event.PopupFetchEvent;
import oracle.adf.view.rich.render.ClientEvent;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.memoryCache.SessionState;

public class WelcomeBean {
    private UtilsBean _utils = new UtilsBean();

    public void welcomePopupFetchListener(PopupFetchEvent popupFetchEvent) {
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        if (!sessionState.isWelcomePopupActive()){
            RichPopup popup = (RichPopup)popupFetchEvent.getComponent();
            popup.hide();
        } else {
            sessionState.setWelcomePopupActive(false);
        }//check if need to suppress welcome popup
    }//welcomePopupFetchListener
    
    public void handleGridItemNodeClick(ClientEvent clientEvent){
        String groupNodeId = (String)clientEvent.getParameters().get("group");
        String itemNodeId = (String)clientEvent.getParameters().get("itemNodeId");
        ADFContext.getCurrent().getSessionScope().put("selectedGroupId", groupNodeId);
        ADFContext.getCurrent().getSessionScope().put("selectedItemId", itemNodeId);
        ADFContext.getCurrent().getSessionScope().put("disableGoHome", "N");
        if (groupNodeId.equalsIgnoreCase(itemNodeId)){
            ADFContext.getCurrent().getSessionScope().put("hideStrip", true);
            ADFContext.getCurrent().getSessionScope().put("hideStripToggle", true);
        } else {
            ADFContext.getCurrent().getSessionScope().put("hideStrip", false);
            ADFContext.getCurrent().getSessionScope().put("hideStripToggle", false);
        }//check group and item
        FacesContext context = FacesContext.getCurrentInstance();
        context.getApplication().getNavigationHandler().handleNavigation(context, null, "filmStrip");
    }//handleGridItemNodeClick

}//WelcomeBean
