---
created: 2023-03-31T09:27:37 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/r/
author:
---

The R home page is [https://www.r-project.org/](https://www.r-project.org/).

To use R, you’ll need to use Anaconda distributions, which come pre-bundled with many R packages. Regardless of which R package you use, you need to set up a R environment similar to Python Virtual Environment using conda command. This will allow you to update or install any packages that you’d like.

Since Anaconda distributions also provide python packages, you can see what versions of Anaconda distributions available by checking the version of python:

```
[me@login01 ~]$ module avail python/

------------------------------ /opt/modulefiles -------------------------------
   python/2.7.16    python/3.6.5    python/3.7.4    python/3.8.3 (D)

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".

[me@login01 ~]$ module load python/3.8.3
[me@login01 ~]$ which conda
/export/anaconda/anaconda3/anaconda3-2020.07/bin/conda
```

You can now create a R environment with:

```
[me@login01 ~]$ conda create -n <name_of_env> <r_package_needed>
```

where can be whatever you want to call it.

To activate this environment, use:

```
[me@login01 ~]$ source activate <name_of_env>
```

To activate this environment, use:

```
[me@login01 ~]$ conda deactivate
```

To install R packages within this environment, you can start R, and then use “install.packages()” command.

An example of creating a new R environment is shown here:

```
[me@login01 ~]$ module load python/3.8.3
[me@login01 ~]$ conda create -n r-env r-essentials r-base
[me@login01 ~]$ source activate r-env
(r-env) [me@login01 ~]$ R

R version 3.6.1 (2019-07-05) -- "Action of the Toes"
Copyright (C) 2019 The R Foundation for Statistical Computing
Platform: x86_64-conda_cos6-linux-gnu (64-bit)

R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type 'license()' or 'licence()' for distribution details.

  Natural language support but running in an English locale

R is a collaborative project with many contributors.
Type 'contributors()' for more information and
'citation()' on how to cite R or R packages in publications.

Type 'demo()' for some demos, 'help()' for on-line help, or
'help.start()' for an HTML browser interface to help.
Type 'q()' to quit R.

> install.packages('mice')
> library(mice)
> quit()
Save workspace image? [y/n/c]: n

(r-env) [me@login01 ~]$ conda deactivate
[me@login01 ~]$
```

As you don’t have permission to write to the system temporary directory, when you install R packages in your R environment, you may encounter an error like:

```
ERROR: 'configure' exists but is not executable -- see the 'R Installation and Administration Manual'
```

To solve this issue, you need to create a temporary directory in a folder where you have full permission, for instance, your scratch folder. Then, you set TMPDIR variable to this temporary directory.

```
[me@login01 ~]$ mkdir /scratch/me/tmp
[me@login01 ~]$ chmod 755 /scratch/me/tmp
[me@login01 ~]$ export TMPDIR=/scratch/me/tmp
```

After this, you can start R and install packages within as the new temporary directory is writable and executable by you.

```
> tempdir()
[1] "/scratch/me/tmp//RtmpXbI3Sg"
```

You can also use conda command **conda install -c r package-name** to install R packages given they are available in the Anaconda repository. A complete list of these packages can be found [here](https://docs.anaconda.com/anaconda/packages/r-language-pkg-docs/).

```
(r-env) [me@login01 ~]$ conda install -c r r-bayesm
(r-env) [me@login01 ~]$ R
> library(bayesm)
```
