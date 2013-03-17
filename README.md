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

Right now, the Mapping directory is mostly empty, but I will add 
some files to it. One way to think about what should be in that
folder:

- A directory containing something like the PresidentJSON project
- A directory containing something like the DataInput01 project

You will start the node server in the DataInput01 project on EC2.
You will deploy the PresidentJSON-like project to an Android
device or to AndroidX86. The PresidentJSON project will talk
to the node server.

NOTE: The names of your project will likely be different. For instance
they might be called MapServer and MapClient.

The ApacheSite
==============

How to use the ApacheSite:

- Check to make sure Apache2 is installed
- Clone this Repository on your EC2 machine
- Navigate to the CopyWebSite directory
- Type: *sudo ./RunDeploy.sh*


