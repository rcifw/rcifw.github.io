---
title: Overview
created: 2023-03-31T09:26:02 (UTC -04:00)
tags: []
author: 
include: true
---

## RCIF
*[RCIF]: Research Computing and Informatics Facility
*[HPC]: high-performance computing
*[CHPC]: Center for High-Performance Computing
The [RCIF](https://www.mir.wustl.edu/research/core-resources/research-computing-and-informatics-facility/) is a human imaging facility to help **you** create and execute computationally intensive studies:
- **HPC** - RCIF CHPC [hardware](system-info/hpc-hardware.md), [software](software/software.md)
- **Shared storage** - high-throughput, high-volume: [details](getting-started/storage-systems.md)
- **Data services** - [request here](getting-started/rcif-shared-datasets.md)
- **Expertise** - HPC, data, AI, and more: [support and training](getting-started/training-and-support.md)

To help you access funding:
- **Facilities document** - [example](system-info/facilities-doc.md)
- **Pilot funds** - available to anyone using the RCIF: [here](https://www.mir.wustl.edu/research/core-resources/pilot-funds/)
- **ICTS JIT Funds** - available to anyone using the RCIF: [here](https://icts.wustl.edu/funding/just-in-time-jit/) - note: we are listed as the “Center for High Performance Computing (CHPC)” in the [PDF](https://wustl.box.com/s/umpd5cel70codg1x0wpxf599p4p8827a).

To help the RCIF access funding, we need you, the users, to cite the RCIF in your publications:

> _Computations were performed using the facilities of the Washington University Research Computing and Informatics Facility, which were partially funded by NIH grants S10OD025200, 1S10RR022984-01A1 and 1S10OD018091-01. Additional support is provided The McDonnell Center for Systems Neuroscience._

See current [publication list](publications.md)

## Organization of the Site
We tried to make this a (mostly) linear workflow, from getting an account to specialized applications and recipes for doing specific tasks.
- [Requesting an account](getting-started/applying-for-a-user-account.md)
- [Connecting to the cluster](getting-started/connect-to-login-nodes.md)
- [Free or paid and other accounting FAQs](getting-started/faqs-accounting.md)
- [Importing and exporting data](getting-started/import-export-data.md)
- [Accessing shared datasets](getting-started/rcif-shared-datasets.md)
- [Using SLURM to run jobs](getting-started/slurm-basics.md)
- Advanced: [Working with containers](getting-started/working-with-containers.md)
- [Support and Training](getting-started/training-and-support.md)

## Remote Development
We encourage you to utilize the cluster not just for your compute-intensive jobs, but also for one-off tasks and day-to-day development activities. We believe that developing your cluster jobs _on_ the cluster reduces headaches, speeds deployment, and eases testing/debugging. See below for some resources and tutorials to get started:

- [Jupyter Notebook](software/jupyter-notebook.md)
- [Matlab](software/matlabinteractive.md)
- [Visual Studio Code](software/visual-studio-code.md)
- Remote Desktop Environment (coming Q1 2024)

As always, please be courteous and avoid running compute-intensive jobs on the login nodes.
