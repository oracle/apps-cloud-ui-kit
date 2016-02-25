package oracle.apps.uikit.data;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.List;

public class Person {
    private int _id;
    private String _photo;
    private String _photoLarge;
    private String _firstName;
    private String _lastName;
    private String _fullName;
    private String _prefix;
    private String _displayName;
    private String _company;
    private String _job;
    private String _email;
    private String _phone;
    private String _location;
    private String _grade;
    private int _serviceYears;
    private int _directReports;
    private int _totalReports;
    private boolean _selected;
    private boolean _favourite;
    private List<Evaluation> _evaluationsList;

    public Person(int id, String photo, String photoLarge, String firstName,
                  String lastName, String prefix, String company, String job,
                  String email, String phone, String location){
        _id = id;
        if (photo == null || (photo != null && photo.length() == 0))
            _photo = "/images/qual_person_48.png";
        else
            _photo = photo;
        if (photoLarge == null || (photoLarge != null && photoLarge.length() == 0))
            _photoLarge = "/images/qual_placeholderperson_120.png";
        else
            _photoLarge = photoLarge;
        _firstName = firstName;
        _lastName = lastName;
        _fullName = _firstName + " " + _lastName;
        _prefix = prefix;
        _displayName = _prefix + " " + _fullName;
        _company = company;
        _job = job;
        _email = email;
        _phone = phone;
        _location = location;
        _selected = false;
        _favourite = false;
        _evaluationsList = new ArrayList<Evaluation>();
    }//constructor

    public Person(int id, String photo, String photoLarge, String firstName,
                  String lastName, String prefix, String company, String job,
                  String email, String phone, String location, String grade,
                  int serviceYears, int directReports, int totalReports){
        _id = id;
        if (photo == null || (photo != null && photo.length() == 0))
            _photo = "/images/qual_person_48.png";
        else
            _photo = photo;
        if (photoLarge == null || (photoLarge != null && photoLarge.length() == 0))
            _photoLarge = "/images/qual_placeholderperson_120.png";
        else
            _photoLarge = photoLarge;
        _firstName = firstName;
        _lastName = lastName;
        _fullName = _firstName + " " + _lastName;
        _prefix = prefix;
        _displayName = _prefix + " " + _fullName;
        _company = company;
        _job = job;
        _email = email;
        _phone = phone;
        _location = location;
        _grade = grade;
        _serviceYears = serviceYears;
        _directReports = directReports;
        _totalReports = totalReports;
        _selected = false;
        _favourite = false;
        _evaluationsList = new ArrayList<Evaluation>();
    }//constructor

    public void addEvaluation(Evaluation evaluation){
        _evaluationsList.add(evaluation);
    }//addEvaluation

    //Accessors
    public void setId(int i) { _id = i; }
    public int getId() { return _id; }
    public void setPhoto(String s) { _photo = s; }
    public String getPhoto() { return _photo; }
    public void setPhotoLarge(String s) { _photoLarge = s; }
    public String getPhotoLarge() { return _photoLarge; }
    public void setFirstName(String s) {
        _firstName = s;
        _fullName = _firstName + " " + _lastName;
        _displayName = _prefix + " " + _fullName;
    }
    public String getFirstName() { return _firstName; }
    public void setLastName(String s) {
        _lastName = s;
        _fullName = _firstName + " " + _lastName;
        _displayName = _prefix + " " + _fullName;
    }
    public String getLastName() { return _lastName; }
    public void setPrefix(String s) { _prefix = s; }
    public String getPrefix() { return _prefix; }
    public void setCompany(String s) { _company = s; }
    public String getCompany() { return _company; }
    public void setJob(String s) { _job = s; }
    public String getJob() { return _job; }
    public void setEmail(String s) { _email = s; }
    public String getEmail() { return _email; }
    public void setPhone(String s) { _phone = s; }
    public String getPhone() { return _phone; }
    public void setLocation(String s) { _location = s; }
    public String getLocation() { return _location; }
    public void setGrade(String s) { _grade = s; }
    public String getGrade() { return _grade; }
    public void setServiceYears(int i) { _serviceYears = i; }
    public int getServiceYears() { return _serviceYears; }
    public void setDirectReports(int i) { _directReports = i; }
    public int getDirectReports() { return _directReports; }
    public void setTotalReports(int i) { _totalReports = i; }
    public int getTotalReports() { return _totalReports; }
    public void setSelected(boolean b) { _selected = b; }
    public boolean isSelected() { return _selected; }
    public void setFavourite(boolean b) { _favourite = b; }
    public boolean isFavourite() { return _favourite; }
    public void setFullName(String s) { _fullName = s; }
    public String getFullName() { return _fullName; }
    public void setDisplayName(String s) { _displayName = s; }
    public String getDisplayName() { return _displayName; }
    public void setEvaluationsList(List<Evaluation> l) { _evaluationsList = l; }
    public List<Evaluation> getEvaluationsList() { return _evaluationsList; }
}//Person
