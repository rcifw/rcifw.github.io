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

**OUTAGE UPDATE - 04:40PM Tuesday, November 11th**:  It appears that hardware will be needed to resolve this Ceph filesystem issue.  This hardware is expected to arrive and be installed on Thursday, November 13th.  Current expectation is for this outage to be resolved by end-of-day Thursday.

### Shared Storage Systems (Ceph, BeeGFS, ZFS)
**CURRENT OUTAGE:** Write operations are currently failing on CephFS.

#### If you are seeing an outage that is not reported here please contact:

* CHPC:  *chpc@nrg.wustl.edu* - report on [Slack](https://mir-rcif.slack.com/archives/C05SQC1SJ0Y)
* CNDA and XNAT Portals:  *cnda-help@wustl.edu*
* MIRRIR:  *mirrir-help@wustl.edu*
* IntraDB:  *intradb-help@humanconnectome.org*
* Shared Storage and All Others:  *cil-help@wustl.edu*
