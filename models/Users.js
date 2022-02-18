const { schema, model } = require('mongoose')




const userSchema = [{
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
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']



    },
    thoughts: { type: Schema.Types.ObjectId, ref: "thoughts" },
    friends: { type: Schema.Types.ObjectId, ref: this.username },
    toJSON: {
        virtuals: true,
    },
}]


userSchema.virtual("friendsCount").get(function() {

    return this.friends.length

})



module.exports = { userSchema }