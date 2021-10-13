# guitar-tab-app
Guitar tab database application

An application to store and retrieve guitar tabs.

At a minimum the application will:
Store and retrieve some type of image (pdf, doc, etc) containing guitar tablature.

Guitar tab records can be searched by:
Title
Difficulty (hard-coded: easy, moderate, difficult)
Artist (relational table)
Genre (hard-coded)
Rating (hard-coded 1 through 5)
Tuning (relational table)

![image](https://user-images.githubusercontent.com/8105789/136422960-a268a5c8-2425-4263-9698-eea08958460d.png)


![27F4EBE2-0763-434C-8BBC-CFFEB5F6679C_1_201_a](https://user-images.githubusercontent.com/8105789/136424539-fd419bbd-0ffc-49a5-bb0a-c47d011f39a0.jpeg)


The lesson links section is a stretch goal to add a table with links to online lessons for the selected tablature.

The Chord Shapes/Finder is a stretch goal to open a page with the chord shapes required for the tab.  Initially, I will just put a link to a chord finder website.


![image](https://user-images.githubusercontent.com/8105789/136424941-311adb30-f4fd-4468-ae5e-0ac715fe3116.png)

The LessonLinks table is for a stretch goal.

![Screen Shot 2021-10-09 at 5 32 38 PM](https://user-images.githubusercontent.com/8105789/136675330-76f7cb9d-9f8f-49f3-876f-0267753985bd.jpeg)

The application will not require a user login except for the admin.  The user table will only be used for admin logon initially.  Possibly a stretch goal could be to allow optional login for non-admin accounts to enable some personalization and a dynamic rating system.

Admin screen:

![Screen Shot 2021-10-09 at 4 11 51 PM](https://user-images.githubusercontent.com/8105789/136674021-52e482fd-0da7-4fd5-9264-038f7fb1a942.jpeg)

## Technologies
* Node.js
* Postgres
* Express
* EJS

### Notable HTML tag
Since I decided to rely on PDF files for most of the tablature, I chose the iframe HTML tag to display the tabs.  While I've found that iframe does not handle Word documents (the tab file downloads to the browser), in some cases it allows me to leverage capabilities from other websites.  Specifically, tabs from the GuitarETab website.  The Gimme Shelter tab is a good example.  That tab record is a link to the GuitarETab website and allows the user to turn on the website's Autoscroll feature which scrolls through the tab at variable speeds.

## User stories - Jay’s Fabulous Guitar Tab Database

I am a ________
	I want to ________
		So I can __________


I am a guitar player
	I want to look at guitar tabs
		So I can bug everyone in my house

I am a guitar player
	I want to create a user account
		So I can log into the application

I am a player
	I want to learn a song in the correct tuning
		So the song sounds better

I am a player
	I want to search songs by tuning
		So I can play songs in a particular tuning

I am a player
	I want to search songs by asequelizertist
		So I can learn a song by a particular artist

I am a player
	I want to search song by genre
		So I can find a song that fits the mood

I am a player
	I want to search song by level of difficulty
		So I can match to skill level

I am a player
	I want to identify favorites
		So I don’t have to search for them

I am a player
	I want to find songs with video lessons
		So I can learn them better





I am an application admin
	I want to add guitar tab records to the application
		So I can increase the database size

I am an application admin
	I want to add records to YouTube table
		So I can provide video demos of tabs
    
    

## Resources

Open tunings graphics from https://www.guitar-chord.org/alternate-tunings.html

Scrolling tabs from GuitarETabs.com

