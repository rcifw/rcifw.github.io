---
title: Hardware
tags: []
permalink: /computers/
author: Scott Johnson
include: true
---

## List of Computational Nodes

| Name  | CPU                  | Cores per socket | Sockets | CPU Cores | Real Memory | GPU         | GPU Count |
|-----------|----------------------|----------------|---------|-----------|------------|-------------|-----------|
| node[01-14]    | Intel Xeon Gold 6226R | 16             | 2       | 32        | 770000     |             |           |
| node[15-32]    | Intel Xeon Gold 6226R | 16             | 2       | 32        | 385000     |             |           |
| gpu01     | Intel Xeon Gold 6226R | 16             | 2       | 32        | 385000     | tesla_a100 | 4         |
| gpu02     | Intel Xeon Gold 6226R | 16             | 2       | 32        | 770000     | tesla_v100S | 4         |
| gpu03     | Intel Xeon Gold 6226R | 16             | 2       | 32        | 770000     | tesla_v100S | 2         |
| gpu04     | Intel Xeon Gold 6226R | 16             | 2       | 32        | 385000     | tesla_v100S | 2         |
| gpu05     | Intel Xeon Gold 6226R | 16             | 2       | 32        | 385000     | tesla_v100S | 2         |
| gpu06     | Intel Xeon Gold 6226  | 12             | 2       | 24        | 385000     | tesla_v100 | 4         |
| gpu07     | Intel Xeon Gold 6226  | 12             | 2       | 24        | 385000     | tesla_v100 | 3         |
| gpu08     | Intel Xeon Gold 6226  | 12             | 2       | 24        | 385000     | tesla_t4   | 2         |
| gpu09     | Intel Xeon Gold 6226  | 12             | 2       | 24        | 386000     | tesla_v100 | 4         |
| highmem01 | Intel Xeon Gold 6240L | 18             | 2       | 36        | 2984000     |             |           |
| highmem02 | Intel Xeon Gold 6226  | 12             | 4       | 48        | 2984000     |             |           |

