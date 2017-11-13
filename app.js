var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var models = require('./models');
var routes = require('./routes/index');

const app = express();

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, '/public')));
// app.use('/', routes);

app.use('/', routes);

models.db.sync({force: true})
.then(function() {
  app.listen(1337, function() {
    console.log('The collective is listening on port 1337:');
  });
})
.catch(function(error) {
  console.error(error); // Should it be .catch(console.error); instead of CB?
});
