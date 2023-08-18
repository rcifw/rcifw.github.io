---
created: 2023-03-31T09:27:02 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/matlab_interactive/
author:
---

The MATLAB home page is [https://www.mathworks.com/](https://www.mathworks.com/).

This is interactive MATLAB that can run directly on either login nodes or compute nodes. **Note that interactive MATLAB is only available to CIL members**.

To run MATLAB interactively on the cluster, you’ll use the module tool.

You can see what versions are available by using:

```
[xinghuang@login01 ~]$ module avail matlab/

------------------------------ /opt/modulefiles -------------------------------
   matlab/R2021a

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[xinghuang@login01 ~]$ module load matlab/R2021a
```

while the “matlab” wildcard will load the default version, MATLAB R2021a in this case.

You should now be able to run MATLAB interactively on login nodes:

```
[xinghuang@login01 ~]$ matlab
MATLAB is selecting SOFTWARE OPENGL rendering.
```

Or you can run it on compute nodes (using CPU or GPU) interactively using X11 forwarding:

```
[xinghuang@login01 ~]$ srun -p test -N 1 -n 8 --time=04:00:00 --pty --x11 bash
[xinghuang@node01 ~]$ module load matlab/R2021a
[xinghuang@node01 ~]$ matlab
MATLAB is selecting SOFTWARE OPENGL rendering.
```

```
[xinghuang@login01 ~]$ srun -p test -N 1 -n 2 --gres gpu:1 --time=04:00:00 --pty --x11 bash
[xinghuang@gpu01 ~]$ module load matlab/R2021a
[xinghuang@gpu01 ~]$ matlab
MATLAB is selecting SOFTWARE OPENGL rendering.
```

**Note: Interactive MATLAB is only allowing to run serial jobs with one CPU core.** If you need to run parallel jobs, you must use [MATLAB Parallel Server](https://sites.wustl.edu/chpc/resources/software/matlab_parallel_server/).
