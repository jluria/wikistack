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
    content: req.body.content
  });
  page.save()
  .then(function (data) {
    res.redirect('/wiki/' + data.urlTitle);
  })
  .catch(function (error) {
    console.error(error);
  });
});

router.get('/add', function(req, res, next) {
  res.render('addPage');
});

router.get('/:urlTitle', function(req, res, next) {
  Page.findAll({
    where: {
      urlTitle: req.params.urlTitle
    }
  })
  .then(function(data) {
    res.render('wikipage', {
      title: data.title,
      pageContent: data.content,
      urlTitle: data.urlTitle
    });
  })
  .catch(function(error) {
    console.error(error);
  });
});
