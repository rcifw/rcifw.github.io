---
created: 2023-03-31T09:26:00 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/afni/
author: 
---

The AFNI home page is [https://afni.nimh.nih.gov](https://afni.nimh.nih.gov/).

To use AFNI, you’ll use the module tool.

You can see what versions are available by using:
```
[me@login01 ~]$ module avail afni/

------------------------------ /opt/modulefiles -------------------------------
   afni/20.3.03

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:
```
[me@login01 ~]$ module load afni/20.3.03
```

while the “afni” wildcard will load the default version, afni-20.3.03 in this case.

You should now be able to run AFNI commands:
```
[me@login01 ~]$ afni --version
Precompiled binary linux_openmp_64: Dec  7 2020 (Version AFNI_20.3.03 'Vespasian')
```
