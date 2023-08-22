---
created: 2023-03-31T09:26:30 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/dramms/
author: 
---

The DRAMMS home page is [https://www.nitrc.org/projects/dramms](https://www.nitrc.org/projects/dramms/).

To use DRAMMS, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail dramms/

------------------------------ /opt/modulefiles -------------------------------
   dramms/1.5.1

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load dramms/1.5.1
```

while the “dramms” wildcard will load the default version, dramms-1.5.1 in this case.

You should now be able to run DRAMMS commands:

```
[me@login01 ~]$ dramms --version
dramms (DRAMMS) v1.5
Copyright (c) 2011--2013 UPenn; 2014--2016 MGH, HMS; 2016-- BCH, HMS.. All rights reserved.
See http://www.cbica.upenn.edu/sbia/software/license.html or COPYING file.
```
