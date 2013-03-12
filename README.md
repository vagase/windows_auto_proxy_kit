REQUIREMENTS
------------

1. [Python]("http://www.python.org/download/releases/2.7.3/")
2. Remote SSH server and authorization to login.


HOW TO USE
------------

1. 	Change user name and password of SSH server in *"_internal/__start_ssh.cmd"* file  

2. 	Configure system proxy: *"Chrome->Settings->Advanced->Change Proxy Setting" - "Connections->Lan settings"*   
	Check *"Automatically detect settings"*  
	Check *"User automatic configuration script"* and  input address: *"http://localhost:**12345**/auto_proxy.pac"*  
	Check *"Use a proxy server for you lan..."* and *"Bypass proxy server ..."*. Then click *"Advanced"*, uncheck *"User the same proxy server for all protocols"*. Clean *"HTTP, Secure, FTP "* fields, fill *"Sockes"* with *"localhost:**10000**"*.

3. 	Double Click **Start.cmd** to start. Click **Stop.cmd** to stop manually.


####*NOTES*
Edit *"_internal/auto_proxy.pac"* to change your proxy list if you like.
