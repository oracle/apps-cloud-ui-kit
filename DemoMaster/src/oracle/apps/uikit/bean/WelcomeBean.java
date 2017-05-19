package oracle.apps.uikit.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import oracle.adf.view.rich.component.rich.RichPopup;
import oracle.adf.view.rich.event.PopupFetchEvent;
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

}//WelcomeBean
