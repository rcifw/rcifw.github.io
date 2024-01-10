---
title: Octave
created: 2023-03-31T09:27:19 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/octave/
author:
---

The OCTAVE home page is [https://www.gnu.org/software/octave/index/](https://www.gnu.org/software/octave/index).

To use OCTAVE, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail octave/

------------------------------ /opt/modulefiles -------------------------------
   octave/6.4.0    octave/7.3.0 (D)

  Where:
   D:  Default Module

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching any
of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load octave/7.3.0
```

while the “octave” wildcard will load the default version, octave-7.3.0 in this case.

You should now be able to run OCTAVE commands:

```
GNU Octave, version 7.3.0
Copyright (C) 1993-2022 The Octave Project Developers.
This is free software; see the source code for copying conditions.
There is ABSOLUTELY NO WARRANTY; not even for MERCHANTABILITY or
FITNESS FOR A PARTICULAR PURPOSE.  For details, type 'warranty'.

Octave was configured for "x86_64-pc-linux-gnu".

Additional information about Octave is available at https://www.octave.org.

Please contribute if you find this software useful.
For more information, visit https://www.octave.org/get-involved.html

Read https://www.octave.org/bugs.html to learn how to submit bug reports.
For information about changes from previous versions, type 'news'.

octave:1>
```
