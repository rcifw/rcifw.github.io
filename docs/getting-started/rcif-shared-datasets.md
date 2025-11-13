---
title: RCIF Datasets
created: 2023-12-12T16:30:00 (UTC -04:00)
tags: []
permalink: /datasets/
source: https://docs.google.com/document/d/1UYF7q3GorwmKSrd2fFK_g1GMfZjsnkpLDqcHne1RVWQ/edit
author: Jenn Elam
include: true
---
To request access to available datasets or request new datasets visit the [Data Request Portal](https://wustl.az1.qualtrics.com/jfe/form/SV_6gPG6D5xbpgF5Pg). For more information on our process for evaluating and adding new datasets see [Requesting New RCIF Datasets](new-dataset-requests.md).

Before accessing the shared datasets listed here, all users must agree not to transfer the data off of the RCIF shared storage systems. Violations of this policy will be referred for disciplinary redress.
# Compliance
The university is currently attesting that the Research Computing and Informatics Facility (RCIF), which operates the Center for High-Performance Computing (CHPC), satisfies National Institutes of Health (NIH) Genomic Data Sharing (GDS) rules for storing and processing data from NIH Controlled Access Data Repositories (CADR)s. The RCIF is committed to satisfying compliance requirements to comply with GDS rules into the future.
# Available Datasets

## Curated Research Datasets

### ABCD
The Adolescent Brain Cognitive Development (ABCD) Study is a prospective longitudinal study of brain development and child health in the United States. 11,880 children ages 9-10 were recruited to track their biological and behavioral development for 10 years through adolescence into young adulthood.  ABCD Release 6.0 (data through year 4-5, imaging for years 0, 2, 4) was obtained via the [NIH Brain Development Cohorts (NBDC) Data Sharing Platform](https://nbdc-datashare.lassoinformatics.com/). Documentation and updates are available at: [https://docs.abcdstudy.org/latest/](https://docs.abcdstudy.org/latest/). Release 6.0 includes phenotypic tabulated data (see phenotypes and beh subfolders of rawdata), raw data (MRI data: anat, beh, dwi, fmap, func) and ABCC pipeline derivatives (abcd-hcp-pipeline_v0.1.4: anat, func, img and qsiprep_v0.21.4: anat, dwi, figures).

### HBCD
The HEALthy Brain and Child Development (HBCD) Study is a longitudinal study of early brain and child development enrolling over 7,000 US families, following them from pregnancy through early childhood with a long-term goal of better understanding of how the brain develops and is affected by exposure to substances and other environmental, social, and biological factors during pregnancy and after birth. As described [here](https://nbdc-splash-beta.lassoinformatics.com/hbcd-study), HBCD includes wearable biosensor data, biosamples, multimodal neuroimaging and EEG across neurodevelopment, plus surveys of parental health and well-being.  HBCD Release 1.1 was obtained via the [NIH Brain Development Cohorts (NBDC) Data Sharing Platform](https://nbdc-datashare.lassoinformatics.com/). Documentation and updates are available at: [https://docs.hbcdstudy.org/latest/](https://docs.hbcdstudy.org/latest/). Release 1.1 includes phenotypic tabulated data (see phenotypes subfolder of rawdata), raw data (MRI, MRS and wearables data: anat  dwi  fmap  func  motion  mrs) and pipeline derivatives (MRI, MRS, EEG, and wearables: bibsnet, freesurfer, hbcd_motion, made, mcribs, mriqc, nibabies, osprey, qmri_postproc, qsiprep, qsirecon, qsirecon-DIPYDKI, qsirecon-DSIStudio, qsirecon-TORTOISE_model-MAPMRI, qsirecon-TORTOISE_model-tensor, symri, xcp_d).

### HCP Young Adult
Human Connectome Project- Young Adult (HCP-YA) is a study of 1200 healthy young adult (ages 22-35) subjects from families with twins and non-twin siblings. Unprocessed and preprocessed MR data is available for 1113 subjects. 889 subjects have fully complete data for all of the four 3T MRI modalities in the HCP protocol: structural images (T1w and T2w), resting-state fMRI (rfMRI), task fMRI (tfMRI), and high angular resolution diffusion imaging (dMRI). 46 subjects (all monozygotic twins) have 3T HCP protocol Retest data available. 184 subjects also have 7T multimodal MR scan data available (in addition to 3T MR scans).  95 subjects also have at least some resting-state MEG (rMEG) and/or task MEG (tMEG) data available (in addition to 3T MR scans). More information on the dataset and processing with the HCP pipelines is available in the [S1200 Reference Manual](https://www.humanconnectome.org/storage/app/media/documentation/s1200/HCP_S1200_Release_Reference_Manual.pdf). Behavioral data can be downloaded from [ConnectomeDB powered by BALSA](https://balsa.wustl.edu/project?project=HCP_YA), User support is available in the [hcp-users Google group](https://groups.google.com/u/0/a/humanconnectome.org/g/hcp-users). To get started, create a BALSA account and agree to the HCP-YA Open Access Data Use Terms.

### Connectomes Related to Human Disease (CRHD) Projects
CRHD projects apply HCP-style data collection protocols toward subject cohorts at risk for, or suffering from, diseases or disorders affecting the brain, with a goal of providing comparable data to healthy HCP subjects across the lifespan.

Currently available CRHD datasets:
#### BANDA
The [Boston Adolescent Neuroimaging of Depression and Anxiety (BANDA)](https://www.humanconnectome.org/study/connectomes-related-anxiety-depression) is a study of 215 adolescents, ages 14-17, 152 of whom had a current diagnosis of a DSM-5 anxious and/or depressive disorder. BANDA data includes: unprocessed (up to 207 subjects) and HCP pipelines minimally preprocessed (up to 203 subjects) structural MRI, resting state fMRI, task fMRI for 3 tasks, and diffusion MRI. Clinical and behavioral data for 215 subjects is available [on NDA](https://nda.nih.gov/general-query.html?q=query=featured-datasets:Connectomes%20Related%20to%20Human%20Disease). More information is available in the [BANDA Release 1.1 Reference Manual and other documentation](https://www.humanconnectome.org/study/connectomes-related-anxiety-depression/document/banda-release-11) to help with understanding the project and interpreting the data.

#### PDC/MDD
The [Perturbation of Treatment-Resistant Depression Connectome by Fast-Acting Therapies (PDC, a.k.a. MDD)](https://www.humanconnectome.org/study/crhd-perturbation-treatment-resistant-depression-connectome-fast-acting-therapies) is a study of adults with and without treatment resistant depression (191 patients, 51 controls) and with and without fast-acting treatment interventions (ages 20-64, with treatment-resistant depression treated with ECT [N=44], ketamine [N=67], or total sleep deprivation [N=60], plus healthy controls [N=51]). Of the healthy controls, 16 underwent total sleep deprivation and 17 were assessed at 2 visits without intervention. PDC data includes: unprocessed (227 subjects) and HCP pipelines minimally preprocessed (218 subjects) structural MRI, resting state fMRI, task fMRI for 3 tasks, and diffusion MRI. Clinical and behavioral data for 230 subjects is available [on NDA](https://nda.nih.gov/general-query.html?q=query=featured-datasets:Connectomes%20Related%20to%20Human%20Disease). More information is available in the [PDC Release 1.0 Reference Manual and other documentation](https://www.humanconnectome.org/study/crhd-perturbation-treatment-resistant-depression-connectome-fast-acting-therapies/document/pdc-release-10) to help with understanding the project and interpreting the data.

### CT-RATE
CT-RATE is a dataset that uniquely pairs textual data with imagery data comprised of chest CT volumes paired with corresponding radiology text reports, multi-abnormality labels, and metadata. The CT-RATE dataset is released as part of the paper "A foundation model that utilizes chest CT volumes and radiology reports for supervised-level zero-shot detection of abnormalities". CT-RATE consists of 25,692 non-contrast chest CT volumes, expanded to 50,188 through various reconstructions, from 21,304 unique patients, along with corresponding radiology text reports, multi-abnormality labels, and metadata. To get started, go to [https://huggingface.co/datasets/ibrahimhamamci/CT-RATE](https://huggingface.co/datasets/ibrahimhamamci/CT-RATE), create a Hugging Face account and sign the CT-RATE Data Use Terms.

### OASIS
The Open Access Series of Imaging Studies (OASIS) is a series of studies of aging and dementia in middle-aged to older adults. See [https://www.oasis-brains.org/#about](https://www.oasis-brains.org/#about). The studies include: 
* OASIS 1 - Cross-sectional MRI Data in Young, Middle Aged, Nondemented and Demented Older Adults
* OASIS-2: Longitudinal MRI Data in Nondemented and Demented Older Adults
* OASIS-3: Longitudinal Multimodal Neuroimaging, Clinical, and Cognitive Dataset for Normal Aging and Alzheimer’s Disease
* OASIS3AV1451: Baseline OASIS-3 Flortaucipir F18 (AV1451) PET 
* OASIS3AV1451L: Longitudinal OASIS-3 Flortaucipir F18 (AV1451) PET
* OASIS-4: Clinical Cohort, aged 21-94
To get started, go to [https://www.oasis-brains.org/#access](https://www.oasis-brains.org/#access), and click Apply to Access OASIS Data.

### UK Biobank
UK Biobank holds an unprecedented amount of data on half a million participants aged 40-69 years (with a roughly even number of men and women) recruited between 2006 and 2010 throughout the UK. Our copy of the dataset includes brain MRI, heart MRI, abdominal MRI, genotypes, and phenotypes. Brain imaging includes structural MRI, functional MRI, diffusion MRI, and susceptibility weighted MRI for over 40k session 1 and 3,400+ session 2 longitudinal subjects. Publication of image processing [https://pubmed.ncbi.nlm.nih.gov/29079522/](https://pubmed.ncbi.nlm.nih.gov/29079522/). Our copy is managed by the Bijsterbosch lab who have provided documentation for use on the CHPC: UK_Biobank_use. To get started, create a Biobank account: [https://ams.ukbiobank.ac.uk/ams/signup](https://ams.ukbiobank.ac.uk/ams/signup)

### EMBED
The EMory BrEast Imaging Dataset (EMBED) dataset contains 3.4M screening and diagnostic mammographic exams for 110,000 patients from four hospitals collected from 2013-2020, with an equal representation of black and white women. The EMBED AWS Open Data release available on RCIF represents 20% of the dataset divided into two equal cohorts, each with 11,000 unique patients and all exams for those patients. The dataset is comprised of 2D, synthetic 2D (C-view), and 3D (digital breast tomosynthesis, i.e. DBT) images. Digital breast tomosynthesis, ultrasound, and MRI exams will be added at a later date. Access to the other 80% of the dataset requires an active collaboration with Emory investigators and additional data use agreements, enquire with Dr. Gastinounioti for more information. The Open Data Release is described at: [https://github.com/Emory-HITI/EMBED_Open_Data/blob/main/README.md](https://github.com/Emory-HITI/EMBED_Open_Data/blob/main/README.md).

### TCIA
The Cancer Imaging Archive (TCIA) is a series of radiology and histopathology imaging datasets. Imaging collections include data related to the images such as patient outcomes, treatment details, genomics, pathology, and expert analyses that are also provided or linked to when available. Collections are described at [https://www.cancerimagingarchive.net/collections/](https://www.cancerimagingarchive.net/collections/).
 
Currently available TCIA datasets:
#### Breast-Cancer-Screening-DBT
A curated dataset of digital breast tomosynthesis (DBT) images that includes normal, actionable, biopsy-proven benign, and biopsy-proven cancer cases.  The dataset contains four components: (1) DICOM images, (2) a spreadsheet indicating which group each case belongs to (3) annotation boxes, and (4) Image paths for patients/studies/views. [https://www.cancerimagingarchive.net/collection/breast-cancer-screening-dbt/](https://www.cancerimagingarchive.net/collection/breast-cancer-screening-dbt/)

#### Duke-Breast-Cancer-MRI
A retrospective collection of 922 biopsy-confirmed invasive breast cancer patients including demographic, clinical, pathology, treatment, outcomes, genomic data, and dynamic contrast- enhanced (DCE) MRI. [https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=70226903](https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=70226903)

#### ISPY TRIAL
Investigation of Serial studies to Predict Your Therapeutic Response with Imaging And moLecular analysis is a national prospective study to test MRI for ability to predict response to treatment and risk-of-recurrence in patients with stage 2 or 3 breast cancer receiving neoadjuvant chemotherapy. Criteria for inclusion were patients with T3 tumors measuring at least 3 cm in diameter by clinical exam or imaging and receiving neoadjuvant chemotherapy with an anthracycline-cyclophosphamide regimen alone or followed by a taxane. This collection includes 230 patients. [https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=20643859](https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=20643859)

#### ISPY1-Tumor-SEG-Radiomics
This dataset enhances the ISPY1 breast cancer data collection, with uniformly curated data, tumor annotations, and quantitative imaging (also known as radiomic) features corresponding to the tumor regions in 163 subjects. The segmentations included are for the entire 3D primary lesion, including both the enhancing and the non-enhancing tumor regions, therefore defining the structural tumor volume (STV) to allow analyses of the entire disease burden and analyses of tumor heterogeneity regarding contrast uptake. [https://www.cancerimagingarchive.net/analysis-result/ispy1-tumor-seg-radiomics/](https://www.cancerimagingarchive.net/analysis-result/ispy1-tumor-seg-radiomics/)

#### ISPY2
Investigation of Serial studies to Predict Your Therapeutic Response with Imaging And moLecular analysis 2 is an ongoing, multi-center trial designed to quickly evaluate the efficacy of new agents for breast cancer in neoadjuvant chemotherapy (NAC) setting. 719 patients are included in this collection. [https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=70230072](https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=70230072) 

#### Pancreas-CT
A collection of 82 abdominal contrast enhanced 3D CT scans from 53 male and 27 female subjects. Seventeen of the subjects are healthy kidney donors scanned prior to nephrectomy.  The remaining 65 patients were selected by a radiologist from patients who neither had major abdominal pathologies nor pancreatic cancer lesions. [https://www.cancerimagingarchive.net/collection/pancreas-ct/](https://www.cancerimagingarchive.net/collection/pancreas-ct/)

#### QIN_Breast_DCE-MRI
A collection of breast dynamic contrast-enhanced (DCE) MRI data from a longitudinal study to assess breast cancer response to neoadjuvant chemotherapy. [https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=18514286](https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=18514286)

#### VICTRE
The VICTRE Trial is an open-source, in-silico clinical trial to investigate a new paradigm for evaluating digital breast tomosynthesis (DBT) as a replacement for digital mammography (DM). A total of 2986 subjects, with breast sizes and radiographic densities representative of a screening population and compressed thicknesses from 3.5 to 6 cm, were simulated and imaged on in-silico versions of DM and DBT systems using fast Monte Carlo x-ray transport. Images were interpreted by a computational reader detecting the presence of lesions. The in-silico trial (VICTRE) was designed to replicate a comparative trial from a previous regulatory submission. [https://www.cancerimagingarchive.net/collection/victre/](https://www.cancerimagingarchive.net/collection/victre/)

## BJC Bulk Clinical Data Sets
These clinical datasets have been retrieved from the BJC Hospital System Picture Archiving and Communication Systems (PACS) for analysis.

Currently available BJC Bulk Clinical Data Sets:

### Mammogram Data Sets

#### MAMMO-BJH-1
458,486 de-identified screening and diagnostic mammograms acquired in St. Louis at Barnes Jewish Hospital (BJH), the Center for Advanced Medicine and the BJH Mammography Van, for dates 01/01/2008-04/08/2020. IRB #201706058

#### MAMMO-MBMC
70,379 de-identified screening and diagnostic mammograms acquired in St. Louis at Missouri Baptist Medical Center (MBMC) for dates 01/03/2017-12/29/2023. 

#### MAMMO-BJNORTH
39,044 de-identified screening and diagnostic mammograms acquired in Northwest Healthcare and Christian Hospital for dates 01/03/2017-12/29/2023. 

### Computed Tomography Data Sets

#### ct_bjh_body
52,307 de-identified CTs covering the chest, abdomen, and pelvis acquired in St. Louis at Barnes Jewish Hospital (BJH) for the date range 11/23/2012-12/29/2023. 

# Requesting Datasets

Requests for listed datasets, additional datasets, or transfer of clinical data from PACs for research purposes can be made through the [Data Request Portal](https://wustl.az1.qualtrics.com/jfe/form/SV_6gPG6D5xbpgF5Pg).
