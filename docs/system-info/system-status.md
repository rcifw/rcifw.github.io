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

**OUTAGE UPDATE - 09:48AM Friday, November 14th**:  Administrators are working on a networking issue on the newly deployed servers.  Once resolved, vendors will configure and bring the systems online which should resolve issues.  We are expecting resolution today.

### Shared Storage Systems (Ceph, BeeGFS, ZFS)
**CURRENT OUTAGE:** Write operations are currently failing on CephFS.

#### If you are seeing an outage that is not reported here please contact:

* CHPC:  *chpc@nrg.wustl.edu* - report on [Slack](https://mir-rcif.slack.com/archives/C05SQC1SJ0Y)
* CNDA and XNAT Portals:  *cnda-help@wustl.edu*
* MIRRIR:  *mirrir-help@wustl.edu*
* IntraDB:  *intradb-help@humanconnectome.org*
* Shared Storage and All Others:  *cil-help@wustl.edu*
