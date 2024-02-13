---
title: Cache memory
description: Cache memory
hide_table_of_contents: false
sidebar_position: 1
---

# Cache memory

---

## Overview

To enhance system performance, a Redis cache is employed to store computation results for subsequent retrieval if needed. This helps to **reduce computation times** for the microservice `collector-events`, however, there are some considerations to be aware of.

### Considerations

- Once a computation is performed, it is cached, which can be advantageous. When computing a time period and subsequently performing the **same computation**, the system leverages the cached information, resulting in a much **quicker response** to the request.

- The **cache persists over time** and through the restart of microservices (`registry`, `collector-events`, `redis`), meaning that a period that has been computed previously for a TPA will always be cached.

- The benefit of the cache is most evident in the `collector-events`. When requesting a metric for a project that has never been computed before, the system takes some time (seconds) to obtain the result due to the absence of cached information. However, if the same request is made subsequently, the **response is obtained in milliseconds**, thanks to the cache in the `collector-events`.

![descripción](/img/architecture/cache-memory.png)
