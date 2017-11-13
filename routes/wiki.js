var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

module.exports = router;

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.get('/add', function(req, res, next) {
  res.render('addPage');
});

router.post('/', function(req, res, next) {
  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });
  page.save()
  .then(function (savedPage) {
    res.redirect(savedPage.route);
  })
  .catch(function (error) {
    console.error(error);
  });
});

router.get('/:urlTitle', function(req, res, next) {
  Page.findAll({
    where: {
      urlTitle: req.params.urlTitle
    }
  })
  .then(function(foundPage) {
    res.render('wikipage', {
      title: foundPage[0].title,
      pageContent: foundPage[0].content,
      urlTitle: foundPage[0].urlTitle
    });
  })
  .catch(function(error) {
    console.error(error);
  });
});
