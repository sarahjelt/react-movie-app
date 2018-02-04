const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    mediaType: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    recommendations: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }]   
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;