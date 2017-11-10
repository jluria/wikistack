var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use('/', routes);
app.use(morgan('dev'));

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static('./public'));

app.get('/', function(req, res, next) {
  res.send('./views/index.html');
});

app.listen(1337, function() {
  console.log('The collective is listening on port 1337:');
});

