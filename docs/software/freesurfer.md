---
title: FREESURFER
created: 2023-03-31T09:26:37 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/freesurfer/
author:
exclude: true
---
> [!WARNING]
> Due to some inconsistencies between the Perl code in FreeSurfer 5.3.0 and the Perl offered with CentOS 8 , the MNI code for both FreeSurfer 5.3.0, and 5.3.0-HCP has been replaced with the MNI code from FreeSurfer 6.0 which was modified to fix this issue.  This could potentially impact the results, so users should be careful.  If there are any questions, please contact us.

The FREESURFER home page is [http://freesurfer.net](http://freesurfer.net/).

To use FREESURFER, you’ll use the module tool, or you can alternatively use the container described in [this example](../getting-started/working-with-containers.md) and hosted at `/export/freesurfer/freesurfer-7.2.0.linux-amd64.sif`.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail freesurfer

-------------------------------------------- /opt/modulefiles ---------------------------------------------
   freesurfer/5.3.0-HCP    freesurfer/6.0.0    freesurfer/7.2.0
   freesurfer/5.3.0        freesurfer/7.1.1    freesurfer/7.4.1 (D)

  Where:
   D:  Default Module
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load freesurfer/7.1.1
```

while the “freesurfer” wildcard will load the default version, freesurfer-7.4.1 in this case.

You should now be able to run FREESURFER commands:

```
[me@login01 ~]$ recon-all --help

USAGE: recon-all

 Required Arguments:
   -subjid <subjid>
   -<process directive>
```
