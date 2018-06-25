const comparePasswords = require('../db/user/comparePasswords');
const getUser = require('../db/user/getUser');
const jwt = require('../JWT');

module.exports = function (app) {
    app.post('/signIn', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        if (req.body.token) {
            const userId = jwt.checkToken(req.body.token).userId;
            getUser(userId, function (user) {
                user.hashedPassword = undefined;
                res.send(user);
            });
        } else {
            const {userName, password} = req.body;
            comparePasswords({userName: userName, password: password}, function (err, isMatch, user) {
                if (err) res.status(404).send();
                else{
                    if (isMatch){
                        const token = jwt.getToken(user._id);
                        const userData = {
                            access_token: token,
                            data: user
                        };
                        userData.data.hashedPassword = undefined;
                        res.send(userData);
                    }
                    else{
                        res.status(403).send();
                    }
                }
            });
        }
    });
};