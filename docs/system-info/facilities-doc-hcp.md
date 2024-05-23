---
title: RCIF Facilities Document
created: 2023-10-26T13:31:10 (UTC -04:00)
tags: 
permalink: /facilities-hcp/
author: MIR Staff
---

*With permission, see also the related [CIRC facilities document](https://docs.google.com/document/d/1FVO2i87eicxxEeQXr5rX96CJbqllFH7fDw2wcNmEClI).*

# Washington University Facilities and Resources

## Washington University School of Medicine
The Washington University School of Medicine, consistently ranked among the top medical schools in the United States by U.S. News & World Report and by funding from the National Institutes of Health, has a rich, 133-year scientific history in basic, clinical, and translational research. Since its founding in 1891, it has contributed groundbreaking discoveries in many areas of medical research. The School's faculty members are the staff physicians at Barnes-Jewish Hospital and St. Louis Children's Hospital that form the academic hub for the BJC HealthCare System, the Medical School’s hospital partner. The School of Medicine and these fine hospitals, which are perennially recognized for excellence in patient care also provide a superb atmosphere for collaborative translational research and for training students, residents, and fellows, are the principal components of the Washington University Medical Center. The compact nature of this academic medical center in 12 city blocks and 60 buildings enhances the collaborative opportunities for both basic and translational research. See [here](https://accs.wustl.edu/fellowship/washington-university-medical-center/) for more information.
## Computing Facilities
The Computational Imaging Research Center (CIRC) at Washington University, under the direction of Dr. Daniel Marcus, occupies approximately 8,000 square feet of office and computing lab space within the East Imaging Building of Washington University. The CIRC is a multi-investigator research and engineering laboratory that includes scientists, programmers, software developers, systems administrators, students, and trainees, with a core mission of developing and operating computational tools and informatics software to support medical imaging research. The CIRC, in conjunction with the Department of Radiology’s Research Computing and Informatics Facility (RCIF), maintains a number of XNAT-based imaging databases for both internal and public facing operations. Together, these systems support over 500 ongoing research studies and over 1000 active users. In addition to imaging databases and informatics services, the RCIF maintains an on-premises high-performance computing facility (Center for High Performance Computing, CHPC) hosted within the university's Research Data Center (RDC) and storage servers across multiple sites.
### High Performance Computing
The Center for High Performance Computing (CHPC), operated by the Research Computing and Informatics Facility (RCIF), provides massively scaled compute resources to the Washington University imaging community and the expertise necessary to tackle any computationally intensive scientific project, including the largest GPU-accelerated and InfiniBand-connected cluster among the combined campuses of Washington University in St. Louis with over 100 datacenter class NVIDIA GPUs. The facility's staff is both highly experienced and knowledgeable about HPC and informatics, and they are committed to helping users succeed in their computational research projects, hosting both in-person and online meetings as well as 1-on-1 support and project assistance for PI's and users.

The CHPC hosts 3 petaflops (PF) of GPU-accelerated capacity, an HDR InfiniBand interconnect, and access to over 18 petabytes (PB) of tiered data storage on the HDR interconnect. The facility maintains both CPU-only and GPU-accelerated computing nodes with the most capable datacenter GPUs commercially available, including modular (SXM) NVIDIA H100, A100 (80G), and A100 (40G) with dual-socket 5th Generation Intel Xeon and AMD EPYC processors with intra-nodal NVSWITCH as well as PCIe A100, V100S, V100, T4, and K20 GPU-accelerated nodes. Batch job management on the heterogeneous compute nodes is addressed through `Slurm`. The HDR InfiniBand interconnect provides high-speed and ultra low-latency communication between the servers and storage, enabling efficient data sharing and distributed computing. 

Additionally, the RCIF maintains a separate VMWare cluster for running virtual machines, which host various XNATs and handles some small-scale pipeline processing. The cluster utilizes CentOS version 7.x 64-bit Linux. The machines consist of 216 CPU cores totaling around 500GHz and possess 2.0 TB of available RAM. Processing power and RAM usage for any individual cluster machine is dynamically scalable from 1-32 cores and up to 256GB of RAM through hosting in a VMware vSphere Enterprise environment. These machines are clustered and provisioned using VMWare and the Puppet Open Source configuration management tools. The cluster is networked to the RCIF’s data storage systems (see below) via dual-connected 10Gb Cisco network infrastructure, allowing rapid read/write access to data feeding compute jobs on the CHPC.

### Data storage
The facility's storage system is comprised of a tiered high-performance parallel file system, consisting of both large-volume and fast scratch storage. Over 16 PB of large-volume storage is maintained in a Ceph file system with an offsite disaster recovery (DR) center hosting 11PB of compressed data in a Ceph file system for full backups of all data. The Ceph-based system currently hosts the as the /home directories for CHPC users, the main datasets used by researchers, and a variety of shared human imaging datasets and data from MIRRIR and CNDA. At the fastest storage tier is 2 PB of high-throughput scratch storage in a BeeGFS file system with both NVMe- and HDD- based pools for caching data during computation. The NVMe-based pools of the scratch file system are on servers with dual HDR ports for up to 400gbps data transfer rates, maintaining computationally-constrained rooflines for performance. 

Secondary data storage includes over 3 PB of tiered SSD and NL-SAS based storage using the OpenZFS file system, which is primarily designated for the virtual machine (VM) cluster. The ZFS system is built on Supermicro hardware with a SAS Host Bus Adapter (HBA) breaking out to daisy-chained DataOn JBOD Storage Chassis, holding up to 60 drives per unit, for high density and easy expandability. This system hosts a full independent backup copy of the lab’s data. Custom backup scripts create daily ZFS snapshots for a perpetual point-in-time history of the archive and initiate incremental backup processes. The automated VM deployment process used in the RCIF incorporates these backups into development systems as writable ‘snap-clones’, providing developers with space-efficient copies of the data without the possibility of harming the live file system. In addition to these functions, the ZFS system also hosts high performance development and production VMs utilizing the SSD-based read and write cache mechanisms.

In addition to the off-site Ceph-based DR, the RCIF also operates a separate ZFS DR system hosted at a data center on another campus. This system holds a matching 1PB of high-capacity storage and receives nightly backups from the primary RCIF ZFS storage system. It also retains snapshots in perpetuity for a completely redundant copy of all ZFS hosted data.

While both ZFS- and Ceph-based primary and DR systems are deployed, the RCIF is currently in the process of migrating ZFS-based data into the Ceph-based system to reduce the maintenance load.
## Informatics Systems
Particularly relevant to the current proposal is the ConnectomeDB Internal database (colloquially known as ‘IntraDB’), which is a highly customized version of the XNAT imaging informatics platform first instantiated in 2010 for collection and management of the HCP-Young Adult study. IntraDB was subsequently used and extended for numerous other large-scale multi-site projects, including the HCP-Lifespan (Aging and Development) studies, the Connectome Coordination Facility and its associated Connectomes Related to Human Disease, and the Adult Aging Brain Connectome.

IntraDB includes a secure web-based interface for data ingestion and annotation, data review and QC, searching, and data transfer. IntraDB’s data transfer service has been specifically designed to enable high-speed transfer of very large imaging data sets using the Aspera Enterprise Server, which builds on proprietary technology to enable wide area network transfers up to 100x faster than standard HTTP-based mechanisms. IntraDB also contains a custom pipeline control panel dashboard that manages processing. The pipeline control panel is integrated with the CHPC’s Slurm queuing system for submitting jobs and monitoring job status.

IntraDB is deployed on the RCIF’s virtualized computing infrastructure and is fully integrated into the RCIF Development and Operations (DevOps) cycle, with automated deployment, configuration management, snap-cloned file systems for development purposes and 10Gb network infrastructure internally and to the CHPC. IntraDB processing is split between real-time and fast-turnaround automated jobs on the RCIF compute cluster and large batch processing jobs on the CHPC. Large batch processing jobs used to generate the HCP ‘pre-processed’ data run on the CHPC and take advantage of a custom all-SSD ZFS storage appliance designed and built by the RCIF for extreme responsiveness and high throughput. This server hosts 25TB of SSD storage, mixed between Enterprise and Consumer grade drives for cost effectiveness, and uses IP multi-pathing to achieve aggregated network throughput speeds in reaching 20Gb/s. Such high capacity is necessary due to the demands of thousands of simultaneous jobs running via the CHPC.

Currently, IntraDB hosts over 41,000 sessions of imaging data.