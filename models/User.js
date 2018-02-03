const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    shelf: [{
        type: Schema.Types.ObjectId,
        ref: "Media"
    }],
    friends: [{
        type: String
    }],
    recommendations: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }]   
});

const User = mongoose.model("User", userSchema);

module.exports = User;