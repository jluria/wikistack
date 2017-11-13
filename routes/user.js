var express = require('express');
var db = require('../models');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res, next) {
  db.User.findAll({})
  .then(function(){
    res.redirect('/');
  })
  .catch(function(error){
    console.error(error)});
});

router.get('/:user', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  res.redirect('/');
});

router.put('/:user', function(req, res, next) {
  res.redirect('/');
});

router.delete('/:user', function(req, res, next) {
  res.redirect('/');
});
