var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

module.exports = router;

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  var page = Page.build({
    title: req.body.title,
    content: req.body.content,
    urlTitle: urlTitleConverter(req.body.title)
  });

  function urlTitleConverter(str){
    return str.replace(/\s/g, '_').toLowerCase();
  }
  console.log(page.urlTitle);
  page.save()
  .then(function () {
    res.redirect('/');
  })
  .catch(function (error) {
    console.error(error);
  });
});

router.get('/add', function(req, res, next) {
  res.render('addPage');
});
