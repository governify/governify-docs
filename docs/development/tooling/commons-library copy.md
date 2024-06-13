---
title: Logging Levels
description: Logging Levels
hide_table_of_contents: false
---
This section explains how to modify logging levels for better debugging and monitoring of the infrastructure.

Logging levels can be adjusted in two ways: by setting the environment variable `GOVERNIFY_LOG_LEVEL` before running the microservice or through the admin panel of the render interface.

### Types of Logging Levels

- **DEBUG**
- **INFO**
- **WARN**
- **ERROR**
- **FATAL**

## Environment Variable

To launch a microservice with a logging level set for a single execution, use the following command:

```bash
export GOV_LOG_LEVEL=debug && npm start
```

## Admin Panel

1. Access the render frontend at `http://localhost:5100` or `ui.buejay.[org_domain]`.
2. Click on `Admin UI` in the top right corner.
3. Navigate to the `Commons` section.
4. For each microservice, click the edit button and change the desired logging level.
