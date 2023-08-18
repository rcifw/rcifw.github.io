---
created: 2023-03-31T09:26:04 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/amber/
author: 
---

The AMBER home page is [http://ambermd.org](http://ambermd.org/).

To use AMBER, you’ll use the module tool.

You can see what versions are available by using:
```
[xinghuang@login01 ~]$ module avail amber/

------------------------------ /opt/modulefiles -------------------------------
   amber/18.17

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:
```
[xinghuang@login01 ~]$ module load amber/18.17
```

while the “amber” wildcard will load the default version, afni-18.07 in this case.

You should now be able to run AMBER commands:
```
[xinghuang@login01 ~]$ which sander
/export/amber/amber-18.07/bin/sander
```

The MPI binaries and mpirun should also now be in your path:
```
[xinghuang@login01 ~]$ which sander.MPI
/export/amber/amber-18.07/bin/sander.MPI
```

as well as the CUDA-enabled binary:
```
[xinghuang@login01 ~]$  which pmemd.cuda
/export/amber/amber-18.07/bin/pmemd.cuda
```

>[!Note]
>  AMBER is only available to people who own a valid license. If you own a license and would like to run **AMBER** on the cluster, please let us know.**
