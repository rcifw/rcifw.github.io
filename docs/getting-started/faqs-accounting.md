---
title: FAQs for Accounting
created: 2023-08-28T12:54:08 (UTC -05:00)
tags: []
author: Scott Johnson
---

For details on 2023 rates see the July users meeting [slides](https://wustl.box.com/s/j0ot01qxdh463qyrs21dxzvutax6byzr)

## What do the “Limits” represent in the rates tables?

The “Limits” term on the rates slide refers to the time limit applied to each job. These limits are applied to the **reserved** time for each job.

Actual _usage_ within a reservation would only be collected for research purposes (e.g., assess power usage and thermal statistics, generate aggregate usage statistics for understanding efficiency, etc.).

## What is the difference between “CPU-inclusive” and “All-inclusive”?  Is the former CPU-only, with no access to the GPUs?

CPU-inclusive only includes CPU cycles in the subscription. Users enrolled in the CPU subscription would then pay for any GPU usage on a per-reservation basis at the consumption rates for whatever tier they decide for those jobs.

The all-inclusive option would include both CPU and GPU cycles under the subscription plan, where a user would be paying for priority rather than cycles on the resource pools – this priority is governed by the [Fair Tree](https://slurm.schedmd.com/fair_tree.html#algorithm) algorithm as implemented in SLURM.

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
