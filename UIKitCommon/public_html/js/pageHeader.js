/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
var simplePanelscroll = simplePanelscroll || 
{
};
simplePanelscroll = 
{
  facetContainer : null, parentContainer : null, inlineHeader : true, threshold : null
}

simplePanelscroll.initSimplePanelscroll = function (facetContainer, parentContainer)
{
 simplePanelscroll.facetContainer = AdfPage.PAGE.findComponent(facetContainer);
  simplePanelscroll.parentContainer = AdfPage.PAGE.findComponent(parentContainer);
 AdfAgent.AGENT.addBubbleEventListener(document, "scroll", simplePanelscroll.scrollHandler);
}

simplePanelscroll.scrollHandler = function ()
{
 var rect = AdfRichUIPeer.getDomElementForComponent(simplePanelscroll.parentContainer).getBoundingClientRect();
  var ySimplePanel = 0;
  var wSimplePanel = 0;
  ySimplePanel = rect.top;
  wSimplePanel = rect.width;
  var facetContainerDOM = AdfRichUIPeer.getDomElementForComponent(simplePanelscroll.facetContainer);

  if (ySimplePanel < 0 && simplePanelscroll.inlineHeader)
  {
    simplePanelscroll.inlineHeader = false;
    var spPanelWidth = wSimplePanel + 20;
    facetContainerDOM.style.width = spPanelWidth + "px";
    facetContainerDOM.classList.add('sticky-header');
  }
  else if (ySimplePanel >= 0 && simplePanelscroll.inlineHeader == false)
  {
    simplePanelscroll.inlineHeader = true;
    facetContainerDOM.style.width = "";
    facetContainerDOM.classList.remove('sticky-header');
  }
}

AdfAgent.AGENT.addBubbleEventListener(AdfPage.PAGE.getDomWindow(), "resize", function ()
{
  var rect = AdfRichUIPeer.getDomElementForComponent(simplePanelscroll.parentContainer).getBoundingClientRect();
  var ySimplePanel = rect.top;
  var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (ySimplePanel < 0 && simplePanelscroll.inlineHeader == false)
  {
    switch (simplePanelscroll.threshold)
    {
      case 1:
        if (!(browserWidth < 1280))
          assignThreshold();
        break;
      case 2:
        if (!(browserWidth >= 1280 && browserWidth < 1440))
          assignThreshold();
        break;
      case 3:
        if (!(browserWidth >= 1440 && browserWidth < 1600))
          assignThreshold();
        break;
      case 4:
        if (!(browserWidth >= 1600 && browserWidth < 1920))
          assignThreshold();
        break;
      case 5:
        if (!(browserWidth >= 1920 && browserWidth < 2560))
          assignThreshold();
        break;
      case 6:
        if (!(browserWidth >= 2560 && browserWidth < 3200))
          assignThreshold();
        break;
      case 7:
        if (!(browserWidth >= 3200 && browserWidth < 3800))
          assignThreshold();
        break;
      case 8:
        if (!(browserWidth >= 3800))
          assignThreshold();
        break;
      default :
        assignThreshold();
    }
  }
});

function assignThreshold()
{
  var rect = AdfRichUIPeer.getDomElementForComponent(simplePanelscroll.parentContainer).getBoundingClientRect();
  var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (browserWidth < 1280)
    simplePanelscroll.threshold = 1;
  else if (browserWidth >= 1280 && browserWidth < 1440)
    simplePanelscroll.threshold = 2;
  else if (browserWidth >= 1440 && browserWidth < 1600)
    simplePanelscroll.threshold = 3;
  else if (browserWidth >= 1600 && browserWidth < 1920)
    simplePanelscroll.threshold = 4;
  else if (browserWidth >= 1920 && browserWidth < 2560)
    simplePanelscroll.threshold = 5;
  else if (browserWidth >= 2560 && browserWidth <= 3200)
    simplePanelscroll.threshold = 6;
  else if (browserWidth >= 3200 && browserWidth <= 3800)
    simplePanelscroll.threshold = 7;
  else if (browserWidth >= 3800)
    simplePanelscroll.threshold = 8;

  var facetContainerDOM = AdfRichUIPeer.getDomElementForComponent(simplePanelscroll.facetContainer);
  var spWidth = rect.width + 20;
  facetContainerDOM.style.width = spWidth + "px";
}