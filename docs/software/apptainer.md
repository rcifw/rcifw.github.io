---
created: 2023-03-31T09:26:07 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/apptainer/
author: 
---

Singularity is not longer officially supported and Apptainer is the replacement for it.

The APPTAINER home page is [https://apptainer.org/](https://apptainer.org/).

To use APPTAINER, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail apptainer/

------------------------------- /opt/modulefiles -------------------------------
   apptainer/1.1.3

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load apptainer/1.1.3
```

while the “apptainer” wildcard will load the default version, apptainer-1.1.3 in this case.

You should now be able to run APPTAINER commands:

```
[me@login01 ~]$ apptainer --version
apptainer version 1.1.3
```

For users who are familiar with singularity, the apptainer is very similar. For most cases, you can simply replace “singularity” with “apptainer” to run singularity commands.

The complete user guide be found at [https://apptainer.org/docs/user/1.1/](https://apptainer.org/docs/user/1.1/).

**If one needs to build a singularity container on the cluster from a definition file**, a root permission is required, which is not permitted. A work-around is building a container from your local machine and transfer it to the cluster.

**We recommend use** **Remote Builder** from Sylabs to build your singularity container, and you can sign in and use it at [https://cloud.sylabs.io/builder](https://cloud.sylabs.io/builder).

**Note:** when building singularity container images, avoid using either home or scratch directory as the temporary directory, for instance, you may set the temporary directory to /tmp by specifying the option “–tmpdir /tmp” for the singularity command. Otherwise, you may encounter the following error.

```
FATAL:   While performing build: packer failed to pack: while unpacking tmpfs: error unpacking rootfs: unpack layer: unpack entry: usr/share/terminfo/c/cons25: link: unpriv.link: unpriv.wrap target: operation not permitted
```

Other questions related to the singularity container may find answers in the _Docker images_ section in [FAQ](https://sites.wustl.edu/chpc/for-users/frequently-asked-questions-faq/).
