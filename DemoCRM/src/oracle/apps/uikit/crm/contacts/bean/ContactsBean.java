package oracle.apps.uikit.crm.contacts.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.util.ArrayList;
import java.util.List;
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import javax.faces.event.ValueChangeEvent;
import oracle.adf.view.rich.component.rich.data.RichListView;
import oracle.adf.view.rich.component.rich.input.RichInputText;
import oracle.adf.view.rich.component.rich.input.RichSelectOneChoice;
import oracle.adf.view.rich.component.rich.input.RichSelectOneRadio;
import oracle.adf.view.rich.component.rich.layout.RichPanelGroupLayout;
import oracle.adf.view.rich.component.rich.nav.RichCommandButton;
import oracle.adf.view.rich.component.rich.nav.RichCommandLink;
import oracle.adf.view.rich.util.ResetUtils;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.data.Person;
import oracle.apps.uikit.memoryCache.SessionState;
import org.apache.myfaces.trinidad.event.SelectionEvent;
import org.apache.myfaces.trinidad.model.RowKeySetImpl;

public class ContactsBean {
    private UtilsBean _utils = new UtilsBean();
    private int _selectedContactsCount;
    private String _pageMode;
    private List<String> _alphaFilters = new ArrayList<String>();
    private int _selectedContactId;
    private RichInputText _nameSearchField;
    private RichPanelGroupLayout _cardViewListViewContainer;
    private String _nameString;
    private String _alphaFilter;
    private String _listFilterType;
    private RichListView _contactsListView;
    //Create fields
    private RichSelectOneChoice _prefixField;
    private RichInputText _firstNameField;
    private RichInputText _lastNameField;
    private RichInputText _jobTitleField;
    private RichInputText _emailField;
    private RichInputText _phoneField;
    private RichInputText _accountField;
    private RichInputText _locationField;
    private RichSelectOneRadio _contactTypeField;
    private RichPanelGroupLayout _createPageContainer;
    //Edit fields
    private Person _editedContact;
    private RichSelectOneChoice _editPrefixField;
    private RichInputText _editFirstNameField;
    private RichInputText _editLastNameField;
    private RichInputText _editJobTitleField;
    private RichInputText _editEmailField;
    private RichInputText _editPhoneField;
    private RichInputText _editAccountField;
    private RichInputText _editLocationField;
    private RichSelectOneRadio _editContactTypeField;
    private RichPanelGroupLayout _editPageContainer;

    public ContactsBean(){
        super();
        _selectedContactsCount = 0;
        _pageMode = "normal";
        //Alphabet filter list
        if (_alphaFilters.size() == 0)
            for (int i = 'A'; i <= 'Z' + 1; i++)
                _alphaFilters.add((char)i + "");
        _buildFilteredContactsList();
    }//constructor

    //==========================================================================
    // User Event Handlers - Search and Filters
    //==========================================================================

    public void handleNameSearch(ActionEvent actionEvent){
        _nameString = (String)getNameSearchField().getValue();
        _buildFilteredContactsList();
        _utils.refresh(getCardViewListViewContainer());
    }//handleNameSearch

    public void handleAlphaFilter(ActionEvent actionEvent){
        RichCommandLink filterLink = (RichCommandLink)actionEvent.getComponent();
        _alphaFilter = filterLink.getText().toUpperCase();
        _buildFilteredContactsList();
        _utils.refresh(getCardViewListViewContainer());
    }//handleAlphaFilter

    public void removeAlphaFilter(ActionEvent actionEvent){
        _alphaFilter = "";
        _buildFilteredContactsList();
        _utils.refresh(getCardViewListViewContainer());
    }//removeAlphaFilter

    public void handleListFilter(ValueChangeEvent valueChangeEvent) {
        _listFilterType = (String)valueChangeEvent.getNewValue();
        _buildFilteredContactsList();
        _utils.refresh(getCardViewListViewContainer());
    }//handleListFilter

    //==========================================================================
    // User Event Handlers - Mark and Unmark Favourites
    //==========================================================================

    public void handleToggleFavourite(ActionEvent actionEvent){
        Integer contactId = (Integer)actionEvent.getComponent().getAttributes().get("ID");
        _toggleAttribute(contactId, "FAV");
        _buildFilteredContactsList();
        _utils.refresh(getCardViewListViewContainer());
    }//handleToggleFavourite

    //==========================================================================
    // User Event Handlers - Select/Deselect and Act
    //==========================================================================

    public void handleContactRowSelection(SelectionEvent selectionEvent){
        String selectedRKSStr = selectionEvent.getAddedSet().toString();
        selectedRKSStr = selectedRKSStr.replace("[", "");
        selectedRKSStr = selectedRKSStr.replace("]", "");
        if (selectedRKSStr.length() > 0){
            //Record the selection
            Integer idx = Integer.parseInt(selectedRKSStr);
            Integer contactId = _getIdForFilteredContactAtIndex(idx);
            _toggleAttribute(contactId, "SEL");
        }//RKS null check
        getContactsListView().setSelectedRowKeys(new RowKeySetImpl());
        _utils.refresh(getCardViewListViewContainer());
    }//handleContactRowSelection

