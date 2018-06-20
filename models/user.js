const mongoose = require('../db');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const schema = mongoose.Schema(
    {
        userName:{
            type: String,
            unique: true,
            required: true
        },
        hashedPassword:{
            type: String,
            required: true
        },
        rights:{
            type: String,
            required: true
        },
        forms:{
            type: Object,
            required: false
        }
    }
);

schema.methods.encryptPassword = function (password) {
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    return bcrypt.hashSync(password, salt);
};

schema.virtual('password').set(function (password) {
    this.hashedPassword = this.encryptPassword(password);
});

schema.methods.comparePasswords = function (password, cb) {
    bcrypt.compare(password, this.hashedPassword, function(err, isMatch) {
        if (err) return cb(err);
        return cb(null, isMatch);
    });
};

exports.User = mongoose.model('User', schema);