/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/

/**
 * Global Search Function Object.
 */
function GlobalSearchObj() {}

/**
 * Determines the dimensions of the client window and sends them up to
 * the server via the GlobalSearchCustomEvent
 * @param event event triggering this.
 */
GlobalSearchObj.prototype.sendClientSize = function(event) 
{
  var source = event.getSource();
  var agentIsIE = AdfAgent.AGENT.getPlatform() == AdfAgent.IE_PLATFORM;
  var wid = agentIsIE ? document.body.clientWidth : window.innerWidth;
  var hei = agentIsIE ? document.body.clientHeight : window.innerHeight;
  // Send window width and height and that we are from a global context.
  var clickedComp = event.getSource();
  var rootComp = GlobalSearch._getRootComponent(clickedComp);
  var inputText = rootComp.findComponent("_GSFsf");
  inputText.resetValue();
  AdfCustomEvent.queue(source, "GlobalSearchCustomEvent", 
  {
    width : wid, height : hei
  }, true);
};

/**
 * A Tile has been clicked, trigger selection of command link.  This method is 
 * used to allow click on the panel to force click of the command link in the 
 * panel (which may be quite small and hard to press on a tablet device).
 * @param event event triggering this method.
 */
GlobalSearchObj.prototype.tileClicked = function(event)
{
  event.cancel();
  var component = event.getSource();
  var link = component.findComponent("tileCL");
  if (link)
  {
    var ae = new AdfActionEvent(link);
    ae.setPartial(true);
    ae.queue();
  }
};

/**
 * Callback for the Global Search Tablet popup opening.  This method resets the 
 * searchsuggest panels so that the popup shows correctly when it is re-shown
 * @param event open event.
 */
GlobalSearchObj.prototype.tabletSummaryPopupOpened = function(event) 
{
  var source = event.getSource();
  var inlineSuggestionComponent = source.findComponent("gstsasi");
  if (inlineSuggestionComponent && inlineSuggestionComponent.setVisible)
  {
    inlineSuggestionComponent.setVisible(false);
  }
  var inlineReplaceComponent = source.findComponent("gstsscg");
  if (inlineReplaceComponent && inlineReplaceComponent.setVisible)
  {
    inlineReplaceComponent.setVisible(true);
  }
};


/**
 * Callback on close of the Search Result Popup to stop any background result
 * polling.
 * @param event  close event.
 */
GlobalSearchObj.prototype.resultsPopupClosed = function(event)
{
  var source = event.getSource();
  var poll = source.findComponent("gssrdc:searchPoll");
  if (poll)
  {
    // Hard shutdown of the poll.
    poll.setInterval(-1);
  }
};

/**
 * For the component identified by the passed clientId, set the collapsed state.
 * @param clientId of component to setCollapsed().
 * @param collapse collapse state to set.
 */
GlobalSearchObj.prototype.toggleRefinePane = function(clientId, collapse)
{
  this.toggleRefinePane(clientId, collapse, 250);
}

/**
 * For the component identified by the passed clientId, set the collapsed state.
 * @param clientId of component to setCollapsed().
 * @param collapse collapse state to set.
 * @param defaultSplitterPosition the default splitter position.
 */
GlobalSearchObj.prototype.toggleRefinePane = function(clientId, collapse, defaultSplitterPosition)
{
  var component = AdfPage.PAGE.findComponent(clientId);
  if (component && component.setCollapsed)
  {
    var pos = component.getSplitterPosition();
    if (collapse == false && pos < 20)
    {
      // make sure we never expand to a really small state, such as when the 
      // user has dragged the splitter to 0 size, then collapsed with the button.
      // When they expand again with the button they will not see it expand (even
      // though the state is changed to expanded), and they would have to use the
      // dragger to expand which is really hard to do.
      // 250 is jsff default.
      component.setSplitterPosition(defaultSplitterPosition);
    }
    component.setCollapsed(collapse);
  }
};