    public void handleContactCardSelection(ActionEvent actionEvent){
        Integer contactId = (Integer)actionEvent.getComponent().getAttributes().get("ID");
        if (contactId != null)
            _toggleAttribute(contactId, "SEL");
        _utils.refresh(getCardViewListViewContainer());
    }//handleContactCardSelection

    public void handleSelectAll(ActionEvent actionEvent){
        _selectDeselectAll(true);
        _utils.refresh(getCardViewListViewContainer());
    }//handleSelectAll

    public void handleDeselectAll(ActionEvent actionEvent){
        _selectDeselectAll(false);
        _utils.refresh(getCardViewListViewContainer());
    }//handleDeselectAll

    public void exportContacts(ActionEvent actionEvent){
        _selectDeselectAll(false);
    }//handleExportContacts

    public void cancelSelectionMode(ActionEvent actionEvent){
        _selectDeselectAll(false);
    }//handleExportContacts

    //==========================================================================
    // User Event Handlers - Create Flow
    //==========================================================================

    public void handleCreateContact(ActionEvent actionEvent){
        _switchInlineMode("ON");
    }//handleCreateContact

    public void handleCreateSaveAndClose(ActionEvent actionEvent){
        if (getFirstNameField().getValue() != null && getLastNameField().getValue() != null &&
            getEmailField().getValue() != null && getPhoneField().getValue() != null &&
            getJobTitleField().getValue() != null && getAccountField().getValue() != null &&
            getLocationField().getValue() != null){
            SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
            List<Person> contactsList = sessionState.getContactsList();
            int contactId = contactsList.get(contactsList.size()-1).getId()+1;
            Person newContact = new Person(contactId, "", "", getFirstNameField().getValue().toString(),
                                           getLastNameField().getValue().toString(), getPrefixField().getValue().toString(),
                                           getAccountField().getValue().toString(), getJobTitleField().getValue().toString(),
                                           getEmailField().getValue().toString(), getPhoneField().getValue().toString(),
                                           getLocationField().getValue().toString());
            contactsList.add(newContact);
            _buildFilteredContactsList();
        }//null check
        _resetCreatePageInputFields();
        _switchInlineMode("OFF");
    }//handleCreateSaveAndClose

    public void handleCreateCancel(ActionEvent actionEvent){
        _resetCreatePageInputFields();
        _switchInlineMode("OFF");
    }//handleCreateCancel

    //Used in PageHeaderDC for Save-And-Close & Cancel actions
    public String customCreateReturnAction(){
        return "doneCreate";
    }//customCreateReturnAction

    //==========================================================================
    // User Event Handlers - Edit Flow
    //==========================================================================

    //Used in CardDC for card title click action
    public String customTitleAction(){
        return "edit";
    }//customTitleAction

    public void handleEditContact(ActionEvent actionEvent){
        Integer contactId = (Integer)actionEvent.getComponent().getAttributes().get("ID");
        if (contactId != null){
            SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
            for (Person contact : sessionState.getContactsList()){
                if (contact.getId() == contactId){
                    _editedContact = new Person(contact.getId(), contact.getPhoto(), contact.getPhotoLarge(),
                                                contact.getFirstName(), contact.getLastName(), contact.getPrefix(),
                                                contact.getCompany(), contact.getJob(), contact.getEmail(), contact.getPhone(),
                                                contact.getLocation());
                    break;
                }//check contact being edited
            }//loop through contacts
        }//null check
        _switchInlineMode("ON");
    }//handleExitContact

    public void handleEditSave(ActionEvent actionEvent){
        if (getEditFirstNameField().getValue() != null && !getEditFirstNameField().getValue().toString().isEmpty() &&
            getEditLastNameField().getValue() != null && !getEditLastNameField().getValue().toString().isEmpty() &&
            getEditEmailField().getValue() != null && !getEditEmailField().getValue().toString().isEmpty() &&
            getEditPhoneField().getValue() != null && !getEditPhoneField().getValue().toString().isEmpty() &&
            getEditJobTitleField().getValue() != null && !getEditJobTitleField().getValue().toString().isEmpty() &&
            getEditAccountField().getValue() != null && !getEditAccountField().getValue().toString().isEmpty() &&
            getEditLocationField().getValue() != null && !getEditLocationField().getValue().toString().isEmpty()){
            //Mandatory values supplied. Save any changes.
            SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
            for (Person contact : sessionState.getContactsList()){
                if (contact.getId() == getEditedContact().getId()){
                    contact.setPrefix(getEditPrefixField().getValue().toString());
                    contact.setFirstName(getEditFirstNameField().getValue().toString());
                    contact.setLastName(getEditLastNameField().getValue().toString());
                    contact.setJob(getEditJobTitleField().getValue().toString());
                    contact.setEmail(getEditEmailField().getValue().toString());
                    contact.setPhone(getEditPhoneField().getValue().toString());
                    contact.setCompany(getEditAccountField().getValue().toString());
                    contact.setLocation(getEditLocationField().getValue().toString());
                    break;
                }//check contact being edited
            }//loop through contacts
        }//null check
    }//handleEditSave

