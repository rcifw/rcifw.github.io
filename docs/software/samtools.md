---
title: BWA
created: 2025-11-07T12:33:00 (UTC -04:00)
tags: []
source: https://bio-bwa.sourceforge.net/
author: Sizhe Zhang
---
Samtools is a suite of programs for interacting with high-throughput sequencing data. It consists of three separate repositories:
- `htslib`: C-library for handling high-throughput sequencing data
- `samtools`: mpileup and other tools for handling SAM, BAM, CRAM
- `bcftools`: calling and other tools for handling VCF, BCF

To use `samtools`, you can use the container located at `/containers/samtools-1.22.1.sif`.
You can run a shell within the container and use the 3 separate tools:
```
[sizhe@login02 ~]$ apptainer exec /containers/samtools-1.22.1.sif bash
Apptainer> samtools

Program: samtools (Tools for alignments in the SAM format)
Version: 1.22.1 (using htslib 1.22.1)

Apptainer> bcftools 

Program: bcftools (Tools for variant calling and manipulating VCFs and BCFs)
Version: 1.22 (using htslib 1.22)

Apptainer> htsfile 
Usage: htsfile [-chHv] FILE...
       htsfile --copy [-v] FILE DESTFILE
```
Or use `apptainer run --app` to execute `samtools`, `bcftools`, and `htslib` commands using the container from the command line:
```
    apptainer run --app samtools -B $PWD:/work --pwd /work /containers/samtools_1.22.1.sif \

```