/*******************************************************************************
                          UTILITY ROUTINES
********************************************************************************
Find UI Component by Component Id
Partial Page Refresh UIComponent (2 versions)
Show message of type - FATAL, ERROR, WARN, INFO
Set Locale to English
Evaluate EL expression (2 versions)
Get Web Application Context Root
Get Exception
Refresh View
Redirect to Self
Redirect to URL
Get Application Scope
Get Session Scope
Get Page Flow Scope (2 versions)
Get View Scope
Get Request Scope
Get User Name
Get User Roles
Print User Roles
Does User Have a particular Role
Is User Valid (authenticated)
Get Initialization Parameters
Get Request Parameters
Get Session Parameters
*******************************************************************************/
package oracle.apps.uikit.common.bean;

/*
 * Copyright (c) 2016, 2013, Oracle and/or its affiliates. All rights reserved.
 *
**/

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.Map;
import javax.el.ELContext;
import javax.el.ExpressionFactory;
import javax.el.ValueExpression;
import javax.faces.application.Application;
import javax.faces.application.FacesMessage;
import javax.faces.application.ViewHandler;
import javax.faces.component.UIComponent;
import javax.faces.component.UIViewRoot;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletResponse;
import oracle.adf.controller.ControllerContext;
import oracle.adf.share.ADFContext;
import oracle.adf.share.security.SecurityContext;
import oracle.adf.view.rich.context.AdfFacesContext;
import org.apache.myfaces.trinidad.context.RequestContext;

public class UtilsBean {
    private FacesContext _facesCtx = FacesContext.getCurrentInstance();
    private ADFContext _adfCtx = ADFContext.getCurrent();
    private AdfFacesContext _adfFacesCtx = AdfFacesContext.getCurrentInstance();
    private ControllerContext _conCtx = ControllerContext.getInstance();
    private RequestContext _reqCtx = RequestContext.getCurrentInstance();
    private SecurityContext _secCtx = _adfCtx.getSecurityContext();
    private ExternalContext _extCtx = _facesCtx.getExternalContext();

    //Format Example - "d MMM yyyy", "d MMM yyyy hh:mm aaa"
    public String getFormattedDate(Date date, String format){
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }//getFormattedDate

    //Get today's date
    public Date getToday(){
        return (new Date());
    }//getToday

    //Format "MMMMM dd, yyyy"
    public String getCurrentFormattedDate(){
        return getFormattedDate(getToday(), "MMMMM dd, yyyy");
    }//getCurrentFormattedDate

    //Get today's date offset by days
    public Date getTodayOffsetDays(int days){
        Calendar cal = Calendar.getInstance();
        cal.setTime(getToday());
        cal.add(Calendar.DATE, days);
        return (cal.getTime());
    }//getTodayOffsetDays

    //Get today's date offset by months
    public Date getTodayOffsetMonths(int months){
        Calendar cal = Calendar.getInstance();
        cal.setTime(getToday());
        cal.add(Calendar.MONTH, months);
        return (cal.getTime());
    }//getTodayOffsetMonths

    //Get today's date offset by years
    public Date getTodayOffsetYears(int years){
        Calendar cal = Calendar.getInstance();
        cal.setTime(getToday());
        cal.add(Calendar.YEAR, years);
        return (cal.getTime());
    }//getTodayOffsetYears

    //Get today's date offset by dates, months, years
    public Date getTodayOffsetDaysMonthsYears(int days, int months, int years){
        Calendar cal = Calendar.getInstance();
        cal.setTime(getToday());
        cal.add(Calendar.DATE, days);
        cal.add(Calendar.MONTH, months);
        cal.add(Calendar.YEAR, years);
        return (cal.getTime());
    }//getTodayOffsetDaysMonthsYears

    //Find a UI Component using componentId
    public UIComponent findUIComponent(String id){
        return _facesCtx.getViewRoot().findComponent(id);
    }//findUIComponent

    //Partial Page Refresh
    public void refresh(UIComponent c){
        _adfFacesCtx.addPartialTarget(c);
    }//refresh

    //Partial Page Refresh
    public void refresh2(UIComponent c){
        _reqCtx.addPartialTarget(c);
    }//refresh2

    //Refresh View
    public void refreshView(){
        String viewId = _facesCtx.getViewRoot().getViewId();
        ViewHandler vh = _facesCtx.getApplication().getViewHandler();
        UIViewRoot uivr = vh.createView(_facesCtx, viewId);
        _facesCtx.setViewRoot(uivr);
    }//refreshView

    //Change locale to English
    public void changeLocaleToEnglish(){
        _facesCtx.getViewRoot().setLocale(Locale.ENGLISH);
    }//changeLocaleToEnglish

