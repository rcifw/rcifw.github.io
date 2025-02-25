---
title: Python
created: 2023-03-31T09:27:31 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/python/
author:
---
There are a few ways to setup Python access:
1. [System](#Python%20Module): Use the `python` module
2. [Hybrid](#System%20Miniconda): Use the Python module but configure your own packages
3. [Install](#Your%20Miniconda) your own Miniconda

We recommend to install your own, as it gives you the most control over your installation.
## Python Module
This is the simplest way to get access to specific versions of the `python` interpreter. You can see available versions with:
```
module avail python
```
You can load the default version with:
```
module load python
```
You can see the path to the interpreter with:
```
# which python
/export/anaconda/anaconda3/anaconda3-2023.03/envs/python_3_12_2/bin/python
```
While this is a simple method, many users need to manage packages and environments for Python. This requires a little more configuration, as described in the following sections.
## System Miniconda
You can also use the Miniconda referenced by the `python` module to manage your own Miniconda packages.

For the above example, you can enter the base Miniconda environment for the default module with:
```
. /export/anaconda/anaconda3/anaconda3-2023.03/bin/activate
```
(note: the "." at the beginning of the command)

You may notice you cannot install packages, as this attempts to install to the system location (which is only available to administrators). 

Instead, create a `.condarc` file in your home directory. For instance, it might look like:
```
pkgs_dirs:
- /home/<my username>/.conda/pkgs
envs_dirs:
- /home/<my username>/.conda/envs
```
(replace `<my username>` with yours)

You may also want to define environmental variables:
```
export CONDA_PKGS_DIRS/home/$USER/.conda/pkgs
export CONDARC/home/$USER/.condarc
```
## Your Miniconda
The most flexible option to install whatever Python versions you want and not rely on the system installation is to install Miniconda yourself. We have a handy script called `install_conda` that is available on the login nodes and will, by default, install the latest Miniconda to your `/scratch/$USER/` directory.

The default will installation location will allow you to activate Miniconda with:
```
. /scratch/$USER/miniconda3/bin/activate
```

Alternatively, you can manually do this with [Miniconda](https://docs.conda.io/en/main/miniconda.html) by using:
```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
chmod +x Miniconda3-latest-Linux-x86_64.sh
./Miniconda3-latest-Linux-x86_64.sh -p ~/miniconda -b
```

You can then update and activate your conda environment using:
```
. ~/miniconda/bin/activate
conda update -y --update-all
```

**Note**: when using Miniconda-based Python in your batch scripts you may need to add the following to your script:
```
source ~/.bashrc
. ~/miniconda/bin/activate
```
