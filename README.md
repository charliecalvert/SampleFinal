Sample Final
============

I recommend that you use this project as a sample structure for your final. 
In particular: 

- Put your Apache web site files in a ApacheSite folder
- Put your mapping project in a folder called Mapping

You will find that ApacheSite already contains most of what you need 
to solve to the problem of deploying your Apache web site. (Thanks
to Jason Marinacci and John Pennock who contributed to this 
particular solution.)

I have added some sample code to the Mapping directory, including
a rough start on putting Google Maps in PhoneGap. I have created
a simple client called MapClient, based on DataInputCordova01 and
GeoCode.v1. I have created a simple server based on DataInput01.

You should start the node server from the MapServer directory on EC2.
You can then deploy the MapClient project to an Android
device or to AndroidX86. The MapClient has a simple map on the 
first page, and on the second page some code that will talk to 
the node server.

The ApacheSite
==============

How to use the ApacheSite:

- Check to make sure Apache2 is installed
- Clone this Repository on your EC2 machine
- Navigate to the CopyWebSite directory
- Type: *sudo ./RunDeploy.sh*

This gives you most of what you need. To finish up, take our
SetupLinux.bat (or SetupLinux.sh if you are on the Mac) and
convert it so that it will deploy your entire web site from
a location on Windows to a new instance of a Linux server.
The SetupLinux.* files are in JsObjects\Utilities\SetupLinux.
Your web site should be stored in your private repository, which
is based on this project. You can then teach your script to pull
it down onto the Linux server. Since your repository is a private,
you will need to load an SSH key. The code for doing that is
in the ApacheSite/ClonePrivateRepository directory found in 
this repository. 

