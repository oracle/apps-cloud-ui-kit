package oracle.apps.uikit.bean;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import java.util.HashMap;
import java.util.Map;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import oracle.adf.controller.TaskFlowId;
import oracle.adf.share.ADFContext;
import oracle.adf.view.rich.render.ClientEvent;
import oracle.apps.uikit.common.bean.UtilsBean;
import oracle.apps.uikit.data.ItemNode;
import oracle.apps.uikit.memoryCache.SessionState;
import org.apache.myfaces.trinidad.render.ExtendedRenderKitService;
import org.apache.myfaces.trinidad.util.Service;

public class FilmStripBean {
    private UtilsBean _utils = new UtilsBean();

    public void handleFilmStripCardClick(ClientEvent clientEvent) {
        _utils.setEL("#{sessionScope.selectedItemId}", clientEvent.getParameters().get("itemNodeId"));
    }//handleFilmStripCardClick
    
    public TaskFlowId getDynamicTaskFlowId(){
        TaskFlowId taskFlowId = new TaskFlowId("/WEB-INF/oracle/apps/uikit/flow/NotImplementedFlow.xml", "NotImplementedFlow");
        String itemId = "";
        String groupId = "";
        if (ADFContext.getCurrent().getSessionScope().get("selectedGroupId") != null)
            groupId = (String)ADFContext.getCurrent().getSessionScope().get("selectedGroupId");
        if (ADFContext.getCurrent().getSessionScope().get("selectedItemId") != null)
            itemId = (String)ADFContext.getCurrent().getSessionScope().get("selectedItemId");
        //
        SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
        ItemNode node = sessionState.getClusterMap().get(itemId);
        if (node != null){
            String destUrl = node.getDestinationUrl();
            String result = destUrl.substring(0, destUrl.lastIndexOf("."));
            String localTFId = result.substring(destUrl.lastIndexOf("/") + 1);
            taskFlowId = new TaskFlowId(destUrl, localTFId);
//        } else {
//System.out.println(">>>>> THIS IS REQUIRED");            
//            taskFlowId = new TaskFlowId("/WEB-INF/oracle/apps/uikit/flow/PaaSApplicationFlow.xml", "PaaSApplicationFlow");
        }//null check
        //
        return taskFlowId;
    }//getDynamicTaskFlowId
    
    public Map getFilmStripLayout(){
        return new HashMap<String, String>(){
            public String get(Object key){
                try {
                    String groupId = null;
                    String itemId = "";
                    if (ADFContext.getCurrent().getSessionScope().get("selectedGroupId") != null)
                        groupId = (String)ADFContext.getCurrent().getSessionScope().get("selectedGroupId");
                    if (ADFContext.getCurrent().getSessionScope().get("selectedItemId") != null)
                        itemId = (String)ADFContext.getCurrent().getSessionScope().get("selectedItemId");
                    //
                    SessionState sessionState = (SessionState)_utils.getSessionScope().get("SessionState");
                    String rootMenuData = sessionState.fetchGridNodes(groupId);
                    FacesContext fctx = FacesContext.getCurrentInstance();
                    ExtendedRenderKitService erks = Service.getRenderKitService(fctx, ExtendedRenderKitService.class);
                    String js = "filmStripLayoutManager.handleFilmDocumentLoad('" + rootMenuData + "','" + itemId + "');";
                    erks.addScript(fctx, js);
                } catch (Exception e) {
                    e.printStackTrace();
                }//try-catch
                return null;
            }//get
        };
    }//getFilmStripLayout

    public void toggleStripRender(ActionEvent actionEvent) {
        boolean hideStrip = (Boolean)_utils.evaluateEL("#{sessionScope.hideStrip}");
        if (hideStrip)
            _utils.setEL("#{sessionScope.hideStrip}", false);
        else
            _utils.setEL("#{sessionScope.hideStrip}", true);
        _utils.refreshView();
    }//toggleStripRender
    
}//FilmStripBean
