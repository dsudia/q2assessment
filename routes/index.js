var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'My Movie Database'});
});

// GET new movie form
router.get('/movie/new', function(req, res, next) {
  res.render('movies/new');
});

// Handle new movie form submission
router.post('/movies', function(req, res, next) {
  var movieData = req.body;
  return knex('movies').insert({
    director: ,
    title: ,
    rating: ,
    description: });
});

module.exports = router;
