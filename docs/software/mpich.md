---
title: MPICH
created: 2023-03-31T09:27:10 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/mpich/
author:
---

The MPICH Developers home page is [https://www.mpich.org/](https://www.mpich.org/).

To use the MPICH compilers, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail mpich/

------------------------------ /opt/modulefiles -------------------------------
   mpich/3.3.1-gcc-8.3.1    mpich/3.3.1-intel-19.1.0.166 (D)

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

Versions of MPICH compiled with both the gcc compiler and the intel compiler are available.

To load a specific version, you would use:

```
[me@login01 ~]$ module load mpich/3.3.1-gcc-8.3.1
```

while the “mpich” wildcard will load the default version, mpich-3.3.1-intel-19.1.0.166 in this case.

You should now have MPICH compilers in your path:

```
[me@login01 ~]$ which mpicc
/opt/apps/mpi/mpich-3.3.1_gcc-8.3.1/bin/mpicc
[me@login01 ~]$ mpicc --version
gcc (GCC) 8.3.1 20191121 (Red Hat 8.3.1-5)
Copyright (C) 2018 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

[me@login01 ~]$ which mpifort
/opt/apps/mpi/mpich-3.3.1_gcc-8.3.1/bin/mpifort
[me@login01 ~]$ mpifort --version
GNU Fortran (GCC) 8.3.1 20191121 (Red Hat 8.3.1-5)
Copyright (C) 2018 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```
