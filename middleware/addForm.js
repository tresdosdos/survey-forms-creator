const bodyParser = require('body-parser');
const createForm = require('../db/forms/createForm');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true })); ///нужное
    app.use(bodyParser.json());
    app.post('/addForm', function (req, res) {
        if (!req.body) {
            console.log('400');
            return res.sendStatus(400);
        }
        const {author, questions} = req.body;
        console.log(req.body);
        console.log(req.body.author);
        console.log(author + ' ' + questions);
        createForm({
            author: author,
            // questions: [
            //     {
            //         title: 'How are you?',
            //         answers: ['ok', 'not ok', 'good'],
            //         rightAnswer: 1
            //     }
            // ]
            questions: questions
        }, function (form) {
            console.log(form);
            res.send(form);
        });
    });
};