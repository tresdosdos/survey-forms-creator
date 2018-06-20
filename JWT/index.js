const jwt = require('jsonwebtoken');

const jwtSecret = 'Hello$1';

exports.getToken = function(userData) {
    return jwt.sign(
        {
            userName: userData.userName,
            userId: userData.userId
        },
        jwtSecret,
        {
            algorithm: 'HS256',
            expiresIn: 1500
        }
    );
};

exports.checkToken = function(token) {
    console.log(token);
    return jwt.verify(token, jwtSecret, function (err, decoded) {
        if (err) {
            return false;
        }
        if (decoded) {
            return decoded;
        }
    })
};