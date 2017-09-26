/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
var bannerHomePageFuse = bannerHomePageFuse || 
{
};

//document.onclick=bannerHomePageFuse.docClick;
bannerHomePageFuse.collapse = true;
bannerHomePageFuse.expand = false;
bannerHomePageFuse.inputText = null;
bannerHomePageFuse.inputValue = null;

bannerHomePageFuse.callShowWallPanel = function (clickEvent) {
 
  bannerHomePageFuse.expand = true;
  bannerHomePageFuse.inputText = clickEvent.getSource();
  var eventSource = clickEvent.getSource();
   var region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {
    eventSource.setProperty('visible', false);
    eventSource.setProperty('value', null);
    var wallmsg = region.findComponent("it2");
    wallmsg.setProperty('visible', true);
    wallmsg.setProperty('rows', 4);
    wallmsg.setProperty('value', null);
    bannerHomePageFuse.inputValue = null;
    wallmsg.focus();
    var sonechoice = region.findComponent("soc1");
    var postb = region.findComponent("cb1");
    var disabledb = region.findComponent("cb3");
    var spacer = region.findComponent("s9");
    disabledb.setProperty('visible', true);
    postb.setProperty('visible', false);
    sonechoice.setProperty('visible', true);
    sonechoice.setProperty('disabled', true);
    var selectedVal = sonechoice.getProperty('value');
    if (selectedVal == null) {
      sonechoice.setProperty('value', 0);
    }
    spacer.setProperty('visible', true);
    var sicon = region.findComponent("cil3");
    var smsg = region.findComponent("ot34");
    var sconv = region.findComponent("ot10");
    if (sicon)
      sicon.setProperty('visible', false);
    if (smsg)
      smsg.setProperty('visible', false);
    if (sconv)
      sconv.setProperty('visible', false);
  }
}

bannerHomePageFuse.callHideWallPanel = function (clickEvent) {
  var eventSource = clickEvent.getSource();
    var region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {
    var sicon = region.findComponent("cil3");
    var smsg = region.findComponent("ot34");
    var sconv = region.findComponent("ot10");
    if ((sicon && sicon.getProperty('visible')) || (smsg && smsg.getProperty('visible')) || (sconv && sconv.getProperty('visible')) || bannerHomePageFuse.inputValue == null || bannerHomePageFuse.inputValue == "") {
      eventSource.setProperty('visible', false);
      var emptymsg = region.findComponent("it5");
      emptymsg.setProperty('visible', true);
      var sonechoice = region.findComponent("soc1");
      var postb = region.findComponent("cb1");
      sonechoice.setProperty('visible', false)
      postb.setProperty('visible', false);
      var disabledb = region.findComponent("cb3");
      disabledb.setProperty('visible', false);
      sicon.setProperty('visible', false);
      var spacer = region.findComponent("s9");
      spacer.setProperty('visible', false);
      if (smsg)
        smsg.setProperty('visible', false);
      if (sconv) {
        var vis = sconv.getProperty('visible');
        if (vis) {
          AdfPage.PAGE.scheduleTimer(this, this.bannerHomePageFuse.hideConversation, sconv.getClientId(), 800);
        }
      }
    }
  }
}

bannerHomePageFuse.hideConversation = function (a) {
    var region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {

    var sconv = region.findComponent("ot10");
    sconv.setProperty('visible', false);
  }
}

