const db = require("../models");

module.exports = {
    findAllUsers: function(req, res) {
        db.User
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findUserById: function(req, res) {
        db.User
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    createUser: function(req, res) {
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    updateUser: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    removeUser: function(req, res) {
        db.User
          .findById({ _id: req.params.id})
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findAllMedia: function(req, res) {
        db.Media
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findMediaById: function(req, res) {
        db.Media
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findMediaBySynopsis: function(req, res) {
        console.log('findMediaBySynopsis', req)

        db.Media
            .find({synopsis: req.body.synopsis})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    createMedia: function(req, res) {
        db.Media
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    updateMedia: function(req, res) {
        db.Media
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    removeMedia: function(req, res) {
        db.Media
          .findById({ _id: req.params.id})
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findAllReviews: function(req, res) {
        db.Review
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findReviewById: function(req, res) {
        db.Review
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    createReview: function(req, res) {
        db.Review
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    updateReview: function(req, res) {
        db.Review
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    removeReview: function(req, res) {
        db.Review
          .findById({ _id: req.params.id})
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
}