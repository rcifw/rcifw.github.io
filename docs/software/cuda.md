---
title: CUDA
created: 2023-03-31T09:26:23 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/cuda/
author: 
exclude: true
---

The CUDA Developers home page is [https://developer.nvidia.com/cuda-zone](https://developer.nvidia.com/cuda-zone).

To use the CUDA compilers, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail cuda/

------------------------------- /opt/modulefiles -------------------------------
   cuda/6.0    cuda/9.1     cuda/10.2 (D)    cuda/11.1    cuda/11.3
   cuda/7.5    cuda/10.1    cuda/11.0        cuda/11.2

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load cuda/11.0
```

while the “cuda” wildcard will load the default version, cuda-10.2 in this case.

You should now have CUDA compilers in your path:

```
[me@login01 ~]$ nvcc --version
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2020 NVIDIA Corporation
Built on Wed_Jul_22_19:09:09_PDT_2020
Cuda compilation tools, release 11.0, V11.0.221
Build cuda_11.0_bu.TC445_37.28845127_0
```
