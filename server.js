const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//auth stuff
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://teamgudetama.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'https://react-movie-app.com',
    issuer: 'teamgudetama.auth0.com/',
    algorithms: ['RS256']
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-movie-app",
);

// var dummyData = {
//   title: "KiKi's Delivery Service",
//   mediaType: "Movie",
//   synopsis: "A coming of age movie about adjusting to living on your own at 13",
//   img: "picture of kiki"
// };

// Media.create(dummyData)
//   .then(function(dbExample) {
//     console.log(dbExample);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });



app.use(authCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
