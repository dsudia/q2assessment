var express = require('express');
var router = express.Router();

router.get('/movies', function(req, res, next) {
  res.render('movies/index');
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
    res.redirect('/');
  });
});

module.exports = router;
