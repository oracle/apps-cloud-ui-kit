/*******************************************************************************
                          UTILITY ROUTINES
********************************************************************************
Find UI Component by Component Id
Partial Page Refresh UIComponent
Show message of type - FATAL, ERROR, WARN, INFO
Set Locale to English
Evaluate EL expression
Get Web Application Context Root
Get Exception
Refresh View
Redirect to Self
Redirect to URL
Get Application Scope
Get Session Scope
Get Page Flow Scope
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
Get Host and Port
*******************************************************************************/
package oracle.apps.uikit.common.bean;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
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
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import oracle.adf.controller.ControllerContext;
import oracle.adf.share.ADFContext;
import oracle.adf.view.rich.context.AdfFacesContext;
import org.apache.myfaces.trinidad.context.RequestContext;

public class UtilsBean {

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
        return FacesContext.getCurrentInstance().getViewRoot().findComponent(id);
    }//findUIComponent

    //Partial Page Refresh
    public void refresh(UIComponent c){
        AdfFacesContext.getCurrentInstance().addPartialTarget(c);
    }//refresh

    //Partial Page Refresh
    public void refresh2(UIComponent c){
        RequestContext.getCurrentInstance().addPartialTarget(c);
    }//refresh2

    //Refresh View
    public void refreshView(){
        String viewId = FacesContext.getCurrentInstance().getViewRoot().getViewId();
        ViewHandler vh = FacesContext.getCurrentInstance().getApplication().getViewHandler();
        UIViewRoot uivr = vh.createView(FacesContext.getCurrentInstance(), viewId);
        FacesContext.getCurrentInstance().setViewRoot(uivr);
    }//refreshView

    //Change locale to English
    public void changeLocaleToEnglish(){
        FacesContext.getCurrentInstance().getViewRoot().setLocale(Locale.ENGLISH);
    }//changeLocaleToEnglish

    //Evaluate EL expression like "#{xxx}"
    public Object evaluateEL(String elString){
        Application app = FacesContext.getCurrentInstance().getApplication();
        ExpressionFactory elFactory = app.getExpressionFactory();
        ELContext elContext = FacesContext.getCurrentInstance().getELContext();
        ValueExpression valExp = elFactory.createValueExpression(elContext, elString, Object.class);
        return valExp.getValue(elContext);
    }//evaluateEL

    //Evaluate EL expression like "#{xxx}"
    public Object evaluateEL2(String elString){
        ELContext elContext = ADFContext.getCurrent().getELContext();
        ExpressionFactory elFactory = ADFContext.getCurrent().getExpressionFactory();
        ValueExpression valExp = elFactory.createValueExpression(elContext, elString, Object.class);
        return valExp.getValue(elContext);
    }//evaluateEL2
    
    //Set EL value
    public void setEL(String elString, Object val){
        ELContext elContext = FacesContext.getCurrentInstance().getELContext();
        ExpressionFactory elFactory = ADFContext.getCurrent().getExpressionFactory();
        ValueExpression valExp = elFactory.createValueExpression(elContext, elString, Object.class);
        valExp.setValue(elContext, val);
    }//setEL

    //Show message of type - FATAL, ERROR, WARN, INFO
    public void showMessage(String msgType, String msg){
        FacesMessage fm = new FacesMessage(msg);
        if (msgType.equals("FATAL")) fm.setSeverity(FacesMessage.SEVERITY_FATAL);
        else if (msgType.equals("ERROR")) fm.setSeverity(FacesMessage.SEVERITY_ERROR);
        else if (msgType.equals("WARN")) fm.setSeverity(FacesMessage.SEVERITY_WARN);
        else fm.setSeverity(FacesMessage.SEVERITY_INFO);
        FacesContext.getCurrentInstance().addMessage(null, fm);
    }//showMessage

    //Web App context root
    public String getWebAppContextRoot(){
        return FacesContext.getCurrentInstance().getExternalContext().getRequestContextPath();
    }//getWebAppContextRoot

    //Get Application Scope
    public Map<String, Object> getApplicationScope(){
        return ADFContext.getCurrent().getApplicationScope();
    }//getApplicationScope

    //Get Session Scope
    public Map<String, Object> getSessionScope(){
        return ADFContext.getCurrent().getSessionScope();
    }//getSessionScope

    //Get PageFlowScope
    public Map<String,Object> getPageFlowScope(){
        return AdfFacesContext.getCurrentInstance().getPageFlowScope();
    }//getPageFlowScope

    //Get Alternative PageFlowScope
    public Map<String,Object> getPageFlowScope2(){
        return ADFContext.getCurrent().getPageFlowScope();
    }//getPageFlowScope2

    //Get ViewScope
    public Map<String,Object> getViewScope(){
        return AdfFacesContext.getCurrentInstance().getViewScope();
    }//getViewScope

    //Get Request Scope
    public Map<String, String> getRequestScope(){
        return ADFContext.getCurrent().getRequestScope();
    }//getRequestScope

    //Get logged in user name
    public String getUserName(){
        return ADFContext.getCurrent().getSecurityContext().getUserName();
    }//getUserName

    //Get logged in user roles
    public String[] getUserRoles(){
        return ADFContext.getCurrent().getSecurityContext().getUserRoles();
    }//getUserRoles

    //Print logged in user roles using SOP
    public void printUserRoles(){
        for (String role : getUserRoles())
            System.out.println("Role: " + role);
    }//printUserRoles

    //Check if user has a role
    public boolean doesUserHaveRole(String role){
        return ADFContext.getCurrent().getSecurityContext().isUserInRole(role);
    }//doesUserHaveRole

    //Check for authenticated user
    public boolean isUserValid(){
        return ADFContext.getCurrent().getSecurityContext().isAuthenticated();
    }//isUserValid

    //Grab exception data
    public Exception getException(){
        return ControllerContext.getInstance().getCurrentViewPort().getExceptionData();
    }//getException

    //Redirect to self
    public void redirectToSelf(){
        String viewId = FacesContext.getCurrentInstance().getViewRoot().getViewId();
        String activityURL = ControllerContext.getInstance().getGlobalViewActivityURL(viewId);
        try {
            FacesContext.getCurrentInstance().getExternalContext().redirect(activityURL);
            FacesContext.getCurrentInstance().responseComplete();
        } catch (IOException e) {
            e.printStackTrace();
            FacesContext.getCurrentInstance().renderResponse();
        }//try-catch
    }//redirectToSelf

    //Redirect to URL
    public void redirectToUrl(String url){
        HttpServletResponse response = (HttpServletResponse)FacesContext.getCurrentInstance().getExternalContext().getResponse();
        if (url == null) url = FacesContext.getCurrentInstance().getExternalContext().getRequestContextPath()+"/adfAuthentication?logout=true&end_url=/faces/start.jspx";
        try{ response.sendRedirect(url); }
        catch (Exception e) { e.printStackTrace(); }
    }//redirectToUrl

    //Get initialization parameters
    public Map<String, Object> getInitParameters(){
        return FacesContext.getCurrentInstance().getExternalContext().getInitParameterMap();
    }//getInitParameters

    //Get Request Parameters
    public Map<String, String> getRequestParameters(){
        return FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap();
    }//getRequestParameters

    //Get Session Parameters
    public Map<String, Object> getSessionParameters(){
        return FacesContext.getCurrentInstance().getExternalContext().getSessionMap();
    }//getSessionParameters
    
    //Get Host
    public String getHost(){
        FacesContext fctx = FacesContext.getCurrentInstance();
        HttpServletRequest request = (HttpServletRequest)fctx.getExternalContext().getRequest();
        return request.getServerName();
    }//getHost
    
    //Get Port
    public String getPort(){
        FacesContext fctx = FacesContext.getCurrentInstance();
        HttpServletRequest request = (HttpServletRequest)fctx.getExternalContext().getRequest();
        return Integer.toString(request.getServerPort());
    }//getPort

}//UtilsBean
