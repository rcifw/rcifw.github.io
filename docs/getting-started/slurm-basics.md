---
title:  Slurm Basics
created: 2023-09-20T18:35:11 (UTC -05:00)
tags: []
permalink: /slurm/
author: Scott Johnson
include: true
---
# Guide for Slurm
This page provides reference information for Slurm and strategies for how to use the job scheduler to best execute your research workflows.

## Accounts

Any cluster user may submit jobs to the free partition without specifying an account using `srun --partition=free`. Jobs on the free partition are limited in terms of their priority, hardware, and run time (max 3 hours). Jobs submitted to a higher tier of service must be associated with an account using `--account=<my account>`.

Accounts are linked to a principal investigator (PI). By default, the account is named `<first_name>_<last_name>` in lowercase after the PI. For example, to submit a job to the tier1_cpu partition for the PI John Smith: `srun --account-john_smith --partition=tier1_cpu`. If a job is not associated with an account then the job _must_ specify `--partition=free`.

A research assistant, student, or post-doc may submit jobs under their PI's account. A lab member with more than one PI can specify which PI's account to use for which job by passing the appropriate `--account=` argument for that job.  PI's may set up an account, select a tier of service, and add/remove lab members who can submit jobs to that account by e-mailing [chpc@nrg.wustl.edu](mailto:chpc@nrg.wustl.edu).

For a complete list of accounts on the cluster run: `sacctmgr list accounts -P`.