/**
 * A result item is clicked.
 * @param event button click event.
 */
GlobalSearchObj.prototype.resultClicked = function(event)
{
  // if we are in a UIShell environment, poke environment for open transactions.
  if (queueGlobalActionEventOnMainArea)
  {
    queueGlobalActionEventOnMainArea(event);
  }
};

/**
 * Clear the value from the search field.
 * @param clinetId client id of field to clear.
 */
GlobalSearchObj.prototype.clearSearchFieldValue = function(clientId)
{
  var component = AdfPage.PAGE.findComponent(clientId);
  if (component && component.setValue)
  {
    component.setValue("");
  }
};

/**
 * Clear the value from the search field.
 * @param event event.
 */
GlobalSearchObj.prototype.closeSuggestPopup = function(event)
{
  var component = event.getSource();
  var popup = component.findComponent('_GSSugPopup');
  if (popup != undefined && popup.isPopupVisible())
  {
    popup.hide();
  }
};

/**
 * Execute the 'search for xyz' functionality from the link at the bottom of the
 * custom suggest popup.
 * @param event event causing this to fire.
 */
GlobalSearchObj.prototype.executeSearchForLink = function(event)
{
  GlobalSearch.closeSuggestPopup(event);
  var component = event.getSource();
  var searchButton = component.findComponent('_GSFsb');
  if (AdfPage.PAGE.isScreenReaderMode())
  {
    searchButton = component.findComponent('gstssf');
  }
  AdfActionEvent.queue(searchButton, searchButton.getPartialSubmit());
}


/**
 * Set the visibility of the component identified by clientId to visible.
 * @param clinetId client id of component.
 * @param visible true/false visibility.
 */
GlobalSearchObj.prototype.setVisible = function(clientId, visible)
{
  var component = AdfPage.PAGE.findComponent(clientId);
  if (component && component.setVisible)
  {
    component.setVisible(visible);
  }
};

/**
 * Set focus to the relevant component.
 * @param client Id of component to focus.  This component must implement the 
 * focus() methd.
 */
GlobalSearchObj.prototype.focusComponentByClientId = function(clientId)
{
  var comp = AdfPage.PAGE.findComponent(clientId);
  if (comp && comp.focus)
  {
    comp.focus();
  }
}

/**
 * Callback for the Global Search Field popup closing.  This method resets the 
 * searchsuggest panels so that the popup shows correctly when it is re-shown
 * @param event open event.
 */
GlobalSearchObj.prototype.searchFieldPopupClosed = function(event) 
{
  var source = event.getSource();
  var inlineSuggestionComponent = source.findComponent("GSSugPanel");
  if (inlineSuggestionComponent && inlineSuggestionComponent.setVisible)
  {
    inlineSuggestionComponent.setVisible(true);
  }
  var inlineReplaceComponent = source.findComponent("GSSugPersonalize");
  if (inlineReplaceComponent && inlineReplaceComponent.setVisible)
  {
    inlineReplaceComponent.setVisible(false);
  }
  
  var rootComp = GlobalSearch._getRootComponent(source);
  var inputText = rootComp.findComponent("_GSFsf");
  var inputTextSrcId = inputText.getAbsoluteId();
  var timerId = page.scheduleTimer(GlobalSearch, 
                                   GlobalSearch._suggestionsClosedCallback, 
                                   inputTextSrcId, 500);
  
  //FndSearchSuggestBehavior._log("GlobalSearch.searchFieldPopupClosed setting GlobalSearchSuggestionsClosedTimer_" + inputTextSrcId + " = " + timerId);
  page.setPageProperty("GlobalSearchSuggestionsClosedTimer_" + inputTextSrcId, timerId);
}

/**
 * A callback for the close of the suggestions popup.  If this code is allowed to 
 * run it will reset the style of the search field; it may be cancelled if the
 * user clicks back into the search field.
 */
