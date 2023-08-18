---
created: 2023-03-31T09:26:57 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/jupyter-notebook/
author:
---

To run Jupyter Notebook on the login nodes, we need to employ port forwarding and Python package.

### Running on login nodes

First of all, you need to forward the port that you want to run Jupyter Notebook on one of the login nodes to one of the ports on your local machine. The following example is forwarding port 5900 on login02, to port 8080 on your local machine. You can choose the port number on your local machine as you prefer. Similarly, it can run on login01 as well.

```
[xhuang@solomon ~]$ ssh -L localhost:8080:localhost:5900 xinghuang@login3-02.chpc.wustl.edu
```

Next start Jupyter Notebook run on port 5900 of login02:

```
[xinghuang@login02 ~]$ jupyter notebook --no-browser --port=5900
[I 14:39:11.467 NotebookApp] Writing notebook server cookie secret to /mnt/beegfs/home/xinghuang/.local/share/jupyter/runtime/notebook_cookie_secret
[I 14:39:13.218 NotebookApp] JupyterLab extension loaded from /export/anaconda/anaconda3/anaconda3-2020.07/lib/python3.8/site-packages/jupyterlab
[I 14:39:13.218 NotebookApp] JupyterLab application directory is /export/anaconda/anaconda3/anaconda3-2020.07/share/jupyter/lab
[I 14:39:13.220 NotebookApp] Serving notebooks from local directory: /mnt/beegfs/home/xinghuang
[I 14:39:13.220 NotebookApp] The Jupyter Notebook is running at:
[I 14:39:13.220 NotebookApp] http://localhost:5900/?token=26236aedf5fb4c3305361c01ddca271efb7fe93f4601f6db
[I 14:39:13.220 NotebookApp]  or http://127.0.0.1:5900/?token=26236aedf5fb4c3305361c01ddca271efb7fe93f4601f6db
[I 14:39:13.220 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[C 14:39:13.251 NotebookApp]

    To access the notebook, open this file in a browser:
        file:///mnt/beegfs/home/xinghuang/.local/share/jupyter/runtime/nbserver-983560-open.html
    Or copy and paste one of these URLs:
        http://localhost:5900/?token=26236aedf5fb4c3305361c01ddca271efb7fe93f4601f6db
     or http://127.0.0.1:5900/?token=26236aedf5fb4c3305361c01ddca271efb7fe93f4601f6db
[I 14:39:28.399 NotebookApp] 302 GET / (::1) 0.47ms
[I 14:39:28.446 NotebookApp] 302 GET /tree? (::1) 0.60ms
http://mgt2.chpc.wustl.edu/wiki119/index.php/Jupyter_Notebook[I 14:40:18.530 NotebookApp] 302 GET /?token=26236aedf5fb4c3305361c01ddca271efb7fe93f4601f6db (::1) 0.37ms
```

Now point a browser running on your local machine to port 8080 using the generated security token:

```
http://localhost:8080/?token=26236aedf5fb4c3305361c01ddca271efb7fe93f4601f6db
```

### Running on compute nodes

```
[xinghuang@login02 ~]$ srun --nodes=1 --ntasks=1 --cpus-per-task=4 --mem=50G --time=08:00:00 --pty bash
[xinghuang@node22 ~]$
```

After the interactive job is launched, you would be assigned to a compute node, node22 in this example.

Open another terminal window, and you need to forward the port of the assigned nodes to one of the ports on your local machine. The following example is forwarding port 5900 on node22, to port 8080 on your local machine. You can choose the port number on your local machine as you prefer.

```
[xhuang@solomon ~]$ ssh -L localhost:8080:localhost:5900 xinghuang@login3-02.chpc.wustl.edu
[xinghuang@login02 ~] ssh -L localhost:5900:localhost:5900 xinghuang@node22
```

Next start Jupyter Notebook run on port 5900 of the assigned node, node22 in this example:

```
[xinghuang@node22 ~] jupyter-notebook --no-browser --port=5900
[I 14:23:59.401 NotebookApp] JupyterLab extension loaded from /export/anaconda/anaconda3/anaconda3-2020.07/lib/python3.8/site-packages/jupyterlab
[I 14:23:59.401 NotebookApp] JupyterLab application directory is /export/anaconda/anaconda3/anaconda3-2020.07/share/jupyter/lab
[I 14:23:59.403 NotebookApp] Serving notebooks from local directory: /mnt/beegfs/home/xinghuang
[I 14:23:59.403 NotebookApp] The Jupyter Notebook is running at:
[I 14:23:59.403 NotebookApp] http://localhost:5900/?token=21d840a18a1d532b5e091f7b03b5d41ddc2a98f6b4c9364a
[I 14:23:59.403 NotebookApp]  or http://127.0.0.1:5900/?token=21d840a18a1d532b5e091f7b03b5d41ddc2a98f6b4c9364a
[I 14:23:59.403 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[C 14:23:59.408 NotebookApp]

    To access the notebook, open this file in a browser:
        file:///mnt/beegfs/home/xinghuang/.local/share/jupyter/runtime/nbserver-2688171-open.html
    Or copy and paste one of these URLs:
        http://localhost:5900/?token=21d840a18a1d532b5e091f7b03b5d41ddc2a98f6b4c9364a
     or http://127.0.0.1:5900/?token=21d840a18a1d532b5e091f7b03b5d41ddc2a98f6b4c9364a
[I 14:24:45.737 NotebookApp] 302 GET /?token=21d840a18a1d532b5e091f7b03b5d41ddc2a98f6b4c9364a (::1) 0.44ms
```

Now point a browser running on your local machine to port 8080 using the generated security token:

```
http://localhost:8080/?token=21d840a18a1d532b5e091f7b03b5d41ddc2a98f6b4c9364a
```
