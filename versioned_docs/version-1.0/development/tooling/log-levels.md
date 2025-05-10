---
title: Logging Levels
description: Logging Levels
hide_table_of_contents: false
---
This section explains how to modify logging levels for better debugging and monitoring of the infrastructure.

### Available Logging Levels

- **DEBUG**
- **INFO**
- **WARN**
- **ERROR**
- **FATAL**

Logging levels can be adjusted in two ways: by setting the **environment variable** `GOVERNIFY_LOG_LEVEL` before running the microservice or through the **admin panel** of the render interface.

## Environment Variable

Before launching a microservice equipped with Governify Commons, you can set the logging level by using the environment variable `GOV_LOG_LEVEL`. This setting determines the logging level unless it is dynamically changed later. The environment variable can be set either in the terminal or in the `.env` file used by a Docker Compose setup.

Example of setting the logging level to `debug` before running a microservice:

```bash
export GOV_LOG_LEVEL=debug && npm start
```

## Admin Panel

Governify offers a web interface with various panels for managing databases, tasks, and Commons configuration. Through this interface, you can update microservices and change the logging level dynamically.
To modify the logging level of a microservice, follow these steps:

1. Access the render frontend at `http://localhost:5100` or `ui.buejay.[org_domain]`.
2. Click on `Admin UI` in the top right corner.
3. Navigate to the `Commons` section.
4. For each microservice, click the edit button and select the desired logging level from the dropdown menu.
