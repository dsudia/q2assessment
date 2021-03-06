var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/movies', function(req, res, next) {
  return knex('movies').select()
  .then(function(movies) {
    res.render('movies/index', {movies: movies});
  });
});

// GET new movie form
router.get('/movie/new', function(req, res, next) {
  res.render('movies/new');
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

// show individual movie page
router.get('/movie/:id', function(req, res, next) {
  var movieId = req.params.id;
  return knex('movies').where('id', movieId)
  .then(function(movie) {
    res.render('movies/show', {movie: movie[0]});
  });
});

// show edit form for movie
router.get('/movie/edit/:id', function(req, res, next) {
  var movieId = req.params.id;
  return knex('movies').where('id', movieId)
  .then(function(movie) {
    console.log(movie);
    res.render('movies/edit', {movie: movie[0]});
  });
});

// update movie on edit form submission
router.post('/movie/:id', function(req, res, next) {
  var movieId = req.params.id;
  var movieData = req.body;
  return knex('movies').update({
    director: movieData.director,
    title: movieData.title,
    rating: movieData.rating,
    description: movieData.description
  }).then(function() {
    res.redirect('/movie/' + movieId);
  });
});

// delete movie
router.post('/movie/delete/:id', function(req, res, next) {
  var movieId = req.params.id;
  return knex('movies').where('id', movieId).del()
  .then(function() {
    res.redirect('/movies');
  });
});

module.exports = router;
