const User = require('../../models/user').User;
const ObjectId = require('mongodb').ObjectId;


module.exports = function createUser(userData, callback) {
    console.log(userData.userId);
    User.findOne({_id: ObjectId(userData.userId)}).then((user) => callback(user));
};