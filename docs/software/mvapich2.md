---
title: MVAPICH
created: 2023-03-31T09:27:14 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/mvapich2/
author:
exclude: true
---

The MVAPICH2 Developers home page is [http://mvapich.cse.ohio-state.edu](http://mvapich.cse.ohio-state.edu/).

To use the MVAPICH2 compilers, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail mvapich2/

------------------------------ /opt/modulefiles -------------------------------
   mvapich2/2.3.2-gcc-8.3.1    mvapich2/2.3.2-intel-19.1.0.166 (D)

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

Versions of MVAPICH2 compiled with both the gcc compiler and the intel compiler are available.

To load a specific version, you would use:

```
[me@login01 ~]$ module load mvapich2/2.3.2-gcc-8.3.1
```

while the “mvapich2” wildcard will load the default version, mvapich2/2.3.2-intel-19.1.0.166 in this case.

You should now have MVAPICH2 compilers in your path:

```
[me@login01 ~]$ which mpicc
/opt/apps/mpi/mvapich2-2.3.2_gcc-8.3.1/bin/mpicc
[me@login01 ~]$ mpicc --version
gcc (GCC) 8.3.1 20191121 (Red Hat 8.3.1-5)
Copyright (C) 2018 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

[me@login01 ~]$ which mpifort
/opt/apps/mpi/mvapich2-2.3.2_gcc-8.3.1/bin/mpifort
[me@login01 ~]$ mpifort --version
GNU Fortran (GCC) 8.3.1 20191121 (Red Hat 8.3.1-5)
Copyright (C) 2018 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```
