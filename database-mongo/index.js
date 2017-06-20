var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var movieSchema = mongoose.Schema({
  videoId: Number,
  title: String,
  vote: Number,
  image: String,
  overview: String,
  release_date: Date,
  homepage: String,
  productionCompanies: Array,
  trailer: String
});

var Movie = mongoose.model('Movie', movieSchema);

var selectAll = function(callback) {
  Movie.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};
module.exports.Movie = Movie;
module.exports.selectAll = selectAll;