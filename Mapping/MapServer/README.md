Sample Final Server
===================

A number of people are having trouble with the P272 final. To help
you complete the course, I have created this simplified version
of the final. Please complete the assignment described below.
When you have the MapServer working, commit your code to the 
repository and start your server on your instance of EC2. Submit
the URL of your server, and I will test it.

Basics
------

If you are reading this on GitHub, and don't understand up to 
get a version of this code on your machine, do one of the following.
If you have never downloaded the sample final:

	git clone git://github.com/charliecalvert/SampleFinal.git

If you already have a copy of the sample final, and wish you had
the updated version: 

* Navigate to your local version of the repository and type:
* git pull

You can start this new version of the sample server on your home
machine by navigating to the MapServer folder and typing the 
following on Windows:

	node server.js

Then go to your browser and type: localhost:30025
	
You can also run this server on EC2 (Linux), you would type the following:

	nodejs server.js

Then go to your browser and type the following:

	<ElasticIP>:30025
	
For instance:

	54.111.11.11:30025
	
The Simplified Final
--------------------

This is a simplified version of the SampleFinal. In this version,
the MapServer program works with the CityLocation data out 
of the box. However, there are some incomplete or intentionally 
broken sections in the code. You can find the broken areas by 
looking for the signature *// Assignment .... For instance, see
line 98 in DataInput.js. 

The following is list of the broken places or changes:

* In DataInput, the insertCity method never gets called. Find
out why and fix the bug.
* In DataInput, the getNewCity method is incomplete. It only
fills in the CityName, and does not fill in the Description,
Latitude or Longitude. Complete the method.
* In DataInput, the *insertRecord* method is incomplete. Complete
the method
* In DataInput, the *saveCities* method is incomplete. Complete
the method. 

Grading
-------

As a general rule, submissions based on this version of the final
will make it impossible for a student to get an A. In some cases
they will be able to get an A-, but generally, the goal is to move
people who might have gotten a C, D or worse up to a more respectable
grade. 

If you were very close to completing the original final, but
only needed a few hints to finish up, simply tell me that, and I 
will grade your final accordingly. This is the option that 
could earn you an A-. 

If you have already submitted the final, and feel that you 
could improve your grade by making just a few changes based 
on this version of the SampleFinal, you can do that. In 
general, I will trust you to tell me the degree that you 
relied upon the code shown here in your answer.

If you are still feeling completely lost, then simply moving this
version of the final into your repository and submitting that will
at least save you from total disaster. If you can attempt to find
solutions to the problems posed in this second version of the final,
then please do so. If you can only describe what you think you 
should do in plain English, then do that. But if you can include 
some code, then please also include the code.

Extra Credit
------------

Another way to help improve your grade is to get the MapClient
working. This new version of the code includes only changes to
MapServer, and no changes to the Cordova based MapClient. If you
can get the MapClient working, then that will be extra credit.
In some cases, it might help borderline B/A- grades become an
A-.

I've explained in other places that the MapClient and MapServer
code is very similar, with changes needed primarily (exclusively?)
in the index.html file and in the URLs of certain ajax calls.

Questions?
----------

As always, I will continue to minitor the discussion area. Ask 
questions there and I will be glad to help. I can also help 
with questions asked in more private areas, if that is necessary. 
As always, participation in the general discussion is a factor 
that can help improve your grade, will private questions usually do 
not influence your grade.