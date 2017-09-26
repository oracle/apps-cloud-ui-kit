/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
var atkThemesUi = atkThemesUi || 
{
};
/**
 *  This Javascript API will be invoked if any of the attribute related to SVG image change from the appearance UI
 *  It will create a styleClass newly or it will update the content of the corresponding styleclass in the html as per the change of value of a component from UI,
 *  then it will add the styelclass to the svg preview icon to reflect the change in the component view on the fly
 */
var inputTextWidth;
var inputTextHeight;
var imageInput = new Image();
imageInput.addEventListener('load', function () {   
    logoHeight = this.naturalHeight.toString();
    logoWidth = this.naturalWidth.toString();
    inputTextWidth.setProperty("value", logoWidth);
    inputTextHeight.setProperty("value", logoHeight);
});

atkThemesUi.setInlineStyleForSvg = function (event) {

    var component = event.getSource();
    var invokingComponentId = component.getProperty("id");
    var style;
    var clientIdString = component.getClientId();// clientString = _FOpt1:_FOr1:0:_FOSrATK_HOMEPAGE_FUSE_SETTINGS:0:_FOTr0:0:pt1:socIsC
    clientIdString = clientIdString.substring(0, clientIdString.lastIndexOf(":") + 1);//clientString = _FOpt1:_FOr1:0:_FOSrATK_HOMEPAGE_FUSE_SETTINGS:0:_FOTr0:0:pt1:
    // commandImageLinkSvg = document.getElementById(clientIdString + "cilSvg1::icon");
    commandImageLinkSvg = document.getElementById(clientIdString + "svgPgl");

    iconSvg01 = commandImageLinkSvg.childNodes[0].childNodes[0];
    iconSvg02 = commandImageLinkSvg.childNodes[2].childNodes[0];
    iconSvg01ImageClassValue = iconSvg01;

    iconSvg01ClusterDotClassvalue = iconSvg01.childNodes[0].childNodes[0];
    iconSvg01Icon01Classvalue = iconSvg01.childNodes[1].childNodes[0];
    iconSvg01Icon02Classvalue = iconSvg01.childNodes[2].childNodes[0];
    iconSvg01Icon03Classvalue = iconSvg01.childNodes[3].childNodes[0];

    iconSvg02ImageClassValue = iconSvg02;

    iconSvg02ClusterDotClassvalue = iconSvg02.childNodes[0].childNodes[0];
    iconSvg02Icon01Classvalue = iconSvg02.childNodes[1].childNodes[0];
    iconSvg02Icon02Classvalue = iconSvg02.childNodes[2].childNodes[0];

    var value;

    var svgParent = component.getParent();
    if (invokingComponentId == "icclr") {
        //iconColor monochrome is selected in the UI
        if (document.getElementById("svg-icon-atkFA") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-icon-atkFA").innerHTML = ".svg-icon-atkFA { fill: " + component.getProperty("value").toString() + "; }";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-icon-atkFA';
            style.innerHTML = ".svg-icon-atkFA { fill: " + component.getProperty("value").toString() + "; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }

        iconSvg01Icon01Classvalue.className.baseVal = iconSvg01Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA1/g, "") + " svg-icon-atkFA";
        iconSvg01Icon02Classvalue.className.baseVal = iconSvg01Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA2/g, "") + " svg-icon-atkFA";
        iconSvg01Icon03Classvalue.className.baseVal = iconSvg01Icon03Classvalue.className.baseVal.replace(/svg-icon-atkFA3/g, "") + " svg-icon-atkFA";
        iconSvg02Icon01Classvalue.className.baseVal = iconSvg02Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA4/g, "") + " svg-icon-atkFA";
        iconSvg02Icon02Classvalue.className.baseVal = iconSvg02Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA5/g, "") + " svg-icon-atkFA";
    }
    else if (invokingComponentId == "icIndC") {
        // iconIndicator color is changed in the UI
        var indColor = component.getProperty("value").toString();
        var lastIndexOfComma = indColor.lastIndexOf(",");
        indColor = indColor.substring(0, lastIndexOfComma + 1);
        indColor = indColor + ".6)";
        if (document.getElementById("svg-cluster-atkFA") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-cluster-atkFA").innerHTML = ".svg-cluster-atkFA { fill: " + indColor + "; }";

        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-cluster-atkFA';
            style.innerHTML = ".svg-cluster-atkFA { fill: " + indColor + "; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }

        iconSvg01ClusterDotClassvalue.className.baseVal = iconSvg01ClusterDotClassvalue.className.baseVal.replace(/svg-cluster/g, "") + " svg-cluster-atkFA";
        iconSvg02ClusterDotClassvalue.className.baseVal = iconSvg02ClusterDotClassvalue.className.baseVal.replace(/svg-cluster/g, "") + " svg-cluster-atkFA";
    }
    else if (invokingComponentId == "icBckg") {
        // icon background color is changed in the UI
        var iconColorValue = component.getProperty("value").toString();
        var lastIndexOfCommaInColorValue = iconColorValue.lastIndexOf(",");
        var iconBColorRGBString = iconColorValue.substring("rgba(", lastIndexOfCommaInColorValue);
        if (document.getElementById("svg-bckg-atkFA") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-bckg-atkFA").innerHTML = ".svg-bckg-atkFA { background-color: " + iconColorValue + "; } " + ".p_AFHoverTarget > .svg-bckg-atkFA { background-color: " + iconColorValue + "; box-shadow: 0px 0px 0px 10px " + iconBColorRGBString + ", 0.25) !important;}" + " .svg-bckg-atkFA:hover{background-color: " + iconColorValue + "; box-shadow: 0px 0px 0px 10px " + iconBColorRGBString + ",.25) !important;}";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-bckg-atkFA';
            style.innerHTML = ".svg-bckg-atkFA { background-color: " + iconColorValue + "; } " + ".p_AFHoverTarget > .svg-bckg-atkFA { background-color: " + iconColorValue + "; box-shadow: 0px 0px 0px 10px " + iconBColorRGBString + ", 0.25) !important;}" + " .svg-bckg-atkFA:hover{background-color: " + iconColorValue + "; box-shadow: 0px 0px 0px 10px " + iconBColorRGBString + ",.25) !important;}";// TODO add hover thing
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA1/g, "") + " svg-bckg-atkFA";
        iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA2/g, "") + " svg-bckg-atkFA";

    }
    else if (invokingComponentId == "socIbs") {
        //icon background color type is changed
        //select one choice for icon background
        value = component.getProperty("value").toString();
        if (value == "0") {
            // iconbkgdColorType=multicolor
            if (document.getElementById("svg-bckg-atkFA1") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-bckg-atkFA1").innerHTML = ".svg-bckg-atkFA1 { background-color: #2db3ac;} " + ".p_AFHoverTarget > .svg-bckg-atkFA1 {background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;} " + ".svg-bckg-atkFA1:hover{ background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;}";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-bckg-atkFA1';
                style.innerHTML = ".svg-bckg-atkFA1 { background-color: #2db3ac;} " + ".p_AFHoverTarget > .svg-bckg-atkFA1 { background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;} " + ".svg-bckg-atkFA1:hover{ background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;}";
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA/g, "") + " svg-bckg-atkFA1";

            if (document.getElementById("svg-bckg-atkFA2") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-bckg-atkFA2").innerHTML = ".svg-bckg-atkFA2 { background-color: #c8d657;} " + ".p_AFHoverTarget > .svg-bckg-atkFA2 {background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;} " + ".svg-bckg-atkFA2:hover{ background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;}";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-bckg-atkFA2';
                style.innerHTML = ".svg-bckg-atkFA2 { background-color: #c8d657;} " + ".p_AFHoverTarget > .svg-bckg-atkFA2 { background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;} " + ".svg-bckg-atkFA2:hover{ background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;}";
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA/g, "") + " svg-bckg-atkFA2";
        }
        else if (value == "1") {
            //iconbkgdColorType=monochrome
            bckgColorRGBValue = atkThemesUi.hexToRgb(svgParent.getProperty("iconBackGroundColorValue"));
            if (bckgColorRGBValue != null) {
                if (document.getElementById("svg-bckg-atkFA") != null) {
                    //put the type of the element check if its style
                    document.getElementById("svg-bckg-atkFA").innerHTML = ".svg-bckg-atkFA { background-color:rgb(" + bckgColorRGBValue + ");}" + " .p_AFHoverTarget > .svg-bckg-atkFA { background-color:rgb(" + bckgColorRGBValue + ");box-shadow: 0px 0px 0px 10px rgba(" + bckgColorRGBValue + ", 0.25) !important;}" + " .svg-bckg-atkFA:hover{ background-color:rgb(" + bckgColorRGBValue + "); box-shadow: 0px 0px 0px 10px rgba(" + bckgColorRGBValue + ", 0.25) !important;} ";
                }
                else {
                    style = document.createElement('style');
                    style.type = 'text/css';
                    style.id = 'svg-bckg-atkFA';
                    style.innerHTML = ".svg-bckg-atkFA { background-color:rgb(" + bckgColorRGBValue + ");}" + " .p_AFHoverTarget > .svg-bckg-atkFA { background-color:rgb(" + bckgColorRGBValue + ");box-shadow: 0px 0px 0px 10px rgba(" + bckgColorRGBValue + ", 0.25) !important;}" + " .svg-bckg-atkFA:hover{background-color:rgb(" + bckgColorRGBValue + "); box-shadow: 0px 0px 0px 10px rgba(" + bckgColorRGBValue + ", 0.25) !important;} ";
                    document.getElementsByTagName('head')[0].appendChild(style);
                }
            }
            iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA1/g, "") + " svg-bckg-atkFA";
            iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA2/g, "") + " svg-bckg-atkFA";
        }
    }
    else if (invokingComponentId == "socIsC") {
        value = component.getProperty("value").toString();
        var iconColorRGBValue = atkThemesUi.hexToRgb(svgParent.getProperty("iconColorValue"));
        if (value == "0") {
            // iconColorType=multicolor
            if (document.getElementById("svg-icon-atkFA1") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-icon-atkFA1").innerHTML = ".svg-icon-atkFA1 { fill: #e95b54; }";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-icon-atkFA1';
                style.innerHTML = ".svg-icon-atkFA1 { fill: #e95b54; }";
                document.getElementsByTagName('head')[0].appendChild(style);
            }

            if (document.getElementById("svg-icon-atkFA2") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-icon-atkFA2").innerHTML = ".svg-icon-atkFA2 { fill: #84bbe6; }";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-icon-atkFA2';
                style.innerHTML = ".svg-icon-atkFA2 { fill: #84bbe6; }";
                document.getElementsByTagName('head')[0].appendChild(style);
            }

            if (document.getElementById("svg-icon-atkFA3") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-icon-atkFA3").innerHTML = ".svg-icon-atkFA3 { fill: #919fab; }";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-icon-atkFA3';
                style.innerHTML = ".svg-icon-atkFA3 { fill: #919fab; }";
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            if (document.getElementById("svg-icon-atkFA4") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-icon-atkFA4").innerHTML = ".svg-icon-atkFA4 { fill: #00b8df; }";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-icon-atkFA4';
                style.innerHTML = ".svg-icon-atkFA4 { fill: #00b8df; }";
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            if (document.getElementById("svg-icon-atkFA5") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-icon-atkFA5").innerHTML = ".svg-icon-atkFA5 { fill: #9bc55d; }";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-icon-atkFA5';
                style.innerHTML = ".svg-icon-atkFA5 { fill: #9bc55d; }";
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            iconSvg01Icon01Classvalue.className.baseVal = iconSvg01Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA1";
            iconSvg01Icon02Classvalue.className.baseVal = iconSvg01Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA2";
            iconSvg01Icon03Classvalue.className.baseVal = iconSvg01Icon03Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA3";
            iconSvg02Icon01Classvalue.className.baseVal = iconSvg02Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA4";
            iconSvg02Icon02Classvalue.className.baseVal = iconSvg02Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA5";
        }
        else if (value == "1" && iconColorRGBValue != null) {
            // iconColorType=monochrome
            if (document.getElementById("svg-icon-atkFA") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-icon-atkFA").innerHTML = ".svg-icon-atkFA { fill: rgb(" + iconColorRGBValue + "); }";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-icon-atkFA';
                style.innerHTML = ".svg-icon-atkFA { fill: rgb(" + iconColorRGBValue + "); }";
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            iconSvg01Icon01Classvalue.className.baseVal = iconSvg01Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA1/g, "") + " svg-icon-atkFA";
            iconSvg01Icon02Classvalue.className.baseVal = iconSvg01Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA2/g, "") + " svg-icon-atkFA";
            iconSvg01Icon03Classvalue.className.baseVal = iconSvg01Icon03Classvalue.className.baseVal.replace(/svg-icon-atkFA3/g, "") + " svg-icon-atkFA";
            iconSvg02Icon01Classvalue.className.baseVal = iconSvg02Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA4/g, "") + " svg-icon-atkFA";
            iconSvg02Icon02Classvalue.className.baseVal = iconSvg02Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA5/g, "") + " svg-icon-atkFA";
        }
    }
    else if (svgParent.getProperty("id") == "pglSz") {
        // iconSize is changed
        var iconSizeValue = component.getProperty("iconSizeStyle");
        if (iconSizeValue != null) {
            if (document.getElementById("svg-icon-size-atkFA") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-icon-size-atkFA").innerHTML = ".svg-icon-size-atkFA { " + iconSizeValue + "}";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-icon-size-atkFA';
                style.innerHTML = ".svg-icon-size-atkFA { " + iconSizeValue + "}";
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        }

        iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal + " svg-icon-size-atkFA";
        iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal + " svg-icon-size-atkFA";
    }
    else if (svgParent.getProperty("id") == "pglSp") {
        // icon shape is changed from UI
        var iconShapeValue = component.getProperty("iconShapeStyle");
        var iconPageLinkColor = svgParent.getProperty("iconPageLnkColor");
        var iconColorVal = svgParent.getProperty("iconColorValue");
        var iconColorType = svgParent.getProperty("iconColorType");
        var iconBackGroundColorValue = svgParent.getProperty("iconBackGroundColorValue");
        var iconBckgColorType = svgParent.getProperty("iconBckgColorType");
        if (iconShapeValue != null) {
            if (document.getElementById("svg-icon-shape-atkFA") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-icon-shape-atkFA").innerHTML = ".svg-icon-shape-atkFA { " + iconShapeValue + "}";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-icon-shape-atkFA';
                style.innerHTML = ".svg-icon-shape-atkFA { " + iconShapeValue + "}";
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            if (iconShapeValue == "border-radius : none;") {
                // icon shape is NONE
                if (iconColorType != null && iconColorType == "monochrome") {
                    if (iconColorVal != null) {
                        var iconColorValRGBString = atkThemesUi.hexToRgb(iconColorVal);
                        if (document.getElementById("svg-bckg-atkFA") != null) {
                            //put the type of the element check if its style
                            document.getElementById("svg-bckg-atkFA").innerHTML = ".svg-bckg-atkFA { background-color: transparent;} " + ".p_AFHoverTarget > .svg-bckg-atkFA { box-shadow: 0px 0px 0px 10px rgba(" + iconColorValRGBString + ", .25) !important; border-radius:50%; background-color: rgba( " + iconColorValRGBString + ", 0.25 );}" + ".svg-bckg-atkFA:hover{box-shadow: 0px 0px 0px 10px rgba(" + iconColorValRGBString + ",.25) !important; border-radius:50%; background-color: rgba( " + iconColorValRGBString + ", 0.25 );}";
                        }
                        else {
                            style = document.createElement('style');
                            style.type = 'text/css';
                            style.id = 'svg-bckg-atkFA';
                            style.innerHTML = ".svg-bckg-atkFA { background-color: transparent;} " + ".p_AFHoverTarget > .svg-bckg-atkFA { box-shadow: 0px 0px 0px 10px rgba(" + iconColorValRGBString + ", .25) !important; border-radius:50%; background-color: rgba( " + iconColorValRGBString + ", 0.25 );}" + ".svg-bckg-atkFA:hover{box-shadow: 0px 0px 0px 10px rgba(" + iconColorValRGBString + ",.25 ) !important; border-radius:50%; background-color: rgba( " + iconColorValRGBString + ", 0.25 );}";
                            document.getElementsByTagName('head')[0].appendChild(style);
                        }
                    }
                }
                else if (iconColorType == "multicolor") {
                    if (iconPageLinkColor != null) {
                        var pageLinkValRGBString = atkThemesUi.hexToRgb(iconPageLinkColor);
                        if (document.getElementById("svg-bckg-atkFA") != null) {
                            //put the type of the element check if its style
                            document.getElementById("svg-bckg-atkFA").innerHTML = ".svg-bckg-atkFA { background-color: transparent;} " + ".p_AFHoverTarget > .svg-bckg-atkFA { box-shadow: 0px 0px 0px 10px rgba(" + pageLinkValRGBString + ", .25) !important; border-radius:50%; background-color: rgba( " + pageLinkValRGBString + ", 0.25 );}" + ".svg-bckg-atkFA:hover{box-shadow: 0px 0px 0px 10px rgba(" + pageLinkValRGBString + ",.25 ) !important; border-radius:50%; background-color: rgba( " + pageLinkValRGBString + ", 0.25 );}";
                        }
                        else {
                            style = document.createElement('style');
                            style.type = 'text/css';
                            style.id = 'svg-bckg-atkFA';
                            style.innerHTML = ".svg-bckg-atkFA { background-color: transparent;} " + ".p_AFHoverTarget > .svg-bckg-atkFA { box-shadow: 0px 0px 0px 10px rgba(" + pageLinkValRGBString + ", .25) !important; border-radius:50%; background-color: rgba( " + pageLinkValRGBString + ", 0.25 );}" + ".svg-bckg-atkFA:hover{ box-shadow: 0px 0px 0px 10px rgba(" + pageLinkValRGBString + ",.25 ) !important; border-radius:50%; background-color: rgba( " + pageLinkValRGBString + ", 0.25 );}";
                            document.getElementsByTagName('head')[0].appendChild(style);
                        }
                    }
                }
                iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA/g, "") + " svg-bckg-atkFA";
                iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA/g, "") + " svg-bckg-atkFA";
            }
            else {
                // iconShape is other than None
                if (iconBckgColorType != null && iconBckgColorType == "monochrome") {
                    if (iconBackGroundColorValue != null) {
                        var iconBGColorValRGBString = atkThemesUi.hexToRgb(iconBackGroundColorValue);
                        if (document.getElementById("svg-bckg-atkFA") != null) {
                            //put the type of the element check if its style
                            document.getElementById("svg-bckg-atkFA").innerHTML = ".svg-bckg-atkFA { background-color:rgb(" + iconBGColorValRGBString + ");}" + " .p_AFHoverTarget > .svg-bckg-atkFA { background-color:rgb(" + iconBGColorValRGBString + "); box-shadow: 0px 0px 0px 10px rgba(" + iconBGColorValRGBString + ", 0.25) !important;} " + ".svg-bckg-atkFA:hover{ background-color:rgb(" + iconBGColorValRGBString + ");box-shadow: 0px 0px 0px 10px rgba(" + iconBGColorValRGBString + ", 0.25) !important;} ";
                        }
                        else {
                            style = document.createElement('style');
                            style.type = 'text/css';
                            style.id = 'svg-bckg-atkFA';
                            style.innerHTML = ".svg-bckg-atkFA { background-color:rgb(" + iconBGColorValRGBString + ");}" + " .p_AFHoverTarget > .svg-bckg-atkFA { background-color:rgb(" + iconBGColorValRGBString + "); box-shadow: 0px 0px 0px 10px rgba(" + iconBGColorValRGBString + ", 0.25) !important;} " + " .svg-bckg-atkFA:hover{ background-color:rgb(" + iconBGColorValRGBString + ");box-shadow: 0px 0px 0px 10px rgba(" + iconBGColorValRGBString + ", 0.25) !important;} ";
                            document.getElementsByTagName('head')[0].appendChild(style);
                        }
                    }
                    iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA1/g, "") + " svg-icon-shape-atkFA svg-bckg-atkFA";
                    iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA2/g, "") + " svg-icon-shape-atkFA svg-bckg-atkFA";
                }
                else if (iconBckgColorType == "multicolor") {

                    if (document.getElementById("svg-bckg-atkFA1") != null) {
                        //put the type of the element check if its style
                        document.getElementById("svg-bckg-atkFA1").innerHTML = ".svg-bckg-atkFA1 { background-color: #2db3ac;} " + ".p_AFHoverTarget > .svg-bckg-atkFA1 {background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;} " + ".svg-bckg-atkFA1:hover{ background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;}";
                    }
                    else {
                        style = document.createElement('style');
                        style.type = 'text/css';
                        style.id = 'svg-bckg-atkFA1';
                        style.innerHTML = ".svg-bckg-atkFA1 { background-color: #2db3ac;} " + ".p_AFHoverTarget > .svg-bckg-atkFA1 { background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;} " + ".svg-bckg-atkFA1:hover{ background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;}";
                        document.getElementsByTagName('head')[0].appendChild(style);
                    }

                    if (document.getElementById("svg-bckg-atkFA2") != null) {
                        //put the type of the element check if its style
                        document.getElementById("svg-bckg-atkFA2").innerHTML = ".svg-bckg-atkFA2 { background-color: #c8d657;} " + ".p_AFHoverTarget > .svg-bckg-atkFA2 {background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;} " + ".svg-bckg-atkFA2:hover{ background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;}";
                    }
                    else {
                        style = document.createElement('style');
                        style.type = 'text/css';
                        style.id = 'svg-bckg-atkFA2';
                        style.innerHTML = ".svg-bckg-atkFA2 { background-color: #c8d657;} " + ".p_AFHoverTarget > .svg-bckg-atkFA2 { background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;} " + ".svg-bckg-atkFA2:hover{ background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;}";
                        document.getElementsByTagName('head')[0].appendChild(style);
                    }
                    iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal.replace(/svg-icon-shape-atkFA/g, "").replace(/svg-bckg-atkFA/g, "") + " svg-icon-shape-atkFA svg-bckg-atkFA1";
                    iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal.replace(/svg-icon-shape-atkFA/g, "").replace(/svg-bckg-atkFA/g, "") + " svg-icon-shape-atkFA svg-bckg-atkFA2";
                }

            }

        }

    }

}
/**
 *  This Java script API is to change the color of the preview when the background color is changed
 */
atkThemesUi.setInlineStyleForPGL = function (event) {
    var component = event.getSource();
    var invokingComponentId = component.getProperty("id");
    var clientIdString = component.getClientId();
    clientIdString = clientIdString.substring(0, clientIdString.lastIndexOf(":") + 1);
    // commandImageLinkSvg = document.getElementById(clientIdString + "cilSvg1::icon");
    pglSvg = document.getElementById(clientIdString + "svgPgl");

    if (invokingComponentId == "ic4") {
        if (document.getElementById("svg-PGL-atkFA") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-PGL-atkFA").innerHTML = ".svg-PGL-atkFA { background-color: " + component.getProperty("value").toString() + "; }";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-PGL-atkFA';
            style.innerHTML = ".svg-PGL-atkFA { background-color: " + component.getProperty("value").toString() + "; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        pglSvg.className = pglSvg.className + " svg-PGL-atkFA";
    }
}
/**
 * This Javascript is invoked when a theme is changed from the Themes dropdown in the appearance UI
 * It will create the style classes and apply them on the different component of the preview SVG image
 */
atkThemesUi.setInlineStyleForSvgForSelectedTheme = function (clientId, iconSizeStyle, iconColorType, iconColorValue, iconShapeStyle, iconIndicatorColor, iconBckgColorType, iconBackGroundColorValue, iconGlobalRgnLColor, iconPageLnkColor, backGroundColor) {

    var clientIdString = clientId.toString();
    clientIdString = clientIdString.substring(0, clientIdString.lastIndexOf(":pt1") + 5);

    commandImageLinkSvg = document.getElementById(clientIdString + "svgPgl");

    iconSvg01 = commandImageLinkSvg.childNodes[0].childNodes[0];
    iconSvg02 = commandImageLinkSvg.childNodes[2].childNodes[0];

    iconSvg01ImageClassValue = iconSvg01;
    iconSvg01ClusterDotClassvalue = iconSvg01.childNodes[0].childNodes[0];
    iconSvg01Icon01Classvalue = iconSvg01.childNodes[1].childNodes[0];
    iconSvg01Icon02Classvalue = iconSvg01.childNodes[2].childNodes[0];
    iconSvg01Icon03Classvalue = iconSvg01.childNodes[3].childNodes[0];

    iconSvg02ImageClassValue = iconSvg02;
    iconSvg02ClusterDotClassvalue = iconSvg02.childNodes[0].childNodes[0];
    iconSvg02Icon01Classvalue = iconSvg02.childNodes[1].childNodes[0];
    iconSvg02Icon02Classvalue = iconSvg02.childNodes[2].childNodes[0];

    //iconSize for selected Theme, apply iconSizeValue
    if (iconSizeStyle != null) {
        if (document.getElementById("svg-icon-size-atkFA") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-icon-size-atkFA").innerHTML = ".svg-icon-size-atkFA { " + iconSizeStyle + "}";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-icon-size-atkFA';
            style.innerHTML = ".svg-icon-size-atkFA { " + iconSizeStyle + "}";
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal + " svg-icon-size-atkFA";
        iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal + " svg-icon-size-atkFA";
    }

    // iconColor change for the svg icon on the basis of iconColorType and iconColorValue
    if (iconColorType == "monochrome") {
        if (iconColorValue != null) {
            if (document.getElementById("svg-icon-atkFA") != null) {
                //put the type of the element check if its style
                document.getElementById("svg-icon-atkFA").innerHTML = ".svg-icon-atkFA { fill: " + iconColorValue.toString() + "; }";
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'svg-icon-atkFA';
                style.innerHTML = ".svg-icon-atkFA { fill: " + iconColorValue + "; }";
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            iconSvg01Icon01Classvalue.className.baseVal = iconSvg01Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA1/g, "") + " svg-icon-atkFA";
            iconSvg01Icon02Classvalue.className.baseVal = iconSvg01Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA2/g, "") + " svg-icon-atkFA";
            iconSvg01Icon03Classvalue.className.baseVal = iconSvg01Icon03Classvalue.className.baseVal.replace(/svg-icon-atkFA3/g, "") + " svg-icon-atkFA";
            iconSvg02Icon01Classvalue.className.baseVal = iconSvg02Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA4/g, "") + " svg-icon-atkFA";
            iconSvg02Icon02Classvalue.className.baseVal = iconSvg02Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA5/g, "") + " svg-icon-atkFA";
        }
    }
    else if (iconColorType == "multicolor") {
        if (document.getElementById("svg-icon-atkFA1") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-icon-atkFA1").innerHTML = ".svg-icon-atkFA1 { fill: #e95b54; }";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-icon-atkFA1';
            style.innerHTML = ".svg-icon-atkFA1 { fill: #e95b54; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }

        if (document.getElementById("svg-icon-atkFA2") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-icon-atkFA2").innerHTML = ".svg-icon-atkFA2 { fill: #84bbe6; }";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-icon-atkFA2';
            style.innerHTML = ".svg-icon-atkFA2 { fill: #84bbe6; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }

        if (document.getElementById("svg-icon-atkFA3") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-icon-atkFA3").innerHTML = ".svg-icon-atkFA3 { fill: #919fab; }";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-icon-atkFA3';
            style.innerHTML = ".svg-icon-atkFA3 { fill: #919fab; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        if (document.getElementById("svg-icon-atkFA4") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-icon-atkFA4").innerHTML = ".svg-icon-atkFA4 { fill: #00b8df; }";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-icon-atkFA4';
            style.innerHTML = ".svg-icon-atkFA4 { fill: #00b8df; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        if (document.getElementById("svg-icon-atkFA5") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-icon-atkFA5").innerHTML = ".svg-icon-atkFA5 { fill: #9bc55d; }";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-icon-atkFA5';
            style.innerHTML = ".svg-icon-atkFA5 { fill: #9bc55d; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        iconSvg01Icon01Classvalue.className.baseVal = iconSvg01Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA1";
        iconSvg01Icon02Classvalue.className.baseVal = iconSvg01Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA2";
        iconSvg01Icon03Classvalue.className.baseVal = iconSvg01Icon03Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA3";
        iconSvg02Icon01Classvalue.className.baseVal = iconSvg02Icon01Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA4";
        iconSvg02Icon02Classvalue.className.baseVal = iconSvg02Icon02Classvalue.className.baseVal.replace(/svg-icon-atkFA/g, "") + " svg-icon-atkFA5";
    }
    // group indicator color on the basis ofinput iconIndicatorColor
    if (iconIndicatorColor != null) {
        iconIndicatorColorRGB = atkThemesUi.hexToRgb(iconIndicatorColor);
        length = iconIndicatorColorRGB.length;
        iconIndicatorColorRGB = iconIndicatorColorRGB.substring(0, length + 1);
        iconIndicatorColor = iconIndicatorColorRGB + ",.6)";

        if (document.getElementById("svg-cluster-atkFA") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-cluster-atkFA").innerHTML = ".svg-cluster-atkFA { fill: rgba(" + iconIndicatorColor + "; }";

        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-cluster-atkFA';
            style.innerHTML = ".svg-cluster-atkFA { fill: rgba(" + iconIndicatorColor + "; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        iconSvg01ClusterDotClassvalue.className.baseVal = iconSvg01ClusterDotClassvalue.className.baseVal.replace(/svg-cluster/g, "") + " svg-cluster-atkFA";
        iconSvg02ClusterDotClassvalue.className.baseVal = iconSvg02ClusterDotClassvalue.className.baseVal.replace(/svg-cluster/g, "") + " svg-cluster-atkFA";
    }
    //iconshape on the basis of iconShapeaValue and other attributes
    if (iconShapeStyle != null) {
        if (document.getElementById("svg-icon-shape-atkFA") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-icon-shape-atkFA").innerHTML = ".svg-icon-shape-atkFA { " + iconShapeStyle + "}";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-icon-shape-atkFA';
            style.innerHTML = ".svg-icon-shape-atkFA { " + iconShapeStyle + "}";
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        if (iconShapeStyle == "border-radius:none;") {
            if (iconColorType != null && iconColorType == "monochrome") {
                if (iconColorValue != null) {
                    var iconColorValRGBString = atkThemesUi.hexToRgb(iconColorValue);
                    if (document.getElementById("svg-bckg-atkFA") != null) {
                        //put the type of the element check if its style
                        document.getElementById("svg-bckg-atkFA").innerHTML = ".svg-bckg-atkFA { background-color: transparent;} " + ".p_AFHoverTarget > .svg-bckg-atkFA { box-shadow: 0px 0px 0px 10px rgba(" + iconColorValRGBString + ", .25) !important; border-radius:50%; background-color: rgba( " + iconColorValRGBString + ", 0.25 );}" + ".svg-bckg-atkFA:hover{box-shadow: 0px 0px 0px 10px rgba(" + iconColorValRGBString + ",.25) !important; border-radius:50%; background-color: rgba( " + iconColorValRGBString + ", 0.25 );}";
                    }
                    else {
                        style = document.createElement('style');
                        style.type = 'text/css';
                        style.id = 'svg-bckg-atkFA';
                        style.innerHTML = ".svg-bckg-atkFA { background-color: transparent;} " + ".p_AFHoverTarget > .svg-bckg-atkFA { box-shadow: 0px 0px 0px 10px rgba(" + iconColorValRGBString + ", .25) !important; border-radius:50%; background-color: rgba( " + iconColorValRGBString + ", 0.25 );}" + ".svg-bckg-atkFA:hover{box-shadow: 0px 0px 0px 10px rgba(" + iconColorValRGBString + ",.25 ) !important; border-radius:50%; background-color: rgba( " + iconColorValRGBString + ", 0.25 );}";
                        document.getElementsByTagName('head')[0].appendChild(style);
                    }
                }
            }
            else if (iconColorType == "multicolor") {
                if (iconPageLnkColor != null) {
                    var pageLinkValRGBString = atkThemesUi.hexToRgb(iconPageLnkColor);
                    if (document.getElementById("svg-bckg-atkFA") != null) {
                        //put the type of the element check if its style
                        document.getElementById("svg-bckg-atkFA").innerHTML = ".svg-bckg-atkFA { background-color: transparent;} " + ".p_AFHoverTarget > .svg-bckg-atkFA { box-shadow: 0px 0px 0px 10px rgba(" + pageLinkValRGBString + ", .25) !important; border-radius:50%; background-color: rgba( " + pageLinkValRGBString + ", 0.25 );}" + ".svg-bckg-atkFA:hover{box-shadow: 0px 0px 0px 10px rgba(" + pageLinkValRGBString + ",.25 ) !important; border-radius:50%; background-color: rgba( " + pageLinkValRGBString + ", 0.25 );}";
                    }
                    else {
                        style = document.createElement('style');
                        style.type = 'text/css';
                        style.id = 'svg-bckg-atkFA';
                        style.innerHTML = ".svg-bckg-atkFA { background-color: transparent;} " + ".p_AFHoverTarget > .svg-bckg-atkFA { box-shadow: 0px 0px 0px 10px rgba(" + pageLinkValRGBString + ", .25) !important; border-radius:50%; background-color: rgba( " + pageLinkValRGBString + ", 0.25 );}" + ".svg-bckg-atkFA:hover{ box-shadow: 0px 0px 0px 10px rgba(" + pageLinkValRGBString + ",.25 ) !important; border-radius:50%; background-color: rgba( " + pageLinkValRGBString + ", 0.25 );}";
                        document.getElementsByTagName('head')[0].appendChild(style);
                    }
                }
            }
            iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA/g, "") + " svg-bckg-atkFA";
            iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA/g, "") + " svg-bckg-atkFA";
        }
        else {
            // not none
            if (iconBckgColorType != null && iconBckgColorType == "monochrome") {
                if (iconBackGroundColorValue != null) {
                    var iconBGColorValRGBString = atkThemesUi.hexToRgb(iconBackGroundColorValue);
                    if (document.getElementById("svg-bckg-atkFA") != null) {
                        //put the type of the element check if its style
                        document.getElementById("svg-bckg-atkFA").innerHTML = ".svg-bckg-atkFA { background-color:rgb(" + iconBGColorValRGBString + ");}" + " .p_AFHoverTarget > .svg-bckg-atkFA { background-color:rgb(" + iconBGColorValRGBString + "); box-shadow: 0px 0px 0px 10px rgba(" + iconBGColorValRGBString + ", 0.25) !important;} " + ".svg-bckg-atkFA:hover{ background-color:rgb(" + iconBGColorValRGBString + ");box-shadow: 0px 0px 0px 10px rgba(" + iconBGColorValRGBString + ", 0.25) !important;} ";
                    }
                    else {
                        style = document.createElement('style');
                        style.type = 'text/css';
                        style.id = 'svg-bckg-atkFA';
                        style.innerHTML = ".svg-bckg-atkFA { background-color:rgb(" + iconBGColorValRGBString + ");}" + " .p_AFHoverTarget > .svg-bckg-atkFA { background-color:rgb(" + iconBGColorValRGBString + "); box-shadow: 0px 0px 0px 10px rgba(" + iconBGColorValRGBString + ", 0.25) !important;} " + " .svg-bckg-atkFA:hover{ background-color:rgb(" + iconBGColorValRGBString + ");box-shadow: 0px 0px 0px 10px rgba(" + iconBGColorValRGBString + ", 0.25) !important;} ";
                        document.getElementsByTagName('head')[0].appendChild(style);
                    }
                }
                iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA1/g, "") + " svg-icon-shape-atkFA svg-bckg-atkFA";
                iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal.replace(/svg-bckg-atkFA2/g, "") + " svg-icon-shape-atkFA svg-bckg-atkFA";
            }
            else if (iconBckgColorType == "multicolor") {

                if (document.getElementById("svg-bckg-atkFA1") != null) {
                    //put the type of the element check if its style
                    document.getElementById("svg-bckg-atkFA1").innerHTML = ".svg-bckg-atkFA1 { background-color: #2db3ac;} " + ".p_AFHoverTarget > .svg-bckg-atkFA1 {background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;} " + ".svg-bckg-atkFA1:hover{ background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;}";
                }
                else {
                    style = document.createElement('style');
                    style.type = 'text/css';
                    style.id = 'svg-bckg-atkFA1';
                    style.innerHTML = ".svg-bckg-atkFA1 { background-color: #2db3ac;} " + ".p_AFHoverTarget > .svg-bckg-atkFA1 { background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;} " + ".svg-bckg-atkFA1:hover{ background-color: #2db3ac; box-shadow: 0px 0px 0px 10px rgba(45,179,172,.25) !important;}";
                    document.getElementsByTagName('head')[0].appendChild(style);
                }

                if (document.getElementById("svg-bckg-atkFA2") != null) {
                    //put the type of the element check if its style
                    document.getElementById("svg-bckg-atkFA2").innerHTML = ".svg-bckg-atkFA2 { background-color: #c8d657;} " + ".p_AFHoverTarget > .svg-bckg-atkFA2 {background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;} " + ".svg-bckg-atkFA2:hover{ background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;}";
                }
                else {
                    style = document.createElement('style');
                    style.type = 'text/css';
                    style.id = 'svg-bckg-atkFA2';
                    style.innerHTML = ".svg-bckg-atkFA2 { background-color: #c8d657;} " + ".p_AFHoverTarget > .svg-bckg-atkFA2 { background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;} " + ".svg-bckg-atkFA2:hover{ background-color: #c8d657; box-shadow: 0px 0px 0px 10px rgba(200,214,87,.25) !important;}";
                    document.getElementsByTagName('head')[0].appendChild(style);
                }
                iconSvg01ImageClassValue.className.baseVal = iconSvg01ImageClassValue.className.baseVal.replace(/svg-icon-shape-atkFA/g, "").replace(/svg-bckg-atkFA/g, "") + " svg-icon-shape-atkFA svg-bckg-atkFA1";
                iconSvg02ImageClassValue.className.baseVal = iconSvg02ImageClassValue.className.baseVal.replace(/svg-icon-shape-atkFA/g, "").replace(/svg-bckg-atkFA/g, "") + " svg-icon-shape-atkFA svg-bckg-atkFA2";
            }
        }
    }
    if (backGroundColor != null) {
        // change the background of the SVG preview on the basis of chosen background color
        if (document.getElementById("svg-PGL-atkFA") != null) {
            //put the type of the element check if its style
            document.getElementById("svg-PGL-atkFA").innerHTML = ".svg-PGL-atkFA { background-color: " + backGroundColor + "; }";
        }
        else {
            style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'svg-PGL-atkFA';
            style.innerHTML = ".svg-PGL-atkFA { background-color: " + backGroundColor + "; }";
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        commandImageLinkSvg.className = commandImageLinkSvg.className + " svg-PGL-atkFA";
    }

}

atkThemesUi.hexToRgb = function (hex) {
    var bigint, r, g, b, a;
    //Remove # character
    var re = /^#?/;
    var aRgb = hex.replace(re, '');
    bigint = parseInt(aRgb, 16);
    var rgb;
    //If in #FFF format
    if (aRgb.length == 3) {
        r = (bigint >> 4) & 255;
        g = (bigint >> 2) & 255;
        b = bigint & 255;
        rgb = r + "," + g + "," + b;
    }

    //If in #RRGGBB format
    if (aRgb.length >= 6) {
        r = (bigint >> 16) & 255;
        g = (bigint >> 8) & 255;
        b = bigint & 255;
        rgb = r + "," + g + "," + b;

    }
    return rgb;
}
/**
 * This API will set the logo height and width of the hidden input text of the page
 */
atkThemesUi.setLogoDimension = function (event) {
    var component = event.getSource();
    var logoUrl;
    var clientIdString = component.getClientId();// clientString = _FOpt1:_FOr1:0:_FOSrATK_HOMEPAGE_FUSE_SETTINGS:0:_FOTr0:0:pt1:socIsC
    clientIdString = clientIdString.substring(0, clientIdString.lastIndexOf(":") + 1);//clientString = _FOpt1:_FOr1:0:_FOSrATK_HOMEPAGE_FUSE_SETTINGS:0:_FOTr0:0:pt1:
    inputTextWidth = AdfPage.PAGE.findComponent(clientIdString + "itLWidth");
    inputTextHeight = AdfPage.PAGE.findComponent(clientIdString + "itLHeight");

    logoUrl = component.getProperty("value");
    if (logoUrl.startsWith("/")) {
        logoUrl = component.getProperty("ExtEndPoint") + logoUrl;
    }
    if (logoUrl != null) {
        imageInput.src = logoUrl;
    }

}


atkThemesUi.rgb2hex = function (rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice( - 2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice( - 2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice( - 2) : '';
}