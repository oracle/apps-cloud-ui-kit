package oracle.apps.uikit.bean;
/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
import java.util.ArrayList;
import oracle.adf.view.rich.component.rich.layout.RichPanelStretchLayout;
import org.apache.myfaces.trinidad.component.UIXIterator;

public class AnnouncementsBean {
    private RichPanelStretchLayout _announcementsPanel;
    private ArrayList<String> _announcements = new ArrayList<String>();
    private int _announcementIndex = 0;
    private ArrayList<String> _indexList = new ArrayList<String>();
    private UIXIterator _paginationIterator;

    public AnnouncementsBean(){
        super();
        //
        String str = "<div align=\"center\" style=\"font-size: 12px;margin-top: 8px;\"><b><font size=\"4\" color=\"#3d5b65\" face=\"Open Sans,Helvetica,Arial,sans-serif\">Welcome to HR in the Cloud!</font></b></div><p class=\"p1\" style=\"margin: 0px;font-stretch: normal;font-size: 12px;line-height: normal;font-family: Helvetica;color: rgb(51, 51, 51);\"><br style=\"font-family: &quot;;Helvetica Neue&quot;, Helvetica, Arial, sans-serifcolor: rgb(0, 0, 0);\"></p><div align=\"justify\" style=\"font-size: 12px;top: 0px;bottom: 0px;margin-right: 8px;\"><font size=\"3\" color=\"#2E444C\" face=\"Open Sans,Helvetica,Arial,sans-serif\">We are proud to be using our own HCM Cloud solutions to run Oracle and OFSS business processes.The Oracle Cloud better enables our internal processes and helps us lead the way for our customers. &nbsp;&nbsp;<br><br>Click on the&nbsp;<b>Getting Started</b>&nbsp;icon to view videos and quick reference guides for the most popular transactions, and for guidance on accessing additional help.</font></div><div align=\"center\" style=\"font-size: 12px;\"><br><div align=\"center\"><br></div><div align=\"center\"><br></div><div align=\"center\" style=\"margin-top: 8px;\"><font size=\"2\" color=\"#2E444C\" face=\"Open Sans,Helvetica,Arial,sans-serif\">View Oracle's personal information&nbsp;<a href=\"http://my.oracle.com/content/web/CNT337893\" target=\"_blank\">privacy statement</a></font></div></div>";
        _announcements.add(0, str);
        str = "<style type=\"text/css\">\n" + 
              "p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}\n" + 
              "p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}\n" + 
              "</style><p class=\"p1\" style=\"margin: 0px;font-stretch: normal;font-size: 12px;line-height: normal;font-family: Helvetica;color: rgb(51, 51, 51);\"><span style=\"font-size: medium;\">What is Lorem Ipsum?</span></p><p class=\"p1\" style=\"margin: 0px;font-stretch: normal;line-height: normal;font-family: Helvetica;color: rgb(51, 51, 51);\"><b>Lorem Ipsum</b>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class=\"p1\" style=\"margin: 0px;font-stretch: normal;font-size: 12px;line-height: normal;font-family: Helvetica;color: rgb(51, 51, 51);\"><span style=\"font-size: medium;\">Why do we use it?</span></p><p class=\"p1\" style=\"margin: 0px;font-stretch: normal;line-height: normal;font-family: Helvetica;color: rgb(51, 51, 51);\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p></p>";
        _announcements.add(1, str);
        str = "<table style=\"\">\n" + 
              "   <tbody><tr style=\"\" valign=\"top\">\n" + 
              "     <td style=\"width: 288px;border-right: 1px solid #c7c7c7;\" valign=\"top\">       \n" + 
              "         <p style=\"font-size:12px;padding: 0px 13px;color: Gray;margin: 0px;margin-bottom: 6px;\">Jan 04, 2017</p>        \n" + 
              "         <p style=\"font-size:16px;padding: 0px 13px;color:#000000;margin: 0px;\">Use the Corporate Credit Card to Manage Company Expenses</p>       \n" + 
              "         <p style=\"font-size:12px;padding: 0px 13px;color:#000000;margin: 0px;margin-top: 8px;margin-bottom: 13px;\">Use the Vision Corporate credit card for all business expenses whenever possible. Register for your card now.</p>\n" + 
              "                 <img style=\"padding: 0px 13px;width: 254px;\" src=\"images/images_1.png\" class=\"\">\n" + 
              "\n" + 
              "       </td>\n" + 
              "     <td style=\"width: 288px;border-right: 1px solid #c7c7c7;\" valign=\"top\">       \n" + 
              "       <p style=\"font-size:16px;padding: 19px 13px 0px 13px;margin: 0px;margin-bottom: 9px;\">The Annual Review Deadline Is Quickly Approaching</p>       \n" + 
              "       <p style=\"font-size:12px;padding: 0 13px;margin: 0px;margin-bottom: 13px;\">You have two weeks left to complete your annual review. Get started today by watching this video. </p>         \n" + 
              "       <img style=\"padding: 0px 15px;width: 254px;\" src=\"images/images_2.png\" class=\"\">  \n" + 
              "       <p style=\"background-color: rgba(0, 0 ,0, 0.2);position: absolute;width: 48px;height: 48px;padding: 10px;border-radius: 50%;top: 129px;left: 398px;\">\n" + 
              "         <img src=\"images/qual_video_48_achr.png\" class=\"\">\n" + 
              "       </p>\n" + 
              "     </td>\n" + 
              "     <td style=\"width: 288px;\" valign=\"top\">       \n" + 
              "       <p style=\"font-size:16px;padding: 19px 13px 0px 13px;margin: 0px;margin-bottom: 9px;\">Start the Wellness Challenge Today and Join a Competition</p>       \n" + 
              "       <p style=\"font-size:12px;padding: 0px 13px;margin: 0px;margin-bottom: 13px;\">Set up your wellness profile and join this month’s exciting competition. Learn about upcoming competitions, too.</p>\n" + 
              "               <img style=\"padding: 0px 15px;width: 254px;\" src=\"images/images_3.png\" class=\"_afrImageNotLoadedInTime\"> \n" + 
              "\n" + 
              " \n" + 
              "\n" + 
              "     </td>\n" + 
              "   </tr>\n" + 
              "   \n" + 
              " </tbody></table>";
        _announcements.add(2, str);
        //
        _announcementIndex = 0;
        //
        for (Integer i = 0; i < getNumOfAnnouncements(); i++)
            _indexList.add(i, i.toString());
    }//constructor

