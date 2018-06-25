const User = require('../../models/user').User;
const ObjectId = require('mongodb').ObjectId;


module.exports = function createUser(userId, callback) {
    User.findOne({_id: ObjectId(userId)})
        .then((user) => callback(user))
        .catch((err) => console.log(err));
};