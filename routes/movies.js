var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/movies', function(req, res, next) {
  return knex('movies').select()
  .then(function(movies) {
    res.render('movies/index', {movies: movies});
  });
});

// Handle new movie form submission
router.post('/movies', function(req, res, next) {
  var movieData = req.body;
  return knex('movies').insert({
    director: movieData.director,
    title: movieData.title,
    rating: movieData.rating,
    description: movieData.description
  })
  .then(function() {
    res.redirect('/movies');
  });
});

module.exports = router;
