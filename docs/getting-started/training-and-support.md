---
title: Training and Support
created: 2023-11-21T12:32:00 (UTC -04:00)
tags: []
permalink: /support/
author: Scott Johnson
include: true
---
# Training and Workshops
Check [events](../events.md) for our current schedule.
# Support
For a guide to using the CHPC, see [Slurm basics](slurm-basics.md), and we have a short guide to debugging your scripts in our [debugging fundamentals](debugging-fundamentals.md) page.

You also have several ways of contacting us for one-on-one or crowd-sourced support.

* This documentation is a great resource for up-to-date information.
* Join our "Research Computing and Informatics Facility" workspace ([mir-rcif](https://mir-rcif.slack.com)) - email support for an invitation. This is an engaged and helpful community; feel free to post your questions to the community, or you can ask us for help directly on the [_#ask-an-admin_](https://mir-rcif.slack.com/archives/C05SQC1SJ0Y) channel.
* Receive news and advisories on the [CHPC Users email group](https://gowustl.sharepoint.com/sites/chpc-users); all new users are added when they receive an account on the CHPC.
* On campus? You can find us in Suite 2211 or Suite 3338A of the East Building.
* Email support for the various services, including CHPC (__chpc _at_ nrg.wustl.edu__), CNDA (__cnda-help _at_ wustl.edu__), and MIRRIR (__mirrir-help _at_ wustl.edu__).
* Check out our [YouTube channel](https://www.youtube.com/@rcifwustl) for additional content, including videos from user meetings and RCIF Open House events.

## Scope of Support
We provide a wide range of support including but not limited to:
* Data Support: Access to [RCIF shared datasets](rcif-shared-datasets.md) , data migration with [Globus](getting-started-with-globus.md), or [hpc-hardware](../system-info/hpc-hardware.md)-based data storage.
* Connection Support: Access to [login nodes](connect-to-login-nodes.md) and [computation nodes](../system-info/hpc-hardware.md), including access via [VNC](../software/vnc-remotedesktop), [VSCode](../software/visual-studio-code) ,etc.
* Job Support: CHPC supports a variety of job submission methods, see [Slurm Documentation](slurm-basics.md). We will provide support for issues encountered during job submission and job running.
* Hardware and Software Support: We will provide regular updates and maintenance to the computational resources and software support.
### *Out of scope support*
However, it is noteworthy that certain services will be considered out-of-scope and charged according to the preset rates. See  [Accounting FAQ](./faqs-accounting.md):
1. External software or packages: For instance, issues with jobs submitted with [`parsl` ](https://parsl-project.org/) will count as out-of-scope if the problems are caused by `parsl` code.
2. Issues with personal devices: Contact [WUIT](https://it.wustl.edu/help/washu-it-support/) for issues specific to your personal device (e.g. software, conda environment, or running code locally on personal device).
3. Specific coding issues: We won't be able to support specific coding problems, but CHPC provides software development support as individually-priced, external support. See the rate sheet above for details.
## Slack Channel Best Practices

### Prior to posting

When posting messages to the [_#ask-an-admin_](https://mir-rcif.slack.com/archives/C05SQC1SJ0Y) channel, we suggest the following before posting
1. Search for relevant questions, as in many cases questions regarding a specific node or software package could have been reported by other users
2. Check CHPC documentation for potential quick fixes to issues

### Posting formats

We suggest the following formatting guidelines to follow:
1. Submit error logs, scripts, and other text-based messages in code blocks:
![Screenshot of a Jupyter notebook](../assets/images/slack_code_block.png)

2. Explicitly state the node, software, and environment (if applicable) where the issue has occurred.

### Notes
Unless you have a solid reason to believe the scheduler is malfunctioning, please do not post about jobs not being scheduled. You may contact the admins if you consider the current partition insufficient.
# Additional Resources
The Becker Library provides a series of trainings/workshops on computer basics for users who had no prior experience of Linux OS and high performance computing (Computing 101) as well as basic programming in Python, R, and MATLAB.

More detailed information can be found at [https://becker.wustl.edu/services/research-computing](https://becker.wustl.edu/services/research-computing).
