var express = require('express');
var db = require('../models');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res, next) {

  res.redirect('/');
});
