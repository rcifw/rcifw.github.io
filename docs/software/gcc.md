---
title: Gnu Compilers
created: 2023-03-31T09:26:44 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/gcc/
author:
---

The GCC Developers home page is [https://gcc.gnu.org](https://gcc.gnu.org/).

To use the GCC compilers, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail gcc/

------------------------------ /opt/modulefiles -------------------------------
   gcc/8.3.1 (D)    gcc/9.3.0    gcc/10.2.0

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load gcc/9.3.0
```

while the “gcc” wildcard will load the default version, gcc-8.3.1 in this case.

You should now have GCC compilers in your path:

```
[me@login01 ~]$ gcc --version
gcc (GCC) 9.3.0
Copyright (C) 2019 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```
