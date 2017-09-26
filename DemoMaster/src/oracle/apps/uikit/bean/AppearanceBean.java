package oracle.apps.uikit.bean;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import javax.faces.event.ActionEvent;
import oracle.apps.uikit.common.bean.UtilsBean;

public class AppearanceBean {
    private UtilsBean _utils = new UtilsBean();
    //Home Layout
    private String _homeLayoutPreviewImage;
    private Map<String, String> _homeLayoutPreviewImageMap= new HashMap<String,String>();
    private String _homePageView;
    private String _homePageOption;
    //Themes
    private ArrayList<Theme> _themesList = new ArrayList<Theme>();
    private Theme _chosenTheme;

    public AppearanceBean(){
        super();
        //
        _buildHomeLayoutPreviewImageMap();
        _buildThemesList();
        //
        //Initialize current home page view
        String homePageView = (String)_utils.evaluateEL("#{SessionState.homePageView}");
        setHomePageView(homePageView);
        //
        //Initialize current home page option
        String homePageOption = (String)_utils.evaluateEL("#{SessionState.homePageOption}");
        setHomePageOption(homePageOption);
        //
        //Initialize current home page preview image
        setHomeLayoutPreviewImage(getHomeLayoutPreviewImage());
        //
        //Initialize current Theme
        String currThemeValue = (String)_utils.evaluateEL("#{SessionState.skinFamily}");
        for (Theme t : _themesList){
            if (t.getValue().equalsIgnoreCase(currThemeValue)){
                _chosenTheme = t;
                break;
            }//check theme
        }//loop through themes
        //
    }//constructor

    public void applyHomeLayout(ActionEvent actionEvent) {
        _utils.setEL("#{SessionState.homePageView}", getHomePageView());
        _utils.setEL("#{SessionState.homePageOption}", getHomePageOption());
        //
        if (getHomePageOption().equals("social"))
            _utils.setEL("#{SessionState.bannerPanelView}", "summary");
        else if (getHomePageOption().equals("announcements"))
            _utils.setEL("#{SessionState.bannerPanelView}", "detail");
    }//applyHomeLayout

    public void applyTheme(ActionEvent actionEvent) {
        _utils.setEL("#{SessionState.skinFamily}", getChosenTheme().getValue());
        _utils.setEL("#{SessionState.skinFamilyLabel}", getChosenTheme().getLabel());
        _utils.refreshView();
    }//applyTheme

    //**************************************************************************
    // Accessors
    //**************************************************************************

    public void setHomeLayoutPreviewImage(String s) { _homeLayoutPreviewImage = s; }
    public String getHomeLayoutPreviewImage() {
        String layoutKey = getHomePageView() + getHomePageOption();
        _homeLayoutPreviewImage = getHomeLayoutPreviewImageMap().get(layoutKey);
        return _homeLayoutPreviewImage;
    }//getHomeLayoutPreviewImage
    public void setHomeLayoutPreviewImageMap(Map<String, String> m) { _homeLayoutPreviewImageMap = m; }
    public Map<String, String> getHomeLayoutPreviewImageMap() { return _homeLayoutPreviewImageMap; }
    public void setHomePageView(String s) { _homePageView = s; }
    public String getHomePageView() { return _homePageView; }
    public void setHomePageOption(String s) { _homePageOption = s; }
    public String getHomePageOption() { return _homePageOption; }
    public void setThemesList(ArrayList<Theme> l) { _themesList = l; }
    public ArrayList<Theme> getThemesList() { return _themesList; }
    public void setChosenTheme(Theme t) { _chosenTheme = t; }
    public Theme getChosenTheme() { return _chosenTheme; } 
    
    //**************************************************************************
    // Helpers
    //**************************************************************************

    private void _buildHomeLayoutPreviewImageMap(){
        _homeLayoutPreviewImageMap.put("BANNERsocial", "/images/qual_bannersocial_326.png");
        _homeLayoutPreviewImageMap.put("BANNERannouncements", "/images/qual_bannerannouncements_326.png");
        _homeLayoutPreviewImageMap.put("BANNERcoverImage", "/images/qual_bannerimage_326.png");
        _homeLayoutPreviewImageMap.put("BANNERnone", "/images/qual_bannernone_326.png");
        _homeLayoutPreviewImageMap.put("GRIDsocial", "/images/qual_gridsocial_326.png");
        _homeLayoutPreviewImageMap.put("GRIDannouncements", "/images/qual_gridannouncements_326.png");
        _homeLayoutPreviewImageMap.put("GRIDcoverImage", "/images/qual_gridpanelimage_326.png");
        _homeLayoutPreviewImageMap.put("GRIDnone", "/images/qual_gridnone_326.png");
    }//_homeLayoutPreviewImageMap