    public void handleEditSaveAndClose(ActionEvent actionEvent){
        handleEditSave(actionEvent);
        _buildFilteredContactsList();
        _resetEditPageInputFields();
        _switchInlineMode("OFF");
    }//handleEditSaveAndClose

    public void handleEditCancel(ActionEvent actionEvent){
        _resetEditPageInputFields();
        _switchInlineMode("OFF");
    }//handleEditCancel

    //Used in PageHeaderDC for Save-And-Close & Cancel actions
    public String customEditReturnAction(){
        return "doneEdit";
    }//customEditReturnAction

    //==========================================================================
    // Helpers
    //==========================================================================

    private void _selectDeselectAll(boolean select){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Person> contactsList = sessionState.getContactsList();
        if (contactsList != null)
            for (Person contact : contactsList)
                contact.setSelected(select);
        if (select)
            setSelectedContactsCount(contactsList.size());
        else
            setSelectedContactsCount(0);
    }//_selectDeselectAll

    private void _toggleAttribute(Integer contactId, String attribute){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Person> contactsList = sessionState.getContactsList();
        if (contactsList != null){
            for (Person contact : contactsList){
                if (contact.getId() == contactId){
                    if (attribute.equals("FAV")){
                        contact.setFavourite(!contact.isFavourite());
                    } else if (attribute.equals("SEL")){
                        boolean currentlySelected = contact.isSelected();
                        contact.setSelected(!currentlySelected);
                        if (currentlySelected)
                            setSelectedContactsCount(getSelectedContactsCount() - 1);
                        else
                            setSelectedContactsCount(getSelectedContactsCount() + 1);
                    }//attribute check
                    break;
                }//check required contact
            }//loop through contacts
        }//null check
    }//_toggleAttribute

    private Integer _getIdForFilteredContactAtIndex(Integer idx){
        Integer id = 0;
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        List<Person> filteredContactsList = sessionState.getFilteredContactsList();
        if (filteredContactsList != null && idx != null)
            id = filteredContactsList.get(idx).getId();
        return id;
    }//_getIdForFilteredContactAtIndex

    private void _buildFilteredContactsList(){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        if (_nameString == null)
            _nameString = "";
        if (_alphaFilter == null)
            _alphaFilter = "";
        if (_listFilterType == null)
            _listFilterType = "ALL";
        List<Person> contactsList = sessionState.getContactsList();
        List<Person> filteredContactsList = sessionState.getFilteredContactsList();
        if (contactsList != null && filteredContactsList != null){
            filteredContactsList.clear();
            for (Person contact : contactsList){
                //Check search criteria
                if (_nameString.length() == 0 || (_nameString.length() > 0 && contact.getFullName().toUpperCase().contains(_nameString.toUpperCase()))){
                    //Check fitler criteria
                    if (_alphaFilter.length() == 0 || (_alphaFilter.length() > 0 && contact.getFullName().toUpperCase().startsWith(_alphaFilter))){
                        if (_listFilterType.equals("ALL") || (_listFilterType.equals("FAV") && contact.isFavourite())){
                            //Add current contact to display list
                            filteredContactsList.add(contact);
                        }//favourite check
                    }//alpha check
                }//name contains check
            }//loop through master list
        }//master list null check
    }//_buildFilteredContactsList

    private void _switchInlineMode(String mode){
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        if (mode.equals("ON")){
            sessionState.setFilmStripShowHandle(false);
            sessionState.setFilmStripShowStrip("noShow");
        } else {
            sessionState.setFilmStripShowHandle(true);
            sessionState.setFilmStripShowStrip("");
        }//mode check
        //Initiate Refresh
        FacesContext fctx = FacesContext.getCurrentInstance();
        UIViewRoot vr = fctx.getViewRoot();
        RichCommandButton actionTrigger = (RichCommandButton)vr.findComponent("pt1:pt_refreshTrigger");
        ActionEvent actionEvent = new ActionEvent(actionTrigger);
        actionEvent.queue();
    }//_switchInlineMode

    private void _resetCreatePageInputFields(){
        ResetUtils.reset(getCreatePageContainer());
        getPrefixField().setValue("Dr.");
        getContactTypeField().setValue("Other");
    }//_resetCreatePageInputFields

