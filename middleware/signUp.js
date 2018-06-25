const createUser = require('../db/user/createUser');

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
            user.password = undefined;
            res.send(user);
        });
    });
};