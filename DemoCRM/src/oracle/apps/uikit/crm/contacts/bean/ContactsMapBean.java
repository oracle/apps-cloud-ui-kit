package oracle.apps.uikit.crm.contacts.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.List;
import javax.faces.event.ActionEvent;
import oracle.adf.view.rich.component.rich.data.RichListView;
import oracle.adf.view.rich.component.rich.input.RichInputText;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.data.Person;
import oracle.apps.uikit.memoryCache.SessionState;
import org.apache.myfaces.trinidad.event.SelectionEvent;
import org.apache.myfaces.trinidad.model.RowKeySetImpl;

public class ContactsMapBean {
    private UtilsBean _utils = new UtilsBean();
    private RichInputText _mapSearchField;
    private String _searchString;
    private RichListView _contactsListView;

    public ContactsMapBean(){
        _buildMapContactsList();
        _clearMapContactsSelection();
    }//constructor

    //==========================================================================
    // User Event Handlers
    //==========================================================================

    public void handleMapSearch(ActionEvent actionEvent) {
        _searchString = getMapSearchField().getValue().toString();
        _buildMapContactsList();
    }//handleMapSearch

    public void handleContactRowSelection(SelectionEvent selectionEvent) {
        String selectedRKSStr = selectionEvent.getAddedSet().toString();
        selectedRKSStr = selectedRKSStr.replace("[", "");
        selectedRKSStr = selectedRKSStr.replace("]", "");
        if (selectedRKSStr.length() > 0){
            //Record the selection
            Integer idx = Integer.parseInt(selectedRKSStr);
            Integer contactId = _getIdForMapContactAtIndex(idx);
            _toggleSelection(contactId);
        }//RKS empty check
        getContactsListView().setSelectedRowKeys(new RowKeySetImpl());
        _utils.refresh(getContactsListView());
    }//handleContactRowSelection

    //==========================================================================
    // Helpers
    //==========================================================================

    private void _toggleSelection(Integer contactId){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Person> contactsList = sessionState.getContactsList();
        if (contactsList != null){
            for (Person contact : contactsList){
                if (contact.getId() == contactId){
                    contact.setSelected(!contact.isSelected());
                    break;
                }//check required contact
            }//loop through contacts
        }//null check
    }//_toggleSelection

    private Integer _getIdForMapContactAtIndex(Integer idx){
        Integer id = 0;
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Person> mapContactsList = sessionState.getMapContactsList();
        if (mapContactsList != null && idx != null)
            id = mapContactsList.get(idx).getId();
        return id;
    }//_getIdForMapContactAtIndex

    private void _buildMapContactsList(){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        if (_searchString == null)
            _searchString = "";
        List<Person> contactsList = sessionState.getContactsList();
        List<Person> mapContactsList = sessionState.getMapContactsList();
        if (contactsList != null && mapContactsList != null){
            mapContactsList.clear();
            for (Person contact : contactsList){
                //Check search criteria
                if (_searchString.length() == 0 || (_searchString.length() > 0 && contact.getFullName().toUpperCase().contains(_searchString.toUpperCase()))
                                                || (_searchString.length() > 0 && contact.getLocation().toUpperCase().contains(_searchString.toUpperCase()))){
                    mapContactsList.add(contact);
                }//check criteria
            }//loop through master contacts list
        }//null check
    }//_buildMapContactsList

    private void _clearMapContactsSelection(){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        for (Person contact : sessionState.getMapContactsList())
            contact.setSelected(false);
    }//_clearMapContactsSelection

    //==========================================================================
    // Accessors
    //==========================================================================

    public void setMapSearchField(RichInputText t) { _mapSearchField = t; }
    public RichInputText getMapSearchField() { return _mapSearchField; }
    public void setContactsListView(RichListView l) { _contactsListView = l; }
    public RichListView getContactsListView() { return _contactsListView; }
}//ContactsMapBean
