var Movie = require('../database-mongo');
var helpers = require('./helpers');
module.exports.saveDataIntoDB = function(movies,cb) {
  movies.forEach(value => {
    var videoId = value['id'];
    var title = value['title'];
    var vote = value['vote_average'];
    var image = value['poster_path'];
    var overview = value['overview'];
    var releaseDate = value['release_date'];
    var homepage, productionCompanies,trailer;
    helpers.fetchMovieDetailsFromApi(videoId, (error, moviedetailObj) => {
      if(moviedetailObj !== undefined) {
        homepage = moviedetailObj['homepage'];
        productionCompanies = moviedetailObj['production_companies'];
        trailer = '';
        var queryString = { videoId: videoId, title: title, vote:vote, image:image, overview:overview, release_date:releaseDate, homepage:homepage, productionCompanies:productionCompanies, trailer:trailer };
        Movie.Movie.find({videoId: videoId}, function (err, record) {
          if (err) {
            cb(err,null);
          }
          if(record.length === 0){
            Movie.Movie.create(queryString, function (err, doc) {
              if (err) {
                cb(err,null);
              }
              console.log("movies saved successfully in database.......");
              cb(null,"movies saved successfully in database.......")
            });
          } 
        });
      }
    });
    helpers.fetchMovieVideosFromApi(videoId, (error, movieVideoObj) => {
      if(movieVideoObj && movieVideoObj.results) {
        trailer = movieVideoObj['results'][0]['key'];
        console.log(trailer);
        Movie.Movie.update({ videoId: videoId }, { $set: { trailer: trailer }}, function (err, doc) {
          if (err) {
            cb(err,null);
          }
          console.log("movies trailer saved successfully in database.......")
          cb(null,"movies trailer saved successfully in database.......")
        });
      }
    });
  });
}

module.exports.getDataFromDB = function(cb) {
  Movie.selectAll((err,results) => {
    if(err) {
      console.log('errrooooorr');
      cb(err,null);
    }
    cb(null,results);
  });
}

module.exports.checkByNameinDB = function(moviename,cb) {
  Movie.Movie.find({title: moviename}, function (err, record) {
    if (err) {
      cb(err,null);
    }
    if(record.length === 0){
      var queryString = { videoId: Math.floor(Math.random() * 1000) , title: moviename, vote:0, image:'', overview:'It should be nice movie I guesss...', release_date:'', homepage:'', productionCompanies:[], trailer:'' };
      Movie.Movie.create(queryString, function (err, doc) {
        if (err) {
          cb(err,null);
        }
        console.log("custom movie saved successfully in database.......");
        cb(null,"custom movie saved successfully in database.......")
      });
    } 
  });
}