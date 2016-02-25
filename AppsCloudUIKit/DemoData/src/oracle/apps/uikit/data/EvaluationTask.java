package oracle.apps.uikit.data;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.Date;

public class EvaluationTask {
    private int _id;
    private String _name;
    private String _status;
    private int _remainingDays;
    private Date _completionDate;

    public EvaluationTask(int id, String name, String status, int remainingDays,
                          Date completionDate){
        _id = id;
        _name = name;
        _status = status;
        _remainingDays = remainingDays;
        _completionDate = completionDate;
    }//constructor

    //Accessors
    public void setId(int i) { _id = i; }
    public int getId() { return _id; }
    public void setName(String s) { _name = s; }
    public String getName() { return _name; }
    public void setStatus(String s) { _status = s; }
    public String getStatus() { return _status; }
    public void setRemainingDays(int i) { _remainingDays = i; }
    public int getRemainingDays() { return _remainingDays; }
    public void setCompletionDate(Date d) { _completionDate = d; }
    public Date getCompletionDate() { return _completionDate; }
}//EvaluationTask
