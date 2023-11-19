---
title: Working with containers
created: 2023-11-17T16:31:00 (UTC -04:00)
tags: []
author: Scott Johnson
exclude: true
---

# Working with Containers - a Freesurfer example

Containers have become a great way to produce reproducible science and capture exact environments for running
workloads. There is, however, some friction and learning curve in using them. Here, we work an example to illustrate 
common issues and strategies for creating and using containers on the CHPC systems.

## Prerequisites:
* Docker installed on your local machine
* Apptainer installed on your local machine

## Step 1: Create the container on your local machine
Starting on your local machine:
```
[me@my_local_machine]:$ git clone git@github.com:freesurfer/freesurfer.git
[me@my_local_machine]:$ cd freesurfer
```

Now, we can build the container (by default it uses the `Dockerfile` in the current directory)
```
[me@my_local_machine]:$ docker build .
```

Eventually, it finishes building:
```
=> [7/7] RUN wget https://surfer.nmr.mgh.harvard.edu/pub/dist/freesurfer/7.2.0/freesurfer-linux-centos7_x86_64-7.2.0.tar.gz -O fs.tar.gz &&     tar --no-same-owner -  329.8s
```

And you have a brand new container:
```
[me@my_local_machine]:$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
<none>       <none>    d4e02d861be0   3 minutes ago   13.2GB
```

## Step 2: Quality-checking the container
But there's a problem ...
```
[me@my_local_machine]:$ docker image inspect d4e02d861be0
...
        "Architecture": "arm64",
        "Variant": "v8",
        "Os": "linux",
...
```

Our container was built for the "arm64" architecture, which is not the architecture of our
cluster, so what do we do? 

## Step 3: Creating a compliant container
We explicitly tell Docker to build for "linux/amd64"!
```
[me@my_local_machine]:$ docker buildx build --platform linux/amd64 -f ./Dockerfile -t image .
```

And we wait:
```
 => [7/7] RUN wget https://surfer.nmr.mgh.harvard.edu/pub/dist/freesurfer/7.2.0/freesurfer-linux-centos7_x86_64-7.2.0.tar.gz -O fs.tar.gz &&     tar --no-same-owner -  640.8s
```

Finally, we have another one:
```
[me@my_local_machine]:$ docker images                                               
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
image        latest    af6f74f8577f   42 seconds ago   12.9GB
<none>       <none>    d4e02d861be0   25 minutes ago   13.2GB
```

We can now save that to an archive file:
```
[me@my_local_machine]:$ docker save af6f74f8577f -o freesurfer-7.2.0.linux-amd64.tar
```

And export to Apptainer:
```
[me@my_local_machine]:$ apptainer build freesurfer-7.2.0.linux-amd64.sif docker-archive://freesurfer-7.2.0.linux-amd64.tar
```

## Step 4: Sending the container to the CHPC
Now, you have a container that can be executed in Apptainer! Send it to the cluster:
```
[me@my_local_machine]:$ scp -i ~/.ssh/my_ssh_certificate freesurfer-7.2.0.linux-amd64.sif me@login3.chpc.wustl.edu:~/
```

In this case, we have saved this actual container in `/export/freesurfer`. You can now use this in your jobs, e.g:
```
[me@my_local_machine]:$ ssh me@login3.chpc.wustl.edu
[me@login01 ~]# srun -n 1 -N 1 --partition=free --time=5:00 /export/apptainer/apptainer-1.2.3/bin/apptainer run /export/freesurfer/freesurfer-7.2.0.linux-amd64.sif freesurfer -h
srun: job 4205011 queued and waiting for resources
srun: job 4205011 has been allocated resources
INFO:    Detected Singularity user configuration directory

FreeSurfer is a set of tools for the analysis and visualization
of structural and functional brain imaging data. FreeSurfer
also refers to the structural imaging stream within the
FreeSurfer suite.

Users should consult the online documentation available at:

  http://surfer.nmr.mgh.harvard.edu

Alternatively, the 'recon-all' command help-text provides
adequate information to begin processing subject data, such
as the sample subject 'bert' found in the 'freesurfer/subjects'
directory.  Type 'recon-all --help' to view this help-text.

Direct comments and questions to:

  freesurfer@nmr.mgh.harvard.edu

You are running this version of FreeSurfer:

  freesurfer-linux-centos7_x86_64-7.2.0-20210720-aa8f76b
```
