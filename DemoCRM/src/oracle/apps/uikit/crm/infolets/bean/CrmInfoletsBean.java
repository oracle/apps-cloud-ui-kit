package oracle.apps.uikit.crm.infolets.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.List;

public class CrmInfoletsBean {
    private List<Object[]> _leadsData;
    private List<Object[]> _dealRegistrationData;
    private List<Object[]> _optyByStageData;
    private List<Object[]> _revenueByStageData;

    public CrmInfoletsBean(){
        _populateLeadsData();
        _populateDealRegistrationData();
        _populateOptyByStageData();
        _populateRevenueByStageData();
    }//constructor

    private void _populateLeadsData(){
        if (_leadsData == null){
            _leadsData = new ArrayList<Object[]>();
            Object[] obj1 = { "New", "New Leads", 50000 };
            Object[] obj2 = { "Open", "Open Leads", 114000 };
            Object[] obj3 = { "Converted", "Converted Leads", 135000 };
            Object[] obj4 = { "Rejected", "Rejected Leads", 47000 };
            _leadsData.add(obj1);
            _leadsData.add(obj2);
            _leadsData.add(obj3);
            _leadsData.add(obj4);
        }//null check
    }//_populateLeadsData

    private void _populateDealRegistrationData(){
        if (_dealRegistrationData == null){
            _dealRegistrationData = new ArrayList<Object[]>();
            Object[] obj1 = { "60 days", "60 days expiration", 101000 };
            Object[] obj2 = { "30 days", "30 days expiration", 115000 };
            Object[] obj3 = { "15 days", "15 days expiration", 37000 };
            _dealRegistrationData.add(obj1);
            _dealRegistrationData.add(obj2);
            _dealRegistrationData.add(obj3);
        }//null check
    }//_populateDealRegistrationData

    private void _populateOptyByStageData(){
        if (_optyByStageData == null){
            _optyByStageData = new ArrayList<Object[]>();
            Object[] obj1 = { "Open", "Open Opportunities", 151 };
            Object[] obj2 = { "Closed", "Closed Opportunities", 263 };
            Object[] obj3 = { "Lost", "Lost Opportunities", 73 };
            _optyByStageData.add(obj1);
            _optyByStageData.add(obj2);
            _optyByStageData.add(obj3);
        }//null check
    }//_populateOptyByStageData

    private void _populateRevenueByStageData(){
        if (_revenueByStageData == null){
            _revenueByStageData = new ArrayList<Object[]>();
            Object[] obj1 = { "Open", "Open Revenue", 444000 };
            Object[] obj2 = { "Closed", "Closed Revenue", 811000 };
            Object[] obj3 = { "Lost", "Lost Revenue", 290000 };
            _revenueByStageData.add(obj1);
            _revenueByStageData.add(obj2);
            _revenueByStageData.add(obj3);
        }//null check
    }//_populateRevenueByStageData

    //Accessors
    public void setLeadsData(List<Object[]> l) { _leadsData = l; }
    public List<Object[]> getLeadsData() { return _leadsData; }
    public void setDealRegistrationData(List<Object[]> l) { _dealRegistrationData = l; }
    public List<Object[]> getDealRegistrationData() { return _dealRegistrationData; }
    public void setOptyByStageData(List<Object[]> l) { _optyByStageData = l; }
    public List<Object[]> getOptyByStageData() { return _optyByStageData; }
    public void setRevenueByStageData(List<Object[]> l) { _revenueByStageData = l; }
    public List<Object[]> getRevenueByStageData() { return _revenueByStageData; }
}//CrmInfoletsBean
