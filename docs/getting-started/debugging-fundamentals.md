---
title: Fundamentals of Debugging
created: 2025-05-07T12:01:01 (UTC -05:00)
tags: 
permalink: /debugging/
author: Scott Johnson
include: false
---
Users may encounter times when their jobs fail. It can feel overwhelming, but don't panic! This guide will give you some simple and effective techniques to quickly isolate and address problems in your scripts. If you have not visited the [Slurm fundamentals](slurm-basics) page, this is a great resource for basic system use.
## Check the output
[Slurm](slurm-basics) sends standard output to `slurm-<jobid>.out` and standard error to `slurm-<jobid>.err` buy default. Check these files to see if they tell you the problem. Note: you cannot necessarily depend on these being produced; some exit states for programs cause this to fail or to produce `root`-owned output files.
## Run interactively
Your Slurm job submission is just a Bash script, so you can always use `salloc --partition=interactive_cpu ...` with the same parameters as defined in `#SBATCH` directives in your job script. This should get you a quick allocation.

Then, cut and paste successive sections of your script to see in which section it fails. Once you can see the section, it is usually easy to see the problem. This is also makes it easier for support to address the issue if you cannot see the problem.
## Bisect the script
Sometimes it is easier or more effective to run the batch job script on the cluster just as it is. In this approach, you can isolate a problem area by inserting an `exit` statement at the halfway point in the script (e.g., if you have 100 lines, try placing at Line 50) and then refining that range (by placing at the half-way point of the next iteration) until you have isolated the failure point.

For instance, to start place the `exit` statement at the halfway point in the script and submit the script to Slurm:
* If it runs successfully, then you know the problem comes **after** the `exit` statement, so move the `exit` statement you placed in the script from the half-way point to the 3/4 point and repeat.
* If it fails, then you know it came **before** the `exit` statement, so the new isolation range is now the first half of the code:  Now, move the `exit` statement to the quarter-way point and repeat.

Repeat by placing the `exit` statement at the mid-point of the current isolation range until the isolation range is small enough the you are confident you have isolated the problem.

Again, for quicker execution you may consider reducing the resource requirements (e.g., time, cores, etc.) such that it fits in `interactive_cpu`
## Still having problems
Contact support to help diagnose the problem: see [training and support](training-and-support).