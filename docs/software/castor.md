---
title: CASTOR
created: 2024-02-02T09:06:38 (UTC -0600)
topic: castor
autogenerated: true
---
<!-- This file was automatically generated. To edit, modify software_packages.yml . -->
See the [CASTOR project page](http://www.castor-project.org/). To use CASTOR, you’ll use the `module` tool.

You can see what versions are available by using:
```
[me@login01 ~]$ module avail castor

------------------------------ /opt/modulefiles -------------------------------
   castor/3.1.1

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:
```
[me@login01 ~]$ module load castor/3.1.1
```

while the "castor" wildcard will load the default version, castor-3.1.1 in this case.

You should now be able to run CASTOR commands:
```
[me@login01 ~]$ castor-recon -h
```
```
Usage:  castor-recon.exe  -df file.cdh  -(f/d)out output  -it iter  [settings]

[Main options]:
  -df file.cdh         : Give an input CASTOR datafile header (no default).
  -fout name           : Give the root name for all output files (no default, alternative to -dout)
  -dout name           : Give the name of the output directory where all output files will be written (no default, alternative to -fout)
  -it  list            : Give the sequence of iterations:subsets separated by commas (no default).
  -dim x,y,z           : Give the number of voxels in each dimension (default: those of the scanner).
  -fov x,y,z           : Give the size of the field-of-view in each dimension, in mm (default: those of the scanner, or calculated from
                        the voxel sizes provided using '-vox').
  -vox x,y,z           : Give the size of the voxels in each dimension, in mm (default: those of the scanner, or calculated from the fov
                        if a fov value is provided using '-fov').
  -vb                  : Give the general verbosity level, from 0 (no verbose) to 5 and above (at the event level) (default: 1).

[Specific help options]:
  -help-dim            : Print out specific help about dimensions settings.
  -help-in             : Print out specific help about input settings.
  -help-out            : Print out specific help about output settings.
  -help-algo           : Print out specific help about reconstruction algorithms and their settings.
  -help-proj           : Print out specific help about projection operators.
  -help-dynamic        : Print out specific help about dynamic methodologies settings.
  -help-imgp           : Print out specific help about image processing modules.
  -help-comp           : Print out specific help about computing settings.
  -help-corr           : Print out specific help about all corrections that can be disabled.
  -help-misc           : Print out specific help about miscellaneous and verbose settings.

[Implemented Modules]:
  -help-scan           : Show the list of all scanners from the configuration directory.
  -help-projm          : Show the list and description of all implemented projectors.
  -help-opti           : Show the list and description of all implemented optimizer algorithms.
  -help-pnlt           : Show the list and description of all implemented penalties for optimizers.
  -help-motion-model   : Show the list and description of all implemented image-based deformation models.
  -help-dynamic-model  : Show the list and description of all implemented dynamic models.
  -help-conv           : Show the list and description of all implemented image convolvers.
  -help-proc           : Show the list and description of all implemented image processing modules.


  --help,-h,-help      : Print out this help page.

  This program is part of the CASToR release version 3.1.1.
```
