---
title: User Guide - Transferring Data to RCIF_CHPC using Globus
created: 2024-10-25
tags: []
permalink: /getting-started/globus/
author: dptru10
include: true
---
## Globus Overview

Globus is a secure, reliable data transfer service designed for research and scientific computing. It allows users to move large datasets between institutions, labs, and computing facilities. Key benefits include:

- Transfer files of any size reliably
- Automatic retry on failure
- Resume interrupted transfers
- Verify file integrity automatically
- Schedule transfers to run at specific times
- Receive notifications when transfers complete

## Prerequisites

Before starting, you'll need:

1. A WUSTL Key account
2. Appropriate permissions for the RCIF_CHPC storage systems
3. Administrator access on your local computer (for installing Globus Connect Personal)

## Using Globus Connect Personal

### Installation

1. Download Globus Connect Personal for your operating system from [Globus Connect Personal](https://www.globus.org/globus-connect-personal)
   - Available for Windows, macOS, and Linux
   - Choose the appropriate version for your system architecture (32-bit or 64-bit)

2. Install Globus Connect Personal:
   - **Windows**: Run the installer executable (.exe file)
   - **macOS**: Open the .dmg file and drag the application to Applications
   - **Linux**: Follow the distribution-specific installation instructions provided

### Setting Up Your Local Endpoint

1. Launch Globus Connect Personal
2. Sign in using your institutional credentials:
   - Click "Log In"
   - Search for "Washington University in St. Louis"
   - Use your WUSTL Key credentials to authenticate

3. Configure your endpoint:
   - Name your endpoint (e.g., "MyLaptop-GlobusEndpoint")
   - Choose which local directories to share
   - Select appropriate security settings

4. Keep Globus Connect Personal running during transfers

## Transferring Data to RCIF_CHPC

### Accessing the Web Interface

1. Log in to the [Globus web interface](https://app.globus.org)
   - Use your WUSTL Key credentials as before
   - Select "Washington University in St. Louis" as your organization

### Setting Up the Transfer

1. In the File Manager, configure your two endpoints:
   - Left panel: Select your local endpoint (created above)
   - Right panel: Add the RCIF_CHPC Collection
     - Collection name: RCIF_CHPC Collection (/ceph)
     - Endpoint: RCIF_CHPC
     - UUID: 4e6887fc-b5da-4283-93cb-dbfb7e2409d2

2. Navigate to source directory:
   - Use the left panel to browse your local files
   - Select files or folders you want to transfer

3. Navigate to destination directory:
   - Use the right panel to browse the RCIF_CHPC storage
   - Common destinations include:
     - `/ceph/chpc/home/<username>` (your home directory)
     - `/ceph/chpc/shared/<group>` (group shared space)

### Initiating and Managing Transfers

1. Select files/folders to transfer:
   - Click on items in the source panel
   - Use Ctrl/Cmd+click for multiple selections
   - Use Shift+click for range selections

2. Start the transfer:
   - Click the "Start" button
   - Optional: Set transfer parameters
     - Verify file integrity
     - Encrypt transfer
     - Set sync options
     - Enable email notifications

3. Monitor transfer progress:
   - View active transfers in the Activity panel
   - Check transfer status and statistics
   - Review any errors or warnings

### Transfer Best Practices

- Start with small transfers to test your setup
- Use sync options for large directory transfers
- Enable email notifications for long transfers
- Consider scheduling large transfers during off-peak hours
- Use labels to organize and track your transfers

## Key Information

- Endpoint: RCIF_CHPC
- UUID: 4e6887fc-b5da-4283-93cb-dbfb7e2409d2
- [View RCIF_CHPC Collection](https://app.globus.org/file-manager/collections/4e6887fc-b5da-4283-93cb-dbfb7e2409d2/overview)

## Troubleshooting

### Common Issues and Solutions

1. **Connection Problems**
   - Verify your internet connection
   - Ensure Globus Connect Personal is running
   - Check your firewall settings
   - Try restarting Globus Connect Personal

2. **Permission Errors**
   - Verify your RCIF_CHPC permissions
   - Check local folder permissions
   - Ensure you're logged in with correct credentials

3. **Transfer Failures**
   - Review error messages in the Activity log
   - Check available space in destination
   - Try reducing transfer size
   - Enable verification and retry options

### Performance Tips

- Use wired network connections when possible
- Close unnecessary applications during large transfers
- Monitor system resources during transfers
- Consider breaking very large transfers into smaller chunks

## For Assistance

If you encounter issues:

1. Check the [Globus documentation](https://docs.globus.org/)
2. Review our troubleshooting guide above
3. Visit our [support page](/support/) for additional help

Note: This collection is managed by Washington University in St. Louis. Ensure you have the necessary permissions before transferring data.