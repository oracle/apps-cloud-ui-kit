/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
(function () {

    function HomeLayoutManager() {
        var prevScreenThreshold = 1024;
        var dirRtl = false;
        var homePageLayout = 'grid';
        var hiddenCmdBtnId = "pt1:cbHidden";
        var colCount = 6;
        var subClusterItemCount = 7;
        var rootmenu = '';
        this.handleDocumentLoad = function (rootMenuData, hiddenCmdBtnId) {
            rootmenu = rootMenuData;
            if (hiddenCmdBtnId === undefined) {
                hiddenCmdBtnId = hiddenCmdBtnId;
            }
            hiddenCmdBtnId = hiddenCmdBtnId;
            var prop = JSON.parse(rootMenuData);

            if (prop.length < 1) {
                return;
            }

            var rootMenuDataItems = {
                'items' : prop
            };

            generateHomeGrid(rootMenuDataItems);

            // inject svg icons
            var icons = document.querySelectorAll('.suiicon');
            suiicons.inject(icons, null, dirRtl);

            window.addEventListener('resize', function () {
                var navDiv = $('#app-navigation');
                if (navDiv == undefined || navDiv.length < 1)
                    return;
                //Calculate the screen width
                var screenWidth = window.innerWidth;

                switch (prevScreenThreshold) {
                    case 1024:
                        if (screenWidth > 1279)
                            arrangeNavigationElementsOnHomePage(true);
                        break;

                    case 1280:
                        if (screenWidth > 1439 || screenWidth < 1280)
                            arrangeNavigationElementsOnHomePage(true);
                        break;

                    case 1440:
                        if (screenWidth < 1439)
                            arrangeNavigationElementsOnHomePage(true);
                        break;

                    default :
                        break;

                }
            },
true);
        }

        function generateHomeGrid(data) {
            var $nav = $('#app-navigation');
            var html = "";
            var divTopLevel = "";
            var clusterhtml = '';
            var clustercontainerhtml = '';
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
                if (item.type == 'cluster') {
                    html += "<div style='position:absolute;opacity:0' " + "id='" + id + "'" + "class='app-nav-item " + "' filmstrip='" + itemlabel + "' page='" + item.url + "' index=" + i + " type='" + item.type + "' " + " title='" + itemlabel + "' " + " group='" + item.group + "' " + " categoryindex='" + categorycount + "' " + " role='presentation' isExpanded='false' >" + "<div class='svg-nav svg-cluster-show suiicon' data-icon='" + "navi_" + item.icon + "' aria-hidden='true' role='presentation' focusable='false' >" + "</div>" + "<a id='" + id + "_" + categorycount + "' class='app-nav-label top-nav-label' role='menuitem' aria-haspopup='true' tabindex='" + tabindex + "'>" + itemlabel + "</a>" + "</div>";

                    clustercontainerhtml += '<div class="cluster-container"' + ' id="' + id + '_container"' + ' name="' + item.group + '"' + ' role="menubar"' + ' categoryindex="' + categorycount++ + '"' + '>' + clusterhtml + '</div>';
                    index = 0;
                    clusterhtml = "";

                }
                else if (item.type == 'toplevel') {
                    html += "<div style='position:absolute;opacity:0' " + "id='" + id + "'" + "class='app-nav-item " + "' filmstrip='" + itemlabel + "' page='" + item.url + "' index=" + i + " type='" + item.type + "' " + " title='" + itemlabel + "' " + " group='" + item.group + "' " + " categoryindex='" + categorycount + "' " + " destinationUrl='" + item.destinationUrl + "' " + " targetFrame='" + item.targetFrame + "' " + " isDestUrlExist='" + item.isDestUrlExist + "'  " + " role='presentation' >" + "<div class='svg-nav suiicon' data-icon='" + "navi_" + item.icon + "' aria-hidden='true' role='presentation' focusable='false' >" + "</div>" + "<a id='" + id + "_" + categorycount++ + "' class='app-nav-label top-nav-label' role='menuitem' href='#' tabindex='" + tabindex + "'>" + itemlabel + "</a>" + "</div>";
                    index = 0;
                }
                else {
                    clusterhtml += "<div style='position:absolute;opacity:0; z-index:100' " + "id='" + id + "'" + "class='app-nav-item " + "' filmstrip='" + itemlabel + "' page='" + item.url + "' index=" + index + " type='" + item.type + "' " + " title='" + itemlabel + "' " + " group='" + item.group + "' " + " destinationUrl='" + item.destinationUrl + "' " + " targetFrame='" + item.targetFrame + "' " + " isDestUrlExist='" + item.isDestUrlExist + "' " + " role='presentation' >" + "<div class='svg-nav-cluster suiicon' data-icon='" + "navi_" + item.icon + "' aria-hidden='true' role='presentation' focusable='false' >" + "</div>" + "<a id='" + id + "_" + index + "' class='app-nav-label' role='menuitem' href='#'  tabindex='" + index++ + "'>" + itemlabel + "</a>" + "</div>";

                }
            });

            //insert the created html into app-navigation container
            divTopLevel += "<div class='toplevelContainer' role='menubar' id='grid_toplevl_container'>" + html + "</div>";
            $nav.html(divTopLevel);
            //$nav.append(clusterhtml);
            $nav.append(clustercontainerhtml);
            $nav.keydown(function (e) {
                handleKeyboardActions(e);
            });
            //bind the springboard items to click
            console.log("data-------b4 bindNavItems-----" + data);
            bindNavItems(data);

            arrangeNavigationElementsOnHomePage(false);

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
            var $nav = $("#app-navigation");
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
                /*$('.cluster-container').each(function(a) {
                    var check = $(this).css('display');
                    if ('block' == check) {
                        id = $(this).attr('name');
                        $gridTopLevel.find('#' + id).click();
                        var c = $gridTopLevel.find('#' + id).attr('categoryindex');
                        $gridTopLevel.find('#' + id + '_' + c)[0].focus();
                    }
                });*/

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

        function bindNavItems(data) {
            var $nav = $("#app-navigation");
            var $gridTopLevel = $("#grid_toplevl_container");
            var $clusterContainers = $nav.find('.cluster-container');

            for (var a = 0;a < $clusterContainers.length;a++) {
                $clusterContainer = $clusterContainers[a];
                $clusterContainers.find('.app-nav-item').bind('click', function (item) {
                    clickCard($(this).attr('id'), $(this).attr('destinationUrl'), $(this).attr('targetFrame'), $(this).attr('isDestUrlExist'), $(this).attr('group'), data);
                });
            }

            var check;

            $('#app-navigation').on('click', function () {
                $('.cluster-container').each(function (i) {
                    check = $(this).css('display');
                    if (check == 'block') {
                        return false;
                    }
                });
            });

            $gridTopLevel.find('.app-nav-item[type=cluster]').on('click', function (i) {

                //Fadeout any open cluster containers
                $('.cluster-container[name!=' + $(this).attr('group') + ']').fadeOut();

                //Change the opacity of other clusters and top level icons so that selected cluster is highlighted
                $gridTopLevel.find('.app-nav-item').each(function (i) {
                    index = $(this).attr('categoryindex');
                    if (index != i) {
                        $(this).children()[0].style = "opacity: 0.5";
                        $(this).children()[1].style = "opacity: 0.7";
                    }
                    else {
                        $(this).children()[0].style = "opacity: 1";
                        $(this).children()[1].style = "opacity: 1";
                    }
                });

                //Now, if cluster is already open, hide it else open it
                if ($('.cluster-container[name=' + $(this).attr('group') + ']').css('display') == 'block') {
                    $('.cluster-container[name=' + $(this).attr('group') + ']').hide();
                    moveFilmStripUp($(this).attr('categoryindex'));
                    $(this).attr('isExpanded', 'false');
                }
                else {
                    $('.cluster-container[name=' + $(this).attr('group') + ']').show();
                    moveFilmStripDown($(this).attr('categoryindex'), $(this).attr('group'));
                    $(this).attr('isExpanded', 'true');
                    var id = $nav.find('.app-nav-item[type=subcluster][index=0][group=' + $(this).attr('group') + ']').attr('id');
                    $nav.find('#' + id + '_0')[0].focus();
                }
            });

            $gridTopLevel.find('.app-nav-item[type=toplevel]').bind('click', function (i) {
                clickCard($(this).attr('id'), $(this).attr('destinationUrl'), $(this).attr('targetFrame'), $(this).attr('isDestUrlExist'), $(this).attr('group'), data);
            });
        }

        function clickCard(itemNodeId, destinationUrl, targetFrame, isDestUrlExist, group, data) {
            var clickedGroup="";
            $.each(data.items, function (i, item) {
                var id = item.id;
                if (item.group == group && item.type == 'subcluster') {
                    clickedGroup += item;
                }
            });
//            if (isDestUrlExist === "true" && destinationUrl.length > 0) {
//              //  window.open(destinationUrl, targetFrame);
//            }
//            else {
                var $nav = $("#app-navigation");
                $nav.find(".app-nav-item[id!=" + itemNodeId + "]").children()[0].style = "opacity: 0.5";
                $nav.find(".app-nav-item[id!=" + itemNodeId + "]").children()[1].style = "opacity: 0.7";
                var hiddenButton = AdfPage.PAGE.findComponentByAbsoluteId(hiddenCmdBtnId);
                var adfCustomEvent = new AdfCustomEvent(hiddenButton, "iconClicked", 
                {
                    itemNodeId : itemNodeId,group:group
                },
false);
                adfCustomEvent.queue(true);
            }
        

        function moveFilmStripDown(index, name) {
            var $nav = $("#app-navigation");
            var $gridTopLevel = $("#grid_toplevl_container");

            var $items = $gridTopLevel.find('.app-nav-item');
            var num_items = $items.length;

            /**
             * responsive design for number of columns
             */
            var containerW = window.innerWidth;

            var cellWidth = 155;
            var cellHeight = 153;

            if (containerW < 1279) {
                colCount = 4;
            }
            else if (containerW < 1439) {
                colCount = 5;
            }
            else {
                colCount = 6;
            }
            if (homePageLayout === undefined)
                homePageLayout = 'grid';
            if (homePageLayout == 'banner') {
                $nav.css( {
                    "background-color" : "none"
                });

                colCount = 6;
            }

            if (num_items <= 9) {
                colCount = 3;
                cellWidth = 178;
            }

            var topPadding = 10;

            var clustername = $gridTopLevel.find('.app-nav-item[type=cluster][categoryindex=' + index + ']');
            var movedistance = parseInt($('.cluster-container[name=' + clustername.attr('group') + ']').css('height'));
            var h = (Math.ceil(num_items / colCount)) * cellHeight + 10 + movedistance;

            $nav.css( {
                "height" : h
            });

            var clickedRow = parseInt(index / colCount) * colCount + colCount - 1;
            var reqMoveDist = 0;

            $nav.find('.app-nav-item[type!=subcluster]').each(function (i) {

                if ($(this).attr('categoryindex') > 0) {
                    var position = topPadding + parseInt($(this).attr('categoryindex') / colCount) * cellHeight;

                    if ($(this).attr('categoryindex') <= clickedRow) {
                        reqMoveDist = 0;
                    }
                    else {
                        reqMoveDist = movedistance;
                    }

                    $(this).animate( {
                        'top' : position + reqMoveDist
                    },
300)

                }
            });

            $nav.find('.app-nav-item[type!=subcluster]').each(function (i) {
                if (index != i) {
                    $(this).children()[0].style = "opacity: 0.5";
                    $(this).children()[1].style = "opacity: 0.7";
                }
            });

        }

        function moveFilmStripUp(index) {
            var $nav = $("#app-navigation");
            var $gridTopLevel = $("#grid_toplevl_container");

            var $items = $gridTopLevel.find('.app-nav-item');
            var num_items = $items.length;

            /**
             * responsive design for number of columns
             */
            var containerW = window.innerWidth;
            var cellWidth = 155;
            var cellHeight = 153;

            if (containerW < 1279) {
                colCount = 4;
            }
            else if (containerW < 1439) {
                colCount = 5;
            }
            else {
                colCount = 6;
            }

            if (homePageLayout === undefined)
                homePageLayout = 'grid';
            if (homePageLayout == 'banner') {
                $nav.css( {
                    "background-color" : "none"
                });

                colCount = 6;
            }

            if (num_items <= 9) {
                colCount = 3;
                cellWidth = 178;
            }

            var topPadding = 10;
            var h = (Math.ceil(num_items / colCount)) * cellHeight + 10;
            $nav.css( {
                "height" : h
            });

            $nav.find('.app-nav-item[type!=subcluster]').each(function (i) {

                if ($(this).attr('categoryindex') > (parseInt(index / colCount) * colCount + colCount - 1)) {
                    var position = topPadding + parseInt($(this).attr('categoryindex') / colCount) * cellHeight;

                    $(this).animate( {
                        'top' : position
                    },
300)

                }

            });

            $nav.find('.app-nav-item[type!=subcluster]').each(function (i) {
                $(this).css( {
                    "opacity" : "1"
                });
            });

        }

        function arrangeNavigationElementsOnHomePage(animate) {
            $('#app-navigation').show();
            var $nav = $("#app-navigation");
            var $gridTopLevel = $("#grid_toplevl_container");
            var $items = $gridTopLevel.find('.app-nav-item');
            var num_items = $items.length;

            /**
             * responsive design for number of columns
             */
            var containerW = window.innerWidth;

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

            if (homePageLayout === undefined)
                homePageLayout = 'grid';
            if (homePageLayout == 'banner') {
                $nav.css( {
                    "background-color" : "none"
                });
                // Banner mode always columns should be match with the min width of the banner image which is ideally 1024
                colCount = 6;
                cellWidth = 155;
                subClusterColCount = 7;
                subClusterCellWidth = 132;
                prevScreenThreshold = 1440;
            }

            // these are the initial 
            var leftPadding = 15;
            var topPadding = 10;
            var subClusterLeftPaddding = 5;
            var subClusterTopPaddding =  - 5;

            var h = (Math.ceil(num_items / colCount)) * cellHeight + 10;
            var w = colCount * cellWidth;

            $nav.css( {
                "height" : h, "width" : w
            });

            //if cluster container is empty, code errors out. So check if cluster container contains any element before using it
            var $cluster = $nav.find(".cluster-container");
            var $clustercontainer = "";

            $items.each(function (i) {
                $item = $(this);
                $item.removeClass('selected');
                if (dirRtl == false) {
                    $item.animate( {
                        "opacity" : 1, "left" : leftPadding + (i % colCount) * cellWidth, "top" : topPadding + parseInt(i / colCount) * cellHeight
                    },
600);
                }
                else {
                    $item.animate( {
                        "opacity" : 1, "right" : leftPadding + (i % colCount) * cellWidth, "top" : topPadding + parseInt(i / colCount) * cellHeight
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
                    else {
                        $clustercontainer.css( {
                            "top" : topPadding + parseInt(i / colCount) * cellHeight + cellHeight, "height" : clustercontainerheight * 100 + 10, "width" : cellWidth * (colCount - 1) + 2 * leftPadding, "right" : subClusterLeftPaddding
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

                        //If the position of the first element is beyond the offset of app-navigation div, start from the left position of app-navigation
(firstSubclusterElmntPos < $nav.offset().left) ? firstSubclusterElmntPos = 20 : firstSubclusterElmntPos = (firstSubclusterElmntPos - $nav.offset().left);

                        //Also, find out last sub cluster element's position
                        lastClusterElmntPos = $nav.offset().left + (colCount * cellWidth);

                        lastSubClusterElmntPos = $nav.offset().left + firstSubclusterElmntPos + (subClusterCellWidth * subClusterItemCount);

                        //If the last sub-cluster element position is greater than the last cluster element position, subtract the offset from the first sub cluster element's position
                        if (lastSubClusterElmntPos > lastClusterElmntPos) {
                            firstSubclusterElmntPos = firstSubclusterElmntPos - (lastSubClusterElmntPos - lastClusterElmntPos);
                        }

                        $childNodes.each(function (i) {
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
                    // else left align the cluster items
                    else {
                        $childNodes.each(function (i) {
                            $item = $(this);
                            $item.removeClass('selected');

                            if (dirRtl == false) {
                                $item.css( {
                                    "opacity" : 1, "left" : leftPadding + (i % subClusterColCount) * subClusterCellWidth, "margin-top" : parseInt(i / subClusterColCount) * 100 + subClusterTopPaddding
                                });
                            }
                            else {
                                $item.css( {
                                    "opacity" : 1, "right" : leftPadding + (i % subClusterColCount) * subClusterCellWidth, "margin-top" : parseInt(i / subClusterColCount) * 100 + subClusterTopPaddding
                                });
                            }
                        });
                    }

                    if (animate == true)
                        $clustercontainer.fadeOut();

                }
            });
        }
    }

    window.homeLayoutManager = new HomeLayoutManager();
})();