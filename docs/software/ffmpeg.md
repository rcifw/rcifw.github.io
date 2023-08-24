---
created: 2023-03-31T09:26:35 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/ffmpeg/
author:
exclude: true
---

The FFMPEG home page is [https://ffmpeg.org/](https://ffmpeg.org/).

To use FFMPEG, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail ffmpeg/

------------------------------ /opt/modulefiles -------------------------------
   ffmpeg/5.1.2

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load ffmpeg/5.1.2
```

while the “ffmpeg” wildcard will load the default version, ffmpeg-5.1.2 in this case.

You should now be able to run FFMPEG commands:

```
[me@login01 ~]$ ffmpeg
ffmpeg version 5.1.2 Copyright (c) 2000-2022 the FFmpeg developers
  built with gcc 8 (GCC)
  configuration: --prefix=/export/ffmpeg/ffmpeg-5.1.2
  libavutil      57. 28.100 / 57. 28.100
  libavcodec     59. 37.100 / 59. 37.100
  libavformat    59. 27.100 / 59. 27.100
  libavdevice    59.  7.100 / 59.  7.100
  libavfilter     8. 44.100 /  8. 44.100
  libswscale      6.  7.100 /  6.  7.100
  libswresample   4.  7.100 /  4.  7.100
Hyper fast Audio and Video encoder
usage: ffmpeg [options] [[infile options] -i infile]... {[outfile options] outfile}...

Use -h to get full help or, even better, run 'man ffmpeg'
```
