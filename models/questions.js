const mongoose = require('../db');

const schema = mongoose.Schema(
    {
        author:{
            type: String,
            unique: true,
            required: true
        },
        questions:{
            type: Object,
            required: true
        }
    }
);

exports.User = mongoose.model('Form', schema);