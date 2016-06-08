Instructions using RDK
=====
Find below instructions for using the RDK with different versions of JDeveloper.

## Using the RDK with JDeveloper 12c
After opening the JWS and letting JDeveloper migrate the application, you will need to manually redeploy the ADF Libraries using the existing deployment profiles, for the following projects in order.

 - DemoData
 - UIKitCommon
 - DemoCRM
 - DemoFIN
 - DemoHCM

## Using the RDK with JDeveloper 12.1.3.0.0 
(Workaround for JDeveloper bug 22689355)

After opening the JWS and letting JDeveloper migrate the application, you will need to manually update the WebLogic Deployment Descriptor file (weblogic.xml) in project DemoMaster.jpr to change the JSF specification-version from 2.0 to 2.1. Failure to do so will result in a build error. This file is located under the public_html/WEB-INF folder.

Change the library version reference from:

```xml
  <library-ref>
    <library-name>jsf</library-name>
    <specification-version>2.0</specification-version>
    <exact-match>true</exact-match>
  </library-ref>
```

to: 

```xml
  <library-ref>
    <library-name>jsf</library-name>
    <specification-version>2.1</specification-version>
    <exact-match>true</exact-match>
  </library-ref>
```

## RDK in Headless Mode
You can suppress the Universal Global Header (UGH) of the deployed RDK demo application by passing in URL parameter ‘headless=yes’ as shown below. This is particularly useful when exposing the application in another page.

        http://<host>:<port>/AppsCloudUIKit/faces/Welcome?headless=yes
