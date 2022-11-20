+--------------------------+
|Author: Mushfique Rahman  | 
|20 Nov, 2022              | 
+--------------------------+


A simple expressJS based web server
By default it will listen to port 5000. If you need to change the listening port, please edit the PORT constant on index.js.

The server has two endpoints users can access

1. localhost:5000 which is the home page and just render hello world

2. localhost:5000/friendly-breeds - this will return the JSON of the top 5 friendly cat breeds based on the "thecatapi.com" site

To run the server
1. run [npm install] - it will install all the necessary npm modules

2. run [node index.js] - this will turn the server on and the server should be listening to port 5000 / whichever the port being assigned to on index.js

3. access the endpoints from the browser
