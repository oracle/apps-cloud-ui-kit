package oracle.apps.uikit.data;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Evaluation {
    private int _id;
    private String _name;
    private String _type;
    private String _status;
    private int _remainingDays;
    private Date _completionDate;
    private int _finalRating;
    private List<EvaluationTask> _evaluationTaskList;

    public Evaluation(int id, String name, String type, String status, int remainingDays,
                      Date completionDate, int finalRating){
        _id = id;
        _name = name;
        _type = type;
        _status = status;
        _remainingDays = remainingDays;
        _completionDate = completionDate;
        _finalRating = finalRating;
        _evaluationTaskList = new ArrayList<EvaluationTask>();
    }//constructor

    public void addEvaulationTask(EvaluationTask evaluationTask){
        _evaluationTaskList.add(evaluationTask);
    }//addEvaulationTask

    public int getRemainingTasksNumber(){
        int remainingTasksNumber = 0;
        for (EvaluationTask evaluationTask : _evaluationTaskList){
            if (!evaluationTask.getStatus().toUpperCase().equals("CLOSED"))
                remainingTasksNumber++;
        }//loop through tasks
        return remainingTasksNumber;
    }//getRemainingTasksNumber

    public String getNextOpenTaskName(){
        String nextOpenTaskName = "View only";
        for (EvaluationTask evaluationTask : _evaluationTaskList){
            if (!evaluationTask.getStatus().toUpperCase().equals("CLOSED")){
                nextOpenTaskName = evaluationTask.getName();
                break;
            }//check task status
        }//loop through tasks
        return nextOpenTaskName;
    }//getNextOpenTaskName

    //Accessors
    public void setId(int i) { _id = i; }
    public int getId() { return _id; }
    public void setName(String s) { _name = s; }
    public String getName() { return _name; }
    public void setType(String s) { _type = s; }
    public String getType() { return _type; }
    public void setStatus(String s) { _status = s; }
    public String getStatus() { return _status; }
    public void setRemainingDays(int i) { _remainingDays = i; }
    public int getRemainingDays() { return _remainingDays; }
    public void setCompletionDate(Date d) { _completionDate = d; }
    public Date getCompletionDate() { return _completionDate; }
    public void setFinalRating(int i) { _finalRating = i; }
    public int getFinalRating() { return _finalRating; }
    public void setEvaluationTaskList(List<EvaluationTask> l) { _evaluationTaskList = l; }
    public List<EvaluationTask> getEvaluationTaskList() { return _evaluationTaskList; }
}//Evaluation
