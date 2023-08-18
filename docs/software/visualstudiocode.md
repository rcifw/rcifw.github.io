---
created: 2023-03-31T09:27:50 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/vscode/
author:
---

The Visual Studio Code home page is [https://code.visualstudio.com/](https://code.visualstudio.com/).

Visual Studio Code is available throughout all nodes.

To use Visual Studio Code, you simply run code command at the terminal.

```
[xinghuang@login01 ~]$ code
```

![[vscode_gui-1024x651.png]]

**To use it on a compute node,** you first need to do some configuration in your home directory.

A. add “export XDG\_RUNTIME\_DIR=$HOME/.runtime-dir” to your ~/.bashrc file

B. run “mkdir -p $HOME/.runtime-dir”

C. run “chown $USER:domain\\ users $HOME/.runtime-dir” and “chmod 700 $HOME/.runtime-dir”

**Lastly, you request an [interactive job](https://sites.wustl.edu/chpc/for-users/getting-started/beginner-guides/)**. Once a particular node is assigned to you, you can run “code” on that node.
