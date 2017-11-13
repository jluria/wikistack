var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:1337/wikistack');

const Page = sequelize.define('page', {
  title: {
    type: Sequelize.STRING
  },
  urlTitle: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.BOOLEAN
  }
});

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});
