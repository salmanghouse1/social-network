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
        match: [/.+@.+\..+/, 'Must match an email address!']
    },

    thoughts: { type: Schema.Types.ObjectId, ref: "Thoughts" },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

Users = mongoose.model("Users", userSchema)


Users.insertMany([{ username: 'salmanghouse1', email: "salmanghouse1@gmail.com" }], function(err) {

});



userSchema.virtual("friendsCount").get(function() {

    return this.friends.length

})





module.exports = mongoose.model("Users", userSchema);