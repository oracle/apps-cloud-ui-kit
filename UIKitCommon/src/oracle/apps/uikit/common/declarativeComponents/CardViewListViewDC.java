package oracle.apps.uikit.common.declarativeComponents;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import oracle.adf.view.rich.component.rich.fragment.RichDeclarativeComponent;
import javax.faces.event.ActionEvent;

public class CardViewListViewDC extends RichDeclarativeComponent {
    private static String CARD_VIEW = "cardView";
    private static String LIST_VIEW = "listView";

    private String _viewMode;

    public void setViewMode(String s) { _viewMode = s; }

    public String getViewMode() {
        if (_viewMode == null){
            String defaultView = (String)this.getAttribute("defaultView");
            if (defaultView.equalsIgnoreCase(LIST_VIEW))
                _viewMode = LIST_VIEW;
            else
                _viewMode = CARD_VIEW;
        }//null check
        return _viewMode;
    }//getViewMode

    //Called on click of card view icon in component
    public void showCardView(ActionEvent actionEvent){
        if (getViewMode().equals(LIST_VIEW))
            setViewMode(CARD_VIEW);
    }//showCardView

    //Called on click of list view icon in component
    public void showListView(ActionEvent actionEvent){
        if (getViewMode().equals(CARD_VIEW))
            setViewMode(LIST_VIEW);
    }//showListView

/*
    public void toggleViewMode(ActionEvent actionEvent){
        if (getViewMode().equals(CARD_VIEW))
            setViewMode(LIST_VIEW);
        else
            setViewMode(CARD_VIEW);
    }//toggleViewMode
*/
}//CardViewListViewDC