## Partitions and Quality of Service
The partition is a great tool to assemble jobs of similar properties. Depending on the requested number of CPUs and/or GPUs, CPU memory allocation and walltime, we have defined six partitions in the cluster. The relevant properties for each partition are summarized in the table below. To see a current list of partitions, run [`sinfo`](https://manpages.ubuntu.com/manpages/xenial/man1/sinfo.1.html).

| **Partition** | **Max CPUs per job** | **Max nodes** | **Default memory****per CPU** | **Default / Max runtime** | **Max jobs per user** |
| --- | --- | --- | --- | --- | --- |
| free | 30 | 2 | 6G | 5m / 3h | - |
| free_gpu | - | 1 | 6G | 5m / 3h | - |
| tier1_cpu | 30 | 2 | 6G | 30m / 24h | - |
| tier1_gpu | 30 | 2 | 6G | 30m / 24h | - |
| tier2_cpu | - | - | 6G | 30m / 7d | - |
| tier2_gpu | - | - | 6G | 30m / 7d | - |

*Note: Max jobs per user is based on the least amount of CPUs or GPUs and walltime requested within this particular partition*.

### Free Partitions ###
This partition is designed for users who want to develop and test their applications. This partition sets aside 6 compute nodes in the **free** partition to accommodate testing. These jobs will be limited to run no more than 3 hours. The **free_gpu** partition similarly allows for testing of GPU-based workloads for no more than 3 hours per job.

### Tier 1 Partitions ###
The **tier1_cpu** and **tier1_gpu** partitions are designed for *CPU-only* and *GPU-accelerated* jobs, respectively, to be run for no more than 24 hours per job.

### Tier 2 Partitions ###
The **tier1_cpu** and **tier1_gpu** partitions are designed for *CPU-only* and *GPU-accelerated* jobs, respectively, to be run for no more than 1 week per job.

## Options ##
The table below lists [`sbatch` options](https://slurm.schedmd.com/sbatch.html) for executing your Slurm jobs:

| **Job Specification** | **Description** |
| --- | --- |
| `#SBATCH -A, ‐‐account=<account>` | Charge resources used by this job to specified account. The account is an arbitrary string. The account name may be changed after job submission using the scontrol command. |
| `#SBATCH -a, ‐‐array=<*indexes*>` | Job Arrays with array index values. For example, `‐‐array=0-15`, or `‐‐array=0-15:4`, which is equivalent to `‐‐array=0,4,8,12`.|
| `#SBATCH -c, ‐‐cpus-per-task=<*ncpus*>` | Number of processors per task requested. For example,`‐‐cpus-per-task=3` requires 3 processors on the same node. This option requires an explicit task count. |
| `#SBATCH -d, ‐‐dependency=<*dependency_list*>` | Defer the start of this job until the specified dependencies have been satisfied completed. |
| `#SBATCH -e, ‐‐error=<*filename pattern*>` | Defines the error file name specified in the “*filename pattern*“. For example, `‐‐error=JOB.e%j`, where the "%j" is replaced by the job ID, or "JOB.%A_%a.err", "%A" is replaced by the job ID and "%a" with the array index. |
| `#SBATCH ‐‐exclude=<*node name list*>` | Explicitly exclude certain nodes from the resources granted to the job. |
| `#SBATCH ‐‐gres=<*list*>` | Specify the number of GPUs required for the job on each node included in the job’s resource allocation. For example, `‐‐gres=gpu:2` requests jobs running on 2 GPUs. |
| `#SBATCH -J, ‐‐job-name=<*jobname*>` | Specify a name for the job allocation. The specified name will appear along with the job id number when querying running jobs on the system with, e.g., `squeue`. |
| `#SBATCH ‐‐mail-type=<*type*>` | Notify user by email when certain event types occur. Valid **type** values are **NONE**, **BEGIN**, **END**, **FAIL**, **REQUEUE**, **ALL**. For example, `‐‐mail-type=end` sends email to the user when the job finishes. |
| `#SBATCH ‐‐mail-user=<*user* *email*>` | User to receive email notification of state changes as defined by `‐‐mail-type`. The default value is the user submitting jobs. |
| `#SBATCH ‐‐mem=<*size[units]*>` | Specify the real memory required per node. Default units are megabytes. Different units can be specified using the suffix **[K\|M\|G\|T]**. |
| `#SBATCH ‐‐mem-per-cpu=<*size[units]*>` | Minimum memory required per allocated CPU. Default units are megabytes. Different units can be specified using the suffix **[K\|M\|G\|T]**. |
| `#SBATCH -N, ‐‐nodes=<*minnodes*[-*maxnodes*]>` | Request that a minimum of **minnodes** (and optionally maximum of **maxnodes**) nodes be allocated to this job. If only one argument is specified, this is used as both the minimum and maximum node count. The partition’s node limits supersede those of the job. |
| `#SBATCH -n, ‐‐ntasks=<*number*>` | A maximum of **number** tasks requested for a running job. The default is one task per node, but note that the `‐‐cpus-per-task` option will change this default. |
| `#SBATCH -‐ntasks-per-node=<*ntasks*>` | Request that **ntasks** be invoked on each node. If used with the `‐‐ntasks` option, the `‐‐ntasks` option will take precedence and the `‐‐ntasks-per-node` will be treated as a maximum count of tasks per node. Meant to be used with the `‐‐nodes` option. |
| `#SBATCH -o, ‐‐output=<*filename pattern*>` | Defines the output file name specified in the **filename pattern**. For example, "JOB.o%j", where the “%j” is replaced by the job ID, or "JOB.%A_%a.out”, “%A” is replaced by the job ID and “%a” with the array index. |
| `#SBATCH -p, ‐‐partition=<*partition_names*>` | Request a specific partition for the resource allocation. If not specified, the default behavior is to allow the  Slurm controller to select the default partition. For example, `SBATCH ‐‐partition=free` requests jobs to run on the free partition. *Note:* all other partitions require specifying an `--account`. |
| `#SBATCH ‐‐reservation**=<*reservation_names*>` | Allocate resources for the job from the named reservation. Each reservation will be considered in the order it was requested. All reservations will be listed in `scontrol show reservation`/`squeue` through the life of the job. |
| `#SBATCH –t, –-time=<*time*>` | Set a limit on the total run time of the job allocation. A time limit of zero requests that no time limit be imposed. Acceptable time formats include “minutes”, “minutes:seconds”, “hours:minutes:seconds”, “days-hours”, “days-hours:minutes” and “days-hours:minutes:seconds”. For example, `#SBATCH ‐‐time=24:0:0` requests 24 hours of walltime. |
| `#SBATCH ‐‐workdir=<*directory_name*>` | Set the working directory for the submitted job. |

## Environmental Variables ##
If you need to extract information from the job data collected by  Slurm for assessing your job performance in addition to the information provided in the standard output file, you can take advantage of the Slurm environmental variables and include them in your batch script.

| **Variable** | **Description** |
| --- | --- |
| `SLURM_ARRAY_TASK_ID` | Job array ID (index) number. |
| `SLURM_JOBID` | The ID of the job allocation. |
| `SLURM_JOB_NAME` | Name of the job. |
| `SLURM_JOB_CPUS_PER_NODE` | Count of processors available to the job on this node. |
| `SLURM_JOB_PARTITION` | Name of the partition in which the job is running. |
| `SLURM_SUBMIT_DIR` | The directory from which sbatch was invoked. |
| `SLURM_SUBMIT_HOST` | The hostname of the computer from which sbatch was invoked. |
| `SLURM_NODELIST` | List of nodes allocated to the job. |
| `SLURM_NNODES` | Total number of nodes in the job’s resource allocation. |

## Commands ##
Following is a list of  Slurm commands.

| Command | Description |
| --- | --- |
| [`sbatch`](http://slurm.schedmd.com/sbatch.html) *script-name* | Submit a batch script to Slurm. |
| [`sinfo`](http://slurm.schedmd.com/sinfo.html) | View information about Slurm nodes and partitions. |
| [`squeue`](http://slurm.schedmd.com/squeue.html) | View information about jobs located in the Slurm scheduling queue. |
| [`squeue`](http://slurm.schedmd.com/squeue.html) *[username]* | List jobs by user |
| [`squeue`](http://slurm.schedmd.com/squeue.html) `‐‐job *[job-id]*` | Check job status |
| [`scancel`](http://slurm.schedmd.com/scancel.html) *[job-id]* | Signal or cancel jobs, job arrays or job steps. |
| [`sview`](http://slurm.schedmd.com/sview.html) | Graphical user interface to view and modify Slurm state. |
| [`scontrol`](http://slurm.schedmd.com/scontrol.html) `hold *[job_list]*` | Prevent a pending job from being started. |
| [`scontrol`](http://slurm.schedmd.com/scontrol.html) `release [job_list]` | Release a previously held job to begin execution. |
| [`scontrol`](http://slurm.schedmd.com/scontrol.html) `update *[*specification*]*` | Update job, step, node, partition, or reservation configuration per the supplied specification. |
| [`sacct`](http://slurm.schedmd.com/sacct.html) | Displays accounting data for all jobs and job steps in the Slurm job accounting log or Slurm database |

### Checking your Account
A useful command for checking your account usage is `sreport`. For instance, you can see your users' account usage for CPU time with:
```
sreport cluster AccountUtilizationByUser accounts=<your account name> Start=YYYY-MM-DD End=YYYY-MM-DD -T cpu
```
and GPU time with:
```
sreport cluster AccountUtilizationByUser accounts=<your account name> Start=YYYY-MM-DD End=YYYY-MM-DD -T gres/gpu
```

Your PI account name is usually of the format ***\<first name\>_\<last name\>*** in all lower case letters.

## Job states ##
Following is a list of job states described by Slurm.

| **State** | **Full State Name** | **Description** |
| --- | --- | --- |
| R | RUNNING | The job currently has an allocation. |
| CA | CANCELED | The job was explicitly canceled by the user or system administrator. The job may or may not have been initiated. |
| CD | COMPLETED | The job has been terminated all processes on all nodes. |
| CF | CONFIGURING | The job has been allocated resources, but are waiting for them to become ready for use (e.g. booting) |
| CG | COMPLETING | The job is in the process of completing. Some processes on some nodes may still be active. |
| F | FAILED | The job terminated with non-zero exit code or other failure condition. |
| NF | NODE_FAIL | The job terminated due to failure of one or more allocated nodes. |
| PD | PENDING | The job is awaiting resource allocation. |
| PR | PREEMPTED | The job terminated due to preemption. |
| S | SUSPENDED | The job has an allocation, but execution has been suspended. |
| TO | TIMEOUT | The job terminated upon reaching its time limit. |

## More batch script examples ## 

### Batch script for a simple serial job
```
#!/bin/bash
######## Job Name: Sample_Job ########
#SBATCH -J Sample_Job
######## Job Output File: Sample_job.oJOBID ########
#SBATCH -o Sample_job.o%j
######## Job Error File: Sample_job.eJOBID ########
#SBATCH -e Sample_job.e%j
######## Use the free partition ########
#SBATCH --partition=free
######## Number of nodes: 1 ########
#SBATCH -N 1
######## Number of tasks: 1 ########
#SBATCH -n 1
######## Memory per node: 200 MB ########
#SBATCH --mem 200M
######## Walltime: 30 minutes ########
#SBATCH -t 0:30:00

######## Load module environment required for the job ########
module load intel/19.1.0.166
######## Run the job ########
<SERIAL_JOB_PROGRAM>
```

### Batch script for a simple multi-threaded job
```
#!/bin/bash
######## Job Name: Sample_Job ########
#SBATCH -J Sample_Job
######## Job Output File: Sample_job.oJOBID ########
#SBATCH -o Sample_job.o%j
######## Job Error File: Sample_job.eJOBID ########
#SBATCH -e Sample_job.e%j
######## Use the free partition ########
#SBATCH --partition=free
######## Number of nodes: 1 ########
#SBATCH -N 1
######## Number of tasks: 1 ########
#SBATCH -n 1
######## Number of cpus/threads: 8 ########
######## Number of threads per task (OMP threads) ########
#SBATCH --cpus-per-task 8
######## Memory per node: 4 GB ########
#SBATCH --mem 4G
######## Walltime: 3.5 hours ########
#SBATCH -t 03:30:00

######## Load module environment required for the job ########
module load openmpi/4.0.2-intel-19.1.0.166\n\nexport OMP_NUM_THREADS=1

######## Run the job ########
<OPENMP_JOB_PROGRAM>
```

### Batch script for a simple GPU job ###

```
#!/bin/bash
######## Job Name: Sample_Job #########
#SBATCH -J Sample_Job
######## Job Output File: Sample_job.oJOBID ########
#SBATCH -o Sample_job.o%j
######## Job Error File: Sample_job.eJOBID ########
#SBATCH -e Sample_job.e%j
######## Use the the tier1_gpu partition ########
#SBATCH --partition=tier1_gpu
######## Non-free partitions require an account ########
#SBATCH --account=john_smith
######## Number of nodes: 1 ########
#SBATCH -N 1
######## Number of gpus per node: 1 ########
#SBATCH --gres gpu:1
######## Memory per node: 400 MB ########
#SBATCH --mem 400M
######## Walltime: 2 days ########
#SBATCH -t 2-00:00:00

######## Load module environment required for the job ########
module load cuda/10.2

######## Run the job ########
<GPU_JOB_PROGRAM>
```

### Job array ###
If you have tens or hundreds of independent jobs needed to run, job array offers the feature to write a single batch script and easily submit these tens of hundreds of jobs for you.

In Slurm, `SLURM_ARRAY_TASK_ID` variable is used the track the job array IDs, which basically tracks tens or hundreds of jobs you submitted to run.\n\n\nTo use job array, typically you would create a text file containing a list of your input files sequentially for all your jobs, *input_files.txt*. In combination with `SLURM_ARRAY_TASK_ID` variable,  Slurm can loop through input files for your jobs one by one.

To declare using job array, you would number your jobs, typically starting from 1.

```
#SBATCH --array 1-20     # 20 jobs to run
```

Then, you would use `SLURM_ARRAY_TASK_ID` variable to scan through all input files, something like below.

```
input=`head -n $SLURM_ARRAY_TASK_ID input_files.txt| tail -n 1`
srun <YOUR_PROGRAM> $input
```

## Job dependencies ##
Sometimes, your jobs may be constraint by the conditions of other jobs. You don’t have to wait for the other job to finish to submit the restricted job. With the job dependency feature of SLURM, you can submit all the correlated jobs together. You can use `#SBATCH –d <dependency_list>` or `#SBATCH ‐‐dependency=<dependency_list>` to declare the jobs of dependent relationships.

The dependency list is composed of two parts, dependent job status and job dependent ID, separated by colon. The dependent job status can be after the specific job has started, has terminated, has failed or had completed without any error.

| **Dependency Argument** | **Description** |
| --- | --- |
| **after**:jobid[:jobid...] | job can begin after the specified jobs have started |
| **afterany**:jobid[:jobid...] | job can begin after the specified jobs have terminated |
| **afternotok**:jobid[:jobid...] | job can begin after the specified jobs have failed |
| **afterok**:jobid[:jobid...] | job can begin after the specified jobs have run to completion with an exit code of zero |

## Tips ##

### 1. Walltime ###
Walltime requested using `--time` should be larger than, but close to, actual job running time. If the requested time is not enough, the job would fail before it finishes and likely lose important data or results. On the other hand, if the requested time is too long, the job would remain in the queue much longer than you expect as the job scheduler tries to reserve resources requested for your job. Therefore, you are highly advised to test run your job and have a good estimation of your running time so that the job scheduler would most efficiently allocate resources for you and all other users.

### 2. Nodes, tasks, and cpus ###
When you specify your job with the option `--exclusive`, all CPUs and memory within each node allocated would only be available for your job. No one else can run jobs on these allocated nodes. For the maximum efficiency of using computational resources, you need to consider the option `--exclusive` with great care. If your job can fully take advantage of all CPUs or all memory on one or multiple nodes, or your job relies heavily on data transfer between tasks, you may request exclusive nodes. Otherwise, exclusive nodes are not needed, and you should specify the option `--shared` allowing a fraction of each node designated for your job and the unused resources within each node can be shared with other jobs.

You can run parallel jobs either via multiple threads within a single node or multiple processes across multiple nodes. In Slurm, the number of processes is controlled by setting the number of “tasks”, while the number of threads are controlled by setting the number of “cpus”. `--ntasks-per-node` should only be used for multiple processing jobs, also known as MPI jobs. Otherwise, `--cpus-per-task` should be used to specify the number of CPUs.

You can specify the number of nodes for your job, using the option `--nodes` or `-N` and its numerical value in the form of min-max (e.g. 3-6). If a single number is given, the scheduler will only allocate that number of nodes. You can request the same resource by specifying the number of tasks with the option `--ntasks` or `-n` along with the option `--cpus-per-task`, in which case the scheduler will decide the appropriate number of nodes for your job. In addition, you can specify the option `--ntasks-per-node`, which will multiply `--cpus-per-task` if both are used. Be aware that if you ask for more CPUs than that are available in a single node, the job scheduler would refuse your request and throw an exception Similarly, you may be denied the use of the ‘shared’ partition if you try to ask for more than 1 node.

### 3. Memory ###
You can request the total amount of memory **per node** using the option `--mem`, or the amount of memory **per CPU** using the option `--mem-per-cpu`. These two options are mutually exclusive.

Half of the compute nodes, the maximum CPU memory per node is 384 GB and the other half is 768 GB. If your job does not specify a particular amount of memory, your job would run within **6 GB** of memory **per node**.

## Additional resources on Slurm ##
A Quick-Start Guide for those unfamiliar with Slurm can be found [here](https://slurm.schedmd.com/quickstart.html)

Additional Slurm Tutorial Videos can be found [here](https://slurm.schedmd.com/tutorials.html)

For users who are familiar with TORQUE queuing system and looking for a quick adjustment of migrating to  Slurm queuing system, check the information [here](https://wiki.gacrc.uga.edu/wiki/Migrating_from_Torque_to_Slurm) and [here](https://www.sdsc.edu/~hocks/FG/PBS.slurm.html).