---
title: DBUS
created: 2024-06-05T21:44:00 (UTC -04:00)
tags: []
source: https://www.freedesktop.org/wiki/Software/dbus/
author: Benjamin Kay
---

[D-Bus](https://www.freedesktop.org/wiki/Software/dbus/) is a system messaging bus for inter-process communication. You probably are not interested in using dbus on its own, but you may need to use software that depends on dbus.

## Manually starting a D-Bus Daemon

D-Bus is installed on all of the RCIF nodes. A dbus daemon is started automatically when you ssh into a login node. You will need to start a dbus daemon manually on compute nodes. This guide explains how to work around some idiosyncracies of the slurm environment to get a working dbus daemon started on a compute node.

There are two obstacles to starting dbus on a compute node:

1. The default user runtime directory under `/run/user` does not exist.
2. The dbus daemon does not have permission to create unix sockets in `/tmp`.

To work around these issues, create a runtime directory somewhere in your home directory and place the dbus daemon's unix socket there. In this example we will call the runtime directory `xdg` and the socket `bus`.

```
[user@node01 ~]$ mkdir $HOME/xdg
[user@node01 ~]$ export XDG_RUNTIME_DIR=$HOME/xdg
[user@node01 ~]$ dbus-daemon --session --fork \
--address unix:path=$XDG_RUNTIME_DIR/bus \
--print-address 1 > dbus-addr.txt
[user@node01 ~]$ export DBUS_SESSION_BUS_ADDRESS=$(cat dbus-addr.txt)
```

Now the dbus daemon should be running and programs that require dbus should Just Work:tm:.

## Additional considerations

In practice, using D-Bus on a compute node is different from using D-Bus in a single-user desktop environment.

- Should two jobs started by the same user that happen to spawn on the same compute node share a D-Bus daemon?
- Are the runtime files stored on a network filesystem? Will there be conflicts between compute nodes?
- Will the D-Bus daemon and its dependent processes end gracefully when your slurm job ends?
- Are you littering your home directory with temporary files?

## Scripted D-Bus

The following bash scripts start a unique, per-job D-Bus daemon on a compute node and gracefully end the D-Bus daemon when your job ends. The scripts can be modified to suit your specific needs. The scripts are named:

- `start_dbus.sh`
- `cleanup_dbus.sh`

```bash
#!/bin/bash

# Spin up a private DBUS daemon.
# Invoke as:
# source start_dbus.sh

# Create an XDG runtime directory.
# Typically this would be under /run/user/${UID}, but
# this directory isn't automatically mounted on compute nodes.
mkdir -p $HOME/xdg

# Make a temporary directory to use for this session.
export XDG_RUNTIME_DIR=`mktemp -d -p ${HOME}/xdg`

# Create a temporary file to store the dbus address.
DBUS_ADDR_FILE=`mktemp`
exec 3<> ${DBUS_ADDR_FILE} # open fd 3

# Create a temporary file to store the dbus PID.
DBUS_PID_FILE=`mktemp`
exec 4<> ${DBUS_PID_FILE} # open fd 4

# Start the dbus daemon.
dbus-daemon --session --fork \
--address unix:path=$XDG_RUNTIME_DIR/bus \
--print-address 3 \
--print-pid 4

# Export the dbus address.
export DBUS_SESSION_BUS_ADDRESS=`cat ${DBUS_ADDR_FILE}`

# Figure out PID of the dbus daemon.
DBUS_PID=`cat ${DBUS_PID_FILE}`

# Clean up the temporary files.
exec 3>&- # close fd 3
exec 4>&- # close fd 4
rm ${DBUS_ADDR_FILE} ${DBUS_PID_FILE}

# Launch cleanup script in the background.
DBUS_PID=${DBUS_PID} XDG_RUNTIME_DIR=${XDG_RUNTIME_DIR} ./cleanup_dbus.sh&

# Clean up non-standard environment variables.
unset DBUS_PID
unset DBUS_PID_FILE
unset DBUS_ADDR_FILE

# Kill the whole process group on bash session exit.
# Makes sense to do since slurm is going to kill our processes anyway.
# This will trigger the cleanup_dbus.sh script to perform cleanup actions.
# We have to wait for the child processes to finish before the shell exits,
# otherwise slurm may hard-kill the child processes before cleanup is finished.
trap "pkill -P $$ && wait" EXIT
```

```bash
#!/bin/bash

# Counterpart to start_dbus.sh
# Do not invoke directly.

# Clean up on exit.
function cleanup()
{
    # Stop the dbus daemon.
    kill ${DBUS_PID}

    # Wait 100 ms for the dbus daemon to exit.
    sleep 0.1

    # Cleanup on the XDG runtime directory.
    rm -r --one-file-system --preserve-root=all ${XDG_RUNTIME_DIR}
}

# Clean up when this script is killed on session exit.
trap cleanup EXIT HUP

# Block until we receive a kill signal.
/bin/bash -c 'coproc { exec >&-; read; }; eval exec "${COPROC[0]}<&-"; wait'
```