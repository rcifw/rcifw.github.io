---
title: GREEDY
created: 2023-03-31T09:26:51 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/greedy/
author:
---

The GREEDY home page is [https://sites.google.com/view/greedyreg/home?authuser=0/](https://sites.google.com/view/greedyreg/home?authuser=0).

To use GREEDY, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail greedy/

------------------------------ /opt/modulefiles -------------------------------
   greedy/1.0.1

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load greedy/1.0.1
```

while the “greedy” wildcard will load the default version, greedy-1.0.1 in this case.

You should now be able to run GREEDY commands:

```
[me@login01 ~]$ greedy --help
greedy: Paul's greedy diffeomorphic registration implementation
Usage:
  greedy [options]
Required options:
  -d DIM                 : Number of image dimensions
  -i fix.nii mov.nii     : Image pair (may be repeated)
  -o output.nii          : Output file
Mode specification:
  -a                     : Perform affine registration and save to output (-o)
  -brute radius          : Perform a brute force search around each voxel
  -moments <1|2>         : Perform moments of inertia rigid alignment of given order.
                               order 1 matches center of mass only
                               order 2 matches second-order moments of inertia tensors
  -r [tran_spec]         : Reslice images instead of doing registration
                               tran_spec is a series of warps, affine matrices
  -iw inwarp outwarp     : Invert previously computed warp
  -root inwarp outwarp N : Convert 2^N-th root of a warp
  -jac inwarp outjac     : Compute the Jacobian determinant of the warp
  -metric                : Compute metric between images
...
Specific to reslice mode (-r):
  -rf fixed.nii          : fixed image for reslicing
  -rm mov.nii out.nii    : moving/output image pair (may be repeated)
  -rs mov.vtk out.vtk    : moving/output surface pair (vertices are warped from fixed space to moving)
  -ri interp_mode        : interpolation for the next pair (NN, LINEAR*, LABEL sigma)
  -rb value              : background (i.e. outside) intensity for the next pair (default 0)
  -rc outwarp            : write composed transforms to outwarp
  -rj outjacobian        : write Jacobian determinant image to outjacobian
For developers:
  -debug-deriv           : enable periodic checks of derivatives (debug)
  -debug-deriv-eps       : epsilon for derivative debugging
  -debug-aff-obj         : plot affine objective in neighborhood of -ia matrix
  -dump-moving           : dump moving image at each iter
  -dump-freq N           : dump frequency
  -powell                : use Powell's method instead of LGBFS
  -float                 : use single precision floating point (off by default)
  -version               : print version info
  -V <level>             : set verbosity level (0: none, 1: default, 2: verbose)
```
