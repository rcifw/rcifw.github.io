---
title: System Status
tags: []
permalink: /status/
author: RCIF
include: true
---
## Current System Status

### CHPC
The following are currently offline for maintenance: `node07`, `gpu[07,09]`, `gpua[401,408]`. No other anomalies reported.

### NRG/Informatics Portals/CNDA/MIRRIR
**CURRENT OUTAGE:** We are experiencing a filesystem issue whereby writes to the Ceph filesystem are failing.  Most portals, including CNDA, MIRRIR and several others have been taken down to prevent write attempts that cannot be completed.

**OUTAGE UPDATE - 11:30AM Tuesday, November 25th**:  Our storage vendor reports that the metadata replay process continues and is estimated to complete by Saturday. However, one of the metadata servers rebooted unexpectedly and initiated a concurrent replay process. While we hope this errant process failed early and will not further complicate the recovery process, we are working on plans to deploy alternative infrastructure to make at least a subset of the data available during any additional recovery process. We will provide more details as plans are solidified.

**OUTAGE UPDATE - 11:30AM Thursday, November 20th**:  We have received updated information from our storage vendor regarding the ongoing recovery. They are now able to measure the progress of the metadata replay and have provided a more definitive estimate.

Based on the current rate of progress, **the vendor expects the metadata replay to require an additional 8–10 days to complete.**
During this period, **the filesystem and all systems that rely on it will remain unavailable.**
This places the anticipated return to service between Friday, November 28th and Saturday, November 30, assuming the current pace continues.

We fully recognize the difficulty caused by this extended outage and sincerely apologize for the continued impact on your work. Thank you for your patience as we complete this mandatory recovery process safely and accurately.

### Shared Storage Systems (Ceph, BeeGFS, ZFS)
**CURRENT OUTAGE:** Ceph mounts remain unavailable due to the ongoing Ceph ourage.

#### If you are seeing an outage that is not reported here please contact:

* CHPC:  *chpc@nrg.wustl.edu* - report on [Slack](https://mir-rcif.slack.com/archives/C05SQC1SJ0Y)
* CNDA and XNAT Portals:  *cnda-help@wustl.edu*
* MIRRIR:  *mirrir-help@wustl.edu*
* IntraDB:  *intradb-help@humanconnectome.org*
* Shared Storage and All Others:  *cil-help@wustl.edu*
