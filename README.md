Oracle Applications User Experience RDK
=====
The Oracle Applications Cloud User Experience Rapid Development Kit (RDK) 
is a set of free resources that will help you learn faster, design simpler 
and build better.

Use the RDK to leverage the PaaS for SaaS advantage and accelerate your 
delivery of sleek, modern SaaS integrations and custom PaaS applications 
solutions to win customers and delight users in the Oracle Cloud.

This Rapid Development Kit (RDK) is intended as a Partner Training Kit
but can also be used by any person in the wider Oracle ADF Community. It
contains sample code for PaaS and PaaS4SaaS content to be used with the
Oracle Applications Cloud.

[Learn more about Oracle Applications Cloud UX RDK](http://www.oracle.com/webfolder/ux/applications/successStories/oracleApplicationsCloudRDK.html)

Instructions for using RDK
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

# Copyright
Copyright (c) 2015-2016 Oracle and/or its affiliates. All rights reserved.