GlobalSearchObj.prototype._suggestionsClosedCallback = function(inputTextCompId) 
{
  //FndSearchSuggestBehavior._log("GlobalSearch._suggestionsClosedCallback callback called.");
  var page = AdfPage.PAGE;
  var inputText = page.findComponentByAbsoluteId(inputTextCompId);
  var inputTextSrcId = inputText.getAbsoluteId();

  var lastSearchFieldFocus = page.getPageProperty("GlobalSearchFieldLastFocus_" + inputTextSrcId);
  if (lastSearchFieldFocus)
  {
    var now = new Date().getTime();
    var durn = now - lastSearchFieldFocus;
    //FndSearchSuggestBehavior._log("GlobalSearch._suggestionsClosedCallback duration = " + durn);
    if (durn > 600)
    {
      //FndSearchSuggestBehavior._log("GlobalSearch._suggestionsClosedCallback callback called, resetting focus.");
      GlobalSearch._setSearchFieldStyles(inputText, false);
    }
  }
  
  page.setPageProperty("GlobalSearchSuggestionsClosedTimer_" + inputTextSrcId, null);
}

/**
 * Record a click in the search area somewhere.
 * @param event event.
 */
GlobalSearchObj.prototype.searchAreaClick = function(event) 
{
  var clickedComp = event.getSource();
  var rootComp = GlobalSearch._getRootComponent(clickedComp);
  var inputText = rootComp.findComponent("_GSFsf");
 // FndSearchSuggestBehavior.advertiseClickOrigin(inputText, clickedComp);
}

/**
 * Search up the component tree for the root most component in GlobalSearchField.jsff
 * @param c some component in this component tree.
 * @return root panelGroupLayout component, undefined if not in the sub-tree.
 */
GlobalSearchObj.prototype._getRootComponent = function(c) 
{
  // Search up for the master Panel.
  var masterPanel;
  while (c)
  {
    if (c instanceof AdfRichPanelGroupLayout) 
    {
      var id = c.getId();
      if (id == "_GSFPpgl")
      {
        masterPanel = c;
        break;
      }
    }
    c = c.getParent();
  }
  
  return masterPanel;
}

/**
 * The Global Header Search Field (or search button) has focus.
 * @param event event.
 */
GlobalSearchObj.prototype.searchFieldFocus = function(event) 
{
  //FndSearchSuggestBehavior._log("GlobalSearch.searchFieldFocus called, setting focus on Search field and panel.");
  var page = AdfPage.PAGE;
  var clickedComp = event.getSource();
  var rootComp = GlobalSearch._getRootComponent(clickedComp);
  var inputText = rootComp.findComponent("_GSFsf");
  var inputTextSrcId = inputText.getAbsoluteId();

  GlobalSearch._setSearchFieldStyles(inputText, true);  
 // FndSearchSuggestBehavior.advertiseClickOrigin(inputText, null);
  
  // Close down any existing blur callback timers.  This it the tab through the
  // search field to search button use case.
  GlobalSearch._cancelTimer("GlobalSearchTimer_" + inputTextSrcId);
  
  var now = new Date().getTime();
  page.setPageProperty("GlobalSearchFieldLastFocus_" + inputTextSrcId, now);
}

/**
 * The Search field was clicked.  This may be different to focus as the focus may 
 * never be lost from the search field unless you click into the suggest popup 
 * or elsewhere on the page.  
 * If however you just keep clicking the search field, the suggest popup will close and 
 * re-open triggering the callback which needs to know the Search field has focus and
 * not to clear the styles.
 * @param event click event.
 */
GlobalSearchObj.prototype.searchFieldClick = function(event) 
{
  var page = AdfPage.PAGE;
  var clickedComp = event.getSource();
  var rootComp = GlobalSearch._getRootComponent(clickedComp);
  var inputText = rootComp.findComponent("_GSFsf");
  var inputTextSrcId = inputText.getAbsoluteId();
  
  var now = new Date().getTime();
  page.setPageProperty("GlobalSearchFieldLastFocus_" + inputTextSrcId, now);
}

