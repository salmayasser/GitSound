var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        index: true
      },
      username: {
        type: String,
        trim: true,
        unique: true
    },
    password: String,
    provider: String,
    providerId: String,
    providerData: {},
    todos: {}//we will use this in the next tutorial to store TODOs
});


UserSchema.pre('save',
    function(next) {
        if (this.password) {
            var md5 = crypto.createHash('md5');
            this.password = md5.update(this.password).digest('hex');
        }

        next();
    }
);

UserSchema.methods.authenticate = function(password) {
    var md5 = crypto.createHash('md5');
    md5 = md5.update(password).digest('hex');

    return this.password === md5;
};

UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    var _this = this;
    var possibleUsername = username + (suffix || '');

    _this.findOne(
        {username: possibleUsername},
        function(err, user) {
            if (!err) {
                if (!user) {
                    callback(possibleUsername);
                }
                else {
                    return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
                }
            }
            else {
                callback(null);
            }
        }
    );
};



mongoose.model('User', UserSchema);
/*
In order to use the User model, you need to include this file by adding the following require in the config/mongoose.js file (just before the return db; statement):
*/
/*provider property - the strategy used to register the user
providerId property - the user identifier for the authentication strategy
providerData property - you'll use it later to store the user object retrieved from OAuth providers*/ 