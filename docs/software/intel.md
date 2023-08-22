---
created: 2023-03-31T09:26:53 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/intel/
author:
---

The INTEL Developers home page is [https://software.intel.com/content/www/us/en/develop/tools/parallel-studio-xe.html](https://software.intel.com/content/www/us/en/develop/tools/parallel-studio-xe.html).

To use the INTEL compilers, you’ll use the module tool.

You can see what versions of the compilers are available by using:

```
[me@login01 ~]$ module avail intel/

------------------------------ /opt/modulefiles -------------------------------
   intel/19.1.0.166

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load intel/19.1.0.166
```

while the “intel” wildcard will load the default version, intel-19.1.0.166 in this case.

You should now have INTEL compilers in your path:

```
[me@login01 ~]$ which icc
/opt/intel/compilers_and_libraries_2020.0.166/linux/bin/intel64/icc
[me@login01 ~]$ icc --version
icc (ICC) 19.1.0.166 20191121
Copyright (C) 1985-2019 Intel Corporation.  All rights reserved.

[me@login01 ~]$ which ifort
/opt/intel/compilers_and_libraries_2020.0.166/linux/bin/intel64/ifort
[me@login01 ~]$ ifort --version
ifort (IFORT) 19.1.0.166 20191121
Copyright (C) 1985-2019 Intel Corporation.  All rights reserved.
```

You should now be able to compile your code:

```
[me@login01 C]$ icc hello.c
[me@login01 C]$ ./a.out
hello
```
