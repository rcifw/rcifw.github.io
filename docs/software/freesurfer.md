---
created: 2023-03-31T09:26:37 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/freesurfer/
author:
---
> [!WARNING]
> Due to some inconsistencies between the Perl code in FreeSurfer 5.3.0 and the Perl offered with CentOS 8 , the MNI code for both FreeSurfer 5.3.0, and 5.3.0-HCP has been replaced with the MNI code from FreeSurfer 6.0 which was modified to fix this issue.  This could potentially impact the results, so users should be careful.  If there are any questions, please contact us.

The FREESURFER home page is [http://freesurfer.net](http://freesurfer.net/).

To use FREESURFER, you’ll use the module tool.

You can see what versions are available by using:

```
[xinghuang@login01 ~]$ module avail freesurfer/

------------------------------ /opt/modulefiles -------------------------------
   freesurfer/5.3.0-HCP    freesurfer/6.0.0
   freesurfer/5.3.0        freesurfer/7.1.1 (D)

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[xinghuang@login01 ~]$ module load freesurfer/7.1.1
```

while the “freesurfer” wildcard will load the default version, freesurfer-7.1.1 in this case.

You should now be able to run FREESURFER commands:

```
[xinghuang@login01 ~]$ recon-all --help

USAGE: recon-all

 Required Arguments:
   -subjid <subjid>
   -<process directive>
```
