---
title: System performance
description: System performance
hide_table_of_contents: false
sidebar_position: 2
---

# System performance

---

## Single-threaded nature of Node.js

When numerous computations are initiated simultaneously, the system addresses them concurrently, aiming to resolve them simultaneously. However, **due to the single-threaded nature of Node.js**, requests are processed one after the other, albeit seemingly in parallel. This means that while the system strives to handle multiple computations at once, it actually processes them sequentially, albeit in a distributed manner over time.

This approach can lead to delays in returning results, as each request must wait its turn to be processed. Furthermore, **if a large number of computations accumulate, the system may become overwhelmed, resulting in saturation and an inability to promptly address incoming requests**. Thus, while the system endeavors to manage computations in parallel, its single-threaded architecture imposes limitations on its ability to handle high volumes of concurrent requests efficiently.

![descripción](/img/architecture/Nodejs-Architecture.png)
