---
created: 2023-03-31T09:26:49 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/go/
author:
---

The GO home page is [https://go.dev](https://go.dev/).

To use GO, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail go/

------------------------------ /opt/modulefiles -------------------------------
   go/1.13    go/1.15.6   go/1.17.5    go/1.19.2 (D)

  Where:
   D:  Default Module

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load go/1.15.6
```

while the “go” wildcard will load the default version, go-1.15.6 in this case.

You should now be able to run GO commands:

```
[me@login01 ~]$ go help build
usage: go build [-o output] [-i] [build flags] [packages]

Build compiles the packages named by the import paths,
along with their dependencies, but it does not install the results.
...
```
