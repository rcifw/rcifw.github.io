---
title: Perl
created: 2023-03-31T09:27:26 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/perl/
author:
exclude: true
---

The PERL home page is [https://www.perl.org](https://www.perl.org/).

To use PERL, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail perl/

------------------------------ /opt/modulefiles -------------------------------
   perl/5.10.1

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load perl/5.10.1
```

while the “perl” wildcard will load the default version, perl-5.10.1 in this case.

You should now be able to run PERL commands:

```
[me@login01 ~]$ perl --version

This is perl, v5.10.1 (*) built for x86_64-linux

Copyright 1987-2009, Larry Wall

Perl may be copied only under the terms of either the Artistic License or the
GNU General Public License, which may be found in the Perl 5 source kit.

Complete documentation for Perl, including FAQ lists, should be found on
this system using "man perl" or "perldoc perl".  If you have access to the
Internet, point your browser at http://www.perl.org/, the Perl Home Page.
```
