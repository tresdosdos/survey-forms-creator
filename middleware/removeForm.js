const bodyParser = require('body-parser');
const remove = require('../db/forms/remove');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true })); ///нужное
    app.use(bodyParser.json());
    app.post('/removeForm', function (req, res) {
        if (!req.body) {
            console.log('400');
            return res.sendStatus(400);
        }
        const {author} = req.body;
        console.log(author);
        remove({author: author}, function () {
            res.status(200).send();
        });
    });
};