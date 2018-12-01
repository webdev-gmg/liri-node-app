require('dotenv').config();
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
//var fs = require('fs');
//var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var nodeArgs = process.argv;
var inputName = "";
for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        inputName = inputName + "+" + nodeArgs[i];
    }
    else {
        inputName += nodeArgs[i];

    }
}

if (process.argv[2] == 'movie-this') {
    movieDisplay(inputName);
}

else if (process.argv[2] == 'concert-this') {
    artistDisplay(inputName);
}

else if (process.argv[2] == 'spotify-this-song') {
    spotify(inputName);
}

else {
    console.log('Try Again');
}

function movieDisplay(movieName) {

    // Then run a request with axios to the OMDB API with the movie specified
    if (!movieName) {
        movieName = "Mr Nobody"
    }
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
        .then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("Rating: " + response.data.imdbRating);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            }
        );
}


function artistDisplay(artist) {
    // Then run a request with axios to the OMDB API with the movie specified
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(
            function (response) {
                for (i = 0; i < response.data.length; i++) {
                    console.log("Venue Name: " + response.data[i].venue.name);
                    console.log("Venue Location: " + response.data[i].venue.city);
                    console.log("Venue Date: " + response.data[i].datetime);
                }
            }
        );
}

function spotify(songName) {
    
    var spotify = new Spotify(keys.spotify)

    // var spotify = new Spotify({
    //     id: "d127e4dbccfb4c80aa9146b3c4154577",
    //     secret: "212bdd2c37674e9eaf8944d1bfc943fb"
    // });

    spotify
        .search({ type: 'track', query: songName, limit: 5 })
        .then(function (response) {
            for (i = 0; i < response.tracks.items.length; i++) {
                console.log("Artist: " + response.tracks.items[i].artists[0].name);
                console.log("Name: " + response.tracks.items[i].name);
                console.log("External Link: " + response.tracks.items[i].external_urls.spotify);
            }
        })
        .catch(function (err) {
            console.log(err);
        });

}


