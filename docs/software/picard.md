---
title: BWA
created: 2025-11-07T12:47:00 (UTC -04:00)
tags: []
source: https://github.com/broadinstitute/picard
author: Sizhe Zhang
---

Picard is a set of Java command line tools for manipulating high-throughput sequencing (HTS) data and formats.. See [Picard GitHub page](https://github.com/broadinstitute/picard) for details.

To use BWA, you can use the container located at `/containers/picard-3.1.1.sif`.
You can run a shell within the container:
```
apptainer exec picard.sif bash
```
or run other commands from the command line:
```
apptainer exec -B "$PWD":/work --pwd /work picard_3.1.1.sif \
  picard <commands for picard>
```
For further help on available commands, run 
```
[sizhe@login02 ~]$ apptainer exec -B "$PWD" /containers/picard-3.1.1.sif picard
USAGE: PicardCommandLine <program name> [-h]

Available Programs:
--------------------------------------------------------------------------------------
Base Calling:                                    Tools that process sequencing machine data, e.g. Illumina base calls, and detect sequencing level attributes, e.g. adapters
...
```