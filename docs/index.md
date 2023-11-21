---
title: Research Computing and Informatics Facility (RCIF)
created: 2023-03-31T09:26:02 (UTC -04:00)
tags: []
author: 
layout: home
exclude: true
---

The **Research Computing and Informatics Facility** (**RCIF**) provides access to high-performance computing (HPC) resources, high-capacity and high-throughput storage, access to open and proprietary human imaging datasets, and the expertise necessary to tackle any computationally intensive human imaging project, including AI/ML applications. See [hardware](system-info/hpc-hardware.md) and [software](software/software.md) for more information, and check out our [training and support](getting-started/training-and-support.md) page for how to get one-on-one or community support to kickstart your research with the RCIF.

**Writing a grant?** Check out this sample [facilities document](system-info/facilities-doc.md).

This documentation is a community effort - please contribute [here](https://github.com/rcifw/rcifw.github.io)! Also, visit our [site](https://sites.wustl.edu/chpc/) for more (and sometimes the same) information.

## Citing the RCIF
In order to participate in future funding opportunities, we need you, the users, to cite the RCIF in your publications:

_Computations were performed using the facilities of the Washington University Research Computing and Informatics Facility, which were partially funded by NIH grants S10OD025200, 1S10RR022984-01A1 and 1S10OD018091-01. Additional support is provided The McDonnell Center for Systems Neuroscience._

See current publication list [here](publications.md)

## Organization of the Site
We tried to make this a (mostly) linear workflow, from getting an account to specialized applications and recipes for doing specific tasks.
1. [Requesting an account](getting-started/applying-for-a-user-account.md)
2. [Connecting to the cluster](getting-started/connect-to-login-nodes.md)
3. [Fundamental tools](under-construction.md)
4. [Building your application](under-construction.md)
5. [Importing and exporting data](getting-started/import-export-data.md)
6. [Using SLURM](getting-started/slurm-basics.md)
7. [Testing your workflow](under-construction.md)
8. [Running your workflow](under-construction.md)
9. [Analyzing your results](under-construction.md)
10. [Tips and tricks for batch management](under-construction.md)
11. [Managing experiments](under-construction.md)
12. [Managing your jobs](under-construction.md)
13. [Support and Training](getting-started/training-and-support.md)
14. [Special services](under-construction.md)

## Remote Development

We encourage you to utilize the cluster not only for your compute-intensive jobs, but also for one-off tasks and day-to-day development activities. We believe developing your cluster jobs on the cluster reduces headaches, speeds deployment, and eases testing/debugging. See below for some resources and tutorials to get started.

- [Jupyter Notebook](software/jupyter-notebook.md)
- [Matlab](software/matlabinteractive.md)
- [Visual Studio Code](software/visual-studio-code.md)
- Remote Desktop Environment (coming soon)

As always, please be courteous and avoid running compute-intensive jobs on the login nodes.

## Additional Services

We offer the following services:

*   Access to a professionally managed High Performance Computing System (100Gbps InfiniBand HDR backbone network connecting 1,364 CPU-cores, 28 TB of combined memory, 4x A100 GPUs, 21x V100 GPUs, and 2x T4 GPUs to shared scratch storage and volume storage ... the next generation is already in process and will increase the GPU capacity by 5x (to 2.4PF)
* Access to pre-installed software packages that support molecular modeling, advanced imaging, statistics and mathematical analysis (the current list is [here](software/software.md).
* Access to software development tools including both the Intel compilers and MPI libraries.
* Support for user access and the ability to request new software be added to the system.
* Consultation with RCIF staff on parallel computing and software optimization.