    public int getNumOfAnnouncements(){
        return getAnnouncements().size();
    }//getNumOfAnnouncements

    public String getAnnouncementContent() {
        String str = "";
        if (getAnnouncementIndex() == 0)
            str = getAnnouncement1(); 
        else if (getAnnouncementIndex() == 1)
            str = getAnnouncement2(); 
        else if (getAnnouncementIndex() == 2)
            str = getAnnouncement3();
        return str;
    }//getAnnouncementContent
    
    public String getAnnouncement1(){
        return getAnnouncements().get(0);
    }//getAnnouncement1

    public String getAnnouncement2(){
        return getAnnouncements().get(1);
    }//getAnnouncement2

    public String getAnnouncement3(){
        return getAnnouncements().get(2);
    }//getAnnouncement3

    //Accessors
    public void setAnnouncementsPanel(RichPanelStretchLayout l) { _announcementsPanel = l; }
    public RichPanelStretchLayout getAnnouncementsPanel() { return _announcementsPanel; }
    public void setAnnouncements(ArrayList<String> l) { _announcements = l; }
    public ArrayList<String> getAnnouncements() { return _announcements; }
    public void setAnnouncementIndex(int i) { _announcementIndex = i; }
    public int getAnnouncementIndex() { return _announcementIndex; }
    public void setIndexList(ArrayList<String> l) { _indexList = l; }
    public ArrayList<String> getIndexList() { return _indexList; }
    public void setPaginationIterator(UIXIterator i) { _paginationIterator = i; }
    public UIXIterator getPaginationIterator() { return _paginationIterator; }
}//AnnouncementsBean
