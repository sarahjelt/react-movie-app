const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    synoposis: {
        type: String,
        required: true
    },
    mediaItem: {
        type: Schema.Types.ObjectId,
        ref: "Media"
    },
    body: {
        type: String,
        required: true
    }   
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;