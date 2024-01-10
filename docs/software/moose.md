---
title: MOOSE
created: 2023-03-31T09:27:07 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/moose/
author:
---

The MOOSE home page is [https://pythonawesome.com/moose-multi-organ-objective-segmentation-a-data-centric-ai-solution/](https://pythonawesome.com/moose-multi-organ-objective-segmentation-a-data-centric-ai-solution/#:~:text=MOOSE%20%28Multi-organ%20objective%20segmentation%29%20a%20data-centric%20AI%20solution,whole-body%2018F-FDG%20PET%2FCT%20image.%20%3F%20Required%20folder%20structure).

To use MOOSE, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail moose/

------------------------------- /opt/modulefiles -------------------------------
   moose/0.1.0

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load moose/0.1.0
```

while the “moose” wildcard will load the default version, moose-0.1.0 in this case.

Before running moose command, you need to activate the Python Virtual Environment after loading the module.

```
[me@login01 ~]$ conda activate moose_env
(moose_env) [me@login01 ~]$
```

You should now be able to run MOOSE commands:

```
(moose_env) [me@login01 ~]$ moose
```
