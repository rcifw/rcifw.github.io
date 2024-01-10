---
title: Python
created: 2023-03-31T09:27:31 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/python/
author:
---

We recommend using a local conda environment for Python development, e.g., [Miniconda](https://docs.conda.io/en/main/miniconda.html) is one such choice. It can be installed using:
```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
chmod +x Miniconda3-latest-Linux-x86_64.sh
./Miniconda3-latest-Linux-x86_64.sh -p ~/miniconda -b
```

You can then update and activate your conda environment using:
```
conda update -y --update-all
. ~/miniconda/bin/activate
```

**Note**: when using Miniconda-based Python in your batch scripts you may need to add the following to your script:
```
source ~/.bashrc
. ~/miniconda/bin/activate
```
