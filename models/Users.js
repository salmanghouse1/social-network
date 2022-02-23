const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: "Please enter your username",
        trim: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            }
        },
        message: "this isnt a right email address"
    },
    thoughts: { type: Schema.Types.ObjectId, ref: "Thoughts" },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Friends'
    }]
})


userSchema.virtual("friendsCount").get(function() {

    return this.friends.length

})





module.exports = mongoose.model("Users", userSchema);