    private void _buildThemesList(){
        _themesList.add(new Theme("Sky Blue","SkyBlueTheme",
                                  "/images/themeScreens/skyblueThemeBanner.PNG",
                                  "/images/themeScreens/skyblueThemeGrid.PNG"));
        _themesList.add(new Theme("Autum Red","AutumRedTheme",
                                  "/images/themeScreens/autumnRedThemeBanner.PNG",
                                  "/images/themeScreens/autumnRedThemeGrid.PNG"));
        _themesList.add(new Theme("Crisp Green","CrispGreenTheme",
                                  "/images/themeScreens/crispGreenThemeBanner.PNG",
                                  "/images/themeScreens/crispGreenThemeGrid.PNG"));
        _themesList.add(new Theme("Crisp Green Banner","CrispGreenBannerTheme",
                                  "/images/themeScreens/crispGreenThemeBanner.PNG",
                                  "/images/themeScreens/crispGreenThemeGrid.PNG"));
        _themesList.add(new Theme("Dark Blue","DarkBlueTheme",
                                  "/images/themeScreens/darkBlueThemeBanner.PNG",
                                  "/images/themeScreens/darkBlueThemeGrid.PNG"));
        _themesList.add(new Theme("Dark Gray","DarkGrayTheme",
                                  "/images/themeScreens/darkGrayThemeBanner.PNG",
                                  "/images/themeScreens/darkGrayThemeGrid.PNG"));
        _themesList.add(new Theme("Default","DefaultTheme",
                                  "/images/themeScreens/darkBlueThemeBanner.PNG",
                                  "/images/themeScreens/darkBlueThemeGrid.PNG"));
        _themesList.add(new Theme("Dusty Blue Banner","DustyBlueBannerTheme",
                                  "/images/themeScreens/dustyBlueThemeBanner.PNG",
                                  "/images/themeScreens/dustyBlueThemeGrid.PNG"));
        _themesList.add(new Theme("Light Blue","LightBlueTheme",
                                  "/images/themeScreens/lightBlueThemeBanner.PNG",
                                  "/images/themeScreens/lightBlueThemeGrid.PNG"));
        _themesList.add(new Theme("Sky Blue Banner","SkyBlueBannerTheme",
                                  "/images/themeScreens/skyblueBannerThemeBanner.png",
                                  "/images/themeScreens/skyblueBannerThemeGrid.PNG"));
        _themesList.add(new Theme("Steel Gray","SteelGrayTheme",
                                  "/images/themeScreens/steelGrayThemeBanner.PNG",
                                  "/images/themeScreens/steelGrayThemeGrid.PNG"));
        _themesList.add(new Theme("Turquoise ","TurquoiseTheme",
                                  "/images/themeScreens/turquoiseThemeBanner.PNG",
                                  "/images/themeScreens/turquoiseThemeGrid.PNG"));
        _themesList.add(new Theme("Vanilla","VanillaTheme",
                                  "/images/themeScreens/vanillaThemeBanner.PNG",
                                  "/images/themeScreens/vanillaThemeGrid.PNG"));
    }//_buildThemesList

    //**************************************************************************
    // Inner Class
    //**************************************************************************

    public class Theme{
        private String _label;
        private String _value;
        private String _bannerImage;
        private String _gridImage;
        
        public Theme(){
            super();
        }//constructor
        
        public Theme(String label, String value){
            super();
            _label = label;
            _value = value;
            _bannerImage = "";
            _gridImage = "";
        }//constructor
        
        public Theme(String label, String value, String bannerImage, String gridImage){
            super();
            _label = label;
            _value = value;
            _bannerImage = bannerImage;
            _gridImage = gridImage;
        }//constructor
        
        //Accessors        
        public void setLabel(String s) { _label = s; }
        public String getLabel() { return _label; }
        public void setValue(String s) { _value = s; }
        public String getValue() { return _value; }
        public void setBannerImage(String s) { _bannerImage = s; }
        public String getBannerImage() { return _bannerImage; }
        public void setGridImage(String s) { _gridImage = s; }
        public String getGridImage() { return _gridImage; }
    }//Theme

}//AppearanceBean