*See also the [spreadsheet](https://gowustl-my.sharepoint.com/:x:/g/personal/johnsonscott_wustl_edu/ETi34n73B7lPrrb7NtQqOqkB3JI43UpNq4cS5_lCB6k0bA?e=ToeMxt)*

## Quick links
- [Login](#login-nodes) 
- [CPU compute](#cpu-nodes) including high-memory
- [GPU-accelerated compute](#gpu-nodes)
- [Gateways](#gateway-nodes)
- [Storage](#storage)
- [Fabric](#infiniband)
- [Legacy](#legacy)
- [COMING SOON!](#next-generation)

## Login Nodes

### login\[1-2\]

Summary: 2 x [ACTserv x1210](https://www.advancedclustering.com/act_systems/actserv-x1210/) (32-cores, 192GB, 480GB SSD)

- Processor: 2x Intel 16-Core Xeon Gold 6226R 2.9GHz – 150W
- Memory: 192GB – 12x 16GB DDR4 2933MHz
- Storage: 2x 240GB SATA 2.5″ solid state drives

[top](#quick-links)

## CPU Nodes

### node\[01-14\]

Summary: 14 x Dual Socket Xeon SP (32-cores, 768GB)

- Processor: 2x Intel 16-Core Xeon Gold 6226R 2.9GHz – 150W
- Memory: 768GB – 12x 64GB DDR4 2933MHz
- Storage: 256GB M.2 NVMe solid state drives

### node\[15-32\]

Summary: 18 x Dual Socket Xeon SP (32-cores, 384GB)

- Processor: 2x Intel 16-Core Xeon Gold 6226R 2.9GHz – 150W
- Memory: 384GB – 12x 32GB DDR4 2933MHz
- Storage: 256GB M.2 NVMe solid state drives

## highmem01

Summary: [ACTserv x1210](https://www.advancedclustering.com/act_systems/actserv-x1210/) (36-cores, 3TB)

- Processor: 2x Intel 18-Core Xeon Gold 6240L 2.6GHz – 150W
- Memory: 3TB – 24x 128GB DDR4 2933MHz
- Storage: 256GB M.2 NVMe solid state drives

### highmem02

Summary: ACT SYS-2049U-TR4 (24-cores, 3TB)

- Processor: 4x Intel 12-Core Xeon Gold 6226 2.7GHz – 125W
- Memory: 3TB – 48x 64GB DDR4 2933MHz
- Storage: 240GB solid state drives

[top](#quick-links)

## GPU Nodes
GPU acceleration adds 432TF of SFLOP performance and 798GB of global memory from 27 GPUs.

### gpu01

Summary: [ACTserv x2280c](https://www.advancedclustering.com/act_systems/actserv-x2280c/) (32-cores, 384GB)

- GPU: 4x NVIDIA Tesla A100 PCI-E Passive Single GPU each with 40GB of GDDR5 memory
- Processor: 2x Intel 16-Core Xeon Gold 6226R 2.9GHz – 150W
- CPU Memory: 384GB – 12x 32GB DDR4 2933MHz
- Storage: 6x 2.5″ SATA hotswap, 2x U.2 NVMe drive bays
- Note: Each pair of GPUs are connected via NVLink

### gpu02

Summary: [ACTserv x2280c](https://www.advancedclustering.com/act_systems/actserv-x2280c/) (32-cores, 768GB)

- GPU: 4x NVIDIA Tesla V100S PCI-E Passive Single GPU each with 32GB of GDDR5 memory
- Processor: 2x Intel 16-Core Xeon Gold 6226R 2.9GHz – 150W
- CPU Memory: 768GB – 12x 64GB DDR4 2933MHz
- Storage: 6x 2.5″ SATA hotswap, 2x U.2 NVMe drive bays

### gpu03

Summary: [ACTserv x2280c](https://www.advancedclustering.com/act_systems/actserv-x2280c/) (32-cores, 768GB)

- GPU: 2x NVIDIA Tesla V100S PCI-E Passive Single GPU each with 32GB of GDDR5 memory
- Processor: 2x Intel 16-Core Xeon Gold 6226R 2.9GHz – 150W
- CPU Memory: 768GB – 12x 64GB DDR4 2933MHz
- Storage: 6x 2.5″ SATA hotswap, 2x U.2 NVMe drive bays

### gpu\[04-05\]

Summary: 2 x [ACTserv x2280c](https://www.advancedclustering.com/act_systems/actserv-x2280c/) (32-cores, 384GB) 
- GPU: 2x NVIDIA Tesla V100S PCI-E Passive Single GPU each with 32GB of GDDR5 memory

- Processor: 2x Intel 16-Core Xeon Gold 6226R 2.9GHz – 150W
- CPU Memory: 384GB – 12x 32GB DDR4 2933MHz
- Storage: 6x 2.5″ SATA hotswap, 2x U.2 NVMe drive bays

### gpu06

Summary: [ACTserv x4170c](https://www.advancedclustering.com/act_systems/actserv-x4170c/) (24-cores, 384GB)

- GPU: 4x NVIDIA Tesla V100 PCI-E Passive Single GPU each with 32GB of GDDR5 memory
- Processor: 2x Intel 12-Core Xeon Gold 6216 2.6GHz – 125W
- CPU Memory: 384GB – 12x 32GB DDR4 2666MHz

### gpu07

Summary: [ACTserv x4170c](https://www.advancedclustering.com/act_systems/actserv-x4170c/) (24-cores, 384GB)

- GPU: 3x NVIDIA Tesla V100 PCI-E Passive Single GPU each with 32GB of GDDR5 memory
- Processor: 2x Intel 12-Core Xeon Gold 6216 2.6GHz – 125W
- CPU Memory: 384GB – 12x 32GB DDR4 2666MHz

### gpu08

Summary: [ACTserv x4170c](https://www.advancedclustering.com/act_systems/actserv-x4170c/) (24-cores, 384GB)

- GPU: 2x NVIDIA Tesla T4 PCI-E Passive Single GPU each with 15GB of GDDR6 memory
- Processor: 2x Intel 12-Core Xeon Gold 6216 2.6GHz – 125W
- CPU Memory: 384GB – 12x 32GB DDR4 2666MHz

### gpu09

Summary: [ACTserv x4170c](https://www.advancedclustering.com/act_systems/actserv-x4170c/) (24-cores, 384GB)

- GPU: 4x NVIDIA Tesla V100 PCI-E Passive Single GPU each with 16GB of GDDR5 memory
- Processor: 2x Intel 12-Core Xeon Gold 6216 2.6GHz – 125W
- CPU Memory: 384GB – 12x 32GB DDR4 2666MHz

[top](#quick-links)

## Gateway Nodes

Summary: 4 x [ACTserv x1210](https://www.advancedclustering.com/act_systems/actserv-x1210/) (32-cores, 192GB)

- Processor: 2x Intel 16-Core Xeon Gold 6226R 2.9GHz – 150W
- Memory: 192GB – 12x 16GB DDR4 2933MHz
- Storage: 2x 240GB SATA 2.5″ solid state drives

[top](#quick-links)

## Storage

For architectural concepts and usage of storage, see [here](../getting-started/storage-systems.html).

### High-throughput file system (scratch)

BeeGFS storage with 1.3PB (i.e., 1,327,032 GiB) of total usable storage.

#### 3 x BeeGFS HDD storage block

> beegfs-oss01.cluster [ID: 1]
>
> beegfs-oss02.cluster [ID: 2]
>
> beegfs-oss03.cluster [ID: 3]

- Enclosure: 4U, 60 drive JBOD with redundant SAS expanders
- Storage: 480TB usable – 6GB/s (60x 10TB)
- Fabric: ConnectX6, HDR-100 IB (100Gb/s) and 100GbE, single-port QSFP56, PCIe3/4 x16 Slot

#### 2 x BeeGFS meta data server

> beegfs-mds01.cluster [ID: 1]
> 
> beegfs-mds02.cluster [ID: 2]

- Memory: 192GB – (12x 16GB DIMMs)
- Metadata storage: 4x 3.2TB PCIe NVMe 2.5" solid state drives
- Fabric: ConnectX-6 VPI adapter card, HDR-100 IB (100Gb/s) and 100GbE, single-port QSFP56, PCIe3/4 x16 Slot

### Large-volume file system (persistent)

Ceph storage with 5.82PB of total usable storage.

#### 14 x Ceph HDD storage block

> croit-osd[1-14]

#### 3 x Ceph meta data server

> croit-mds01
>
> croit-mds02
>
> croit-mds03

- 32-core CPU
- Memory: 267GB
- Metadata storage: 6x PCIe NVMe 2.5″ solid state drives

[top](#quick-links)

## Infiniband

### 1 x HDR Network

- IB switch: 1x 40 port IB HDR (200Gb/s) – QSFP ports
- Used IB ports: 38x HDR-100 ports
- Unused ports: 42x HDR-100 available ports for expansion – 21x HDR-200 physical
- Node cables: 19x 2 Meter HDR Infiniband Cable – 1x QSFP (200Gb/s) to 2x QSFP (100Gb/s)

[top](#quick-links)

## Legacy

CHPC2 has 528 CPU cores in 23x CPU-based nodes and 11x GPU-accelerated nodes.
GPU acceleration adds 122.5TF of SFLOP performance and 160GB of global memory from 31 GPUs.  

- Dual-socket Intel E5-2630 8-core CPUs
- 128GB memory
- GPU-acceleration: NVIDIA K20m and K20xm

[top](#quick-links)

## Next Generation

Our next generation CHPC4 machines are in the racks and currently being integrated into the system. After benchmarking in early 2024, these systems will be released into production, increasing our SFLOP capacity to >3PF and our usable storage to ~18PB. We cannot wait!

CHPC4 adds the following computing nodes:
- 12 nodes (A100-SXM-40G): Lenovo SR670 V2 with dual-socket Intel Xeon Gold 6338 4th gen processors, 1TB TruDDR4 3200MHz, 6.4TB NVMe, and 4x NVIDIA A100-SXM-40G (modular, NVLINK)
- 5 nodes (A100-SXM-80G): Lenovo SR670 V2 with dual-socket Intel Xeon Gold 6338 4th gen processors, 1TB TruDDR4 3200MHz, 6.4TB NVMe, and 4x NVIDIA A100-SXM-80G (modular, NVLINK)
- 2 nodes (H100-SXM-80G): Lenovo SR675 V3 with dual-socket AMD EPYC 9334 4th gen processors, 1.5TB TruDDR4 3200MHz, 6.4TB NVMe, and 4x NVIDIA H100-SXM-80G (modular, NVLINK)
- 1 node: QCT S74G GH200 Grace Hopper system - Grace CPU with 72 Arm Neoverse V2 cores, up to 480GB LPDDRX memory with an NVSWITCH connecting to a Hopper H100 GPU 96GB HBM3 GPU accelerator

[top](#quick-links)
