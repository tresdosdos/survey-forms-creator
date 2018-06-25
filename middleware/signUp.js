const createUser = require('../db/user/createUser');
const jwt = require('../JWT');

module.exports = function (app) {
    app.post('/signUp', function (req, res) {
        if (!req.body) {
            console.log('400');
            return res.sendStatus(400);
        }
        const {userName, password} = req.body;
        createUser({
            userName: userName,
            password: password,
            rights: 'user'
        }, function (user) {
            user.hashedPassword = undefined;
            const token = jwt.getToken(user._id);
            const userData = {
                access_token: token,
                data: user
            };
            res.send(userData);
        });
    });
};