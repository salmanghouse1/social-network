const {
    mongoose,
    Types
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Schema = mongoose.Schema;


const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId,

    },
    reactionBody: {
        type: String,
        required: "This field is required",
        validate: [({ length }) => length >= 1 && length <= 280, 'Thought should be between 1-280 chars']

    },
    username: {
        type: String,
        required: "Username Required"
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
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