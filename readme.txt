

Instruction to install Phonegap (http://phonegap.com/install/)

Installing Android platform(http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html#Android%20Platform%20Guide)

*Apache ant (i used 1.8.4) 
*Java JDK (i used jdk1.7.0_07)
*Android SDK
*All Path variables has been set (JAVA_HOME, ANT_HOME)



After environment has been installed
*Install to app for android apps (varies with platform)
	1.cd into QREvent directory 
	2.Phonegap build android 
	3.Phongap install android




Below are steps in creating a new app from scratch 

Creating environment 
	1.phonegap create SeniorProject com.QR.Scanner QRScanner
	2.Directory being created – SeniorProject
	3.Reverse domain style identifier - com.QR.Scanner
	4.Application Display Text – QRScanner
Phonegap build android 
	1.Builds platform for android incorporation 
	2.Visit phonegap.com for full list of platform compadible
Cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
	1.Provides access to the devices default camera application
	2.phonegap local plugin add https://github.com/jonathannaguin/BarcodeScanner
modify index.html 	
	1.insert code provide below code 1
Install to app for android apps (varias with platform)
	1.Phonegap build android 
	2.Phongap install android