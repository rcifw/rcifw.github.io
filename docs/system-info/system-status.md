---
title: System Status
tags: []
permalink: /status/
author: RCIF
include: true
---
## Current System Status

### CHPC
All systems are operating normally at this time.

### NRG/Informatics 
<p>We experienced a failure of the main data storage pool that hosts virtual servers and metadata database files.  Most XNAT-based systems and portals (e.g. CNDA, MIRRIR) remain inaccessible. As a stop-gap measure, the systems team have temporarily moved storage from the failed SSD pool to a less performant spinning disk pool.  During this time, some critical systems and processes, <em>including data transfers from scanning facilities into the CNDA</em>, have been restored, however performance may be degraded.</p><p>It is expected that a move back to SSD storage will occur early next week (the week of September 30th) at which time all systems will be brought back online.  Additional systems may be brought back online incrementally during the interim period if it becomes clear that performance can be maintained on critical systems. However support for resource-intensive services like container processing is expected to remain unavailable until systems and databases are running on more performant SSD storage.</p><p>We apologize for the outage and the inconvenience.</p>

#### If you are seeing an outage that is not reported here please contact:

* CHPC:  *chpc@nrg.wustl.edu*
* CNDA and XNAT Portals:  *cnda-help@wustl.edu*
* MIRRIR:  *mirrir-help@wustl.edu*
* IntraDB:  *intradb-help@humanconnectome.org*
* All Others:  *cil-help@wustl.edu*
