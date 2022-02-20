const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const friendsSchema = new mongoose.Schema({
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
    thoughts: { type: Schema.Types.ObjectId, ref: "thoughts" },

})




const Friends = mongoose.model("Friends", friendsSchema);


module.exports = { Friends }