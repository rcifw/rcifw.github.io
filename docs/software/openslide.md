---
title: OPENSLIDE
created: 2023-03-31T09:27:24 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/openslide/
author:
---

The OPENSLIDE home page is [https://openslide.org/](https://openslide.org/).

To use OPENSLIDE, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail openslide/

------------------------------- /opt/modulefiles -------------------------------
   openslide/3.4.1

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load openslide/3.4.1
```

while the “openslide” wildcard will load the default version, openslide-3.4.1 in this case.

You should now be able to run OpenSlide commands:

```
[me@login01 ~]$ openslide-show-properties
Usage:
  openslide-show-properties [OPTION…] FILE...

Print OpenSlide properties for a slide.

Help Options:
  -h, --help       Show help options

Application Options:
  --version        Show version
```
