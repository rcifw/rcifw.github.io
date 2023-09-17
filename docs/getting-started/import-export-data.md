---
title: Importing and Exporting Data
created: 2023-09-15T09:29:00 (UTC -05:00)
tags: []
author: Benjamin Kay
exclude: true
---

## Performance Considerations

Importing and exporting data to/from the cluster is a necessary and routine activity for cluster users. However, please be aware that storing data locally on the cluster will always be faster than importing or exporting from another computer system, often by a considerable margin. Importing and exporting should ideally be an infrequent activity, with frequently-accessed data stored locally on the cluster for optimum performance. See [Storage Systems](storage-systems.md) for more information on cluster-local storage options and the [Accounting FAQ](faqs-accounting.md) for storage pricing options.

Extra caution should be exercised when writing parallel jobs that import or export data from outside the cluster. The external server that hosts the data may not be able to satisfy thousands of simultaneous requests from many cluster jobs running in parallel. Even if the data server was designed for a high volume of requests, the network hardware or tunnel connecting the cluster to the external data server may not be able to satisfy the load.

## Controlling Transfers Using Your Local Computer

### sftp

Using your local computer to transfer files to and from the cluster is straightforward. Use [`sftp`](https://man.openbsd.org/sftp) to transfer the files using the same ssh protocol that you use to access the login node. An sftp client is available for Linux, Mac, and Windows.

```
[user@localmachine ~]$ sftp user@login3.chpc.wustl.edu
sftp> put localfile
Uploading localfile to /ceph/chpc/home/user/localfile
sftp> get clusterfile
Fetching /ceph/chpc/home/user/clusterfile to clusterfile
sftp> quit
```

### sshfs

Linux users and Mac users (via Homebrew) can access the cluster filesystem with the same convenience as they would access a portable hard drive by mounting it as a network filesystem using [`sshfs`](https://man.archlinux.org/man/sshfs.1). Under the hood, file transfers occur over the ssh protocol as if the user were calling `sftp`. Ordinary users on most systems can mount and unmount sshfs filesystems without `sudo` provided the mount point is in a directory they own; some systems also require that the mount point be in the user's home directory.

```
[user@localmachine ~]$ mkdir ~/cluster_mnt
[user@localmachine ~]$ sshfs user@login3.chpc.wustl.edu:~/ ~/cluster_mnt
[user@localmachine ~]$ cp localfile ~/cluster_mnt     # upload to cluster
[user@localmachine ~]$ cp ~/cluster_mnt/clusterfile ./ # fetch from cluster
[user@localmachine ~]$ fusermount -u ~/cluster_mnt    # unmount
```

## Controlling Transfers Using the Login Node

The examples above use your local computer to control the transfer of files to and from the cluster. Intead, you may want to use the cluster's login node to control the transfer of files to and from your local computer. A firewall limits communication from the cluster to outside systems. You can safely and securely connect through the firewall using an ssh reverse tunnel. The following examples assume you have an ssh/sftp server running on your local computer and listening on port 22.

First, use `ssh` to connect to the login node as usual. Use `-R` to establish a reverse tunnel from port 2222 on the login node to port 22 on your computer. Here, `127.0.0.1` refers to your local computer. You could instead direct the tunnel to a different IP address for some other ssh server on your subnet. Closing the ssh connection will close the tunnel.

```
[user@localmachine ~]$ ssh -R 2222:127.0.0.1:22 user@login3.chpc.wustl.edu
[user@login01 ~]$ # do your file transfers here
[user@login01 ~]$ exit # close the tunnel
```

You may see an error message: `Warning: remote port forwarding failed for listen port 2222`. This most likely means someone else following this tutorial has already created a reverse tunnel using port 2222 on the login node. Instead of using a hard-coded port number, use port number `0` to have ssh automatically allocate an open port for you.

```
[user@localmachine ~]$ ssh -R 0:127.0.0.1:22 user@login3.chpc.wustl.edu
Allocated port 45627 for remote forward to 127.0.0.1:22
[user@login01 ~]$
```

Take note of the port number that was allocated. You will need the port number to continue with the examples below.

### sftp

Instead of running `sftp` from your local machine you will run it from the cluster. To connect through the firewall, you will connect to the tunnel at `127.0.0.1` port 2222. Here `127.0.0.1` refers to the login node you are running the `sftp` command on.

```
[user@login01 ~]$ sftp -P 2222 user@127.0.0.1
sftp> put clusterfile
Uploading clusterfile to /home/user/clusterfile
sftp> get localfile
Fetching /home/user/localfile to localfile
sftp> quit
```

### sshfs

You may use `sshfs` to mount your local computer's filesystem over the reverse tunnel using the same principles as above. Note that the mount will only be visible on the login node -- it will not be visible on a worker node running a job.

```
[user@localmachine ~]$ mkdir ~/local_mnt
[user@localmachine ~]$ sshfs user@127.0.0.1:~/ ~/local_mnt -p 2222
[user@localmachine ~]$ cp clusterfile ~/local_mnt  # upload to local machine
[user@localmachine ~]$ cp ~/local_mnt/localfile ./ # fetch from local machine
[user@localmachine ~]$ fusermount -u ~/local_mnt   # unmount
```
