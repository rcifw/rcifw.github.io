---
title: FAQs for Accounting
created: 2023-08-28T12:54:08 (UTC -05:00)
tags: []
author: Scott Johnson
---

Our [2023 RCIF HPC rate sheet](https://wustl.box.com/s/vp8qd1js979p7wx3ywogoiaxqo46q0mx) is now available. For more details on the development of the 2023 rates, please see the July users meeting [slides](https://wustl.box.com/s/j0ot01qxdh463qyrs21dxzvutax6byzr).

## The tiers and rates are confusing; can you provide some examples of how I will be charged?

There are 3 separate options to pay for resources on the CHPC:
* Pay only for hours used (**consumption**)
* Subscribe to get unlimited hours (i.e., pay for priority via **subscription**)
* Buy a machine through us for your unlimited use at a fixed yearly maintenance cost (**condo**)

You can choose a different option for each tier (priority level) and for each resource pool (set of servers).

**Example 1: PI with heavy CPU usage but only limited GPU usage--**
You can get a CPU-inclusive subscription, which provides unlimited hours on the CPU resources for a __fixed annual cost__; for the CPU resources you just pay the subscription for a particular priority level for your jobs. For the GPU resources, you can pay per hour with the hourly rate based on whatever priority level you select for your jobs. In this case, you would pay the fixed cost for CPU usage and the hourly rate for GPUs.

**Example 2: PI with heavy GPU usage--**
You can get an all-inclusive subscription, which provides unlimited access to both CPU- and GPU-based resources for a __fixed annual cost__. In this case, you would just pay the annual fixed cost in our rate sheet.

**Example 3: Student who does not have funding --**
We are introducing the Free Tier to support researchers who want to use CHPC resources for small projects and to test out their workflows before putting them into the paid queues. In this case, just submit your job to the free partition, and your PI will not be charged for that use!

**Example 4: PI with a condo'ed server but wants to use other CHPC resources periodically--**
You pay a fixed annual maintenance fee, and you have unlimited access to your machine (to be clear - for no additional fee)! It is your machine, so you can use it as much or as little as you like. If you have explicitly allowed us to offer your machine to others when you are not using it, we give you credit for the hours others use ("lending credits"), which can be used to offset any charges you accrue for using other CHPC resources. To use other CHPC resources, just submit to the appropriate partition, and we will take care of tracking that time and discounting it by your lending credits.

**Example 5: I am working on several projects with several PIs during the year; how can I make sure the correct PI is charged for each job I run?--**
Our batch scheduler (SLURM) allows us to associate you with multiple PIs, so the first step is to [let us know](mailto:chpc@nrg.wustl.edu) so we can set up the association. Once you are associated with multiple PIs, you can charge usage to different accounts, by specifying the `-A <account to charge>` flag for any job.

## Where can I get funding for this?

What is better than getting RCIF computation at lower than market rates? Have someone else pay for it! Pilot funds are available for **any** researcher (in MIR or not) who is using qualifying MIR facilities – **we are a qualifying facility**! Please see [here](https://www.mir.wustl.edu/research/core-resources/pilot-funds/) for details, and note that while left off the main list, in the links for the [pilot funding](https://apps.mir.wustl.edu/PilotFunding) we are listed as the “Research Computing and Informatics Facility” and for the [ICTS JIT](https://icts.wustl.edu/funding/just-in-time-jit/) we are listed as the “Center for High Performance Computing (CHPC)” in the [PDF](https://wustl.box.com/s/umpd5cel70codg1x0wpxf599p4p8827a).

## What is the condo option?

The condo option is for those who want access to dedicated hardware, and it is meant to be a simple arrangement where the PI pays for the hardware up front (via the RCIF), and we just charge an annual maintenance fee. We normally require that the RCIF arrange the purchase of the computing equipment (we call this a "node", "machine" or "server" interchangeably) to assure it is compatible with our current and anticipated infrastructure.

Since our costs are based on how much staff time we spend per (machine/server/node) and how many “units” in the rack that equipment occupies, our condo rates are based on a per (machine/server/node) basis.
 
Condo users are treated no differently than other users with respect to shared storage. Any local storage that is built into a physical condo (machine/server/node) is available to the owner of that condo, as well, but it is local to that (machine/server/node), and we do not handle backups, etc., of any local storage.

## How is storage charged?

Everyone, including those on the free tier, get a quota of shared storage without charge. That is independent of what people will additionally pay for shared storage or compute. For us, “archive” storage is synonymous with “large volume storage” and is currently the Ceph parallel file system storage. Currently, a user receives a quota of storage in the "home directory", which is a space for each user that is hosted on the “large volume storage”. This is the only “free” storage in the “large volume storage”.

## What do the “Limits” represent in the rates tables?

The “Limits” term on the rates slide refers to the time limit applied to each job. These limits are applied to the **reserved** time for each job.

Actual _usage_ within a reservation would only be collected for research purposes (e.g., assess power usage and thermal statistics, generate aggregate usage statistics for understanding efficiency, etc.).

## What is the difference between “CPU-inclusive” and “All-inclusive” in the subscriptions?  Is the former CPU-only, with no access to the GPUs?

CPU-inclusive only includes CPU cycles in the subscription. Users enrolled in the CPU subscription would then pay for any GPU usage on a per-reservation basis at the consumption rates for whatever tier they decide for those jobs.

The all-inclusive option would include both CPU and GPU cycles under the subscription plan, where a user would be paying for priority rather than cycles on the resource pools – this priority is governed by the [Fair Tree](https://slurm.schedmd.com/fair_tree.html#algorithm) algorithm as implemented in SLURM.

## What is a "fractional A100"?

An "A100" is the NVIDIA A100 accelerator, and "fractional" refers to a [MIG](https://www.nvidia.com/en-us/technologies/multi-instance-gpu/) partition. Since the Ampere generation of accelerators, NVIDIA has allowed administrators to set up MIG (multi-instance GPU) to isolate both logic and memory resources of a single hardware GPU into several virtual GPUs, which look to the applications as though they are separate GPU’s.

For the A100 and H100, up to 7 MIG partitions per GPU are allowed. For users who want the Ampere features but cannot use a full A100 (or would rather test out a workload on a cheaper resource), getting a fractional A100 can be a much more efficient choice.

## How is the priority of my job determined?

While it is useful to understand the algorithm (for reference you can find the contributions of the various factors [here](https://slurm.schedmd.com/priority_multifactor.html#general), and the most complex factor is Fairshare, which is described [here](https://slurm.schedmd.com/fair_tree.html#algorithm) and an accessible presentation of the “Fair Tree” is [here](https://slurm.schedmd.com/SUG14/fair_tree.pdf)), the priority of a job at any given time is strongly affected by the competitive landscape among those who have bought shares in the system and their usage pattern.

Fair Tree has made the algorithm for determining the fairshare term much simpler. The facility implements a “fat tree” account hierarchy where all accounts form a single level beneath root, and users form a second level, each associated with >=1 account. In our case, the tree first determines which account fairshare is greater then progresses to individual users and their individual fairshare values as determinants of job priority.

## What if I am working on multiple projects?

Users can charge their usage to different accounts ... iff we have associated the user with more than one account. Please [contact us](mailto:chpc@nrg.wustl.edu) if you are a PI and need to associate (or unassociate) a user with your account.

To properly charge an account for a job, use the `-A <account to charge>` flag for your job (see [here](https://slurm.schedmd.com/sbatch.html#SECTION_OPTIONS)). By default, we associate a default account, so that flag is not strictly required. This means that a user is responsible for using the appropriate account for each job.

## What about individuals simply accessing/reviewing data through say the /ceph mount via the login nodes?  Will there be a charge for that?

We do not charge for access through the login nodes, including to look at data in the shared file systems. However, we offer the free usage tier to allow users access to computing resources without charge, assuming the resource pool and time limits for that tier work for the use case. The only charge would possibly be for the actual storage of data if it exceeds our basic limit, which we charge on a per TB per annum basis.

## How do I know what my account is being charged?

We are currently working to stand up a web portal, which will allow users to audit both their usage and the members associated with their account(s).

In the meantime, we are happy to provide reports whenever you want (please [contact us](mailto:chpc@nrg.wustl.edu)), and we also plan to send monthly reports to let users know where their usage stands.

## Why is the free tier so limited?

We would like to push everyone towards buying into the system if they are doing production work. This facility only works if people are paying for production usage. The limit was meant to more equitably distribute the limited pool of free resources while also discouraging free-riding (i.e., make it suitable only for testing out a workflow or executing a small project). A user can always create chained job dependencies, which (with checkpointing) can create the effect of a longer job.

## If my PI has chosen a different plan, do I still get to use the free tier?

Everyone will have access to the free tier regardless of whatever other account associations they have. So if a user is associated with the PI account, they would have access to the partitions for whatever plans the PI has selected as well as the free tier.
 
We have not yet decided on a default (or whether to force a user to specify for every job), but the safest thing for a user to do is specify the appropriate partition for the free tier in their job submission using the `-p` flag (see [here](https://slurm.schedmd.com/sbatch.html#SECTION_OPTIONS)) if that is the partition they want to use for a job.

## How do I check my account usage?
You can always contact us to have us send you usage, but you can also log in to the cluster any time and use the instructions [here](slurm-basics.md#checking-your-account). We are also sending out monthly updates with this information along with current invoicing and a projection of the rest of the year's usage to your PI email address of record. You may need to check your spam filters if you are not receiving these from our "support@rcif.wustl.edu" email address.

You may also check your current disk usage for both the high-throughput (scratch) and large-volume file systems by following the instructions [here](storage-systems.md#checking-quotas).
