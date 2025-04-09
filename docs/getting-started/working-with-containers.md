---
title: Working with containers
created: 2023-11-17T16:31:00 (UTC -04:00)
tags: []
permalink: /containers/
author: Scott Johnson
---

# Working with Containers - a Freesurfer example

Containers have become a great way to produce reproducible science and capture exact environments for running workloads. There is, however, some friction and learning curve in designing them. Here, we provide 3 paths: using Apptainer directly, pulling a Docker container into Apptainer, or importing a Docker container to Apptainer. In the last Docker section (Approach 3 below), we work an example to illustrate common issues and strategies for creating and using containers on the CHPC systems.
## Approach 1: Building with Apptainer on the Cluster
This approach has fewer steps, but they may be more complicated depending on your comfort level with building software or your need to customize. Luckily, the rise of AI-based tools has significantly decreased the difficulty.

We first suggest trying to directly import a Docker container if it exists (see [here](https://apptainer.org/docs/user/main/build_a_container.html#downloading-an-existing-container-from-docker-hub)). Otherwise ...
### Step 1: Create an Apptainer definition file
It is not common to find an Apptainer (or, as it was previously called, "Singularity") definition file, so you will probably have to make your own with this method. However, you can design and build them relatively quickly starting with one generated from an LLM tool (e.g., [Claude](https://claude.ai), [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com), etc.).

For instance, this prompt (using a snippet from the [NIH AFNI setup page](https://afni.nimh.nih.gov/pub/dist/doc/htmldoc/background_install/install_instructs/steps_linux_ubuntu22.html), gave me a great starting point for a definition file):
```
Make the following into an Apptainer definition file: This is the quick form of AFNI setup for Ubuntu 22.04. It includes downloading the Bootcamp data and running the system check (don’t forget to do that!). Download the command scripts. Copy+paste: cd curl -O https://raw.githubusercontent.com/afni/afni/master/src/other_builds/OS_notes.linux_ubuntu_22_64_a_admin.txt curl -O https://raw.githubusercontent.com/afni/afni/master/src/other_builds/OS_notes.linux_ubuntu_22_64_b_user.tcsh curl -O https://raw.githubusercontent.com/afni/afni/master/src/other_builds/OS_notes.linux_ubuntu_22_64_c_nice.tcsh Feel free to read any of these, for educational purposes.
```

Save the result into a file, e.g., `~/my_file.def`.
### Step 2: Build the container
Apptainer has a great page: [https://apptainer.org/docs/user/main/build_a_container.html](https://apptainer.org/docs/user/main/build_a_container.html) that describes your options. To summarize ...

If you are pretty confident or the build process is fast, just build it:
```
[me@login01]:$ module load apptainer
[me@login01]:$ apptainer build ~/my_container.sif ~/my_file.def
```

If you think you may need to do some experimentation to get the container to work, follow [this](https://apptainer.org/docs/user/main/build_a_container.html#converting-containers-from-one-format-to-another) for creating a SIF from the sandbox.
## Approach 2: Pulling a Docker container into Apptainer
You can also try building from a pre-existing Docker container, e.g.:
```
[me@login01]:$ module load apptainer
[me@login01]:$ apptainer pull --disable-cache docker://developer/container:v1.2.3
```
## Approach 3: Building with Docker and Importing
While Apptainer is well-supported on most high-performance computing clusters, you may want something even more portable. [Docker](https://www.docker.com/) is one way to build [OCI](https://opencontainers.org/)-compliant containers that will run (or can be imported) on a wide variety of platforms. Also, you are more likely to find the container published as a Docker container or a Dockerfile (recipe) available on the websites of your favorite software.
### Prerequisites:
* Docker installed on your local machine
### Step 1: Create the container on your local machine
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
### Step 2: Quality-checking the container
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
### Step 3: Creating a compliant container
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
### Step 4: Sending the container to the CHPC
Now, you have a container that can be imported into Apptainer, so send it to the CHPC:
```
[me@my_local_machine]:$ scp -i ~/.ssh/my_ssh_certificate freesurfer-7.2.0.linux-amd64.tar me@login3.chpc.wustl.edu:~/
```
### Step 5: Build the container in Apptainer:
Login to the cluster, and you will find `freesurfer-7.2.0.linux-amd64.tar` in your home directory. From your home directory, run:
```
[me@login01]:$ apptainer build freesurfer-7.2.0.linux-amd64.sif docker-archive://freesurfer-7.2.0.linux-amd64.tar
```
You now have a container that can be executed in Apptainer!
### Example
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
### More tips
See also the [Docker documentation](https://docs.docker.com/build/building/secrets/) for more tips on building containers.
