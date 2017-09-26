/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
(function () {

  function FilmStripLayoutManager() {
    var prevScreenThreshold = 1024;
    var dirRtl = false;
    var defaultHomePageVal = 'grid';
    var hiddenCmdBtnIdVal = "pt1:amHidden";
    var colCount = 6;
    var subClusterItemCount = 7;
    var data;
    this.handleFilmDocumentLoad = function (rootMenuData, itemId) {
      var prop = JSON.parse(rootMenuData);
      if (prop.length < 1) {
        return;
      }
      var rootMenuDataItems = {
        'items' : prop
      };
      data = rootMenuDataItems;
      generateHomeGrid(rootMenuDataItems, itemId);

      // inject svg icons
      var icons = document.querySelectorAll('.suiicon');
      suiicons.inject(icons, null, dirRtl);

      window.addEventListener('resize', function () {
        var navDiv = $('#app-strip');
        if (navDiv == undefined || navDiv.length < 1)
          return;
        //Calculate the screen width
        var screenWidth = window.innerWidth;

        switch (prevScreenThreshold) {
          case 1024:
            if (screenWidth > 1279)
              arrangeNavigationElementsOnHomePage(true, itemId);
            break;

          case 1280:
            if (screenWidth > 1439 || screenWidth < 1280)
              arrangeNavigationElementsOnHomePage(true, itemId);
            break;

          case 1440:
            if (screenWidth < 1439)
              arrangeNavigationElementsOnHomePage(true, itemId);
            break;

          default :
            break;

        }
      },
true);
    }

    function generateHomeGrid(data, itemId) {
      var $nav = $('#app-strip');
      var html = "";
      var divTopLevel = "";
      var clusterhtml = '';
      var categorycount = 0;
      var tabindex = 0;
      var index = 0;

      //Use the data from root menu to create soringboard and sort them into clusters, subcluster and toplevel items
      $.each(data.items, function (i, item) {
        var id = item.id;
        if (item.visible == false)
          return;
        var itemlabel = item.label;
        tabindex = (categorycount == 0) ? 0 :  - 1;
        if (item.type == 'subcluster') {
          if (item.id == itemId) {
            clusterhtml += "<div style='position:absolute;top:20px;' " + "id='" + id + "'" + "class='app-nav-item " + "' filmstrip='" + itemlabel + "' page='" + item.url + "' index=" + index + " type='" + item.type + "' " + " title='" + itemlabel + "' " + " group='" + item.group + "' " + " destinationUrl='" + item.destinationUrl + "' " + " targetFrame='" + item.targetFrame + "' " + " isDestUrlExist='" + item.isDestUrlExist + "' " + " role='presentation' >" + "<div class='svg-nav-film-cluster-selected suiicon' data-icon='" + "navi_" + item.icon + "' aria-hidden='true' role='presentation' focusable='false' id=" + id + "_svg" + ">" + "</div>" + "<a id='" + id + "_" + index + "' class='app-nav-film-label' style='opacity:1;'  role='menuitem' href='#'  tabindex='" + index++ + "'>" + itemlabel + "</a>" + "</div>";
          }
        }

      });
 $.each(data.items, function (i, item) {
        var id = item.id;
        if (item.visible == false)
          return;
        var itemlabel = item.label;
        tabindex = (categorycount == 0) ? 0 :  - 1;
        if (item.type == 'subcluster') {
          if (item.id != itemId) {
            clusterhtml += "<div style='position:absolute;top:20px;' " + "id='" + id + "'" + "class='app-nav-item " + "' filmstrip='" + itemlabel + "' page='" + item.url + "' index=" + index + " type='" + item.type + "' " + " title='" + itemlabel + "' " + " group='" + item.group + "' " + " destinationUrl='" + item.destinationUrl + "' " + " targetFrame='" + item.targetFrame + "' " + " isDestUrlExist='" + item.isDestUrlExist + "' " + " role='presentation' >" + "<div  class='svg-nav-film-cluster suiicon' data-icon='" + "navi_" + item.icon + "' aria-hidden='true' role='presentation' focusable='false'id=" + id + "_svg" + ">" + "</div>" + "<a id='" + id + "_" + index + "' class='app-nav-film-label' style='opacity:.7;' role='menuitem' href='#'  tabindex='" + index++ + "'>" + itemlabel + "</a>" + "</div>";
          }
        }

      });
      //insert the created html into app-strip container
      $.each(data.items, function (i, item) {
        var id = item.id;
        if (item.visible == false)
          return;
        var itemlabel = item.label;
        tabindex = (categorycount == 0) ? 0 :  - 1;
        if (item.type != 'subcluster') {
          html += '<div class="container"' + ' id="' + id + '_container"' + ' name="' + item.group + '"' + ' role="menubar"' + ' categoryindex="' + categorycount++ + '"' + '>' + clusterhtml + '</div>';
        }
      });
      divTopLevel += "<div  role='menubar' id='grid_toplevl_container'>" + html + "</div>";
      $nav.html(divTopLevel);
      $nav.keydown(function (e) {
      handleKeyboardActions(e);
      });
      //bind the springboard items to click
      console.log("--generateHomeGrid--calling bind");
      bindNavItems();
      arrangeNavigationElementsOnHomePage(true, itemId);
    }

    function arrangeNavigationElementsOnHomePage(animate, itemId) {
      console.log("---inside arrangeNavigationElementsOnHomePage");
      $('#app-strip').show();
      var $nav = $("#app-strip");
      var $navPgl = $("#pgl2Film");

      var $gridTopLevel = $("#grid_toplevl_container");
      var $items = $gridTopLevel.find('.app-nav-item');
      var num_items = $items.length;
      console.log("---------num_items--------" + num_items + "=====" + defaultHomePageVal);
      defaultHomePageVal = "banner";
      /**
       * responsive design for number of columns
       */
      var containerW = window.innerWidth;
      var screenWidth = window.screen.availWidth;
      console.log("--containerW---" + containerW);
      console.log("--outerWidth---" + window.screen.availWidth);
      console.log("--------document.body.clientWidth----" + document.body.clientWidth);
      var subClusterCellWidth;
      var cellWidth = 155;
      var cellHeight = 153;

      if (num_items <= 9) {
        colCount = 3;
        subClusterColCount = 4;
        subClusterCellWidth = 118;
        cellWidth = 178;
      }
      else {
        //The sub cluster column count is always one more than the cluster column count
        //Fixing the width of suncluster to 132 so that porper number of subcluster icons can fit inside the cluster container
        if (containerW < 1280) {
          colCount = 4;
          subClusterColCount = 5;
          subClusterCellWidth = 118;
          prevScreenThreshold = 1024;
        }
        else if (containerW < 1440) {
          colCount = 5;
          subClusterColCount = 6;
          subClusterCellWidth = 127;
          prevScreenThreshold = 1280;
        }
        else {
          colCount = 6;
          subClusterColCount = 7;
          subClusterCellWidth = 132;
          prevScreenThreshold = 1440;
        }
      }

      if (defaultHomePageVal == 'banner') {
        $nav.css( {
          "background-color" : "none"
        });

        // Banner mode always columns should be match with the min width of the banner image which is ideally 1024
        colCount = num_items;
        cellWidth = 125;
        subClusterColCount = 7;
        subClusterCellWidth = 132;
        prevScreenThreshold = 1440;
      }

      // these are the initial 
      var leftPadding = 15;
      var topPadding = 20;
      var selectedIndex = 0;
      var topSelectedPadding = 20;
      var subClusterLeftPaddding = 5;
      var subClusterTopPaddding =  - 5;

      var h = (Math.ceil(num_items / colCount)) * cellHeight + 10;
      var w = colCount * cellWidth;

      $nav.css( {
        "height" : 110, "width" : w
      });
      //if cluster container is empty, code errors out. So check if cluster container contains any element before using it
      var $cluster = $nav.find(".cluster-container");
      var $clustercontainer = "";

      $items.each(function (i) {
        $item = $(this);
        // $item.removeClass('selected');
        //  console.log("----$item-------" + $(this).attr('id')+"======"+itemId);
        if ($(this).attr('id') == itemId) {
          $item.animate( {
            "left" : leftPadding + (i % colCount) * cellWidth, "top" : topSelectedPadding + parseInt(i / colCount) * cellHeight
          },
600);
        }
        else {
          $item.animate( {
            "left" : leftPadding + (i % colCount) * cellWidth, "top" : topPadding + parseInt(i / colCount) * cellHeight
          },
600);
        }
        if ($cluster.length > 0) {
          $clustercontainer = $nav.find(".cluster-container[name='" + $(this).attr('group') + "']");
        }
        if ($clustercontainer.length > 0) {
          $childNodes = $clustercontainer.first().children();
          subClusterItemCount = $childNodes.length;
          var clustercontainerheight = parseInt((subClusterItemCount - 1) / subClusterColCount) + 1;

          if (dirRtl == false) {
            $clustercontainer.css( {
              "top" : topPadding + parseInt(i / colCount) * cellHeight + cellHeight, "height" : clustercontainerheight * 100 + 10, "width" : cellWidth * (colCount - 1) + 2 * leftPadding, "left" : subClusterLeftPaddding
            });
          }

          var positionx = leftPadding + (i % colCount) * cellWidth;

          //If the column count is less than the number of items in the cluster, center align the sub-cluster items
          if (subClusterItemCount < subClusterColCount) {
            //For center aligning, first find out the the current cluster's position
            currentClusterPos = $nav.offset().left + positionx;

            //The mid element of the subcluster should be in the middle of the current cluster
            midSubClusterElmnt = subClusterItemCount / 2;

            //Using the above calc, find out the position of the first sub cluster element.
            //The last division is added to make sure that the center of the midSubClusterElmnt aligns correctly with the cluster element
            firstSubclusterElmntPos = currentClusterPos - (midSubClusterElmnt * subClusterCellWidth) + (subClusterCellWidth / 2);

            //If the position of the first element is beyond the offset of app-strip div, start from the left position of app-strip
(firstSubclusterElmntPos < $nav.offset().left) ? firstSubclusterElmntPos = 20 : firstSubclusterElmntPos = (firstSubclusterElmntPos - $nav.offset().left);

            //Also, find out last sub cluster element's position
            lastClusterElmntPos = $nav.offset().left + (colCount * cellWidth);

            lastSubClusterElmntPos = $nav.offset().left + firstSubclusterElmntPos + (subClusterCellWidth * subClusterItemCount);

            //If the last sub-cluster element position is greater than the last cluster element position, subtract the offset from the first sub cluster element's position
            if (lastSubClusterElmntPos > lastClusterElmntPos) {
              firstSubclusterElmntPos = firstSubclusterElmntPos - (lastSubClusterElmntPos - lastClusterElmntPos);
            }

            $childNodes.each(function (i) {
              console.log("---------log 1");
              $item = $(this);
              $item.removeClass('selected');

              if (dirRtl == false) {
                $item.css( {
                  "opacity" : 1, "left" : firstSubclusterElmntPos + (i * subClusterCellWidth), "margin-top" : parseInt(i / subClusterColCount) * 100 + subClusterTopPaddding
                });
              }
              else {
                $item.css( {
                  "opacity" : 1, "right" : firstSubclusterElmntPos + (i * subClusterCellWidth), "margin-top" : parseInt(i / subClusterColCount) * 100 + subClusterTopPaddding
                });
              }
            });
          }

          if (animate == true)
            $clustercontainer.fadeOut();

        }
      });
      console.log("-----set focus on----" + itemId + "-----" + document.getElementById(itemId));

    }

    function bindNavItems() {
      console.log("--inside--bindNavItems");
      console.log("data-------binside4 bindNavItems-----");
      var $nav = $("#app-strip");
      var $gridTopLevel = $("#grid_toplevl_container");
      var $clusterContainers = $nav.find('.container');
      console.log("----" + $clusterContainers.length);

      for (var a = 0;a < $clusterContainers.length;a++) {
        $clusterContainer = $clusterContainers[a];
        console.log("------2-----" + $(this).attr('id'));
        $clusterContainers.find('.app-nav-item').bind('click', function (item) {
          // console.log("------3-----" + $(this).attr('id'));
          clickCard($(this).attr('id'), $(this).attr('destinationUrl'), $(this).attr('targetFrame'), $(this).attr('isDestUrlExist'), $(this).attr('group'), data);
        });
      }

    }

    /**
     * To handle keyboard actions performed by user on keyboard
     * @param {Event} e - keyboard event
     * (Key-code) : Enter - 13
     * (Key-code) : Escape - 27
     * (Key-code) : Left Arrow - 37
     * (Key-code) : Up Arrow - 38
     * (Key-code) : Right Arrow - 39
     * (Key-code) : Down Arrow - 40
     */
    function handleKeyboardActions(e) {
      var keyCode = e.keyCode;
      if (keyCode != 39 && keyCode != 37 && keyCode != 38 && keyCode != 40 && keyCode != 13 && keyCode != 27)
        return;
      var element = e.target;
      if (!element)
        return;
      if (element.nodeName == 'A') {
        element = element.parentNode;
      }
      var $nav = $("#app-strip");
      var $gridTopLevel = $("#grid_toplevl_container");

      var nextDiff = (keyCode == 39) ? 1 :  - 1;
      var nextIndex = 0;
      var nextElement = element;
      var id;
      var type = element.getAttribute('type');
      var index;
      var lastIndex = 0;
      var stopEvent = false;

      if (type == 'subcluster' && keyCode == 38) {
        var grp = element.getAttribute('group');
        var categoryindex = $nav.find('.cluster-container[name=' + grp + ']').attr('categoryindex');
        $gridTopLevel.find('.app-nav-item[type=cluster][categoryindex=' + categoryindex + ']').click();
        element = $gridTopLevel.find('.app-nav-item[type=cluster][categoryindex=' + categoryindex + ']')[0];
        id = element.getAttribute('id');
        $gridTopLevel.find('#' + id + '_' + categoryindex)[0].focus();
        stopEvent = true;
      }

      if (type == 'cluster' && (keyCode == 40 || keyCode == 13)) {
        var categoryIndex = element.getAttribute("categoryindex");
        $gridTopLevel.find(".app-nav-item[type=cluster][categoryindex=" + categoryIndex + "]").click();
        stopEvent = true;
      }
      if (keyCode == 27) {
        id = $gridTopLevel.find(".app-nav-item[type=cluster][isExpanded=true]").attr('group');
        $gridTopLevel.find('#' + id).click();
        var c = $gridTopLevel.find('#' + id).attr('categoryindex');
        $gridTopLevel.find('#' + id + '_' + c)[0].focus();

        stopEvent = true;
      }

      if (stopEvent) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (keyCode == 38 || keyCode == 40 || keyCode == 13 || keyCode == 27)
        return;

      if (type == 'subcluster') {
        index = element.getAttribute('index');
        nextIndex = parseInt(index) + nextDiff;

        var group = element.getAttribute('group');
        var $clusterContainer = $nav.find('#' + group + '_container');
        lastIndex = $clusterContainer.find('.app-nav-item').length;
        nextIndex = (nextIndex < 0) ? lastIndex - 1 : (nextIndex >= lastIndex) ? 0 : nextIndex;

        nextElement = $clusterContainer.find('.app-nav-item[type=subcluster][index=' + nextIndex + ']')[0];
        if (nextElement) {
          id = nextElement.getAttribute('id');
        }
        else {
          nextIndex = 0;
          id = $clusterContainer.find('.app-nav-item[type=subcluster][index=' + nextIndex + ']').attr('id');
        }
        $clusterContainer.find('#' + id + '_' + nextIndex)[0].focus();
        stopEvent = true;
      }
      else {
        index = element.getAttribute('categoryindex');
        nextIndex = parseInt(index) + nextDiff;
        lastIndex = $gridTopLevel.find('.app-nav-item').length;
        nextIndex = (nextIndex < 0) ? lastIndex - 1 : (nextIndex >= lastIndex) ? 0 : nextIndex;

        nextElement = $gridTopLevel.find('.app-nav-item[categoryindex=' + nextIndex + ']')[0];
        if (nextElement) {
          id = nextElement.getAttribute('id');
        }
        else {
          nextIndex = 0;
          id = $gridTopLevel.find('.app-nav-item[categoryindex=' + nextIndex + ']').attr('id');
        }
        $gridTopLevel.find('#' + id + '_' + nextIndex)[0].focus();
        stopEvent = true;
      }

      if (stopEvent) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    function clickCard(itemNodeId, destinationUrl, targetFrame, isDestUrlExist) {
      console.log("-------------entered film strip card clik----" + itemNodeId);
      //      if (isDestUrlExist === "true" && destinationUrl.length > 0) {
      //        window.open(destinationUrl, targetFrame);
      //      }
      // else {
      var $clustercontainer = "";
      var $nav = $("#app-strip");
     
      var $items = $nav.find('.app-nav-item');
      var num_items = $items.length;
      $items.each(function (i) {
    
        var id = $(this).attr('id');
        console.log("----id----" + i + "-----" + id);
        $clustercontainer = $(this).children()[i];
        var str = '#' + itemNodeId + '_svg';
        console.log("----str----" + str);
        var $svg = $(this).find(str);
        console.log("----svg----" + $svg);
       
     //   console.log("----------" + $clustercontainer.className);
        if (id == itemNodeId) {
       // $(this).style= "top: 10px;"
        // $(this).css('top', '14px');
             $(this).children()[0].style = "opacity: 1;width:58px;height:58px; margin: -8px 0px;";
            $(this).children()[1].style = "opacity: 1;";
         //    $(this).children()[1].style = "color:#2e444c;";
          ////  $(this).children()[1].toggleClass('app-nav-film-label-selected','app-nav-film-label');
          //  $clustercontainer.removeClass("svg-nav-film-cluster").addClass("svg-nav-film-cluster-selected");
        }
        else {
      // $(this).style= "top: 20px;"
      //   $(this).css('top', '20px');
          var child1 = $(this).children()[0];
          console.log("---------child-" + child1);
          //$('.').removeClass('');
          //  $(child1).removeClass("svg-nav-film-cluster svg-nav-film-cluster-selected");
             $(this).children()[0].style = "opacity: 0.5;width:48px;height:48px;margin:0px 0px;";
           //  $(this).children()[0].style = "width: 48px";
           //  $(this).children()[0].style = "height: 48px";
             $(this).children()[1].style = "height: 40px;";
              $(this).children()[1].style = "opacity: 0.7;";
              
          //  $(this).children()[1].toggleClass('app-nav-film-label-selected','app-nav-film-label');
        }
        console.log("----id----" + id);
        //        $clustercontainer = $nav.find(".app-nav-item[id='" + itemNodeId + "']");
        //         $clustercontainer.children()[0].style = "opacity: 0.5";
        //         $clustercontainer.children()[1].style = "opacity: 0.7";
      });

      var hiddenButton = AdfPage.PAGE.findComponentByAbsoluteId(hiddenCmdBtnIdVal);
      var adfCustomEvent = new AdfCustomEvent(hiddenButton, "iconClicked", 
      {
        itemNodeId : itemNodeId
      },
false);
      adfCustomEvent.queue(true);

    }
  }
  window.filmStripLayoutManager = new FilmStripLayoutManager();
})();