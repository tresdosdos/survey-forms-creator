const comparePasswords = require('../db/user/comparePasswords');
const jwt = require('../JWT');

module.exports = function (app) {
    app.post('/signIn', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        console.log(req.body.token);
        if (req.body.token) {
            console.log(jwt.checkToken(req.body.token));
        } else {
            res.send('lul');
        }
        // const {userName, password} = req.body;
        // comparePasswords({userName: userName, password: password}, function (err, isMatch, user) {
        //     if (err) res.status(404).send();
        //     else{
        //         if (isMatch){
        //             console.log(user._id);
        //             const userData = {
        //               userName: user.userName,
        //               userId: user._id
        //             };
        //             const token = jwt.getToken(userData);
        //             console.log(token);
        //             res.send(token);
        //         }
        //         else{
        //             res.status(403).send();
        //         }
        //     }
        // });
    });
};