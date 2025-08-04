---
title: Importing and Exporting Data
created: 2023-09-15T09:29:00 (UTC -05:00)
tags: []
author: Benjamin Kay
---
## Performance Considerations

Importing and exporting data to/from the cluster is a necessary and routine activity for cluster users. However, please be aware that storing data locally on the cluster will always be faster than importing or exporting from another computer system, often by a considerable margin. Importing and exporting should ideally be an infrequent activity, with frequently-accessed data stored locally on the cluster for optimum performance. See [Storage Systems](storage-systems.md) for more information on cluster-local storage options and the [Accounting FAQ](faqs-accounting.md) for storage pricing options.

Extra caution should be exercised when writing parallel jobs that import or export data from outside the cluster. The external server that hosts the data may not be able to satisfy thousands of simultaneous requests from many cluster jobs running in parallel. Even if the data server was designed for a high volume of requests, the network hardware or tunnel connecting the cluster to the external data server may not be able to satisfy the load.

## Using Globus transfer node
You can use our Globus transfer node to move data from your local computer or other Globus endpoints. See [our documentation](getting-started-with-globus.md).
## Controlling Transfers Using Your Local Computer

### sftp

Using your local computer to transfer files to and from the cluster is straightforward. Use [`sftp`](https://man.openbsd.org/sftp) to transfer the files using the same ssh protocol that you use to access the login node. An sftp client is available for Linux, Mac, and Windows.

```
[localuser@localmachine ~]$ sftp clusteruser@login3.chpc.wustl.edu
sftp> put localfile
Uploading localfile to /ceph/chpc/home/user/localfile
sftp> get clusterfile
Fetching /ceph/chpc/home/user/clusterfile to clusterfile
sftp> quit
```
### sshfs

Linux users and Mac users (via MacFUSE and MacPorts) can access the cluster filesystem with the same convenience as they would access a portable hard drive by mounting it as a network filesystem using [`sshfs`](https://man.archlinux.org/man/sshfs.1). Under the hood, file transfers occur over the ssh protocol as if the user were calling `sftp`. Ordinary users on most systems can mount and unmount sshfs filesystems without `sudo` provided the mount point is in a directory they own; some systems also require that the mount point be in the user's home directory.

```
[localuser@localmachine ~]$ mkdir ~/cluster_mnt
[localuser@localmachine ~]$ sshfs clusteruser@login3.chpc.wustl.edu:~/ ~/cluster_mnt
[localuser@localmachine ~]$ cp localfile ~/cluster_mnt     # upload to cluster
[localuser@localmachine ~]$ cp ~/cluster_mnt/clusterfile ./ # fetch from cluster
[localuser@localmachine ~]$ fusermount -u ~/cluster_mnt    # unmount
```
#### BMRC

For those in the BMRC looking to use `sshfs` to connect to the BMRC storage from CHPC, please see the [tutorial on Box](https://wustl.box.com/s/mjm79f3idcivvm2km0k8je10hd37rrdm). This will describe a simplified process to setup direct access to your storage on CHPC.

### sftp + Python

[Python](https://www.python.org/) is a programming language that is widely-used for scientific computing. You can transfer files over sftp directly from your Python scripts using [Paramiko](https://www.paramiko.org/). This functionality is particularly powerful when combined with Python's interactive [Jupyter notebooks](https://jupyter.org/). See the full API documentation [here](https://docs.paramiko.org/en/3.3/api/sftp.html).

```python
import os
import paramiko
paramiko.util.log_to_file('paramiko.log')

# Parse ~/.ssh/config
config = paramiko.SSHConfig()
with open(os.path.expanduser('~/.ssh/config')) as config_file:
    config.parse(config_file)

# Extract configuration for this host.
host = 'login3.chpc.wustl.edu'
host_config = config.lookup(host)

with paramiko.SSHClient() as ssh:
    # Skip verification of the host key for this example.
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    # Open the SSH connection.
    ssh.connect(host_config['hostname'],
                port = int(host_config.get('port') or 22),
                username = host_config['user'],
                key_filename = host_config['identityfile'])

    # Do SFTP over the SSH connection.
    sftp = ssh.open_sftp()

    # Syntax: put(localpath, remotepath)
    sftp.put('localfile', 'localfile')
    
    # Syntax: get(remotepath, localpath)
    sftp.get('clusterfile', 'clusterfile')
```

## Controlling Transfers Using the Login Node

The examples above use your local computer to control the transfer of files to and from the cluster. Intead, you may want to use the cluster's login node to control the transfer of files to and from your local computer. A firewall limits communication from the cluster to outside systems. You can safely and securely connect through the firewall using an ssh reverse tunnel. The following examples assume you have an ssh/sftp server running on your local computer and listening on port 22.

First, use `ssh` to connect to the login node as usual. Use `-R` to establish a reverse tunnel from port 2222 on the login node to port 22 on your computer. Here, `127.0.0.1` refers to your local computer. You could instead direct the tunnel to a different IP address for some other ssh server on your subnet. Closing the ssh connection will close the tunnel.

```
[localuser@localmachine ~]$ ssh -R 2222:127.0.0.1:22 clusteruser@login3.chpc.wustl.edu
[clusteruser@login01 ~]$ # do your file transfers here
[clusteruser@login01 ~]$ exit # close the tunnel
```

You may see an error message: `Warning: remote port forwarding failed for listen port 2222`. This most likely means someone else following this tutorial has already created a reverse tunnel using port 2222 on the login node. Instead of using a hard-coded port number, use port number `0` to have ssh automatically allocate an open port for you.

```
[localuser@localmachine ~]$ ssh -R 0:127.0.0.1:22 clusteruser@login3.chpc.wustl.edu
Allocated port 45627 for remote forward to 127.0.0.1:22
[clusteruser@login01 ~]$
```

Take note of the port number that was allocated. You will need the port number to continue with the examples below.
### sftp
Instead of running `sftp` from your local machine you will run it from the cluster. To connect through the firewall, you will connect to the tunnel at `127.0.0.1` port 2222 (or the automatically allocated port, e.g. 45627). Here `127.0.0.1` refers to the login node you are running the `sftp` command on.

```
[clusteruser@login01 ~]$ sftp -P 2222 localuser@127.0.0.1
sftp> put clusterfile
Uploading clusterfile to /home/user/clusterfile
sftp> get localfile
Fetching /home/user/localfile to localfile
sftp> quit
```
### lftp
You can also connect to Box (see [here](https://it.wustl.edu/items/box-guides/) for details on setting up a password, which is distinct from your WUSTL key). Once you have an external password, you can open an lftp session, e.g.:
```
lftp "$USER@wustl.edu@ftp.box.com"
```
### sshfs

You may use `sshfs` to mount your local computer's filesystem over the reverse tunnel using the same principles as above. Note that the mount will only be visible on the login node -- it will not be visible on a compute node running a job.

```
[clusteruser@login01 ~]$ mkdir ~/local_mnt
[clusteruser@login01 ~]$ sshfs localuser@127.0.0.1:~/ ~/local_mnt -p 2222
[clusteruser@login01 ~]$ cp clusterfile ~/local_mnt  # upload to local machine
[clusteruser@login01 ~]$ cp ~/local_mnt/localfile ./ # fetch from local machine
[clusteruser@login01 ~]$ fusermount -u ~/local_mnt   # unmount
```

### SMB

The server message block ([SMB](https://en.wikipedia.org/wiki/Server_Message_Block)) protocol was invented in 1983 and is still used by some [Microsoft Windows](https://learn.microsoft.com/en-us/windows-server/storage/file-server/file-server-smb-overview) systems and by the [RIS cluster](https://ris.wustl.edu/services/research-storage/). You can access SMB shares with the [`smbclient`](https://www.samba.org/samba/docs/current/man-html/smbclient.1.html) program using a syntax similar to `sftp`. If your share happens to be on the RIS cluster then no tunneling is necessary.

```
[user@login01 ~]$ smbclient -W ACCOUNTS -U user -m SMB3 \\storage1.ris.wustl.edu/my_storage/
```

You can also mount an SMB share in a manner similar to `sshfs`. Note that you will need to first [manually start a dbus daemon](../software/dbus.md) to mount an SMB share on a compute node.

```
[user@login01 ~]$ gio mount smb://storage1.ris.wustl.edu/my_storage
[user@login01 ~]$ ls $XDG_RUNTIME_DIR/gvfs
```

The mount will appear under `$XDG_RUNTIME_DIR/gvfs`. To unmount use `gio mount -u`:

```
[user@login01 ~]$ gio mount -u smb://storage1.ris.wustl.edu/my_storage
```

### sftp + Python

As in the preceding section, you can control the sftp connection from the login node using Python and a suitable sftp package like [Paramiko](https://www.paramiko.org/). Just modify the previous example using Python on your local computer to use the reverse tunnel as in the examples above. Don't forget to load the Python module.

```
[clusteruser@login01 ~]$ module load python
[clusteruser@login01 ~]$ python
Python 3.10.9 (main, Mar  1 2023, 18:23:06) [GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import os
>>> import paramiko
>>> # ...
```

## Controlling Transfers Using a Compute Node

The login node is not suitable for computational tasks. Sometimes you will want to access a remote filesystem directly from a compute node running a computational job. For example, you might start an interactive, remote desktop environment on a compute node and want to copy files to and from your local desktop computer. You can connect from a compute node to your local network using a reverse tunnel. The process is similar to that for creating a reverse tunnel to a login node (see above).

> Note: At the time of this writing, reverse tunnels to a compute node are only supported on login01, so you will need to connect to it explicitly.

Use the following syntax to open the reverse tunnel:
- `-R` requests a reverse tunnel.
- `login01` resolves to 10.1.1.251, the cluster-facing IP address for login01. Without this, the tunnel defaults to listening on 127.0.0.1 and would only be accessible from login01 itself. Binding to an external IP address allows compute nodes on the cluster's subnet to connect to the tunnel.
- `0` makes ssh automatically allocate an open port for the tunnel to listen on, in this case 45627.
- `127.0.0.1` refers to your local computer. You may specify a different tunnel endpoint on your local computer's subnet.
- `22` is the port at the tunnel's endpoint to send data to. You may specify a different port if you want to tunnel a protocol other than ssh.
- `login3-01.chpc.wustl.edu` resolves to 128.252.185.7, the outward-facing IP address for login01.

```
[localuser@localmachine ~]$ ssh -R login01:0:127.0.0.1:22 clusteruser@login3-01.chpc.wustl.edu
Allocated port 45627 for remote forward to 127.0.0.1:22
[clusteruser@login01 ~]$ # do your file transfers here
[clusteruser@login01 ~]$ exit # close the tunnel
```

While the tunnel is open, you can connect to your local computer and access files from a compute node. For example, request an interactive job:

```
[clusteruser@login01 ~]$ srun --partition=free --nodes=1 --ntasks-per-node=1 --time=00:30:00 --mem=128mb --pty bash
[clusteruser@node15 ~]$
```

And then user sftp, sshfs, etc. from the compute node. (Use the automatically allocated port in place of 2222).

```
[clusteruser@node15 ~]$ sftp -P 2222 localuser@login01
sftp>
```

In the above example, sftp is connecting to port 2222 on login01. The connection is forwarded to port 22 on your local computer. You will use your local username to authenticate.
