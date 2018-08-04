var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function() {
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne(
            {_id: id},
            '-password',
            function(err, user) {
                done(err, user);
            }
        );
    });

    require('./strategies/local.js')();
};




/*With passport.serializeUser() and passport.deserializeUser() methods you defined how Passport will handle user serialization. When a user is authenticated, Passport will save its _id property to the session. When the user object will be needed Passport will use the _id property to fetch the user object from the database. Also, you included the local strategy
configuration file so once you load the Passport configuration file in server.js, it then loads its strategies configuration file. The -password option is set so that Mongoose doesn't fetch the password field.*/ 