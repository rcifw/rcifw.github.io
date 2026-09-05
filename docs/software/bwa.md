---
title: BWA
created: 2025-11-07T12:33:00 (UTC -04:00)
tags: []
source: https://bio-bwa.sourceforge.net/
author: Sizhe Zhang
---
BWA is a software package for mapping DNA sequences against a large reference genome, such as the human genome. See [BWA GitHub page](https://github.com/lh3/bwa) and the [project page](https://bio-bwa.sourceforge.net/) for details.

To use BWA, you can use the container located at `/container/bwa-0.7.19-r1273.sif`.
You can run a shell within the container:
```
[sizhe@login02 ~]$ apptainer exec /containers/bwa-0.7.19-r1273.sif bash
Apptainer> bwa

Program: bwa (alignment via Burrows-Wheeler transformation)
Version: 0.7.19-r1273
Contact: Heng Li <hli@ds.dfci.harvard.edu>

Usage:   bwa <command> [options]
```
Or use `exec` to execute bwa commands using the container from the command line:
```
[sizhe@login02 ~]$ apptainer exec -B "$PWD" /containers/bwa-0.7.19-r1273.sif bwa 

Program: bwa (alignment via Burrows-Wheeler transformation)
Version: 0.7.19-r1273
Contact: Heng Li <hli@ds.dfci.harvard.edu>

```