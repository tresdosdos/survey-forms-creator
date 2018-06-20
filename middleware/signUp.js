const createUser = require('../db/user/createUser');

module.exports = function (app) {
    app.post('/signUp', function (req, res) {
        if (!req.body) {
            console.log('400');
            return res.sendStatus(400);
        }
        const {userName, password} = req.body;
        console.log(userName + ' ' + password);
        createUser({
            userName: userName,
            // questions: [
            //     {
            //         title: 'How are you?',
            //         answers: ['ok', 'not ok', 'good'],
            //         rightAnswer: 1
            //     }
            // ]
            password: password,
            rights: 'user'
        }, function (user) {
            console.log(user);
            res.send(user);
        });
    });
};