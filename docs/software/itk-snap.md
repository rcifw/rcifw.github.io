---
title: ITK-SNAP
created: 2023-03-31T09:26:55 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/itksnap/
author:
---

The ITK-SNAP home page is [http://www.itksnap.org/pmwiki/pmwiki.php?n=Main.HomePage](http://www.itksnap.org/pmwiki/pmwiki.php?n=Main.HomePage).

To use ITK-SNAP, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail itksnap/

------------------------------ /opt/modulefiles -------------------------------
   itksnap/3.8.0

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load itksnap/3.8.0
```

while the “itksnap” wildcard will load the default version, itksnap-3.8.0 in this case.

You should now be able to run ITK-SNAP commands:

```
[me@login01 ~]$ itksnap --help
ITK-SnAP Command Line Usage:
   /export/itksnap/itksnap-3.8.0/lib/snap-3.8.0/ITK-SNAP [options] [main_image]
Image Options:
   -g FILE              : Load the main image from FILE
   -s FILE              : Load the segmentation image from FILE
   -l FILE              : Load label descriptions from FILE
   -o FILE [FILE+]      : Load additional images from FILE
                        :   (multiple files may be provided)
   -w FILE              : Load workspace from FILE
                        :   (-w cannot be mixed with -g,-s,-l,-o options)
Additional Options:
   -z FACTOR            : Specify initial zoom in screen pixels/mm
   --cwd PATH           : Start with PATH as the initial directory
   --threads N          : Limit maximum number of CPU cores used to N.
   --scale N            : Scale all GUI elements by factor of N (e.g., 2).
   --geometry WxH+X+Y   : Initial geometry of the main window.
Debugging/Testing Options:
   --debug-events       : Dump information regarding UI events
   --test list          : List available tests.
   --test TESTID        : Execute a test.
   --testdir DIR        : Set the root directory for tests.
   --testacc factor     : Adjust the interval between test commands by factor (e.g., 0.5).
   --css file           : Read stylesheet from file.
   --opengl MAJOR MINOR : Set the OpenGL major and minor version. Experimental.
   --testgl             : Diagnose OpenGL/VTK issues.
```
