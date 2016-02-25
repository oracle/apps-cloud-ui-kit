package oracle.apps.uikit.fin.reports.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.awt.Color;
import java.util.ArrayList;
import java.util.List;
import javax.faces.event.ValueChangeEvent;
import oracle.adf.view.rich.component.rich.input.RichSelectBooleanCheckbox;
import org.apache.myfaces.trinidad.model.ChildPropertyTreeModel;
import org.apache.myfaces.trinidad.model.TreeModel;

public class GlobalSalesRevenueReportBean {

    public TreeModel getRevenueData(){
        return DATA_GLOBAL;
    }//getRevenueData

    public void handleWorldRegionChange(ValueChangeEvent valueChangeEvent) {
        RichSelectBooleanCheckbox sbc = (RichSelectBooleanCheckbox)valueChangeEvent.getComponent();
        String worldRegion = sbc.getText();
        boolean checked = (Boolean)valueChangeEvent.getNewValue();
        for (DataPoint worldRegionDataPoint : ROOT.getChildren()){
            if (worldRegionDataPoint.getName().equals(worldRegion)){
                worldRegionDataPoint.setDisplayed(checked);
                break;
            }//check required world region
        }//loop through world regions
    }//handleWorldRegionChange

    //==========================================================================
    // Construct demo data structure
    //==========================================================================

    private final TreeModel DATA_GLOBAL = new ChildPropertyTreeModel(ROOT, "children");

    private static final DataPoint ROOT = new DataPoint("Global", 2535);

    private static final DataPoint ASIA_PACIFIC = new DataPoint("Asia Pacific", 633);
    private static final DataPoint MIDDLE_EAST = new DataPoint("Middle East", 304);
    private static final DataPoint EUROPE = new DataPoint("Europe", 864);
    private static final DataPoint NORTH_AMERICA = new DataPoint("North America", 245);
    private static final DataPoint LATIN_AMERICA = new DataPoint("Latin America", 489);

    private static final DataPoint CHINA = new DataPoint("China", 284);
    private static final DataPoint INDIA = new DataPoint("India", 231);
    private static final DataPoint JAPAN = new DataPoint("Japan", 118);

    private static final DataPoint JORDAN = new DataPoint("Jordan", 80);
    private static final DataPoint MOROCCO = new DataPoint("Morocco", 83);
    private static final DataPoint UNITED_ARAB_EMIRATES = new DataPoint("United Arab Emirates", 141);

    private static final DataPoint UNITED_KINGDOM = new DataPoint("United Kingdom", 198);
    private static final DataPoint GERMANY = new DataPoint("Germany", 181);
    private static final DataPoint FRANCE = new DataPoint("France", 162);
    private static final DataPoint SPAIN = new DataPoint("Spain", 172);
    private static final DataPoint ITALY = new DataPoint("Italy", 151);

    private static final DataPoint UNITED_STATES = new DataPoint("United States", 160);
    private static final DataPoint CANADA = new DataPoint("Canada", 85);

    private static final DataPoint MEXICO = new DataPoint("Mexico", 142);
    private static final DataPoint BRAZIL = new DataPoint("Brazil", 217);
    private static final DataPoint CUBA = new DataPoint("Cuba", 130);

    private static final DataPoint BEIJING = new DataPoint("Beijing", 91);
    private static final DataPoint HONG_KONG = new DataPoint("Hong Kong", 50);
    private static final DataPoint SHANGHAI = new DataPoint("Shanghai", 73);
    private static final DataPoint MACAU = new DataPoint("Macau", 40);
    private static final DataPoint CHIZHOU = new DataPoint("Chizhou", 30);

    private static final DataPoint KOKATTA = new DataPoint("Kolkatta", 33);
    private static final DataPoint MUMBAI = new DataPoint("Mumbai", 88);
    private static final DataPoint CHENNAI = new DataPoint("Chennai", 44);
    private static final DataPoint DELHI = new DataPoint("Delhi", 66);

    private static final DataPoint TOKYO = new DataPoint("Tokyo", 53);
    private static final DataPoint SETO = new DataPoint("Seto", 26);
    private static final DataPoint OSAKA = new DataPoint("Osaka", 39);

    private static final DataPoint AMMAN = new DataPoint("Amman", 44);
    private static final DataPoint AQUABA = new DataPoint("Aquaba", 23);
    private static final DataPoint JERASH = new DataPoint("Jerash", 13);

    private static final DataPoint MARRAKECH = new DataPoint("Marrakech", 39);
    private static final DataPoint RABAT = new DataPoint("Rabat", 15);
    private static final DataPoint CASABLANCA = new DataPoint("Casablanca", 29);

