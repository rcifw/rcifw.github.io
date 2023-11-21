---
title: Connect
created: 2023-03-31T09:22:22 (UTC -04:00)
last_modified_at: 2023-08-24T09:30:21 (UTC -05:00)
tags: []
source: https://sites.wustl.edu/chpc/for-users/frequently-asked-questions-faq/connecting-to-login-nodes-1/
author:
---

### What is the hostname for the login nodes of the cluster?

We have two login nodes, namely, `login01` and `login02`.

To connect to the login node, you simply connect to `login3.chpc.wustl.edu`, an alias for the hostname of the login nodes. If you ever have trouble connecting to `login3.chpc.wustl.edu`, you can directly connect to either `login3-01.chpc.wustl.edu` (`128.252.185.7`) or `login3-02.chpc.wustl.edu` (`128.252.185.8`)

### How do I connect to these login nodes?
If you are on the WashU network, you can directly connect to the cluster (note: if NOT on the WashU cluster you will need to [setup 2-factor authentication](#how-can-i-set-up-2-factor-authentication-on-my-personal-device) and [setup and start the WashU VPN](#how-can-i-access-the-cluster-from-off-campus))

The cluster is Linux-based (see [training and support](training-and-support.md) if you are interested in programs to get familiarized with Linux). The easiest way is to SSH using your favorite terminal application ("mobaxterm" is one choice for Windows, and Terminal is built in to MacOS - another excellent cross-platform option is "Visual Studio Code", which not only has a multi-terminal window built in but also has a great set of tools for working with source code and containers). For example:
* For _**Windows OS user**_, you can use MobaXterm to launch a terminal window, and then click “Start local terminal”.
* For _**Mac OS user**_, to launch a terminal window, you can go to the Finder window and select: Applications -> Utilities -> Terminal.
* For _**Linux OS user**_, you can choose either GNOME or KDE windows manager to launch a terminal window. If choosing GNOME, start in the upper-left corner of the screen and select:
Applications -> System Tools -> Terminal. If choosing KDE, start in the lower-left corner and select: Applications -> Utilities -> Terminal.

1. The syntax to connect is then `ssh -Y USERNAME@MACHINE`, where `USERNAME` is your **WUSTL Key ID** (_not your WUSTL email_), and `MACHINE` is `login3.chpc.wustl.edu` or one of the addresses or IP addresses above, e.g.:
```
[me@my_local_machine ~]$ ssh -Y me@login3.chpc.wustl.edu
```
2. You will be prompted to enter a password ... or not if you [setup SSH keys](#entering-my-password-to-login-every-time-is-so-annoying--how-can-i-connect-to-the-cluster-without-entering-the-password). If you are using password authentication, enter the your WUSTL Key password and hit return. Even though you can’t see what you’re typing and the cursor isn’t moving,
your keystrokes are registering.
3. Once connected to the cluster, the prompt will change to indicate that you are on `login01` or `login02` in your home (`~`) directory, e.g.:
```
[me@login01 ~]$
```
4. Take a look around your home directory. Using ls command, you can find that no files exist in either your home or your scratch directory:
```
[me@login01 ~]$ ls -lh ~/
total 0
[me@login01 ~]$ ls -lh /home/me
total 0
```

### How can I set up 2-factor authentication on my personal device?

The university requires users to enable 2-factor authentication (2FA) on their personal devices to connect to campus network. This is a prerequisite to connect to the login node while you are off campus.

Firstly, you need to install the **Duo** app on your personal device either through Google Play if you are using Android devices or through Apple Store if you are using Apple devices. After that, you can enroll in WashU 2-step authentication and create a 2FA account. Finally, you would link your 2FA account to Duo app on your personal device.

The detailed instruction can be found [here](https://it.wustl.edu/items/2fa-enrollment/).

### How can I access the cluster from off campus?

In order to connect to the login nodes from off campus, you need to establish the connection via virtual private network (VPN):
1. You should have 2-factor authentication (2FA) enabled on your mobile device.
2. Download and install a VPN software on your local computer from [here](https://msvpn.wusm.wustl.edu/). You would be required to log in with your WUSTL key username as the username and WUSTL key password as the password.
3. After logging in, you can follow the steps to download and install cisco VPN software.
4. Start the “Cisco Anyconnect Secure Mobility Client” on your local computer.
5. This should bring up a window to ask you to choose which VPN you would like to connect to. The default should be `msvpn.wusm.wustl.edu`.
6. Enter your WUSTL key username as the username and WUSTL key password as the password, and enter the 6-digit 2FA code from the Duo app installed on your mobile device for the authentication method (in the last line) or use "push" to initiate a push authorization to your mobile device.
7. If everything is correct, a new window would pop up. You should be asked to confirm the connection by clicking the “Accept” button.
8. Once the “Cisco Anyconnect Secure Mobility Client” shows an icon of a green tick on the upper-right corner of a lock along with the message “VPN: Connected to msvpn.wusm.wustl.edu”, the VPN connection is successfully established. At this point, you can access the cluster from off campus.

Users have reported that if you are connecting from a Linux computer after 11/20/23, you need to set your useragent string to something starting with AnyConnect to be directed to the new SSO process. If you use an old useragent string, the gateway will repeatedly ask you for your username and password rather than giving you an error. For example: `sudo openconnect --protocol=anyconnect --useragent="AnyConnect-compatible OpenConnect VPN Agent" https://msvpn.wusm.wustl.edu/`

### Entering my password to login every time is so annoying ... How can I connect to the cluster without entering the password?

Luckily, a more secure and convenient way to log into the cluster is using a SSH key-pair! SSH key-pairs can be more secure, as they are less vulnerable to common brute-force password attacks ... and more convenient. So yes, you can have your access cake and eat it too ... almost: If the user’s workstation were compromised, the malicious user could then connect to the CHPC without needing a password. All things considered, it is much more difficult to access a physical machine than sitting somewhere else picking away at passwords, so we suggest this method.

An SSH key-pair consist of a public key and a private key. You can place the public key on any server, and then connect to the server using an SSH client with access to the private key. When the public and private keys match up, the SSH server grants access without the need for a password. 

But enough explanation, let's get to making one of these and getting you connected. You can follow [these instructions from our friends at Github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to generate your key and add it to your ssh-agent. Basically:
* For Linux OS or MacOS, you simply need to run “ssh-keygen” command in a terminal window. You can just hit enter to accept all of the defaults.
* For Windows OS, you can run the command in mobaxterm. An example of generating a rsa-type key pair in mobaxterm is shown as below:

```
[/home/mobaxterm]$ ssh-keygen -t rsa

WARNING:

You should not store anything in MobaXterm HOME directoy (/home/mobaxterm): with your current settings, this folder is not "persistent", so it will be cleared at each MobaXterm restart.

If you want to set a "persistent" HOME directory which will not be cleared at each MobaXterm startup, go to MobaXterm settings window and choose a folder in which to store MobaXterm home files.

Generating public/private rsa key pair.
Enter file in which to save the key (/home/mobaxterm/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/mobaxterm/.ssh/id_rsa.
Your public key has been saved in /home/mobaxterm/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:6nr9HNiA+xpdXprAcEedyd0rG0WTTB6XJCQq7MUKhkY XingHuang@DESKTOP-2E9N43H
The key's randomart image is:
+---[RSA 2048]----+
|   E      .+.*=B+|
|  . . . ... * +==|
|   o o.o.+.   ...|
|  . . o=+.   o . |
|      .oS . . +  |
|       + B + .   |
|      +.o *      |
|     ..o.. .     |
|    .oo...o      |
+----[SHA256]-----+
```

The next step would be to place the public key on the login nodes.

```
[/home/mobaxterm]$ ssh-copy-id me@login3-01.chpc.wustl.edu
/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
stty: standard input: Inappropriate ioctl for device

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'me@login3-01.chpc.wustl.edu'"
and check to make sure that only the key(s) you wanted were added.
```

Alternatively, the user could manually edit the ~/.ssh/authorized\_keys and add a copy of their public key.

Be aware, SSH is very sensitive to file permissions. If the permissions would allow another user to edit files under ~/.ssh, SSH will silently fail using key-pairs and revert back to password authentication. For this reason, do the following:
```
chmod -R 600 ~/.ssh
```

If you have any questions or problems, please contact us!
