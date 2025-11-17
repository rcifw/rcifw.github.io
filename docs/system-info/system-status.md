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

**OUTAGE UPDATE - 08:07AM Monday, November 17th**:  The new storage hardware triggered a metadata replay process that is proceeding very slowly.  Our storage vendor is working on the process, but it is not expected to be completed this week.  The storage system is expected to remain unavailable through Sunday the 23rd.  We understand that the ongoing storage outage is causing substantial inconvenience, and we apologize for the impact this has on your work. 

### Shared Storage Systems (Ceph, BeeGFS, ZFS)
**CURRENT OUTAGE:** Ceph mounts are currently hanging/failing.

#### If you are seeing an outage that is not reported here please contact:

* CHPC:  *chpc@nrg.wustl.edu* - report on [Slack](https://mir-rcif.slack.com/archives/C05SQC1SJ0Y)
* CNDA and XNAT Portals:  *cnda-help@wustl.edu*
* MIRRIR:  *mirrir-help@wustl.edu*
* IntraDB:  *intradb-help@humanconnectome.org*
* Shared Storage and All Others:  *cil-help@wustl.edu*
