---
title: Singularity
created: 2023-03-31T09:27:42 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/singularity/
author:
exclude: true
---

The SINGULARITY home page is [https://sylabs.io/docs](https://sylabs.io/docs/).

To use SINGULARITY, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail singularity/

------------------------------ /opt/modulefiles -------------------------------
   Singularity/3.5.2    Singularity/3.9.0 (D)    singularity/3.7.0
   Singularity/3.7.0    singularity/3.5.2        singularity/3.9.0 (D)

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load singularity/3.7.0
```

while the “singularity” wildcard will load the default version, singularity-3.7.0 in this case.

You should now be able to run SINGULARITY commands:

```
[me@login01 ~]$ singularity --version
singularity version 3.7.0
```

**If one needs to build a singularity container on the cluster from a definition file**, a root permission is required, which is not permitted. A work-around is building a container from your local machine and transfer it to the cluster.

**We recommend use** **Remote Builder** from Sylabs to build your singularity container, and you can sign in and use it at [https://cloud.sylabs.io/builder](https://cloud.sylabs.io/builder).

**Note:** when building singularity container images, avoid using either home or scratch directory as the temporary directory, for instance, you may set the temporary directory to /tmp by specifying the option “–tmpdir /tmp” for the singularity command. Otherwise, you may encounter the following error.

```
FATAL:   While performing build: packer failed to pack: while unpacking tmpfs: error unpacking rootfs: unpack layer: unpack entry: usr/share/terminfo/c/cons25: link: unpriv.link: unpriv.wrap target: operation not permitted
```

Other questions related to the singularity container may find answers in the _Docker images_ section in [FAQ](https://sites.wustl.edu/chpc/for-users/frequently-asked-questions-faq/).
