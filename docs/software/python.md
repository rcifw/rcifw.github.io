---
created: 2023-03-31T09:27:31 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/python/
author:
---

We support both the Anaconda 2 and Anaconda 3 Python distribution. Anaconda distributions come pre-bundled with many Python packages. Regardless of which Python package you use, setting up a Python Virtual Environment (PVE) is highly encouraged. This will allow you to update or install any packages that you’d like.

The Anaconda PYTHON Developers home page is [https://www.anaconda.com](https://www.anaconda.com/).

To create PVE in your home directory, you’ll use the module tool.

You can see what versions are available by using:

```
[me@login01 ~]$ module avail python/

------------------------------- /opt/modulefiles -------------------------------
   python/2.7.16    python/3.7.4    python/3.9.12 (D)
   python/3.6.5     python/3.8.3

  Where:
   D:  Default Module

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[me@login01 ~]$ module load python/3.7.4
```

while the “python” wildcard will load the default version, python-3.8.3 in this case.

You should now have PYTHON in your path:

```
[me@login01 ~]$ which python
/opt/apps/anaconda/anaconda3/Anaconda3-2019.10/bin/python
[other_me@login01 ~]$ python --version
Python 3.7.4
```

You can then create a PVE with:

```
[me@login01 ~]$ conda create --name <name_of_env>
```

where can be whatever you want to call it.

To activate this environment, use:

```
[me@login01 ~]$ source activate <name_of_env>
```

To deactivate this environment, use:

```
[me@login01 ~]$ conda deactivate
```

You can now install any package you’d like with:

```
[me@login01 ~]$ conda install --name <name_of_env> <name_of_package>
```

An example of creating a new PVE is shown here:

```
[me@login01 ~]$ module load python/3.7.4
[me@login01 ~]$ conda create --name conda_env
[me@login01 ~]$ source activate conda_env
(conda_env) [me@login01 ~]$ python --version
Python 3.7.4
(conda_env) [me@login01 ~]$ conda deactivate
[me@login01 ~]$
```
