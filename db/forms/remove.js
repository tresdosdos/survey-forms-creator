const Form = require('../../models/user').Form;

module.exports = function createForm(author, callback) {
    console.log(author);
    Form.findOneAndRemove(author, callback);
};