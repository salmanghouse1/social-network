const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Schema = mongoose.Schema;

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: Integer,
        required: "Field is requred",

    },


    reactionBody: {
        type: String,
        required: "This field is required",
        validate: [({ length }) => length >= 1 && length <= 128, 'Thought should be between 1-280 chars']

    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: "Username Required"
    },
    // toJSON: {
    //     virtuals: true,
    //     getters: true

    // }
})


Reactions = mongoose.model("Reactions", reactionSchema);

Reactions.insertMany([{ reactionText: 'Ill Straigten you out', username: "cupper12389@gmail.com" }], function(err) {

});

module.exports = reactionSchema;