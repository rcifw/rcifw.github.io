---
title: Storage Systems
created: 2023-08-24T14:56:31 (UTC -05:00)
tags: []
author: Scott Johnson
exclude: true
---

The RCIF comprises multiple storage systems. This is architected around the core concept of a 
storage cache architecture, where each lower layer is closer to the computing hardware. Typically, this
follows the rule that as your cache is closer to the hardware it is both faster and more volatile.

At the lowest level, the fastest cache is located proximate to the processor (L1), progressing to higher 
levels of cache and ultimately to the "memory" of the system (RAM for the host or global memory in the GPU).

Beyond "memory", there is what is commonly refered to as "storage" (see [HPC hardware](../system-info/hpc-hardware.md) for details). In our infrastructure, this consists of:

## Local drives
These are physical drives (e.g., SSD, NVMe, etc) contained in a node's chassis and 
usually designed to have the highest throughput (NVMe over 4xlanes PCIe 4.0 can reach a theoretical 
maximum of 7.9GB/s but 6GB/s in practice with latency controlled by the speed of the PCIe switch(es) on the main
board). However, the namespace is local to the individual node (i.e., a node in the same job as another cannot address 
the storage in another node) unless a converged storage solutions is used; e.g., see [BeeOND](http://www.beegfs.io/wiki/BeeOND)
or mounting over InfiniBand.

This is only guaranteed for the duration of a user's job and is cleared after the job ends, so any data that must persist 
should be copied to non-volatile storage before the job ends (usually as part of the job submission script).

## High-throughput file system (scratch)
This is usually a parallel file system consisting of a number of storage volume servers, metadata servers, and a management node,
which is connected to the computing nodes via 1 (or more) [InfiniBand](https://www.nvidia.com/en-us/networking/products/infiniband/) 
interfaces and tuned for performance.

For our system, we currently use [BeeGFS](https://www.beegfs.io/c/) as the file system in our high-throughput storage. This is considered
as **scratch** space, which is meant for staging data for processing. While this persists beyond the duration of a user's job, it is considered
somewhat volatile, and users will be notifed when the file system reaches 85% capacity that data will be purged. Sufficient notice is given to 
allow users time to move data to persistent storage. This data is also not backed up.

## Large-volume file system (persistent)
This is also usually a parallel file system consisting of a number of storage volume servers, metadata servers, and a management node,
which is connected to the computing nodes via high-speed network interfaces.

For our system, we currently use [Ceph](https://ceph.io/en/) as the file system in our high-volume storage. This is considered
as **persistent** storage, which is meant for:
* holding any data that must be backed up
* storing large datasets and MIRRIR data - see `/ceph/mirrir`
* sharing data among users - see `/ceph/chpc/shared`
* users' home directories - see `/ceph/chpc/home`
* archiving data for inactive accounts - see `/ceph/chpc/archive`

This is not volatile and is regularly backed up to an off-site disaster recovery location.
