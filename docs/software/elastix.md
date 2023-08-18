---
created: 2023-03-31T09:26:33 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/elastix/
author: 
---

The ELASTIX home page is [https://elastix.lumc.nl/](https://elastix.lumc.nl/).

To use ELASTIX, you’ll use the module tool.

You can see what versions are available by using:

```
[xinghuang@login01 ~]$ module avail elastix/

------------------------------- /opt/modulefiles -------------------------------
   elastix/5.0.1

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[xinghuang@login01 ~]$ module load elastix/5.0.1
```

while the “elastix” wildcard will load the default version, elastix-5.0.1 in this case.

You should now be able to run ELASTIX commands:

```
[xinghuang@login01 ~]$ elastix --help
elastix version: 5.0.1

elastix registers a moving image to a fixed image.
The registration-process is specified in the parameter file.
  --help, -h displays this message and exit
  --version  output version information and exit
  --extended-version  output extended version information and exit

Call elastix from the command line with mandatory arguments:
  -f        fixed image
  -m        moving image
  -out      output directory
  -p        parameter file, elastix handles 1 or more "-p"

Optional extra commands:
  -fMask    mask for fixed image
  -mMask    mask for moving image
  -t0       parameter file for initial transform
  -priority set the process priority to high, abovenormal, normal (default),
            belownormal, or idle (Windows only option)
  -threads  set the maximum number of threads of elastix

The parameter-file must contain all the information necessary for elastix to run properly. That includes which metric to use, which optimizer, which transform, etc. It must also contain information specific for the metric, optimizer, transform, etc. For a usable parameter-file, see the website.

Need further help?
Check the website http://elastix.isi.uu.nl, or mail elastix@bigr.nl.
```
