const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Schema = mongoose.Schema;

const reactionSchema = new mongoose.Schema({
    thoughtText: {
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


reactionSchema.virtual("reactionCount").get(
    function() { return this.reactions.length }
)

module.exports = reactionSchema;