---
title: System performance
description: System performance
hide_table_of_contents: false
sidebar_position: 2
---

# System performance

---
## Introduction

These conclusions are the result of two performance analyzes that have been carried out demonstrating what is set out below.
- [Analysis with TPA of 5 guarantees](https://docs.google.com/spreadsheets/d/1Upg3FPM2alc0Ys-61MBUJiLufiG5ALuVAVllVsF58PY/edit?usp=sharing)
- [Analysis with TPA of 10 guarantees](https://docs.google.com/spreadsheets/d/1Xc7gb1O7iqSB86NvGlywV6z7nmkCe4msFGU3bldWqGo/edit?usp=sharing)

## Single-threaded nature of Node.js

When numerous computations are initiated simultaneously, the system addresses them concurrently, aiming to resolve them simultaneously. However, **due to the single-threaded nature of Node.js**, requests are processed one after the other, albeit seemingly in parallel. This means that while the system strives to handle multiple computations at once, it actually processes them sequentially, albeit in a distributed manner over time.

This approach can lead to delays in returning results, as each request must wait its turn to be processed. Furthermore, **if a large number of computations accumulate, the system may become overwhelmed, resulting in saturation and an inability to promptly address incoming requests**. Thus, while the system endeavors to manage computations in parallel, its single-threaded architecture imposes limitations on its ability to handle high volumes of concurrent requests efficiently.

![descripción](/img/architecture/Nodejs-Architecture.png)
