---
created: 2023-03-31T09:26:02 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/ants/
author: 
---

The ANTS home page is [http://stnava.github.io/ANTs](http://stnava.github.io/ANTs/).

To use ANTS, you’ll use the module tool.

You can see what versions are available by using:
```
[xinghuang@login01 ~]$ module avail ants/

------------------------------- /opt/modulefiles -------------------------------
   ants/2.3.1    ants/2.3.5    ants/2.4.0 (D)

  Where:
   D:  Default Module

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:
```
[xinghuang@login01 ~]$ module load ants/2.4.0
```

while the “ants” wildcard will load the default version, ants-2.4.0 in this case.

You should now be able to run ANTS commands:
```
[xinghuang@login01 ~]$ antsRegistration --version
ANTs Version: v2.4.0.post18-gac45328
Compiled: Aug 16 2022 16:19:48
```

Be default, ANTs software will run on 4 CPU cores, therefore you should have your batch script looks like below:
```
#!/bin/bash
######## Job Name: Sample_Job ########
#SBATCH -J Sample_Job
######## Job Output File: Sample_job.oJOBID ########
#SBATCH -o Sample_job.o%j
######## Job Error File: Sample_job.eJOBID ########
#SBATCH -e Sample_job.e%j
######## Number of nodes: 1 ########
#SBATCH -N 1
######## Number of tasks: 1 ########
#SBATCH -n 1
######## Number of cpus/threads: 4 ########
######## Number of threads per task matching default value ########
#SBATCH --cpus-per-task 4
######## Memory per node: 1 GB ########
#SBATCH --mem 1G
######## Walltime: 1.5 hours ########
#SBATCH -t 01:30:00

######## load the package module ########
module load ants/2.4.0
 
######## Run the job ########
ANTS_PROGRAM
```

However, if you need to run on different number of CPU cores, you need to modify the default number of threads set by ANTs software. by **declaring a new value to the environmental variable ITK\_GLOBAL\_DEFAULT\_NUMBER\_OF\_THREADS** shown as the example below:
```
#!/bin/bash
######## Job Name: Sample_Job ########
#SBATCH -J Sample_Job
######## Job Output File: Sample_job.oJOBID ########
#SBATCH -o Sample_job.o%j
######## Job Error File: Sample_job.eJOBID ########
#SBATCH -e Sample_job.e%j
######## Number of nodes: 1 ########
#SBATCH -N 1
######## Number of tasks: 1 ########
#SBATCH -n 1
######## Number of cpus/threads: 8 ########
######## Number of threads per task matching total requested CPU cores ########
#SBATCH --cpus-per-task 8
######## Memory per node: 1 GB ########
#SBATCH --mem 1G
######## Walltime: 1.5 hours ########
#SBATCH -t 01:30:00

######## load the package module ########
module load ants/2.4.0

######## Set variable to match the total number of CPU cores ########
export ITK_GLOBAL_DEFAULT_NUMBER_OF_THREADS=8
 
######## Run the job ########
ANTS_PROGRAM
```
