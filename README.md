# liri-node-app

LIRI stands for : Language Interpretation and Recognition Interface
liri.js is a command-line app that takes in data and it will return data from 3 APIs
    <li>Bandintown</li>
    <li>OMDb</li>
    <li>Spotify</li>

Other modules used : 
<li>axios</li>
<li>fs</li>
<li>moment  </li>  


<b>Instructions to Run the app</b>

Use the following commands to run the application
Type in the terminal

1. node liri.js concert-this "artist/band name here" and it returns concert information from Bandsintown. 
    eg : node liri.js concert-this Arianna Grande

2. node liri.js spotify-this-song "song name" to return song information from Spotify. 
    eg: node liri.js spotify-this-song Incomplete

3. node liri.js movie-this "movie name here" to return movie information from OMDb. 
    eg:node liri.js movie-this Frozen
                  
   (Note : If no movie is entered, it returns a default movie.)


4. node liri.js do-What-it-says to return data stored in random.txt
    eg:node liri.js do-What-It-Says

![Spotify](https://github.com/webdev-gmg/liri-node-app/blob/master/images/spotify.jpg?raw=true)

![Bands](https://github.com/webdev-gmg/liri-node-app/blob/master/images/bands.png?raw=true)

![Movies](https://github.com/webdev-gmg/liri-node-app/blob/master/images/movie.png?raw=true)

![Random](https://github.com/webdev-gmg/liri-node-app/blob/master/images/dowhatitsays.png?raw=true)
