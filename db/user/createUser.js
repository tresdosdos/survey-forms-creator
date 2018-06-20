const User = require('../../models/user').User;

module.exports = function createUser(data, callback) {
    const userData = {
        userName: data.userName,
        password: data.password,
        rights: data.rights
    };
    let user = new User(userData);
    user.save().then(function (userData) {
        callback(userData);
    });
};