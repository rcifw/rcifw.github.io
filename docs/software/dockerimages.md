---
created: 2023-03-31T09:23:12 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/for-users/frequently-asked-questions-faq/docker-images-1/
author: 
---

### Is it possible to run Docker images on the cluster?

While we don’t support Docker directly, we do support Singularity which is a container implementation designed for HPC. It is possible to run Docker images through [Singularity](https://sites.wustl.edu/chpc/resources/software/singularity/).

Before you take action, you must first load the singularity module on the cluster by running:

```
[me@login01 ~]$ module load singularity/3.7.0
```

Once you have loaded the singularity module, you can run the Docker image by:

```
[me@login01 ~]$ singularity exec ubuntu.simg cat /etc/os-release
```

Also, you can run the Docker image interactively by:

```
[me@login01 ~]$ singularity shell ubuntu.simg
```

If the data to be processed is in /scratch folder, you just need to map /scratch folder on the cluster to the /scratch folder in the container image:

```
[me@login01 ~]$ singularity exec -B /scratch:/scratch ubuntu.simg YOUR_CODE
```
