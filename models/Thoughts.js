const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reactionSchema = require('./Reaction');



const thoughtSchema = new mongoose.Schema({
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
    reactions: [reactionSchema],
    // toJSON: {
    //     virtuals: true,
    //     getters: true
    // },
})





Thoughts = mongoose.model("Thoughts", thoughtSchema);

Thoughtss.insertMany([{ thoughtText: 'Ill Straigten you out', username: "cupper12389@gmail.com" }], function(err) {

});


thoughtSchema.virtual("reactionCount").get(
    function() { return this.reactions.length }
)


module.exports = mongoose.model("Thoughts", thoughtSchema);