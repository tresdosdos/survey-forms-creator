const User = require('../../models/user').User;
const jwt = require('../../JWT');

module.exports = function createUser(data, callback) {
    const userData = {
        userName: data.userName,
        password: data.password,
        rights: data.rights
    };
    let user = new User(userData);
    user.save().then(function (user) {
        userData.token = jwt.getToken(user._id);
        callback(userData);
    });
};