---
title: OPENSLIDE
created: 2024-02-02T09:06:38 (UTC -0600)
topic: openslide
autogenerated: true
---
<!-- This file was automatically generated. To edit, modify software_packages.yml . -->
See the [OPENSLIDE project page](https://openslide.org/). To use OPENSLIDE, you’ll use the `module` tool.

You can see what versions are available by using:
```
[me@login01 ~]$ module avail openslide

------------------------------ /opt/modulefiles -------------------------------
   openslide/3.4.1

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:
```
[me@login01 ~]$ module load openslide/3.4.1
```

while the "openslide" wildcard will load the default version, openslide-3.4.1 in this case.

You should now be able to run OPENSLIDE commands:
```
[me@login01 ~]$ openslide-show-properties
```
```
Usage:
  openslide-show-properties [OPTION…] FILE...

Print OpenSlide properties for a slide.

Help Options:
  -h, --help       Show help options

Application Options:
  --version        Show version
```
