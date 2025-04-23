---
title: Apptainer
created: 2023-03-31T09:26:07 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/apptainer/
author: 
---

Singularity is no longer officially supported in its original form and has forked into a version via Syslabs (with the same name, i.e., "Singularity") and Apptainer.

We have only Apptainer currently supported on the CHPC; see the [Apptainer documentation](https://apptainer.org/) for more info. For users who are familiar with Singularity, Apptainer is (more-or-less) the same. For most cases, you can simply replace “singularity” with “apptainer” to run singularity commands, and "singularity" is currently aliased to "apptainer".

## Using Apptainer
We support the system installation at `/usr/bin/apptainer`. 

We also maintain a basic legacy support for the module tool, and both `singularity` and `apptainer` 1.4.0 refer to the system installation:

```
[me@login01 ~]$ module avail apptainer

---------------------------------------------------------------------------------------------------- /opt/modulefiles -----------------------------------------------------------------------------------------------------

   apptainer/1.4.0
```

The complete user guide be found at [https://apptainer.org/docs/user/latest/](https://apptainer.org/docs/user/latest/).

## Building containers
Check out [Working with Containers](../getting-started/working-with-containers.md) for more information.

**Note:** when building Apptainer container images, avoid using either home or scratch directory as the temporary directory, for instance, you may set the temporary directory to `/tmp` by specifying the option `–tmpdir /tmp` for the Apptainer command. Otherwise, you may encounter the following error:
```
FATAL:   While performing build: packer failed to pack: while unpacking tmpfs: error unpacking rootfs: unpack layer: unpack entry: usr/share/terminfo/c/cons25: link: unpriv.link: unpriv.wrap target: operation not permitted
```
