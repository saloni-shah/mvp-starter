var express = require('express');
var bodyParser = require('body-parser');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var Movie = require('../database-mongo');
var helpers = require('./helpers');
var helpersDB = require('./helpersDB');
var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/movies', function (req, res) {
  helpers.fetchMoviesFromApi((error, moviesObj) => {
    if (error) { throw error }; 
    if(moviesObj) {
      let movies = moviesObj['results'];
      helpersDB.saveDataIntoDB(movies, (err, results) => {
        if (err) {  throw err }; 
      });
    }
  });
  helpersDB.getDataFromDB((err, results) => {
    if (err) { res.sendStatus(500); }
    res.send(results);
  });
});

app.post('/addmovie', function (req, res) {
  var moviename = req.body['name'];
  helpersDB.checkByNameinDB(moviename,(err, results) => {
    if (err) { throw err; }
    res.end();
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