    private static final DataPoint DUBAI = new DataPoint("Dubai", 63);
    private static final DataPoint ABU_DHABI = new DataPoint("Abu Dhabi", 47);
    private static final DataPoint SHARJAH = new DataPoint("Sharjah", 31);

    private static final DataPoint LONDON = new DataPoint("London", 79);
    private static final DataPoint BIRMINGHAM = new DataPoint("Birmingham", 53);
    private static final DataPoint MANCHESTER = new DataPoint("Manchester", 41);
    private static final DataPoint EDINBURGH = new DataPoint("Edinburgh", 25);

    private static final DataPoint BERLIN = new DataPoint("Berlin", 41);
    private static final DataPoint HAMBURG = new DataPoint("Hamburg", 20);
    private static final DataPoint MUNICH = new DataPoint("Munich", 51);
    private static final DataPoint COLONE = new DataPoint("Colone", 33);
    private static final DataPoint FRANKFURT = new DataPoint("Frankfurt", 22);
    private static final DataPoint STUTTGART = new DataPoint("Stuttgart", 14);

    private static final DataPoint PARIS = new DataPoint("Paris", 68);
    private static final DataPoint MARSEILLE = new DataPoint("Marseille", 39);
    private static final DataPoint LYON = new DataPoint("Lyon", 17);
    private static final DataPoint TOULOUSE = new DataPoint("Toulouse", 24);
    private static final DataPoint NICE = new DataPoint("Nice", 14);

    private static final DataPoint SEVILLE = new DataPoint("Seville", 18);
    private static final DataPoint MADRID = new DataPoint("Madrid", 48);
    private static final DataPoint CORDOBA = new DataPoint("Cordoba", 37);
    private static final DataPoint BARCELONA = new DataPoint("Barcelona", 69);

    private static final DataPoint MILAN = new DataPoint("Milan", 40);
    private static final DataPoint NAPLES = new DataPoint("Naples", 34);
    private static final DataPoint ROME = new DataPoint("Rome", 51);
    private static final DataPoint PALERMO = new DataPoint("Palermo", 26);

    private static final DataPoint NEW_YORK = new DataPoint("New York", 35);
    private static final DataPoint SAN_FRANCISCO = new DataPoint("San Francisco", 45);
    private static final DataPoint CHICAGO = new DataPoint("Chicago", 20);
    private static final DataPoint WASHINGTON = new DataPoint("Washington", 60);

    private static final DataPoint OTTAWA = new DataPoint("Ottawa", 28);
    private static final DataPoint VICTORIA = new DataPoint("VIctoria", 42);
    private static final DataPoint HALIFAX = new DataPoint("Halifax", 15);

    private static final DataPoint MEXICO_CITY = new DataPoint("Mexico City", 70);
    private static final DataPoint CAMPECHE = new DataPoint("Campeche", 11);
    private static final DataPoint MONTERREY = new DataPoint("Monterrey", 28);
    private static final DataPoint LEON = new DataPoint("Leon", 33);

    private static final DataPoint SAO_PAOLO = new DataPoint("Sao Paolo", 57);
    private static final DataPoint RIO_DE_JANEIRO = new DataPoint("Rio De Janeiro", 85);
    private static final DataPoint MANAUS = new DataPoint("Manaus", 17);
    private static final DataPoint CURITIBA = new DataPoint("Curitiba", 28);
    private static final DataPoint SALVADOR = new DataPoint("Salvador", 30);

    private static final DataPoint HAVANA = new DataPoint("Havana", 19);
    private static final DataPoint SANTA_CLARA = new DataPoint("Santa Clara", 37);
    private static final DataPoint BAYAMO = new DataPoint("Bayamo", 53);
    private static final DataPoint LAS_TUNAS = new DataPoint("Las Tunas", 21);

