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

Also, please review the [good neighbor](#good-neighbor-policies) policies in this guide. For those who either consistently or flagrantly violate those policies we reserve the right to cancel your jobs. PLEASE READ THEM!
## Very Quick Start
After [connecting](connect-to-login-nodes.md) you can ask for 5 minutes of free time by running `gimme5`. This script just calls:
```
$ cat `which gimme5`
#!/bin/bash
salloc -N 1 -n 1 --partition=free --time=5:00
```

Example:
```
$ gimme5
salloc: Pending job allocation 272745
salloc: job 272745 queued and waiting for resources
salloc: job 272745 has been allocated resources
salloc: Granted job allocation 272745
salloc: Waiting for resource configuration
salloc: Nodes node16 are ready for job
[me@node16 chpc-billing]$ hostname
node16.cluster
```
This example is giving the user 5 minutes of time on 1 CPU on node16 and automatically opens a prompt on node16. When the requested time is up, the batch management system will shut down any user programs on that allocation and remove user access.

## Accounts
Any cluster user may submit jobs to the free partition without specifying an account using `srun --partition=free`. Jobs on the free partition are limited in terms of their priority, hardware, and run time (max 3 hours) and use the "unassociated" account. Jobs submitted to a higher tier of service must be associated with an account using `--account=<my account>`.

Accounts are linked to a principal investigator (PI). By default, the account is named `<first_name>_<last_name>` in lowercase after the PI. For example, to submit a job to the tier1_cpu partition for the PI John Smith: `srun --account-john_smith --partition=tier1_cpu`. If a job is not associated with an account then the job _must_ specify `--partition=free`.

A research assistant, student, or post-doc may submit jobs under their PI's account. A lab member with more than one PI can specify which PI's account to use for which job by passing the appropriate `--account=` argument for that job.  PI's may set up an account, select a tier of service, and add/remove lab members who can submit jobs to that account by e-mailing [chpc@nrg.wustl.edu](mailto:chpc@nrg.wustl.edu).

For a complete list of accounts on the cluster run: `sacctmgr list accounts -P`.
## Shares
Each account is assigned a number of shares related to the amount paid for access. Here is a summary:
* While partition weights are equal, the partition to which you submit jobs controls the maximum runtime and the pool of computing resources you can access (see [here](#partitions-and-quality-of-service))
* Accounts are assigned a set of shares relative to their paid tier (e.g., Tier 1 = 100 shares, Tier 2 = 200 shares, Tier 3 = 300 shares), while the default (i.e., "unassociated") account (for free usage) receives 1 share.
* When a user submits jobs via an Account, those jobs draw from that account's shares; users do not have individual shares.
* Priority is based on the following weights: 62.5% based on shares, 31.25% based on the job wait time, and the rest based on job size

You can get a sense of your account shares through the `sshare` command (see [here](https://slurm.schedmd.com/sshare.html))
## Consuming Resources
You can think of shares as priority on the cluster for an account, where an "account" is usually synonymous with a PI's group. When users run their jobs under an account, the jobs consume the priority in that account.

The rate at which they consume priority depends on the resources requested. We set these weights currently as:

| **Resource**            | **Weight** | Per Unit |
| ----------------------- | ---------- | -------- |
| CPU                     | 1          | core     |
| Memory                  | 0.15       | G        |
| tesla_t4                | 10         | GPU      |
| tesla_v100, tesla_v100S | 20         | GPU      |
| tesla_a100              | 40         | GPU      |
| nvidia_a100_80          | 50         | GPU      |
| nvidia_h100_sxm         | 80         | GPU      |
See [GRES types](#gres-types) for a description of the GPU resources.
## Limits
While there is no practical limit on the number of jobs a user or group can run or queue, we apply a maximum limit on cumulative concurrent resource usage of:
* Per account: 512 cores and 32 GPUs
* Per user: 24 GPUs

For some users, you may also use different quality of service options for different partitions or resources. We currently support:

| **QoS Name** | **Description** | **Limits** |
| --- | --- | --- |
| `normal` | Default quality of service | See above |
| `normal_gpu` | Offers separate GPU pool limits | CPUs: 256, GPUs: 32 |
| `condo` | Avoids limits when working on your condo | No limit |

## Partitions and Quality of Service
The partition is a great tool to assemble jobs of similar properties. Depending on the requested number of CPUs and/or GPUs, CPU memory allocation and wall time, we have defined 9 partitions in the cluster. The relevant properties for each partition are summarized in the table below. To see a current list of partitions, run [`sinfo`](https://manpages.ubuntu.com/manpages/xenial/man1/sinfo.1.html).

| **Partition**   | **Max CPUs per job** | **Max nodes** | **Default memory****per CPU** | **Default / Max runtime** | **Max jobs per user** |
| --------------- | -------------------- | ------------- | ----------------------------- | ------------------------- | --------------------- |
| free            | 30                   | 2             | 6G                            | 5m / 3h                   | -                     |
| free_gpu        | -                    | 1             | 6G                            | 5m / 3h                   | -                     |
| interactive_cpu | 2                    | 1             | 6G                            | 5m / 30m                  | -                     |
| tier1_cpu       | 30                   | 2             | 6G                            | 30m / 24h                 | -                     |
| tier1_gpu       | 30                   | 2             | 6G                            | 30m / 24h                 | -                     |
| tier2_cpu       | -                    | -             | 6G                            | 30m / 7d                  | -                     |
| tier2_gpu       | -                    | -             | 6G                            | 30m / 7d                  | -                     |
| tier3_cpu       | -                    | -             | 6G                            | 30m / 14d                 | -                     |
| tier3_gpu       | -                    | -             | 6G                            | 30m / 14d                 | -                     |
### Free Partitions ###
This set of partitions is designed for users who want to develop and test their applications.
* The **free** partition includes of the compute nodes to accommodate testing. Each job in this partition is limited to run no more than 3 hours.
* The **free_gpu** partition similarly allows for testing of GPU-based workloads. Each job in this partition is limited to run no more than 3 hours.
* The **interactive_cpu** partition is designed for all users to submit interactive jobs. Each job in this partition is limited to run no more than 30 minutes but will get enhanced priority.
### Tier 1 Partitions ###
The **tier1_cpu** and **tier1_gpu** partitions are designed for *CPU-only* and *GPU-accelerated* jobs, respectively, to be run for no more than 24 hours per job.
### Tier 2 Partitions ###
The **tier2_cpu** and **tier2_gpu** partitions are designed for *CPU-only* and *GPU-accelerated* jobs, respectively, to be run for no more than 1 week per job.
### Tier 3 Partitions ###
The **tier3_gpu** partitions are designed for the highest performance *GPU-accelerated* jobs for up to 2 weeks per job.

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
| `#SBATCH ‐‐gres=<*list*>` | Specify the number of GPUs required for the job on each node included in the job’s resource allocation. For example, `‐‐gres=gpu:2` requests jobs running on 2 GPUs. You can also ask for specific GPUs, e.g., `--gres=gpu:tesla_a100:2` would request 2 A100 GPUs |
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
## GRES Types ##
The table below lists [`gres` options](https://slurm.schedmd.com/gres.html) for executing your Slurm jobs on resources with specific attributes (generic resources). While we realize that Tesla is not correct for the line of NVIDIA GPUs we are referencing, we have kept the nomenclature to avoid breaking already existing workflows:

| **GRES**              | **Description**                     |
| --------------------- | ----------------------------------- |
| `gpu:nvidia_h100_sxm` | NVIDIA H100-SXM-80 GPU              |
| `gpu:nvidia_a100_80`  | NVIDIA A100-SXM-80 GPU              |
| `gpu:tesla_a100`      | NVIDIA A100 GPU (both PCIe and SXM) |
| `gpu:tesla_t4`        | NVIDIA T4 GPU                       |
| `gpu:tesla_v100`      | NVIDIA V100 GPU                     |
| `gpu:tesla_v100S`     | NVIDIA V100S GPU                    |

For example, to request an allocation of 1 node and 2 cores with a single A100 GPU for 30 minutes:
```
salloc -N1 -n2 --gres=gpu:tesla_a100:1 --partition=<partition name> --account=<account name> --time=30:00
```

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
Following is a list of job states described by Slurm:

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
## Additional resources on Slurm ##
A Quick-Start Guide for those unfamiliar with Slurm can be found [here](https://slurm.schedmd.com/quickstart.html)

Additional Slurm Tutorial Videos can be found [here](https://slurm.schedmd.com/tutorials.html)

For users who are familiar with TORQUE queuing system and looking for a quick adjustment of migrating to  Slurm queuing system, check the information [here](https://wiki.gacrc.uga.edu/wiki/Migrating_from_Torque_to_Slurm) and [here](https://www.sdsc.edu/~hocks/FG/PBS.slurm.html).
## Good Neighbor Policies ##
It is great to have a shared resource, but there are pitfalls. For those who either consistently or flagrantly violate the following policies we reserve the right to cancel your jobs, add constraints to the user and/or account involved, or suspend the user or account from the system (depending on the severity and chronic nature of the violations).

The general rules:
1. No squatting and scope your requests appropriately: [details](#squatting-and-job-scoping)
2. Don’t abuse the file systems: [details](#file-system-treatment)
3. Run your own jobs/don’t share credentials: [details](#be-yourself)
4. Manage your data: [details](#manage-your-data)
5. Be nice!: [details](#be-nice)
### Squatting and Job Scoping
First and foremost, don't request resources and then not use them – especially GPUs. This is the most severe form of resource misuse and is not allowed. We run telemetry and automated jobs to watch for this. While some usage inefficiency is ok, if your job is not using cores/GPUs for 30 minutes or more there is a problem.

Second to this is the need to appropriately request resources when you **are** using them:
#### 1. Walltime
Walltime requested using `--time` should be larger than, but close to, actual job running time. If the requested time is not enough, the job would fail before it finishes and likely lose important data or results. On the other hand, if the requested time is too long, the job would remain in the queue much longer than you expect as the job scheduler tries to reserve resources requested for your job. Therefore, you are highly advised to test run your job and have a good estimation of your running time so that the job scheduler would most efficiently allocate resources for you and all other users.
#### 2. Nodes, tasks, cpus, and GPUs
When you specify your job with the option `--exclusive`, all CPUs and memory within each node allocated would only be available for your job. No one else can run jobs on these allocated nodes. For the maximum efficiency of using computational resources, you need to consider the option `--exclusive` with great care. If your job can fully take advantage of all CPUs or all memory on one or multiple nodes, or your job relies heavily on data transfer between tasks, you may request exclusive nodes. Otherwise, exclusive nodes are not needed, and you should specify the option `--shared` allowing a fraction of each node designated for your job and the unused resources within each node can be shared with other jobs.

You can run parallel jobs either via multiple threads within a single node or multiple processes across multiple nodes. In Slurm, the number of processes is controlled by setting the number of “tasks”, while the number of threads are controlled by setting the number of “cpus”. `--ntasks-per-node` should only be used for multiple processing jobs, also known as MPI jobs. Otherwise, `--cpus-per-task` should be used to specify the number of CPUs.

You can specify the number of nodes for your job, using the option `--nodes` or `-N` and its numerical value in the form of min-max (e.g. 3-6). If a single number is given, the scheduler will only allocate that number of nodes. You can request the same resource by specifying the number of tasks with the option `--ntasks` or `-n` along with the option `--cpus-per-task`, in which case the scheduler will decide the appropriate number of nodes for your job. In addition, you can specify the option `--ntasks-per-node`, which will multiply `--cpus-per-task` if both are used. Be aware that if you ask for more CPUs than that are available/allowed in a partition, the job scheduler would refuse your request and throw an exception.

Make sure if you are requesting a GPU that you are using the resource. We have canceled many jobs because they request GPUs but then only use the CPUs on the node. 
#### 3. Memory
You can request the total amount of memory **per node** using the option `--mem`, or the amount of memory **per CPU** using the option `--mem-per-cpu`. These two options are mutually exclusive.

Half of the compute nodes, the maximum CPU memory per node is 384 GB and the other half is 768 GB. If your job does not specify a particular amount of memory, your job would run within **6 GB** of memory **per node**.

Do not grossly over-request memory:  It denies the use of the cluster to others, it is a waste of resources, and it is against our policies (e.g., if you are requesting 32G of memory and using only 1G this is a problem!)
### File System Treatment
Bad ideas:
* Requesting 1000’s of cores to write to a single file concurrently
* Writing or reading many small files
* Listing directories with millions of files
* Storing too many files in a single directory
* Using any Ceph mount as “scratch”
* Ignoring quotas or leaving unused data around
* Repeatedly opening and closing a file

We act aggressively to maintain file system stability, and we may remove access if we cannot contain the impact. The file system must stay usable for everyone.
### Be Yourself
Users should not share credentials (which also violates university policy) or run on behalf of others. Labs should only have members doing lab work. We may remove access for users or implement permission controls, and we may reclassify users for accounting purposes if we see this being violated (in addition to the options above).
### Manage Your Data
Stay within your quota; curate your scratch data; protect sensitive data

Files in “scratch” not accessed in 28 days are eligible for purging as are files over quota. Purge order is from least recently accessed to most recently accessed.

Know your responsibilities with sensitive data … and the consequences of violations. Do not move it off the cluster storage or open permissions without knowing you can and should!
### Be Nice
We ask everyone to play nicely, so everyone can have access to resources. Also, treat each other with respect on Slack and other communication channels. If usage is not meeting our policy goals, we will revise our priority and quality of service configurations.
