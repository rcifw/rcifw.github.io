---
title: Overview
created: 2023-03-31T09:26:02 (UTC -04:00)
tags: []
author:
include: true
---
**Click [here](system-info/system-status.md) for system status.**
# RCIF
The [**Research Computing and Informatics Facility (RCIF)**](https://www.mir.wustl.edu/research/core-resources/research-computing-and-informatics-facility/)
is dedicated to helping *you* create and execute computationally intensive studies for human imaging applications. See our [FY25 RCIF Overview](https://wustl.box.com/s/5ga479573mw0emxukivtbfnpuncxsvx1), or see our featured resources:
- RCIF's **Center for High-Performance Computing (CHPC)** offers [hardware](system-info/hpc-hardware.md) and [software](software/software.md) resources.
- **Shared storage** - high-throughput and high-volume storage systems, more [details available here](getting-started/storage-systems.md)
- **Data services** - information on shared datasets, imaging data management, and clinical data pulls [[data-services-overview|is available here]].
- **Expertise** - we provide support in HPC, data, AI, and more. Find [support and training options here](getting-started/training-and-support.md).
Don't miss our [events page](events.md) with upcoming events as well as links to past events!
## Funding
To help the RCIF access funding, we need you, the users, to cite the RCIF in your publications:
> _Computations were performed using the facilities of the Washington University Research Computing and Informatics Facility (RCIF). The RCIF has received funding from NIH S10 program grants: 1S10OD025200-01A1 and 1S10OD030477-01._

To help you access funding:
- **Facilities document(most projects)** - view an [example of our facilities document](system-info/facilities-doc.md).
- **Facilities document(HCP-related projects)** - view an [example of our HCP facilities document](system-info/facilities-doc-hcp.md).
- **Pilot funds** - available to **anyone** using the RCIF, learn more [about pilot funds](https://www.mir.wustl.edu/research/core-resources/pilot-funds/).
- **ICTS JIT Funds** - also available to **anyone** using the RCIF. More information [about JIT Funds](https://icts.wustl.edu/funding/just-in-time-jit/)
    - **note:** We are listed as the "**Center for High Performance Computing (CHPC)**" in this [supporting PDF document](https://wustl.box.com/s/umpd5cel70codg1x0wpxf599p4p8827a).

See a list of the [publications](publications.md) that have used the RCIF.
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
