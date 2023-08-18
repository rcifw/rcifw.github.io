---
created: 2023-03-31T09:26:42 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/gate/
author:
---

The GATE home page is [http://www.opengatecollaboration.org](http://www.opengatecollaboration.org/).

To use GATE, you’ll use the module tool.

You can see what versions are available by using:

```
[xinghuang@login01 ~]$ module avail geant4/

------------------------------ /opt/modulefiles -------------------------------
   gate/9.1

Use "module spider" to find all possible modules and extensions.
Use "module keyword key1 key2 ..." to search for all possible modules matching
any of the "keys".
```

To load a specific version, you would use:

```
[xinghuang@login01 ~]$ module load gate/9.1
```

while the “gate” wildcard will load the default version, gate-9.1 in this case.

You should now be able to run GATE commands:

```
[xinghuang@login01 ~]$ Gate
[G4]
[G4] **************************************************************
[G4]  Geant4 version Name: geant4-10-07-patch-01    (5-February-2021)
[G4]                        Copyright : Geant4 Collaboration
[G4]                       References : NIM A 506 (2003), 250-303
[G4]                                  : IEEE-TNS 53 (2006), 270-278
[G4]                                  : NIM A 835 (2016), 186-225
[G4]                              WWW : http://geant4.org/
[G4] **************************************************************
[G4]
[Core-0] Initialization of geometry
[Core-0] Initialization of physics
[Core-0] Initialization of actors
[Core-0]
[Core-0] *************************************************
[Core-0]  GATE version 9.1 (2021)
[Core-0]  Copyright : OpenGATE Collaboration
[Core-0]  Reference : Phys. Med. Biol. 49 (2004) 4543-4561
[Core-0]  Reference : Phys. Med. Biol. 56 (2011) 881-901
[Core-0]  Reference : Med. Phys. 41(6)    (2014)
[Core-0]  http://www.opengatecollaboration.org
[Core-0] *************************************************
[Core-0]
[Core-0] You are using Geant4 version 10.7.1
```