    static{
        ROOT.addChild(ASIA_PACIFIC);
        ROOT.addChild(MIDDLE_EAST);
        ROOT.addChild(EUROPE);
        ROOT.addChild(NORTH_AMERICA);
        ROOT.addChild(LATIN_AMERICA);

        ASIA_PACIFIC.addChild(CHINA);
        ASIA_PACIFIC.addChild(INDIA);
        ASIA_PACIFIC.addChild(JAPAN);

        MIDDLE_EAST.addChild(JORDAN);
        MIDDLE_EAST.addChild(MOROCCO);
        MIDDLE_EAST.addChild(UNITED_ARAB_EMIRATES);

        EUROPE.addChild(UNITED_KINGDOM);
        EUROPE.addChild(GERMANY);
        EUROPE.addChild(FRANCE);
        EUROPE.addChild(SPAIN);
        EUROPE.addChild(ITALY);

        NORTH_AMERICA.addChild(UNITED_STATES);
        NORTH_AMERICA.addChild(CANADA);

        LATIN_AMERICA.addChild(MEXICO);
        LATIN_AMERICA.addChild(BRAZIL);
        LATIN_AMERICA.addChild(CUBA);

        CHINA.addChild(BEIJING);
        CHINA.addChild(HONG_KONG);
        CHINA.addChild(SHANGHAI);
        CHINA.addChild(MACAU);
        CHINA.addChild(CHIZHOU);

        INDIA.addChild(KOKATTA);
        INDIA.addChild(MUMBAI);
        INDIA.addChild(CHENNAI);
        INDIA.addChild(DELHI);

        JAPAN.addChild(TOKYO);
        JAPAN.addChild(SETO);
        JAPAN.addChild(OSAKA);

        JORDAN.addChild(AMMAN);
        JORDAN.addChild(AQUABA);
        JORDAN.addChild(JERASH);

        MOROCCO.addChild(MARRAKECH);
        MOROCCO.addChild(RABAT);
        MOROCCO.addChild(CASABLANCA);

        UNITED_ARAB_EMIRATES.addChild(DUBAI);
        UNITED_ARAB_EMIRATES.addChild(ABU_DHABI);
        UNITED_ARAB_EMIRATES.addChild(SHARJAH);

        UNITED_KINGDOM.addChild(LONDON);
        UNITED_KINGDOM.addChild(BIRMINGHAM);
        UNITED_KINGDOM.addChild(MANCHESTER);
        UNITED_KINGDOM.addChild(EDINBURGH);

        GERMANY.addChild(BERLIN);
        GERMANY.addChild(HAMBURG);
        GERMANY.addChild(MUNICH);
        GERMANY.addChild(COLONE);
        GERMANY.addChild(FRANKFURT);
        GERMANY.addChild(STUTTGART);

        FRANCE.addChild(PARIS);
        FRANCE.addChild(MARSEILLE);
        FRANCE.addChild(LYON);
        FRANCE.addChild(TOULOUSE);
        FRANCE.addChild(NICE);

        SPAIN.addChild(SEVILLE);
        SPAIN.addChild(MADRID);
        SPAIN.addChild(CORDOBA);
        SPAIN.addChild(BARCELONA);

        ITALY.addChild(MILAN);
        ITALY.addChild(NAPLES);
        ITALY.addChild(ROME);
        ITALY.addChild(PALERMO);

        UNITED_STATES.addChild(NEW_YORK);
        UNITED_STATES.addChild(SAN_FRANCISCO);
        UNITED_STATES.addChild(CHICAGO);
        UNITED_STATES.addChild(WASHINGTON);

        CANADA.addChild(OTTAWA);
        CANADA.addChild(VICTORIA);
        CANADA.addChild(HALIFAX);

        MEXICO.addChild(MEXICO_CITY);
        MEXICO.addChild(CAMPECHE);
        MEXICO.addChild(MONTERREY);
        MEXICO.addChild(LEON);

        BRAZIL.addChild(SAO_PAOLO);
        BRAZIL.addChild(RIO_DE_JANEIRO);
        BRAZIL.addChild(MANAUS);
        BRAZIL.addChild(CURITIBA);
        BRAZIL.addChild(SALVADOR);

        CUBA.addChild(HAVANA);
        CUBA.addChild(SANTA_CLARA);
        CUBA.addChild(BAYAMO);
        CUBA.addChild(LAS_TUNAS);
    }//static

    //==========================================================================
    // Inner Class 'DataPoint'
    //==========================================================================

    public static class DataPoint{
        private final String _name;
        private final int _amount;
        private final Color _color;
        private boolean _displayed;
        private final List<DataPoint> _children;

        public DataPoint(String name, int amount){
            _name = name;
            _amount = amount;
            if (amount < 50)
                _color = new Color(38,125,179);
            else if (amount < 100)
                _color = new Color(104,193,130);
            else if (amount < 250)
                _color = new Color(250,213,92);
            else
                _color = new Color(237,102,71);
            _displayed = true;
            _children = new ArrayList<DataPoint>();
        }//constructor

        public void addChild(DataPoint child){
            _children.add(child);
        }//addChild

        //Accessors
        public String getName(){ return _name; }
        public int getAmount(){ return _amount; }
        public Color getColor(){ return _color; }
        public void setDisplayed(boolean b) { _displayed = b; }
        public boolean isDisplayed() { return _displayed; }
        public List<DataPoint> getChildren(){ return _children; }
    }//DataPoint
}//GlobalSalesRevenueReportBean
