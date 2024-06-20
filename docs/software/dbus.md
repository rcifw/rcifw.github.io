---
title: DBUS
created: 2024-06-05T21:44:00 (UTC -04:00)
tags: []
source: https://www.freedesktop.org/wiki/Software/dbus/
author: Benjamin Kay
---

[D-Bus](https://www.freedesktop.org/wiki/Software/dbus/) is a system messaging bus for inter-process communication. You probably are not interested in using dbus on its own, but you may need to use software that depends on dbus.

D-Bus is installed on all of the RCIF nodes. A dbus daemon is started automatically when you ssh into a login node. You will need to start a dbus daemon manually on compute nodes. This guide explains how to work around some idiosyncracies of the slurm environment to get a working dbus daemon started on a compute node.

There are two obstacles to starting dbus on a compute node:

1. The default user runtime directory under `/run/user` does not exist.
2. The dbus daemon does not have permission to create unix sockets in `/tmp`.

To work around these issues, create a runtime directory somewhere in your home directory and place the dbus daemon's unix socket there. In this example we will call the runtime directory `xdg` and the socket `bus`. You may need a mechanism to ensure unique names (e.g. using `mktemp`) to avoid collisions between dbus sessions between parallel jobs.

```
[user@node01 ~]$ mkdir $HOME/xdg
[user@node01 ~]$ export XDG_RUNTIME_DIR=$HOME/xdg
[user@node01 ~]$ dbus-daemon --session --fork \
--address unix:path=$XDG_RUNTIME_DIR/bus \
--print-address 1 > dbus-addr.txt
[user@node01 ~]$ export DBUS_SESSION_BUS_ADDRESS=$(cat dbus-addr.txt)
```

Now the dbus daemon should be running and programs that require dbus should Just Work:tm:. The dbus daemon should be stopped automatically when your job ends.

