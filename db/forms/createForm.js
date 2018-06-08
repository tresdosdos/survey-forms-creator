const Form = require('../../models/user').Form;

module.exports = function createForm(data, callback) {
    const formData = {
        author: data.author,
        questions: data.questions
    };
    let form = new Form(formData);
    form.save(function (err, form) {
        callback(form);
    });
};