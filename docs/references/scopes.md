---
title: Scopes Syntax
description: Scopes.json explained
hide_table_of_contents: false
sidebar_position: 1 # Sets this doc to the third position in the sidebar
---



### Introduction

This section provides an overview of the schema and structure of the "development" scope in the Governify infrastructure. The "development" scope is a key component of Governify that defines the configuration for managing development activities, including classes, projects, teams, and members. The schema and JSON example below illustrate the syntax and elements of the "development" scope, helping developers understand how to define and manage development-related information in Governify. 

Bluejay is a specific use case of Governify wich uses this development scope to manage the projects and courses. Please refer to the [Bluejay documentation](https://docs.bluejay.governify.io/) for more information.

### Schema

The schema below defines the structure of the "development" scope. It specifies the types and required properties for each element within the scope.
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "development": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "classId": {
            "type": "string"
          },
          "identities": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "hidden": {
            "type": "boolean"
          },
          "credentials": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "projects": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "owner": {
                  "type": "string"
                },
                "teamId": {
                  "type": "string"
                },
                "projectId": {
                  "type": "string"
                },
                "notifications": {
                  "type": "object",
                  "properties": {
                    "email": {
                      "type": "string"
                    }
                  },
                  "required": ["email"]
                },
                "credentials": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                },
                "identities": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "source": {
                        "type": "string"
                      },
                      "repository": {
                        "type": "string"
                      },
                      "repoOwner": {
                        "type": "string"
                      }
                    },
                    "required": ["source", "repository", "repoOwner"]
                  }
                },
                "members": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "memberId": {
                        "type": "string"
                      },
                      "identities": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "source": {
                              "type": "string"
                            },
                            "username": {
                              "type": "string"
                            }
                          },
                          "required": ["source", "username"]
                        }
                      },
                      "credentials": {
                        "type": "array",
                        "items": {
                          "type": "object"
                        }
                      }
                    },
                    "required": ["memberId", "identities"]
                  }
                }
              },
              "required": ["name", "owner", "teamId", "projectId", "notifications", "identities", "members"]
            }
          }
        },
        "required": ["classId", "identities", "hidden", "credentials", "projects"]
      }
    }
  },
  "required": ["development"]
}
```

### Element Descriptions

- **classId**: A unique identifier for the class or group of projects. It helps in categorizing and managing different projects under a specific class.
- **identities**: An array that can contain information about the identities related to the course or person.
- **hidden**: A boolean value indicating whether the course should be available in the admin panel and also in the "join" microservices for the groups.
- **credentials**: An array to store credentials associated with the course or person.
- **projects**: An array of project objects, each containing detailed information about individual projects, including their names, owners, team IDs, project IDs, notifications, credentials, identities, and members.


### JSON Example
Here is an example of the "development" scope in JSON format. This example demonstrates how the schema is applied to define a development scope with multiple classes and projects.

```json
{
    "development": [
        {
            "classId": "ISPP-2024",
            "identities": [],
            "hidden": true,
            "credentials": [],
            "projects": [
                {
                    "name": "course-year-owner-team",
                    "owner": "L1",
                    "teamId": "06",
                    "projectId": "course-GH-ghuser_reponame",
                    "notifications": {
                        "email": "email@example.com"
                    },
                    "credentials": [],
                    "identities": [
                        {
                            "source": "github",
                            "repository": "reponame",
                            "repoOwner": "ghuser"
                        }
                    ],
                    "members": [
                        {
                            "memberId": "name_surname",
                            "identities": [
                                {
                                    "source": "github",
                                    "username": "xxxxx"
                                }
                            ],
                            "credentials": []
                        }
                    ]
                }
            ]
        }
      ]
}


```
For further information on the scopes and their usage, refer to the official Governify documentation for [Scope Manager Microservice](../development/services/scopes-manager.md).