bannerHomePageFuse.activateButtons = function (clickEvent) {
  var eventSource = clickEvent.getSource();
  //      AdfCustomEvent.queue(eventSource, "activateButtons", {payload:eventSource.getSubmittedValue()},true);
  var value = "" + eventSource.getSubmittedValue();
  bannerHomePageFuse.inputValue = value;
  var region = null;
  region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {
    var sicon = region.findComponent("cil3");
    var smsg = region.findComponent("ot34");
    var sconv = region.findComponent("ot10");
    if ((sicon && sicon.getProperty('visible')) || (smsg && smsg.getProperty('visible')) || (sconv && sconv.getProperty('visible'))) {
    }
    else {
      var sonechoice = region.findComponent("soc1");
      var postb = region.findComponent("cb1");
      var disabledb = region.findComponent("cb3");
      disabledb.setProperty('visible', false);
      postb.setProperty('visible', true);
      sonechoice.setProperty('disabled', false);
      if (value == "") {
        sonechoice.setProperty('disabled', true);
        disabledb.setProperty('visible', true);
        postb.setProperty('visible', false);
      }
    }
  }
}

bannerHomePageFuse.focusWallPanel = function (clickEvent) {
    var region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {
    var wallmsg = region.findComponent("it2");
    wallmsg.focus();
  }
}

/**
 * Client side event handler to queue the event on hidden button outside
 * region to do server side redirect. Bug 20703415
 */
bannerHomePageFuse.queueEventOutsideRegion = function (event) {

  var clickedIcon = event.getSource();

  // If group card don't queue the event. let the actionListener take care of it.
  var groupCard = clickedIcon.getProperty("groupCard");
  if (groupCard == "yes")
    return;

  // Not a group card get the itemNodeId clicked and queue event on hidden button
  // to make a re-direct on server side.
  var itemNodeId = clickedIcon.getProperty("itemNodeId");
  event.cancel();
  var hiddenButton = AdfPage.PAGE.findComponentByAbsoluteId("pt1:hidden");
  var adfCustomEvent = new AdfCustomEvent(hiddenButton, "iconClicked", 
  {
    itemNodeId : itemNodeId
  },
false);
  adfCustomEvent.queue(false);
}

bannerHomePageFuse.callBBBShowWallPanel = function (clickEvent) {
  bannerHomePageFuse.expand = true;
  bannerHomePageFuse.inputText = clickEvent.getSource();
  var eventSource = clickEvent.getSource();
  var region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");
  if (region != null) {
    eventSource.setProperty('visible', false);
    eventSource.setProperty('value', null);
    var wallmsg = region.findComponent("it2");
    wallmsg.setProperty('visible', true);
    wallmsg.setProperty('rows', 4);
    wallmsg.setProperty('value', null);
    bannerHomePageFuse.inputValue = null;
    wallmsg.focus();

    var pglSpacerBanner17 = region.findComponent("pglSpacerBanner17");
    if (pglSpacerBanner17) {
      pglSpacerBanner17.setProperty('visible', false);
    }

    var sucWallmsg = region.findComponent("it3");
    if (sucWallmsg) {
      sucWallmsg.setProperty('visible', false);
    }

    var osnDeck = region.findComponent("psl11");
    osnDeck.setProperty('styleClass', osnDeck.getProperty('styleClass').indexOf('expandedOSN') > 0 ? osnDeck.getProperty('styleClass') : osnDeck.getProperty('styleClass') + ' expandedOSN');
    var sonechoice = region.findComponent("soc1");
    var postb = region.findComponent("cb1");
    var disabledb = region.findComponent("cb3");
    disabledb.setProperty('visible', true);
    postb.setProperty('visible', false);
    sonechoice.setProperty('visible', true);
    sonechoice.setProperty('disabled', true);
    var selectedVal = sonechoice.getProperty('value');
    if (selectedVal == null) {
      sonechoice.setProperty('value', 0);
    }
    var sicon = region.findComponent("cil3");
    if (sicon)
      sicon.setProperty('visible', false);

    var siconpgl = region.findComponent("pgl39");

    if (sicon) {
      siconpgl.setProperty('visible', false);
    }

    var sonechoicepgl = region.findComponent("pgl16");

    if (sonechoice) {
      sonechoicepgl.setProperty('visible', true);
    }
  }
}

