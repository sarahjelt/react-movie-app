const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({

   
});

const MovieApp = mongoose.model("MovieApp", movieSchema);

module.exports = MovieApp;