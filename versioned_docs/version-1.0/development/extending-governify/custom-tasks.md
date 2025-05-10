---
title: Custom Tasks
description: This section explains how to use/add new custom task in the Admin UI
hide_table_of_contents: false
#sidebar_class_name: external-link::github.com/governify/collector-events/blob/main/DEVELOPING%20METRICS.md # Use this format for external links
---

This document outlines the process of enhancing Governify services through the use of "Custom Tasks". Custom tasks are scripts executed within [director service](https://docs.governify.io/development/services/director), wich is responsible for handling automatic calculations tasks (a predefined task). However you have the flexibility to create your own tasks, store them in **assets-bluejay** and then load and execute them in through Admin UI.

A good example of a custom task is [Optimize Calculation Period](https://docs.bluejay.governify.io/development/extending-bluejay/custom-tasks/optimize-calculation-period) wich evenly distribute the automatic calculations launches across a period of time.

## Create a custom task in the UI

1. Go to **ui.bluejay.[YourDomain]**.
2. Click on **Admin UI**.
3. Click on **Task Runner** tab.
4. Create the script and configuration.

   :::danger
   Refreshing the page will **clear all previews**. The next section will teach you how to save a task in the assets. Meanwhile use `ctrl+a`, `ctrl+c` and `windows+v`.
   :::

## Save a custom task in the assets

In assets-bluejay go to `public/director/tasks`. The folders created in this directory will be used as categories in the dropdown.

![new script](/img/development/extending-governify/custom-tasks/newScript.png)

Let's create a folder named myCategory. The new path will be `public/director/tasks/myCategory`.

Here we can create a folder called myScript. Inside `public/director/tasks/myCategory/myScript` you must store 3 files:

- **configuration.json**. This is the default file for configuration. Set the parameters to default values.
- **documentation.md**. This is the markdown explaining the new task and it configuration parameters.
- **script.js**. This is the script that will be executed.
  
  :::info bear in mind
   You must use the template at `public/director/tasks/examples/template` for the script.js
  :::

## Load  and run a task

1. Go to **ui.bluejay.[YourDomain]**.
2. Click on **Admin UI**.
3. Click on **Task Runner** tab.
4. Open the **dropdown** and select the task. However you can also **upload from your computer**.

   ![load from dropdown](/img/development/extending-governify/custom-tasks/load-from-dropdown.png)

5. **Configure** the task.

   :::info Bear in mind
   Loading a task from assets will load a **default config.json and a documentation.md**. Please **modifiy the config** with the parameters explained in the documentation file.
   :::
6. Click on **Run**.

Logs will be shown inside **Result.json**:

![Result](/img/development/extending-governify/custom-tasks/output-optimize.png)