    //Evaluate EL expression like "#{xxx}"
    public Object evaluateEL(String elString){
        Application app = _facesCtx.getApplication();
        ExpressionFactory elFactory = app.getExpressionFactory();
        ELContext elContext = _facesCtx.getELContext();
        ValueExpression valExp = elFactory.createValueExpression(elContext, elString, Object.class);
        return valExp.getValue(elContext);
    }//evaluateEL

    //Evaluate EL expression like "#{xxx}"
    public Object evaluateEL2(String elString){
        ELContext elContext = _adfCtx.getELContext();
        ExpressionFactory elFactory = _adfCtx.getExpressionFactory();
        ValueExpression valExp = elFactory.createValueExpression(elContext, elString, Object.class);
        return valExp.getValue(elContext);
    }//evaluateEL2

    //Show message of type - FATAL, ERROR, WARN, INFO
    public void showMessage(String msgType, String msg){
        FacesMessage fm = new FacesMessage(msg);
        if (msgType.equals("FATAL")) fm.setSeverity(FacesMessage.SEVERITY_FATAL);
        else if (msgType.equals("ERROR")) fm.setSeverity(FacesMessage.SEVERITY_ERROR);
        else if (msgType.equals("WARN")) fm.setSeverity(FacesMessage.SEVERITY_WARN);
        else fm.setSeverity(FacesMessage.SEVERITY_INFO);
        _facesCtx.addMessage(null, fm);
    }//showMessage

    //Web App context root
    public String getWebAppContextRoot(){
        return _extCtx.getRequestContextPath();
    }//getWebAppContextRoot

    //Get Application Scope
    public Map<String, Object> getApplicationScope(){
        return _adfCtx.getApplicationScope();
    }//getApplicationScope

    //Get Session Scope
    public Map<String, Object> getSessionScope(){
        return _adfCtx.getSessionScope();
    }//getSessionScope

    //Get PageFlowScope
    public Map<String,Object> getPageFlowScope(){
        return _adfFacesCtx.getPageFlowScope();
    }//getPageFlowScope

    //Get Alternative PageFlowScope
    public Map<String,Object> getPageFlowScope2(){
        return _adfCtx.getPageFlowScope();
    }//getPageFlowScope2

    //Get ViewScope
    public Map<String,Object> getViewScope(){
        return _adfFacesCtx.getViewScope();
    }//getViewScope

    //Get Request Scope
    public Map<String, String> getRequestScope(){
        return _adfCtx.getRequestScope();
    }//getRequestScope

    //Get logged in user name
    public String getUserName(){
        return _secCtx.getUserName();
    }//getUserName

    //Get logged in user roles
    public String[] getUserRoles(){
        return _secCtx.getUserRoles();
    }//getUserRoles

    //Print logged in user roles using SOP
    public void printUserRoles(){
        for (String role : getUserRoles())
            System.out.println("Role: " + role);
    }//printUserRoles

    //Check if user has a role
    public boolean doesUserHaveRole(String role){
        return _secCtx.isUserInRole(role);
    }//doesUserHaveRole

    //Check for authenticated user
    public boolean isUserValid(){
        return _secCtx.isAuthenticated();
    }//isUserValid

    //Grab exception data
    public Exception getException(){
        return _conCtx.getCurrentViewPort().getExceptionData();
    }//getException

    //Redirect to self
    public void redirectToSelf(){
        String viewId = _facesCtx.getViewRoot().getViewId();
        String activityURL = _conCtx.getGlobalViewActivityURL(viewId);
        try {
            _extCtx.redirect(activityURL);
            _facesCtx.responseComplete();
        } catch (IOException e) {
            e.printStackTrace();
            _facesCtx.renderResponse();
        }//try-catch
    }//redirectToSelf

    //Redirect to URL
    public void redirectToUrl(String url){
        HttpServletResponse response = (HttpServletResponse)_extCtx.getResponse();
        if (url == null) url = _extCtx.getRequestContextPath()+"/adfAuthentication?logout=true&end_url=/faces/start.jspx";
        try{ response.sendRedirect(url); }
        catch (Exception e) { e.printStackTrace(); }
    }//redirectToUrl

    //Get initialization parameters
    public Map<String, Object> getInitParameters(){
        return _extCtx.getInitParameterMap();
    }//getInitParameters

    //Get Request Parameters
    public Map<String, String> getRequestParameters(){
        return _extCtx.getRequestParameterMap();
    }//getRequestParameters

    //Get Session Parameters
    public Map<String, Object> getSessionParameters(){
        return _extCtx.getSessionMap();
    }//getSessionParameters

}//UtilsBean
