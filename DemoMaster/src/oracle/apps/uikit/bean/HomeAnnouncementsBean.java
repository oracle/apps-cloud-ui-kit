package oracle.apps.uikit.bean;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import oracle.adf.view.rich.component.rich.input.RichInputText;
import oracle.adf.view.rich.component.rich.input.RichSelectOneChoice;
import oracle.adf.view.rich.component.rich.layout.RichDeck;
import oracle.adf.view.rich.component.rich.layout.RichPanelGroupLayout;
import oracle.adf.view.rich.component.rich.nav.RichCommandButton;
import oracle.adf.view.rich.component.rich.nav.RichCommandImageLink;
import org.apache.myfaces.trinidad.context.RequestContext;
import org.apache.myfaces.trinidad.render.ExtendedRenderKitService;
import org.apache.myfaces.trinidad.util.Service;

public class HomeAnnouncementsBean {
    private RichDeck _feedsDeck;
    private RichInputText _emptyTextBox;
    private RichInputText _wallMessage;
    private RichInputText _successWallMsg;
    private RichPanelGroupLayout _successMsgPanel;
    private RichPanelGroupLayout _successMsgWrapper;
    private RichCommandImageLink _successIcon;
    private RichPanelGroupLayout _buttonPanel;
    private RichSelectOneChoice _convChoiceList;
    private RichCommandButton _postButton;

    public HomeAnnouncementsBean(){
        super();
    }//constructor

    public void postOnWall(ActionEvent actionEvent) {
        getSuccessIcon().setVisible(true);
        getConvChoiceList().setVisible(false);
        getPostButton().setVisible(false);
        getWallMessage().setVisible(false);
        getSuccessWallMsg().setVisible(true);
        getSuccessWallMsg().setValue(getWallMessage().getValue());
        getSuccessWallMsg().setReadOnly(true);
        getSuccessMsgWrapper().setVisible(true);
        RequestContext.getCurrentInstance().addPartialTarget(getSuccessMsgPanel());
        FacesContext fctx = FacesContext.getCurrentInstance();
        ExtendedRenderKitService erks = Service.getRenderKitService(fctx, ExtendedRenderKitService.class);
        String js = "bannerHomePageFuse.setSuccessWallMsgTextFocus();";
        erks.addScript(fctx, js);
    }//postOnWall

    public void flipDeck(ActionEvent actionEvent) {
        //Required deck child already set in SessionState.bannerPanelView
        //Partial Repaint
        RequestContext.getCurrentInstance().addPartialTarget(getFeedsDeck());
    }//flipDeck

    //Accessors
    public void setFeedsDeck(RichDeck d) { _feedsDeck = d; }
    public RichDeck getFeedsDeck() { return _feedsDeck; }
    public void setEmptyTextBox(RichInputText t) { _emptyTextBox = t; }
    public RichInputText getEmptyTextBox() { return _emptyTextBox; }
    public void setWallMessage(RichInputText t) { _wallMessage = t; }
    public RichInputText getWallMessage() { return _wallMessage; }
    public void setSuccessWallMsg(RichInputText t) { _successWallMsg = t; }
    public RichInputText getSuccessWallMsg() { return _successWallMsg; }
    public void setSuccessMsgPanel(RichPanelGroupLayout l) { _successMsgPanel = l; }
    public RichPanelGroupLayout getSuccessMsgPanel() { return _successMsgPanel; }
    public void setSuccessMsgWrapper(RichPanelGroupLayout l) { _successMsgWrapper = l; }
    public RichPanelGroupLayout getSuccessMsgWrapper() { return _successMsgWrapper; }
    public void setSuccessIcon(RichCommandImageLink l) { _successIcon = l; }
    public RichCommandImageLink getSuccessIcon() { return _successIcon; }
    public void setButtonPanel(RichPanelGroupLayout l) { _buttonPanel = l; }
    public RichPanelGroupLayout getButtonPanel() { return _buttonPanel; }
    public void setConvChoiceList(RichSelectOneChoice c) { _convChoiceList = c; }
    public RichSelectOneChoice getConvChoiceList() { return _convChoiceList; }
    public void setPostButton(RichCommandButton b) { _postButton = b; }
    public RichCommandButton getPostButton() { return _postButton; }

}//HomeAnnouncementsBean
