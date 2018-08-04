module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};
/*
The routing module function accepts a single argument called app,
 so when we call this function, we'll need to pass it the instance of the Express application.
 we do this in
  config express.js
*/