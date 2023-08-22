---
created: 2023-03-31T09:27:29 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/plink/
author:
---

The PLINK home page is [https://www.cog-genomics.org/plink/2.0/](https://www.cog-genomics.org/plink/2.0/).

To use PLINK, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail plink/

------------------------------ /opt/modulefiles -------------------------------
   plink/2.0

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load plink/2.0
```

while the “plink” wildcard will load the default version, plink-2.0 in this case.

You should now be able to run SINGULARITY commands:

```
[me@login01 ~]$ plink2 --version
PLINK v2.00a3LM AVX2 Intel (12 Dec 2020)
```
