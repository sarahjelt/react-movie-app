import decode from 'jwt-decode';
import auth0 from 'auth0-js';
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = 'c4NjZEOPC3GODFhXaggjJQImQVH26mBH';
const CLIENT_DOMAIN = 'teamgudetama.auth0.com';
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'write:reviews';
const AUDIENCE = 'https://react-movie-app.com';
const bcrypt = require('bcrypt');
const AWS = require('aws-sdk');
// const rc = require('./node_modules/rc/index.js');
// const rcs = window.index.rc;
// resolve: {
//   extensions: ['.js', '.jsx', '.css', '.less', '.json']
//   modules: ['node_modules', '../../client/node_modules/rc/index.js']
// }

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

export function logout() {
  clearIdToken();
  clearAccessToken();
  window.location.replace('/');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

var mongo;
var WrongUsernameOrPasswordError;

function login(email, password, callback) {
  mongo('mongodb://pfeif:2004s10ls1@ds157987.mlab.com:57987/movieappp', function (db) {
    var users = db.collection('users');
    users.findOne({ email: email }, function (err, user) {

      if (err) return callback(err);

      if (!user) return callback(new WrongUsernameOrPasswordError(email));

      bcrypt.compare(password, user.password, function (err, isValid) {
        if (err) {
          callback(err);
        } else if (!isValid) {
          callback(new WrongUsernameOrPasswordError(email));
        } else {
          callback(null, {
            user_id: user._id.toString(),
            nickname: user.nickname,
            email: user.email
          });
        }
      });
    });
  });
}

function create (user, callback) {
  mongo('mongodb://pfeif:2004s10ls1@ds157987.mlab.com:57987/movieappp', function (db) {
    var users = db.collection('users');

    users.findOne({ email: user.email }, function (err, withSameMail) {

      if (err) return callback(err);
      if (withSameMail) return callback(new Error('the user already exists'));

      bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) { return callback(err); }
        user.password = hash;
        users.insert(user, function (err, inserted) {
          if (err) return callback(err);
          callback(null);
        });
      });
    });
  });
}

function verify (email, callback) {
  mongo('mongodb://pfeif:2004s10ls1@ds157987.mlab.com:57987/movieappp', function (db) {
    var users = db.collection('users');
    var query = { email: email, email_verified: false };

    users.update(query, { $set: { email_verified: true } }, function (err, count) {
      if (err) return callback(err);
      callback(null, count > 0);
    });
  });
}

function changePassword(email, newPassword, callback) {
  mongo('mongodb://pfeif:2004s10ls1@ds157987.mlab.com:57987/movieappp', function (db) {
    var users = db.collection('users');

    bcrypt.hash(newPassword, 10, function (err, hash) {
      if (err) {
        callback(err);
      } else {
        users.update({ email: email }, { $set: { password: hash } }, function (err, count) {
          if (err) return callback(err);
          callback(null, count > 0);
        });
      }
    });
  });
}

function getByEmail (name, callback) {
  var profile = {
    user_id:     "103547991597142817347",
    nickname:    "johnfoo",
    email:       "johnfoo@gmail.com",
    name:        "John Foo",
    given_name:  "John",
    family_name: "Foo"
  };

  callback(null, profile);
}

function remove (id, callback) {

  mongo('mongodb://pfeif:2004s10ls1@ds157987.mlab.com:57987/movieappp', function (db) {
    var users = db.collection('users');

    users.remove({ _id: id }, function (err) {
      if (err) return callback(err);
      callback(null);
    });
  });

}