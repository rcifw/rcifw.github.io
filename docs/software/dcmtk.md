---
title: DCMTK
created: 2023-03-31T09:26:28 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/dcmtk/
author: 
exclude: true
---

The DCMTK home page is [https://dicom.offis.de/dcmtk.php.en](https://dicom.offis.de/dcmtk.php.en).

To use DCMTK, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail dcmtk/

------------------------------- /opt/modulefiles -------------------------------
   dcmtk/3.6.7

If the avail list is too long consider trying:

"module --default avail" or "ml -d av" to just list the default modules.
"module overview" or "ml ov" to display the number of modules for each name.

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load dcmtk/3.6.7
```

while the “dcmtk” wildcard will load the default version, dcmtk-3.6.7 in this case.

You should now be able to run CAPTK commands:

```
[me@login01 ~]$ dcmdump
$dcmtk: dcmdump v3.6.7 2022-04-22 $

dcmdump: Dump DICOM file and data set
usage: dcmdump [options] dcmfile-in...

parameters:
  dcmfile-in                    DICOM input file or directory to be dumped

general options:
  -h     --help                 print this help text and exit
         --version              print version information and exit
         --arguments            print expanded command line arguments
  -q     --quiet                quiet mode, print no warnings and errors
  -v     --verbose              verbose mode, print processing details
  -d     --debug                debug mode, print debug information
  -ll    --log-level            [l]evel: string constant
                                (fatal, error, warn, info, debug, trace)
                                use level l for the logger
  -lc    --log-config           [f]ilename: string
                                use config file f for the logger
...
output options:
  printing:
    +L   --print-all            print long tag values completely
    -L   --print-short          print long tag values shortened (default)
    +T   --print-tree           print hierarchical structure as a simple tree
    -T   --print-indented       print hierarchical structure indented (default)
    +F   --print-filename       print header with filename for each input file
    +Fs  --print-file-search    print header with filename only for those input
                                files that contain one of the searched tags
  mapping:
    +Un  --map-uid-names        map well-known UID numbers to names (default)
    -Un  --no-uid-names         do not map well-known UID numbers to names
  quoting:
    +Qn  --quote-nonascii       quote non-ASCII and control chars as XML markup
    +Qo  --quote-as-octal       quote non-ASCII and control ch. as octal numbers
    -Qn  --print-nonascii       print non-ASCII and control chars (default)
  color:
    +C   --print-color          use ANSI escape codes for colored output
    -C   --no-color             do not use any ANSI escape codes (default)
  error handling:
    -E   --stop-on-error        do not print if file is damaged (default)
    +E   --ignore-errors        attempt to print even if file is damaged
  searching:
    +P   --search               [t]ag: "gggg,eeee" or dictionary name
                                print the textual dump of tag t
                                this option can be specified multiple times
                                (default: the complete file is printed)
    +s   --search-all           print all instances of searched tags (default)
    -s   --search-first         only print first instance of searched tags
    +p   --prepend              prepend sequence hierarchy to printed tag,
                                denoted by: (gggg,eeee).(gggg,eeee).*
                                (only when used with --search)
    -p   --no-prepend           do not prepend hierarchy to tag (default)
  writing:
    +W   --write-pixel          [d]irectory: string
                                write pixel data to a .raw file stored in d
                                (little endian, filename created automatically)
```
