var request = require('request');
module.exports.fetchMoviesFromApi = function(cb){
  var options = {
    url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=31360dc99c8ea3b0c7d0867ec4c59884&language=en-US',
    headers: {
      'User-Agent': 'request'
    }
  };
 
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(JSON.parse(body));
      body = JSON.parse(body);
      //console.log(body);
      cb(null, body);
    } else {
      cb(error);
    } 
  }
  request(options, callback);
}

module.exports.fetchMovieDetailsFromApi = function(videoId,cb){
  var options = {
    url: `https://api.themoviedb.org/3/movie/${videoId}?api_key=31360dc99c8ea3b0c7d0867ec4c59884&language=en-US`,
    headers: {
      'User-Agent': 'request'
    }
  };
 
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(JSON.parse(body));
      body = JSON.parse(body);
      //console.log(body);
      cb(null, body);
    } else {
      cb(error);
    } 
  }
  request(options, callback);
}

module.exports.fetchMovieVideosFromApi = function(videoId,cb){
  var options = {
    url: `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=31360dc99c8ea3b0c7d0867ec4c59884&language=en-US`,
    headers: {
      'User-Agent': 'request'
    }
  };
 
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(JSON.parse(body));
      body = JSON.parse(body);
      //console.log(body);
      cb(null, body);
    } else {
      cb(error);
    } 
  }
  request(options, callback);
}
