---
title: Visual Studio Code
created: 2023-03-31T09:27:50 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/vscode/
author:
exclude: true
---

The Visual Studio Code (vscode) home page is [https://code.visualstudio.com/](https://code.visualstudio.com/) and is an excellent tool for working with remote and containerized environments. While it is advisable to run vscode locally and use the local client to interact with the cluster, it is also possible to access it through the cluster.

To use Visual Studio Code, you simply run code command at the terminal.
```
[me@login01 ~]$ code
```

**To use it on a compute node,** you first need to do some configuration in your home directory.

A. add “export XDG\_RUNTIME\_DIR=$HOME/.runtime-dir” to your ~/.bashrc file

B. run “mkdir -p $HOME/.runtime-dir”

C. run “chown $USER:domain\\ users $HOME/.runtime-dir” and “chmod 700 $HOME/.runtime-dir”

**Lastly, you request an interactive job**. Once a particular node is assigned to you, you can run “code” on that node.
