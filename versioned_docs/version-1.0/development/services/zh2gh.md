---
title: ZH2GH
description: ZH2GH
hide_table_of_contents: false
sidebar_position: 8
---

# ZH2GH

---

## Overview

The ZH2GH service is a simple service that moves the issues in a GitHub project based on the movements of a ZenHub Project. It is esesential to configure a ZenHub Integration  with a Governify webhook to enable change detection within the service.

![Alt text](/img/development/services/zh2gh/zh2gh-demo.gif)

## Set Up

We will use this example:

- Our organization domain *governify.io*
- Example GH repository: *bluejay-psg2-23-24*
- Example organization: *gii-psg2-2324*
- Example GH account: *governify.auditor* (admin of gii-psg2-2324)

### 1. Create a GitHub repository and ZenHub workspace

- [How to create a GH repository](https://docs.github.com/en/get-started/quickstart/create-a-repo)
- [How to create a ZH workspace](https://help.zenhub.com/support/solutions/articles/43000497224-creating-your-first-workspace)
  
:::warning
The organization of the ZenHub workspace MUST have a ZenHub license or premium to use webhook integration.
:::

### 2. Configure projects

In both the GH project and ZH workspace configure **the same names in the columns**. In our case: ***Todo, In Progress, In Review and Done.***

![gh project](/img/development/services/zh2gh/gh-project.png)

### 3. Create a Integration in ZenHub

Go to ZenHub and click on ***Account Managment*** then ***Integrations***

![zh integration](/img/development/services/zh2gh/zh-account.png)

Then create an integration with this parameters:

- **Repository**: [your repository]
- **Service**: Custom
- **Webhook URL**: https://zh2gh.services\[yourDomain]

  ex: https://zh2gh.services.governify.io/

![new ZenHub integration](/img/development/services/zh2gh/new-zh-integration.png)

## Using the service

:::danger
Issues must be linked to the GH project and linked to ZH workspace
:::

Now you can change issues at ZenHub and it will change the GitHub project:

![Alt text](/img/development/services/zh2gh/zh2gh-demo.gif)
