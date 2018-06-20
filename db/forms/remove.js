const Form = require('../../models/questions').Form;

module.exports = function createForm(author, callback) {
    console.log(author);
    Form.findOneAndRemove(author, callback);
};