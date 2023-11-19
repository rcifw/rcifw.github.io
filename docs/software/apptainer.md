---
title: Apptainer
created: 2023-03-31T09:26:07 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/apptainer/
author: 
exclude: true
---

Singularity is no longer officially supported in its original form and has forked into a version via Syslabs (with the same name, i.e., "Singularity") and Apptainer.

We have only Apptainer currently supported on the CHPC; see the [Apptainer documentation](https://apptainer.org/) for more info. For users who are familiar with Singularity, Apptainer is (more-or-less) the same. For most cases, you can simply replace “singularity” with “apptainer” to run singularity commands, and "singularity" is currently aliased to "apptainer".

To use Apptainer, you’ll use the module tool. You can see what module versions are available by using:

```
[me@login01 ~]$ module avail apptainer/

------------------------------------------------------------ /opt/modulefiles ------------------------------------------------------------
   apptainer/1.1.3    apptainer/1.2.3 (D)

  Where:
   D:  Default Module
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load apptainer/1.2.3
```

while the “apptainer” wildcard will load the default version, "apptainer-1.2.3" in this case.

You should now be able to run Apptainer commands:

```
[me@login01 ~]$ apptainer --version
apptainer version 1.2.3
```

The complete user guide be found at [https://apptainer.org/docs/user/latest/](https://apptainer.org/docs/user/latest/).

## Building containers
In order to build a singularity container from a definition file, you need sudo permissions, which only admins have. For now, there are 2 reasonable options while we work on deploying Virtual Desktops (at which time you would be able to build in the Virtual Machine and immediately have it available on the sahred storage, e.g., `~/` or in your scratch folder) ... but until then we suggest:

* Building the container on your local laptop or desktop, then `scp` or otherwise transfer the container to the cluster (or for the adventurous you can save directly to the CHPC shared storage via sshfs or similar remote mounting)
* Using **Remote Builder** from Sylabs to build your singularity container at [https://cloud.sylabs.io/builder](https://cloud.sylabs.io/builder).

Check out [Working with Containers](../getting-started/working-with-containers.md) for more information about working with Singularity/Apptainer and a working example.

**Note:** when building singularity container images, avoid using either home or scratch directory as the temporary directory, for instance, you may set the temporary directory to /tmp by specifying the option “–tmpdir /tmp” for the singularity command. Otherwise, you may encounter the following error.

```
FATAL:   While performing build: packer failed to pack: while unpacking tmpfs: error unpacking rootfs: unpack layer: unpack entry: usr/share/terminfo/c/cons25: link: unpriv.link: unpriv.wrap target: operation not permitted
```
