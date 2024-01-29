---
title: GEANT4
created: 2023-03-31T09:26:46 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/geant4/
author:
---

The GEANT4 home page is [https://geant4.web.cern.ch/](https://geant4.web.cern.ch/).

To use GEANT4, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail geant4/

------------------------------ /opt/modulefiles -------------------------------
   geant4/10.7.1

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load geant4/10.7.1
```

while the “geant4” wildcard will load the default version, geant4-10.7.1 in this case.

You should now be able to run GEANT4 commands:

```
[me@login01 ~]$ which geant4.sh
/export/geant4/v10.7.1/bin/geant4.sh
```
