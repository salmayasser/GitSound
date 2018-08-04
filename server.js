
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
    passport = require('./config/passport'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose(),
    passport = passport(),
    app = express();

app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);