    private void _resetEditPageInputFields(){
        ResetUtils.reset(getEditPageContainer());
        getEditContactTypeField().setValue("Other");
    }//_resetEditPageInputFields

    //Accessors
    public void setSelectedContactsCount(int i) { _selectedContactsCount = i; }
    public int getSelectedContactsCount() { return _selectedContactsCount; }
    public void setPageMode(String s) { _pageMode = s; }
    public String getPageMode() { return _pageMode; }
    public void setAlphaFilters(List<String> l) { _alphaFilters = l; }
    public List<String> getAlphaFilters() { return _alphaFilters; }
    public void setSelectedContactId(int i) { _selectedContactId = i; }
    public int getSelectedContactId() { return _selectedContactId; }
    public void setNameSearchField(RichInputText t) { _nameSearchField = t; }
    public RichInputText getNameSearchField() { return _nameSearchField; }
    public void setCardViewListViewContainer(RichPanelGroupLayout l) { _cardViewListViewContainer = l; }
    public RichPanelGroupLayout getCardViewListViewContainer() { return _cardViewListViewContainer; }
    public void setNameString(String s) { _nameString = s; }
    public String getNameString() { return _nameString; }
    public void setAlphaFilter(String s) { _alphaFilter = s; }
    public String getAlphaFilter() { return _alphaFilter; }
    public void setListFilterType(String s) { _listFilterType = s; }
    public String getListFilterType() { return _listFilterType; }
    public void setContactsListView(RichListView l) { _contactsListView = l; }
    public RichListView getContactsListView() { return _contactsListView; }
    //Accessors for Create fields
    public void setPrefixField(RichSelectOneChoice c) { _prefixField = c; }
    public RichSelectOneChoice getPrefixField() { return _prefixField; }
    public void setFirstNameField(RichInputText t) { _firstNameField = t; }
    public RichInputText getFirstNameField() { return _firstNameField; }
    public void setLastNameField(RichInputText t) { _lastNameField = t; }
    public RichInputText getLastNameField() { return _lastNameField; }
    public void setJobTitleField(RichInputText t) { _jobTitleField = t; }
    public RichInputText getJobTitleField() { return _jobTitleField; }
    public void setEmailField(RichInputText t) { _emailField = t; }
    public RichInputText getEmailField() { return _emailField; }
    public void setPhoneField(RichInputText t) { _phoneField = t; }
    public RichInputText getPhoneField() { return _phoneField; }
    public void setAccountField(RichInputText t) { _accountField = t; }
    public RichInputText getAccountField() { return _accountField; }
    public void setLocationField(RichInputText t) { _locationField = t; }
    public RichInputText getLocationField() { return _locationField; }
    public void setContactTypeField(RichSelectOneRadio r) { _contactTypeField = r; }
    public RichSelectOneRadio getContactTypeField() { return _contactTypeField; }
    public void setCreatePageContainer(RichPanelGroupLayout l) { _createPageContainer = l; }
    public RichPanelGroupLayout getCreatePageContainer() { return _createPageContainer; }
    //Accessors for Edit fields
    public void setEditedContact(Person p) { _editedContact = p; }
    public Person getEditedContact() { return _editedContact; }
    public void setEditPrefixField(RichSelectOneChoice c) { _editPrefixField = c; }
    public RichSelectOneChoice getEditPrefixField() { return _editPrefixField; }
    public void setEditFirstNameField(RichInputText t) { _editFirstNameField = t; }
    public RichInputText getEditFirstNameField() { return _editFirstNameField; }
    public void setEditLastNameField(RichInputText t) { _editLastNameField = t; }
    public RichInputText getEditLastNameField() { return _editLastNameField; }
    public void setEditJobTitleField(RichInputText t) { _editJobTitleField = t; }
    public RichInputText getEditJobTitleField() { return _editJobTitleField; }
    public void setEditEmailField(RichInputText t) { _editEmailField = t; }
    public RichInputText getEditEmailField() { return _editEmailField; }
    public void setEditPhoneField(RichInputText t) { _editPhoneField = t; }
    public RichInputText getEditPhoneField() { return _editPhoneField; }
    public void setEditAccountField(RichInputText t) { _editAccountField = t; }
    public RichInputText getEditAccountField() { return _editAccountField; }
    public void setEditLocationField(RichInputText t) { _editLocationField = t; }
    public RichInputText getEditLocationField() { return _editLocationField; }
    public void setEditContactTypeField(RichSelectOneRadio r) { _editContactTypeField = r; }
    public RichSelectOneRadio getEditContactTypeField() { return _editContactTypeField; }
    public void setEditPageContainer(RichPanelGroupLayout l) { _editPageContainer = l; }
    public RichPanelGroupLayout getEditPageContainer() { return _editPageContainer; }
}//ContactsBean
