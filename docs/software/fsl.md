---
title: FSL
created: 2023-03-31T09:26:40 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/fsl/
author:
exclude: true
---

The FSL home page is [https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FSL](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FSL).

To use FSL, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail fsl/

------------------------------ /opt/modulefiles -------------------------------
   fsl/5.0.9    fsl/5.0.10    fsl/6.0.4    fsl/6.0.5 (D)

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load fsl/6.0.4
```

while the “fsl” wildcard will load the default version, fsl-6.0.5 in this case.

You should now be able to run FSL commands:

```
[me@login01 ~]$ flirt -version
FLIRT version 6.0
```
