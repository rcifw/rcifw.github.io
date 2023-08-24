---
title: MRICRON
created: 2023-03-31T09:27:12 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/mricron/
author:
exclude: true
---

The MRICRON home page is [https://www.nitrc.org/projects/mricron](https://www.nitrc.org/projects/mricron).

To use MRICRON, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail mricron/

------------------------------ /opt/modulefiles -------------------------------
   mricron/20190902

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load mricron/20190902
```

while the “mricron” wildcard will load the default version, mricron-20190902 in this case.

You should now be able to run MRICRON commands:

```
[me@login01 ~]$ dcm2niix --version
Chris Rorden's dcm2niiX version v1.0.20190902  (JP2:OpenJPEG) GCC4.8.2 (64-bit Linux)
v1.0.20190902
```
