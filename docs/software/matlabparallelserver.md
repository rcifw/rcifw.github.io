---
title: MATLAB Parallel Server
created: 2023-03-31T09:27:04 (UTC -04:00)
tags: 
source: 
author:
---

The MATLAB home page is [https://www.mathworks.com/](https://www.mathworks.com/).

The MATLAB Parallel Server allows users to run MATLAB on their local workstation, but have compute-intensive jobs run on the CHPC cluster. MATLAB will automatically transfer input data from their local workstation to the cluster, submit a batch job, wait for the job to run, then retrieve the results, and debug errors.
## Local Installation and Configuration

The first step is to download the appropriate file listed below depending on your operating system and then untar/unzip them in the right location on your local workstation.

Windows: [MATLAB\_Windows.zip](https://sites.wustl.edu/chpc/files/2022/04/MATLAB_Windows.rar)

Linux/macOS: [MATLAB\_MacOS\_or\_Linux.tar.gz](https://sites.wustl.edu/chpc/files/2022/04/MATLAB_MacOS_or_Linux.tar_.gz)

To find out the right location, start MATLAB on your local workstation, and run “userpath” in the opened MATLAB command window. The example below is showing the location to zip the file on my Windows machine.

```
>> userpath

ans =

    'C:\Users\Me\Documents\MATLAB'
```

On Linux, it should be unzipped under `/toolbox/local`.

Next, configure MATLAB to run parallel jobs on your cluster by calling “configCluster”

> Note: “configCluster” only needs to be called once per version of MATLAB

```
>> configCluster
Username on CHPC (e.g. joe): me
Warning: Unable to write to requested folder 'C:\Program
Files\MATLAB\R2021a\bin'. Perhaps you do not have the correct access
permissions. You will be unable to store any job and tasks here.
> In parallel.internal.cluster.FileStorage (line 52)
In parallel.internal.cluster/FileStorage/createFileStorage (line 91)
In parallel.internal.cluster/StorageFactory/createStorage (line 25)
In parallel.cluster.Generic (line 312)
In configCluster>assembleClusterProfile (line 172)
In configCluster (line 115)

Must set WallTime before submitting jobs to CHPC.  E.g.

>> c = parcluster;
>> % 5 hour walltime
>> c.AdditionalProperties.WallTime = '05:00:00';
>> c.saveProfile
```

Prior to submitting the job, you can specify various parameters to pass to your jobs, such as queue, e-mail, walltime, etc.
## Configuring Jobs
Let’s start with the required settings
### Get a handle to the cluster
```
>> c = parcluster;
```
### Specify the wall time
You must set the wall time for the jobs you submit to the cluster, e.g:

```
>> c.AdditionalProperties.WallTime = '02:00:00';
```
### Specify the number of nodes
```
>> c.AdditionalProperties.Node = 2;
```
### Specify the Partition
You can either use the "free" tier:

```
>> c.AdditionalProperties.Partition = 'free';
```

Or for a paid tier, make sure to also specify the account, e.g:
```
>> c.AdditionalProperties.Partition = 'tier1_cpu';
>> c.AdditionalProperties.AdditionalSubmitArgs = '--account=<PI name>';
```
### Optional: Specify e-mail address to receive notifications about your job
```
>> c.AdditionalProperties.EmailAddress = 'me@wustl.edu';
```
### Optional: Specify number of GPUs per node
```
>> c.AdditionalProperties.GpusPerNode = 1;
```
### Optional: Specify **memory per core** to use for MATLAB jobs (MB)
```
>> c.AdditionalProperties.MemUsage = '4000';
```
### Save changes
Save changes after modifying `AdditionalProperties` for the above changes to persist between MATLAB sessions.
```
>> c.saveProfile
```
To see the values of the current configuration options, display `AdditionalProperties`:
```
>> c.AdditionalProperties
```
Unset a value when no longer needed.
```
>> % Turn off email notifications
>> c.AdditionalProperties.EmailAddress = '';
>> c.saveProfile
```

## Serial Batch Jobs
Use the `batch` command to submit asynchronous jobs to the cluster.  The `batch` command will return a job object which is used to access the output of the submitted job.  See the MATLAB documentation for more help on `batch`.

```
>> % Get a handle to the cluster
>> c = parcluster;

>> % Submit job to query where MATLAB is running on the cluster
>> j = c.batch(@pwd, 1, {}, …
       'CurrentFolder', '.', 'AutoAddClientPath', false);

>> % Query job for state
>> j.State

>> % If state is finished, fetch the results
>> j.fetchOutputs{:}

>> % Delete the job after results are no longer needed
>> j.delete
```

> Note: the symbol `…` is used to indicate additional parameters you may use. Do not copy the above command verbatim

To retrieve a list of currently running or completed jobs, call `parcluster` to retrieve the cluster object. The cluster object stores an array of jobs that were run, are running, or are queued to run. This allows us to fetch the results of completed jobs. Retrieve and view the list of jobs as shown below.
```
>> c = parcluster;
>> jobs = c.Jobs;
```
Once we’ve identified the job we want, we can retrieve the results as we’ve done previously. _fetchOutputs_ is used to retrieve function output arguments; if calling _batch_ with a script, use _load_ instead. Data that has been written to files on the cluster needs be retrieved directly from the file system (e.g. via ftp).
```
>> % Get a handle to the job with ID 2
>> j2 = c.Jobs(2);
```
## Parallel Batch Jobs
Users can also submit parallel workflows with the _batch_ command. Let’s use the following example for a parallel job, which is saved as `parallel_example.m`.
```
function [t, A] = parallel_example(iter)

if nargin==0
    iter = 8;
end

disp('Start sim')

t0 = tic;
parfor idx = 1:iter
    A(idx) = idx;
    pause(2)
    idx
end
t = toc(t0);

disp('Sim completed')

save RESULTS A

end
```

This time when we use the `batch` command, to run a parallel job, we’ll also specify a MATLAB Pool.
```
>> % Get a handle to the cluster
>> c = parcluster;

>> % Submit a batch pool job using 4 workers for 16 simulations
>> j = c.batch(@parallel_example, 1, {16}, 'Pool', 4, …
       'CurrentFolder', '.', 'AutoAddClientPath', false);

>> % View current job status
>> j.State

>> % Fetch the results after a finished state is retrieved
>> j.fetchOutputs{:}
ans =
8.8872
```
> Note: the symbol `…` is used to indicate additional parameters you may use. Do not copy the above command verbatim

The job ran in 8.89 seconds using four workers. Note that these jobs will always request N+1 CPU cores, since one worker is required to manage the batch job and pool of workers. For example, a job that needs eight workers will consume nine CPU cores.

We’ll run the same simulation but increase the Pool size. This time, to retrieve the results later, we’ll keep track of the job ID.
```
>> % Get a handle to the cluster
>> c = parcluster;

>> % Submit a batch pool job using 8 workers for 16 simulations
>> j = c.batch(@parallel_example, 1, {16}, 'Pool', 8, …
       'CurrentFolder', '.', 'AutoAddClientPath', false);

>> % Get the job ID
>> id = j.ID
id =
4
>> % Clear j from workspace (as though we quit MATLAB)
>> clear j
```
Once we have a handle to the cluster, we’ll call the _findJob_ method to search for the job with the specified job ID.
```
>> % Get a handle to the cluster
>> c = parcluster;

>> % Find the old job
>> j = c.findJob('ID', 4);

>> % Retrieve the state of the job
>> j.State
ans =
finished
>> % Fetch the results
>> j.fetchOutputs{:};
ans =
4.7270

```
Alternatively, to retrieve job results via a graphical user interface, use the Job Monitor (Parallel > Monitor Jobs).
![[matlab_screenshot.jpg]]

## Debugging
If a serial job produces an error, call the `getDebugLog` method to view the error log file. When submitting independent jobs, with multiple tasks, specify the task number.
```
>> c.getDebugLog(j.Tasks(3))
```
For Pool jobs, only specify the job object.
```
>> c.getDebugLog(j)
```
When troubleshooting a job, the cluster admin may request the scheduler ID of the job. This can be derived by calling `schedID`.
```
>> schedID(j)
ans =
25539
```
## Learn More
To learn more about the MATLAB Parallel Computing Toolbox, check out these resources:

*   [Parallel Computing Coding Examples](https://www.mathworks.com/help/parallel-computing/examples.html)
*   [Parallel Computing Documentation](http://www.mathworks.com/help/distcomp/index.html)
*   [Parallel Computing Overview](http://www.mathworks.com/products/parallel-computing/index.html)
*   [Parallel Computing Tutorials](http://www.mathworks.com/products/parallel-computing/tutorials.html)
*   [Parallel Computing Videos](http://www.mathworks.com/products/parallel-computing/videos.html)
*   [Parallel Computing Webinars](http://www.mathworks.com/products/parallel-computing/webinars.html)

## Additional Notes:
The version of MATLAB you run on your local machine must match that of MATLB on the cluster. To see what versions we are supporting on the cluster, run `ls /export/matlab` command on a terminal window.

Submission to the remote cluster requires SSH credentials.  You will be prompted for your ssh username and password or identity file (private key).  _**The username and password is the same as you use to log into the cluster.**_ The username and location of the private key will be stored in MATLAB for future sessions.

If you would like to submit to the local machine then run the following command:
```
>> c = parcluster('local');
```

You can view a list of your jobs, as well as their IDs, using the above `c.Jobs` command:
```
>> % Fetch results for job with ID 2
>> j2.fetchOutputs{:}
```

For some applications, there will be a diminishing return when allocating too many workers, as the overhead may exceed computation time.
