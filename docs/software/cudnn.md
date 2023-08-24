---
title: CUDNN
created: 2023-03-31T09:26:25 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/cudnn/
author: 
exclude: true
---

The CUDNN home page is [https://developer.nvidia.com/cudnn/](https://developer.nvidia.com/cudnn).

To use CUDNN, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail cudnn/


------------------------------- /opt/modulefiles -------------------------------
   cudnn/7.6.5    cudnn/8.1.1 (D)

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load cudnn/8.1.1
```

while the “cudnn” wildcard will load the default version, cudnn-8.1.1 in this case.
