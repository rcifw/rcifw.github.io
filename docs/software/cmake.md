---
created: 2023-03-31T09:26:10 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/cmake/
author: 
---

The CMAKE home page is [https://cmake.org](https://cmake.org/).

To use CMAKE, you’ll use the module tool.

You can see what versions are available by using:

```
[xinghuang@login01 ~]$ module avail cmake/

------------------------------ /opt/modulefiles -------------------------------
   cmake/3.14.5    cmake/3.20.0 (D)

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[xinghuang@login01 ~]$ module load cmake/3.20.0
```

while the “cmake” wildcard will load the default version, cmake-3.20.0 in this case.

You should now be able to run CMAKE commands:

```
[xinghuang@login01 ~]$ cmake --version
cmake version 3.20.0-rc3

CMake suite maintained and supported by Kitware (kitware.com/cmake).
```