/**
 * Cancel the timer stored under page property prop.
 * @param prop property to look for timerId under.
 */
GlobalSearchObj.prototype._cancelTimer = function(prop) 
{
  var page = AdfPage.PAGE;
  
  var timerId = page.getPageProperty(prop);
  //FndSearchSuggestBehavior._log("GlobalSearch.searchFieldFocus _cancelTimer timer: " + prop + " = " + timerId);
  if (timerId)
  {
    page.cancelTimer(timerId);
    page.setPageProperty(prop, null);
  }
}

/**
 * A callback for blur in the search field.  This called from a timer and we
 * examine global variables to determine whether the "focus" is still within the
 * search UI (the field or popup somewhere).  If it is  not, we reset the L&F of 
 * the Search field.
 * @param inputTextCompId component id of Search Field.
 */
GlobalSearchObj.prototype._checkNewFocus = function(inputTextCompId) 
{
  // //FndSearchSuggestBehavior._log("GlobalSearch._checkNewFocus callback with inputTextCompId: " + inputTextCompId);
  var page = AdfPage.PAGE;
  var inputText = page.findComponentByAbsoluteId(inputTextCompId);

  var clickedInPopup = FndSearchSuggestBehavior.getClickOrigin(inputText);
  //FndSearchSuggestBehavior._log("GlobalSearch._checkNewFocus callback with page property: " + clickedInPopup);
  if (!clickedInPopup)
  {
    //FndSearchSuggestBehavior._log("GlobalSearch._checkNewFocus callback property not set, resetting focus.");
    GlobalSearch._setSearchFieldStyles(inputText, false);
  }
 // FndSearchSuggestBehavior.advertiseClickOrigin(inputText, null);
  
  var inputTextSrcId = inputText.getAbsoluteId();
  page.setPageProperty("GlobalSearchTimer_" + inputTextSrcId, null);
}

/**
 * The Global header search field focus lost (blur) listener.
 * @param inputText The Search field.
 * @param focused true to set the focused styles, false foe the unfocused styles.
 */
GlobalSearchObj.prototype._setSearchFieldStyles = function(inputText, focused) 
{
  var laf = AdfPage.PAGE.getLookAndFeel();
  var panelGroupLayout = inputText.getParent();
  var searchIcon = panelGroupLayout.findComponent("_GSFsb");
  var inputTextClientId = inputText.getClientId();
  var inputTextContentId = AdfRichUIPeer.CreateSubId(inputTextClientId, "content");
  var inputTextDomNode = AdfAgent.AGENT.getElementById(inputTextContentId);

  if (focused)
  {
    var containerFocusStyle = laf.getStyleClass("fndGlobalSearchContainerFocused");    
    panelGroupLayout.setStyleClass(containerFocusStyle);
    // Need to set the style on the dom directly.  cascading content styles will not work
    // and using ADF JS APIs will flush the change to the server causing required field validation.
    // Cannot work out how to get this value from css.
    inputTextDomNode.setAttribute("style", "color: #333333; width: 200px;");
    
    var iconFocus = searchIcon.getProperty("iconFocus");
    GlobalSearch._setIcon(searchIcon, iconFocus);
  }
  else
  {
    var containerStyle = laf.getStyleClass("fndGlobalSearchContainer"); 
    panelGroupLayout.setStyleClass(containerStyle);
    inputTextDomNode.removeAttribute("style");
    
    var iconBlur = searchIcon.getProperty("iconBlur");
    GlobalSearch._setIcon(searchIcon, iconBlur);
  }
}

/**
 * Set the icon newIcon on component which is assumed to be a commandImageLink.
 * The icon will be shown immediately.
 * @param component commandImageLink component.  Required.
 * @param newIcon new icon value.  Required.
 */
