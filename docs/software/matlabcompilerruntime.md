---
created: 2023-03-31T09:26:59 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/matlab_compiler_runtime/
author:
---

The MATLAB home page is [https://www.mathworks.com/](https://www.mathworks.com/).

We support running MATLAB via the MATLAB Compiler Runtime (MCR).

**This needs to be manually set up by the users.**

You’ll find various versions of the MCR under:

```
[me@login01 ~]$ ls /export/matlab/MCR/
R2012b  R2014a  R2014b  R2015a  R2015b  R2016a  R2016b  R2017a  R2017b  R2018a  R2018b  R2019a  R2019b
```


> [!NOTE]
> The MATLAB code run via MCR needs to be compiled on the same architecture as that of the cluster. In other words, it needs to be compiled on a Linux system.
