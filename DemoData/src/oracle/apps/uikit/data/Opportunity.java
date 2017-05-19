package oracle.apps.uikit.data;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.Date;

public class Opportunity {
    private int _id;
    private String _name;
    private String _account;
    private int _winPercent;
    private int _amount;
    private String _status;
    private String _salesStage;
    private Date _closeDate;
    private String _owner;
    private Date _lastUpdated;

    public Opportunity(int id, String name, String account, int winPercent,
                       int amount, String status, String salesStage,
                       Date closeDate, String owner, Date lastUpdated){
        _id = id;
        _name = name;
        _account = account;
        _winPercent = winPercent;
        _amount = amount;
        _status = status;
        _salesStage = salesStage;
        _closeDate = closeDate;
        _owner = owner;
        _lastUpdated = lastUpdated;
    }//constructor

    public String getWinPercentStyle(){
        String style = "percent-100";
        if(_winPercent <= 20)
            style = "percent-20";
        else if(_winPercent <= 40)
            style = "percent-40";
        else if(_winPercent <= 60)
            style = "percent-60";
        else if(_winPercent <= 80)
            style = "percent-80";
        return style;
    }//getWinPercentStyle

    //Accessors
    public void setId(int i) { _id = i; }
    public int getId() { return _id; }
    public void setName(String s) { _name = s; }
    public String getName() { return _name; }
    public void setAccount(String s) { _account = s; }
    public String getAccount() { return _account; }
    public void setWinPercent(int i) { _winPercent = i; }
    public int getWinPercent() { return _winPercent; }
    public void setAmount(int i) { _amount = i; }
    public int getAmount() { return _amount; }
    public void setStatus(String s) { _status = s; }
    public String getStatus() { return _status; }
    public void setSalesStage(String s) { _salesStage = s; }
    public String getSalesStage() { return _salesStage; }
    public void setCloseDate(Date d) { _closeDate = d; }
    public Date getCloseDate() { return _closeDate; }
    public void setOwner(String s) { _owner = s; }
    public String getOwner() { return _owner; }
    public void setLastUpdated(Date d) { _lastUpdated = d; }
    public Date getLastUpdated() { return _lastUpdated; }
}//Opportunity
