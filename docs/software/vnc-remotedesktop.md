---
created: 2023-03-31T09:27:45 (UTC -04:00)
tags: []
source: https://sites.wustl.edu/chpc/resources/software/vnc/
author:
---

The Virtual Network Computing (VNC) home page is [https://www.realvnc.com/en/](https://www.realvnc.com/en/).

> [!NOTE]
> In order to run remote desktop on the login node, you need to make that request to us so that we can grant that permission for you. We would put an entry in the VNC server user database for you and you would get an exclusive port to connect. The port number would be ranging from 5903 to 5900+N. You should note down the port exclusively assigned to you and use that to connect.

You would first need to create a password for VNC connection on both login nodes by running “vncpasswd” command:

```
[me@login01 ~]$ vncpasswd
Password:
Verify:
Would you like to enter a view-only password (y/n): n
A view-only password is not used
```

This is the password you would need to establish the connection via VNC client installed on your local computer.

_**After you have completed the above step, contact the system administrator and a port number would be assigned to you so that the VNC service is enabled on the login nodes.**_

Then, you can download and install the version of VNC that fits your computer OS from [https://www.realvnc.com/en/connect/download/viewer/](https://www.realvnc.com/en/connect/download/viewer/).

After installing the client , you can establish the connection to the login node using ssh port-forwarding. An example of doing this is shown as below, and please remember to replace both port numbers before and after “localhost” with your exclusively assigned port number.

```
[other_me@my_local_machine ~]$ ssh -L 5902:localhost:5902 me@login3.chpc.wustl.edu
```

After logging, you can start the VNC client on your local computer. ![[vnc_client.jpg]]

Click on “GOT IT” button, and then click on “File” at the header, and choose “New connection”. ![[vnc_general_properties.jpg]]

After filling out the server (replace the port number with the one exclusively assigned to you) and username (your username to log into the cluster), click “OK” button and you would see a “computer display” shaped icon for you to connect would appear. ![[vnc_computer_display.jpg]]

Right click on the icon and choose “Connect”, that would bring you to a new screen asking your confirmation to connect. ![[vnc_connection_confirmation.jpg]]

Click on “Continue” button, and you would be prompted to enter the password for the connection. ![[vnc_password.jpg]]

The password would be the one you enter after running “vncpasswd”. Then, click on “OK” button. After you see the following interface, you are connected. ![[vnc_connected.jpg]]

Press “Enter” key on your keyboard to log in. This time, the password is the one you would use to log into the login node. ![[vnc_login.jpg]]

If you see the following screen after click on “Unlock” button, you are officially connected to the login node via the remote desktop service. ![[vnc_unlock.jpg]]

You can click on the “Activities” icon at the top-left corner of this screen to do various operations. ![[vnc_activities.jpg]]

If you need to access your /scratch folder, you can first click on “Files” icon within the left panel (similar to what’s shown in the above image) after clicking “Activities” icon. It would bring up a new window. Then, click on “Other Locations”, it would show a folder named “Computer”. ![[vnc_file_explorer.png]]

Click on the folder named “Computer”, it would show all folders mounted on the login node, among which you can find a folder named “scratch”. ![[vnc_file_scratch.png]]

Click on the folder named “scratch”, it would show all user folders, find your own and click on it, you would be able to see all files in your scratch space. ![[vnc_file_scratch2.png]]
