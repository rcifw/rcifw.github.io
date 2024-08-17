---
title: Storage Systems
created: 2023-08-24T14:56:31 (UTC -05:00)
tags: []
permalink: /storage/
author: Scott Johnson
include: true
---
# Best Practices
It is always best for users to use the "scratch" file system (see `/scratch`) for production runs. See [NERSC Best Practices](https://docs.nersc.gov/jobs/best-practices/#do-not-run-production-jobs-in-global-homes) for a good overview of the reasons for this.

# Background
The RCIF comprises multiple storage systems. This is architected around the core concept of a 
storage cache architecture, where each lower layer is closer to the computing hardware. Typically, this follows the rule that as your cache is closer to the hardware it is both faster and more volatile.

At the lowest level, the fastest cache is located proximate to the processor (L1), progressing to higher levels of cache and ultimately to the "memory" of the system (RAM for the host or global memory in the GPU).

Beyond "memory", there is what is commonly refered to as "storage" (see [HPC hardware](../system-info/hpc-hardware.md) for details). In our infrastructure, this consists of:
## Local drives
These are physical drives (e.g., SSD, NVMe, etc) contained in a node's chassis and 
usually designed to have the highest throughput (NVMe over 4xlanes PCIe 4.0 can reach a theoretical maximum of 7.9GB/s but 6GB/s in practice with latency controlled by the speed of the PCIe switch(es) on the main board). However, the namespace is local to the individual node (i.e., a node in the same job as another cannot address the storage in another node) unless a converged storage solutions is used; e.g., see [BeeOND](http://www.beegfs.io/wiki/BeeOND) or mounting over InfiniBand.

This is only guaranteed for the duration of a user's job and is cleared after the job ends, so any data that must persist  should be copied to non-volatile storage before the job ends (usually as part of the job submission script).
## High-throughput file system (scratch)
This is usually a parallel file system consisting of a number of storage volume servers, metadata servers, and a management node, which is connected to the computing nodes via 1 (or more) [InfiniBand](https://www.nvidia.com/en-us/networking/products/infiniband/) interfaces and tuned for performance. The idea is to get as much data to your application as quickly as possible.

For our system, we currently use [BeeGFS](https://www.beegfs.io/c/) mounted at `/mnt/beegfs` as the file system in our high-throughput storage. This is considered as **scratch** space, which is meant for staging data for processing. While this persists beyond the duration of a user's job, it is considered somewhat volatile, and users will be notified when the file system reaches 85% capacity that data will be purged. Sufficient notice is given to  allow users time to move data to persistent storage.

> [!danger] `/scratch` data is not backed up, and there is no service level agreement (SLA), so please only use this for staging data while it is being actively used for computing jobs!
## Large-volume file system (persistent)
This is also usually a parallel file system consisting of a number of storage volume servers, metadata servers, and a management node,
which is connected to the computing nodes via high-speed network interfaces.

For our system, we currently use [Ceph](https://ceph.io/en/) as the file system in our high-volume storage. This is considered
as **persistent** storage, which is meant for:
* holding any data that must be backed up
* storing large datasets and MIRRIR data - see `/ceph/mirrir`
* sharing data among users - see `/ceph/chpc/shared`
* users' home directories - see `/home`, which is linked to `/ceph/chpc/home` and/or `/ceph/chpc/home-nfs` depending on the node.
* archiving data for inactive accounts - see `/ceph/chpc/archive`
* storing the [shared datasets](rcif-shared-datasets.md) - see `/ceph/chpc/<dataset name>`

This is not volatile and is regularly backed up to an off-site disaster recovery location.

## Checking Quotas
On both login nodes, you can use the `check_user_quota` utility (which is already on your path):
```
# which check_user_quota
/usr/local/sbin/check_user_quota
```

Running this command will give you output like the following:
```
$ check_user_quota
=========================================================================
home - quota information for <my_user>:

--------- || ----------- 
  current || quota (max) 
--------- || ----------- 
  25 GB   || 50 GB
--------- || ----------- 

=========================================================================
scratch - quota information for johnsonscott:
      user/group     ||           size          ||    chunk files    
     name     |  id  ||    used    |    hard    ||  used   |  hard   
--------------|------||------------|------------||---------|---------
  my_user|1234567||    11.00 GiB|   10.00 TiB||   123456|unlimited

=========================================================================
Quota information for johnsonscott in scratch directory:

      user/group     ||           size          ||    chunk files    
     name     |  id  ||    used    |    hard    ||  used   |  hard   
--------------|------||------------|------------||---------|---------
 my_current_PI|  1234||      0 Byte|   10.00 TiB||        0|unlimited

Note: for scratch, we use group-based quota.
```

This shows that the user is using 25GB in the home directory out of a maximum of 50GB, and the user is also using 11GiB out of a maximum of 10TiB on the scratch storage.

See [accounting FAQs](faqs-accounting.md#how-is-storage-charged) for information on how large-volume storage is assessed for fee purposes, and [this](connect-to-login-nodes.md#what-if-i-want-to-share-data-among-users-in-my-group) describes how to set up shared storage for your group.

## Restoring Files
Accidents happen, and if you need to get an earlier version of a file (or files) on the large-volume storage (Ceph), you can go back in time using snapshots.

Snapshots are stored in `/ceph/chpc/home/.snap/<snapshot name>/<user>`, which replicates the state of the `<user>`'s home directory at the timestamp in the `<snapshot name>` field.

For example, let's say the user with id `me.user` discovered they just accidentally deleted a file in the path `/home/me.user/my/valuable/directory/file_I_need`, then `me.user` could find the latest snapshot:

```
# ls -ltr /ceph/chpc/home/.snap/ | tail -1 | awk '{print $NF}'
daily-2024-05-19.05:00:01
```

then restore the file from that snapshot:

```
# export _my_file='my/valuable/directory/file_I_need'
# cp /ceph/chpc/home/.snap/daily-2024-05-19.05:00:01/me.user/${_my_file} ~/${_my_file}
```

