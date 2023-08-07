---
title: CI/CD Workflow
sidebar_position: 2
description: CI/CD Workflow
hide_table_of_contents: false
---

# CI/CD Workflow

---

## Overview

CI/CD is a series of interconnected processes that empower developers to build quality software through well-aligned and automated development, testing, delivery, and deployment. Together, these practices ensure better collaboration and greater efficiency for DevOps teams throughout the software development life cycle. GitHub Actions, thanks to being built in to GitHub, has made integrating with different services much easier and helps to have all the things in one place.

## Microservices CI/CD
At this moment, the different component repositories are configured with the same pipeline to test, lint and build the different docker images used in the deployments. 

Depending if the push/merge PR is done to the repository's main branch or the develop branch, a set of CI/CD actions will be executed in the CI.

### Develop actions run

![Actions Develop Pipeline](/img/development/contributing/CI-DEV.png)

This are the actions executed when pushing to develop. As it is shown, the two top actions are not executed as they belong to the production actions run.

#### 1. Lint, test and coverage
This node will execute 3 tasks:
 - Lint - It will check all the code is properly linted as specified in the package.json
 - Test - It will run unitary tests to check no functionallity was broken in the commit
 - Coverage - The coverage report obtained is sent to coveralls to update the badge

If this step is successful, the pipeline will flow to the next step.

#### 2. Build and push to Dockerhub
If the push has been made to the develop branch, this node will execute. It will use DockerHub credentials (stored on GitHub secrets) to build the image based on the Dockerfile and push it to dockerhub. The new image's tag will be `develop`. If this step is successful, the "E2E tests" steps will be executed.

#### 3. E2E tests
On Bluejay's infrastructure, a set of tests have been made to ensure proper functioning of the system (To know more about this, check out the last section of this page). Using the new image built in the last step and the other develop images from the different microservices, the CI will check out the whole infrastructure repository, deploy all the containers and check nothing was broken by passing some tests.


### Main actions run

![Actions Main Pipeline](/img/development/contributing/CI-PRO.png)

Now, the bottom part of the pipeline is not executed. Let's see the differences in the steps.

#### 1. Lint, test and coverage
The same pipe will be executed like the develop run as this is a shared step.

#### 2. E2E tests
When something is updated on the main branch, it must be due to a PR merge from the development branch. This step is the exact same as the last part of the develop pipeline but if it fails, the next node won't run. This is to ensure the infrastructure is properly working  with the latest image before doing the last step.

#### 3. Release, build and push to Dockerhub
This is similar to the "Build and push to Dockerhub" action in the develop pipeline but adds a task. At first, it will use all the commit messages (which should be written using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)) to create a changelog and adds a new tag and Release of the code in the repository using this changes as the body. It also automatically increases the version number. Then, using this tag, it builds two exact same docker images but one tagged with it and the other with the `latest` tag. Finally, it creates a PR to develop with the changelog and package.json version increase to be accepted and keep it up to date with the main branch.