---
title: Overview
description: Development Section Overview
hide_table_of_contents: false
sidebar_position: 1
---

# Overview

The development section of Governify focuses on providing detailed information about the various services and tools that make up the platform, extending its functionalities, and contributing to the project.

To develop effectively, it is recommended to do so in the context of a specific use case, such as "Bluejay", which has specific development [documentation](https://docs.bluejay.governify.io).

## Services

Governify comprises various microservices, each responsible for specific tasks within the system. These microservices work together to ensure the platform functions smoothly and efficiently. This section contains detailed information about each microservice, including its purpose, architecture, endpoints, and configuration.

## Tooling

The tooling section covers essential tools and libraries used in the development and maintenance of Governify's microservices. One of the key components is the Governify Commons Library, which provides common functionalities like infrastructure URL management, an HTTP client, a configurable logger, and utility functions used across multiple microservices. Additionally, this section explains how to modify logging levels for better debugging and monitoring of the infrastructure.

## Extending Governify

You can extend Governify by implementing new metrics, sources, and custom tasks. Custom task allows the user to define a new task that can be executed by Governify, modifying the platform's behavior to suit specific requirements. This section provides detailed information on how to create and integrate custom tasks into Governify.

## Contributing

The contributing section details the CI/CD workflow using GitHub Actions, which includes pipelines for testing, linting, building Docker images, and running end-to-end tests. Additionally, it covers the process for contributing to documentation, from accessing and editing online docs to submitting pull requests. Governify employs an adapted GitFlow branching model and Conventional Commits to ensure organized and efficient development.