GlobalSearchObj.prototype._setIcon = function(component, newIcon) 
{
  if (newIcon.charAt(0) === '/')
  {
    // Make webapp relative.
    newIcon = newIcon.substr(1);
  }
  // Ensure component attribute is set.  Do not use public APIs as these will 
  // force a form submit to the server to sync the attribute.
  component._props["icon"] = newIcon;
  // Set it immediately into the DOM.
  var clientId = component.getClientId();
  var iconId = AdfRichUIPeer.CreateSubId(clientId, "icon");
  var el = AdfAgent.AGENT.getElementById(iconId);
  el.setAttribute("src", newIcon);
}

/**
 * The Global header search field focus lost (blur) listener.
 * @param event event.
 */
GlobalSearchObj.prototype.searchFieldLostFocus = function(event) 
{
  //FndSearchSuggestBehavior._log("GlobalSearch.searchFieldLostFocus scheduling timer.");
  var page = AdfPage.PAGE;
  var clickedComp = event.getSource();
  var rootComp = GlobalSearch._getRootComponent(clickedComp);
  var inputText = rootComp.findComponent("_GSFsf");

 // FndSearchSuggestBehavior.advertiseClickOrigin(inputText, null);
  GlobalSearch._setSearchFieldStyles(inputText, false);
  var inputTextSrcId = inputText.getAbsoluteId();
  var existingTimerId = page.getPageProperty("GlobalSearchTimer_" + inputTextSrcId);
  if (existingTimerId)
  {
    page.rescheduleTimer(existingTimerId, 500);
  }
  else
  {
    var timerId = page.scheduleTimer(GlobalSearch, 
                                     GlobalSearch._checkNewFocus, 
                                     inputTextSrcId, 500);
    
    page.setPageProperty("GlobalSearchTimer_" + inputTextSrcId, timerId);
  }
}

/**
 * Send custom event for click of personalize of suggestions.
 * @param event click event.
 */
GlobalSearchObj.prototype.personalizeSuggestionsClicked = function(event) 
{  
  GlobalSearch.searchAreaClick(event);
  var nativeEvent = event.getNativeEvent();  
    
  // Can use shiftKey, ctrlKey, altKey  
  AdfCustomEvent.queue(event.getSource(), 
                       "GlobalSearchPersonalizeSuggestionsClicked",   
                       { controlPressed : nativeEvent.ctrlKey},
                       true);   
  event.cancel();  
}

/**
 * Toggle the visibility of the clear link image.
 * @param event event.
 */
GlobalSearchObj.prototype.toggleListSearchClearSearchLink = function(event) 
{  
  var searchField = event.getSource();
  
  var clearLink = searchField.findComponent("_LSCL");
  if (searchField.getSubmittedValue() != "" ) 
  {
    clearLink.setVisible(true);
  }
  else
  {
    clearLink.setVisible(false);
  }
  // event.cancel();  
}

/**
 * Click the clear search field image.
 * @param event event.
 */
GlobalSearchObj.prototype.clickListSearchClearSearchLink = function(event) 
{
  var clearLink = event.getSource();
  var searchField = clearLink.findComponent("_LSSF");
  var searchFieldClientId = searchField.getClientId();
  FndSearchSuggestBehavior.initializeKeywordMode(searchFieldClientId, true, "", "");
  
  clearLink.setVisible(false);
  searchField.resetValue();

  // Bring up autosuggest.  
  var behavior = FndSearchSuggestBehavior._findBehaviorFromComponent(searchField);
  if (behavior)
  {
    behavior._processClick(searchField);
  }
  
//  event.cancel();
}

function triggerOnLoad(event){
AdfCustomEvent.queue(event.getSource(),"onloadEvent",{},false);
return true;
}

/**
 * Global instantiation of Object.
 */
GlobalSearch = new GlobalSearchObj();