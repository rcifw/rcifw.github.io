---
title: PANDOC
created: 2023-11-15T13:21:00 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/pandoc/
author: 
exclude: true
---

The PANDOC home page is [https://pandoc.org/](https://pandoc.org/).

To use PANDOC, you’ll use the module tool.

You can see what versions are available by using:
```
[me@login01 ~]$ module avail pandoc/

------------------------------ /opt/modulefiles -------------------------------
   pandoc/3.1.9

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:
```
[me@login01 ~]$ module load pandoc/3.1.9
```

while the "pandoc" wildcard will load the default version, pandoc-3.1.9 in this case.

You should now be able to run PANDOC commands:
```
[me@login01 ~]$ module load pandoc
[me@login01 ~]$ pandoc --version
pandoc 3.1.9
Features: +server +lua
Scripting engine: Lua 5.4
User data directory: /home/me/.local/share/pandoc
Copyright (C) 2006-2023 John MacFarlane. Web: https://pandoc.org
This is free software; see the source for copying conditions. There is no
warranty, not even for merchantability or fitness for a particular purpose.```
```
