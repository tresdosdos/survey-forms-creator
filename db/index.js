const mongoose = require('mongoose');


mongoose.connect('mongodb://tresdosdos:strelok11@ds229415.mlab.com:29415/survey-forms', {
    promiseLibrary: global.Promise
});

module.exports = mongoose;