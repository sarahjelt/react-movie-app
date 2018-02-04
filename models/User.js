const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
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
    lists: [{
        type: Schema.Types.ObjectId,
        ref: "Media",
        body: String,
        title: String,
    }],
    img: {
        type: String
    },
    shelf: [{
        type: Schema.Types.ObjectId,
        ref: "Media"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    recommendations: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }], 
    timestamps: true  
});

const User = mongoose.model("User", userSchema);

module.exports = User;