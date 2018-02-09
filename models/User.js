const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lists: Array,
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
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const User = mongoose.model("User", userSchema);

module.exports = User;