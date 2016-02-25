package oracle.apps.uikit.hcm.infolets.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.List;

public class HcmInfoletsBean {
    private List<HcmTeamPerson> _teamPersonList;
    private List<HcmRequisition> _requisitionList;

    //Accessors
    public void setTeamPersonList(List<HcmInfoletsBean.HcmTeamPerson> l) { _teamPersonList = l; }
    public List<HcmInfoletsBean.HcmTeamPerson> getTeamPersonList() { return _teamPersonList; }
    public void setRequisitionList(List<HcmInfoletsBean.HcmRequisition> l) { _requisitionList = l; }
    public List<HcmInfoletsBean.HcmRequisition> getRequisitionList() { return _requisitionList; }

    public HcmInfoletsBean(){
        _buildTeamPersonData();
        _buildRequisitionData();
    }//constructor

    private void _buildTeamPersonData(){
        if (_teamPersonList == null){
            _teamPersonList = new ArrayList<HcmTeamPerson>();
            //name, photo, definedCount, alignedCount, notStartedCount, inProgressCount, completeCount
            _teamPersonList.add(new HcmTeamPerson("Jen Jacobs", "/images/qual_person_48.png", 7, 0, 7, 0, 0));
            _teamPersonList.add(new HcmTeamPerson("Ravi Chouhan", "/images/qual_person_48.png", 8, 3, 1, 4, 3));
            _teamPersonList.add(new HcmTeamPerson("Jason Blake", "/images/qual_person_48.png", 7, 2, 4, 1, 2));
            _teamPersonList.add(new HcmTeamPerson("Pat Miller", "/images/qual_person_48.png", 8, 0, 4, 0, 4));
            _teamPersonList.add(new HcmTeamPerson("Terry Lucca", "/images/qual_person_48.png", 7, 3, 1, 3, 3));
            _teamPersonList.add(new HcmTeamPerson("Stella Smith", "/images/qual_person_48.png", 7, 2, 3, 2, 2));
            _teamPersonList.add(new HcmTeamPerson("Peter Cadand", "/images/qual_person_48.png", 8, 2, 2, 4, 2));
            _teamPersonList.add(new HcmTeamPerson("Susan Wong", "/images/qual_person_48.png", 8, 3, 1, 4, 3));
        }//null check
    }//_buildTeamPersonData

    private void _buildRequisitionData(){
        if (_requisitionList == null){
            _requisitionList = new ArrayList<HcmRequisition>();
            //name, role, location, image, favourite, count
            _requisitionList.add(new HcmRequisition("Ted Morrison", "Design Verification Engineer", "CA, San Francisco", "/images/male_qualifier.png", false, 5));
            _requisitionList.add(new HcmRequisition("John Tompkins", "IT Account Manager", "CA, San Francisco", "/images/male_qualifier.png", true, 9));
            _requisitionList.add(new HcmRequisition("Janie Smith", "Network Transport Engineer", "CA, San Francisco", "/images/male_qualifier.png", false, 7));
            _requisitionList.add(new HcmRequisition("Dorine Moseley", "Ethics and Compliance Specialist", "CA, San Francisco", "/images/male_qualifier.png", true, 6));
            _requisitionList.add(new HcmRequisition("Emilia Vanderkoff", "Technical Program Manager", "CA, San Francisco", "/images/male_qualifier.png", false, 0));
        }//null check
    }//_buildRequisitionData

    //==========================================================================
    // Inner Classes
    //==========================================================================

    public class HcmRequisition {
        private String _name;
        private String _role;
        private String _location;
        private String _image;
        private boolean _favourite;
        private int _count;

        public HcmRequisition(String name, String role, String location,
                              String image, boolean favourite, int count) {
            _name = name;
            _role = role;
            _location = location;
            _image = image;
            _favourite = favourite;
            _count = count;
        }//constructor

        //Accessors
        public void setName(String s) { _name = s; }
        public String getName() { return _name; }
        public void setRole(String s) { _role = s; }
        public String getRole() { return _role; }
        public void setLocation(String s) { _location = s; }
        public String getLocation() { return _location; }
        public void setImage(String s) { _image = s; }
        public String getImage() { return _image; }
        public void setFavourite(boolean b) { _favourite = b; }
        public boolean isFavourite() { return _favourite; }
        public void setCount(int i) { _count = i; }
        public int getCount() { return _count; }
    }//HcmRequisition

    public class HcmTeamPerson {
        private String _name;
        private String _photo;
        private int _definedCount;
        private int _alignedCount;
        private int _notStartedCount;
        private int _inProgressCount;
        private int _completeCount;
        private int _notStartedWidth;
        private int _inProgressWidth;
        private int _completeWidth;

        public HcmTeamPerson(String name, String photo, int definedCount,
                             int alignedCount, int notStartedCount,
                             int inProgressCount, int completeCount) {
            _name = name;
            _photo = photo;
            _definedCount = definedCount;
            _alignedCount = alignedCount;
            _notStartedCount = notStartedCount;
            _inProgressCount = inProgressCount;
            _completeCount = completeCount;
            int total = notStartedCount + inProgressCount + completeCount;
            _notStartedWidth = (_notStartedCount * 90) / total;
            _inProgressWidth = (_inProgressCount * 90) / total;
            _completeWidth = (_completeCount * 90) / total;
        }//constructor

        //Accessors
        public void setName(String s) { _name = s; }
        public String getName() { return _name; }
        public void setPhoto(String s) { _photo = s; }
        public String getPhoto() { return _photo; }
        public void setDefinedCount(int i) { _definedCount = i; }
        public int getDefinedCount() { return _definedCount; }
        public void setAlignedCount(int i) { _alignedCount = i; }
        public int getAlignedCount() { return _alignedCount; }
        public void setNotStartedCount(int i) { _notStartedCount = i; }
        public int getNotStartedCount() { return _notStartedCount; }
        public void setInProgressCount(int i) { _inProgressCount = i; }
        public int getInProgressCount() { return _inProgressCount; }
        public void setCompleteCount(int i) { _completeCount = i; }
        public int getCompleteCount() { return _completeCount; }
        public void setNotStartedWidth(int i) { _notStartedWidth = i; }
        public int getNotStartedWidth() { return _notStartedWidth; }
        public void setInProgressWidth(int i) { _inProgressWidth = i; }
        public int getInProgressWidth() { return _inProgressWidth; }
        public void setCompleteWidth(int i) { _completeWidth = i; }
        public int getCompleteWidth() { return _completeWidth; }
    }//HcmTeamPerson

}//HcmInfoletsBean
