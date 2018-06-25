const jwt = require('jsonwebtoken');

const jwtSecret = 'Hello$1';

exports.getToken = function(userId) {
    return jwt.sign(
        {
            userId: userId
        },
        jwtSecret,
        {
            algorithm: 'HS256',
            expiresIn: 1500
        }
    );
};

exports.checkToken = function(token) {
    return jwt.verify(token, jwtSecret, function (err, decoded) {
        if (err) {
            return false;
        }
        if (decoded) {
            return decoded;
        }
    })
};