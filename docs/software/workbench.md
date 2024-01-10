---
title: WORKBENCH
created: 2023-03-31T09:27:55 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/workbench/
author:
---

The WORKBENCH home page is [https://www.humanconnectome.org/software/get-connectome-workbench](https://www.humanconnectome.org/software/get-connectome-workbench).

To use WORKBENCH, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail workbench/

------------------------------ /opt/modulefiles -------------------------------
   workbench/1.5.0

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load workbench/1.5.0
```

while the “workbench” wildcard will load the default version, workbench-1.5.0 in this case.

You should now be able to run WORKBENCH commands:

```
[me@login01 ~]$ wb_command
Version: 1.5.0
Commit Date: 2021-02-16 13:46:47 -0600
Operating System: Linux

Information options:
   -help                       show this help info
   -arguments-help             explain the format of subcommand help info
   -global-options             display options that can be added to any command
   -parallel-help              details on how wb_command uses parallelization
   -cifti-help                 explain the cifti file format and related terms
   -gifti-help                 explain the gifti file format (metric, surface)
   -volume-help                explain volume files, including label volumes
   -version                    show extended version information
   -list-commands              list all processing subcommands
   -list-deprecated-commands   list deprecated subcommands
   -all-commands-help          show all processing subcommands and their help
                                  info - VERY LONG

To get the help information of a processing subcommand, run it without any
   additional arguments.

If the first argument is not recognized, all processing commands that start
   with the argument are displayed.
```