bannerHomePageFuse.callBBBHideWallPanel = function (clickEvent) {
  var region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {
    var sicon = region.findComponent("cil3");
    if (bannerHomePageFuse.inputValue == null || bannerHomePageFuse.inputValue == "") {
      bannerHomePageFuse.hideWallPanelUtilMethod();
    }
    else if (sicon) {
      var vis = sicon.getProperty('visible');
      if (vis) {
        AdfPage.PAGE.scheduleTimer(this, this.bannerHomePageFuse.hideBBBConversation, sicon.getClientId(), 800);
      }
    }

  }
}

bannerHomePageFuse.hideBBBConversation = function (a) {
//  var fusehomeregion = AdfPage.PAGE.findComponentByAbsoluteId("pt1:atkfr1");
//  fusehomeregion = fusehomeregion.findComponent("grid");
    var region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {

    var sicon = region.findComponent("cil3");
    sicon.setProperty('visible', false);
    bannerHomePageFuse.hideWallPanelUtilMethod();

  }
}

bannerHomePageFuse.hideWallPanelUtilMethod = function () {
//  var fusehomeregion = AdfPage.PAGE.findComponentByAbsoluteId("pt1:atkfr1");
//  fusehomeregion = fusehomeregion.findComponent("grid");
  var region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {
    var wallmsg = region.findComponent("it2");
    wallmsg.setProperty('visible', false);

    var pglSpacerBanner17 = region.findComponent("pglSpacerBanner17");
    if (pglSpacerBanner17) {
      pglSpacerBanner17.setProperty('visible', true);
    }

    var emptymsg = region.findComponent("it5");
    emptymsg.setProperty('visible', true);
    var sonechoice = region.findComponent("soc1");

    var siconpgl = region.findComponent("pgl39");
    var sonechoicepgl = region.findComponent("pgl16");

    if (siconpgl) {
      siconpgl.setProperty('visible', false);
    }

    if (sonechoicepgl) {
      sonechoicepgl.setProperty('visible', false);
    }

    var postb = region.findComponent("cb1");
    sonechoice.setProperty('visible', false);
    postb.setProperty('visible', false);
    var disabledb = region.findComponent("cb3");
    disabledb.setProperty('visible', false);

    var osnDeck = region.findComponent("psl11");
    osnDeck.setProperty('styleClass', osnDeck.getProperty('styleClass').replace('expandedOSN', ''));
    var sucWallmsg = region.findComponent("it3");
    if (sucWallmsg) {
      sucWallmsg.setProperty('visible', false);
    }

  }
}

bannerHomePageFuse.activateBBBButtons = function (clickEvent) {
  var eventSource = clickEvent.getSource();
  var value = "" + eventSource.getSubmittedValue();
  bannerHomePageFuse.inputValue = value;
  var region = null;
   region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {
    var sicon = region.findComponent("cil3");
    if ((sicon && sicon.getProperty('visible'))) {
    }
    else {
      var sonechoice = region.findComponent("soc1");
      var postb = region.findComponent("cb1");
      var disabledb = region.findComponent("cb3");
      disabledb.setProperty('visible', false);
      postb.setProperty('visible', true);
      sonechoice.setProperty('disabled', false);
      if (value == "") {
        sonechoice.setProperty('disabled', true);
        disabledb.setProperty('visible', true);
        postb.setProperty('visible', false);
      }
    }
  }
}

bannerHomePageFuse.setSuccessWallMsgTextFocus = function () {
//  var fusehomeregion = AdfPage.PAGE.findComponentByAbsoluteId("pt1:atkfr1");
//  fusehomeregion = fusehomeregion.findComponent("grid");
  var region = null;
  region = AdfPage.PAGE.findComponentByAbsoluteId("pt1:r4:0:annreg");

  if (region != null) {
    var sucWallmsg = region.findComponent("it3");
    if (sucWallmsg) {
      sucWallmsg.setProperty('visible', true);
      sucWallMsg.focus();
    }
  }
}