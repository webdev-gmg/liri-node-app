# liri-node-app

LIRI stands for : Language Interpretation and Recognition Interface
liri.js is a command-line app that takes in data and it will return data from 3 APIs
    -<li>Bandintown</li>
    -<li>OMDb</li>
    -<li>Spotify</li>

    
Use the following commands to use it
Type into the command line....

node liri.js concert-this "artist/band name here" and it returns concert information from Bandsintown.

node liri.js spotify-this-song "song name" to return song information from Spotify. If no song is entered, a hard coded default song will return.

node liri.js movie-this "movie name here" to return movie information from OMDb. If no movie is entered, it returns a default movie.

node liri.js do-what-it-says to return data stored in random.txt