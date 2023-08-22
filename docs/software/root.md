---
created: 2023-03-31T09:27:39 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/root/
author:
---

The ROOT home page is [https://root.cern](https://root.cern/).

To use ROOT, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail root/

------------------------------ /opt/modulefiles -------------------------------
   root/6.20.02

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load root/6.24.0
```

while the “root” wildcard will load the default version, root-6.24.0 in this case.

You should now be able to run ROOT commands:

```
[me@login01 ~]$ root --help

usage: root [-b B] [-x X] [-e E] [-n N] [-t T] [-q Q] [-l L] [-a A]
            [-config CONFIG] [-memstat MEMSTAT] [-h HELP] [--version VERSION]
            [--notebook NOTEBOOK] [--web WEB] [--web=<browser> WEB=<BROWSER>]
            [dir] [file:data.root] [file1.C...fileN.C]

OPTIONS:
  -b                             Run in batch mode without graphics
  -x                             Exit on exceptions
  -e                             Execute the command passed between single quot                                                                    es
  -n                             Do not execute logon and logoff macros as spec                                                                    ified in .rootrc
  -t                             Enable thread-safety and implicit multi-thread                                                                    ing (IMT)
  -q                             Exit after processing command line macro files
  -l                             Do not show the ROOT banner
  -a                             Show the ROOT splash screen
  -config                        print ./configure options
  -memstat                       run with memory usage monitoring
  -h, -?, --help                 Show summary of options
  --version                      Show the ROOT version
  --notebook                     Execute ROOT notebook
  --web                          Display graphics in a default web browser
  --web=<browser>                Display graphics in specified web browser
  [dir]                          if dir is a valid directory cd to it before ex                                                                    ecuting
  [file:data.root]               Open the ROOT file data.root
  [file1.C...fileN.C]            Execute the the ROOT macro file1.C ... fileN.C
```
