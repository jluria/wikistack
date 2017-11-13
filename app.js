var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

const app = express();

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, '/public')));
// app.use('/', routes);

app.get('/', function(req, res, next) {
  res.render('index');
});

app.listen(1337, function() {
  console.log('The collective is listening on port 1337:');
});
