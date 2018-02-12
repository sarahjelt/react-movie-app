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
    findUserByName: function(req, res) {
        db.User
            .findOne({ name: req.params.name })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findUserByEmail: function(req, res) {
        db.User
            .findOne({ name: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    getUserShelf: function(req, res) {
        db.User
            .findOne({ _id: req.params.id})
            .populate("shelf.item")
            .exec(function(err, data) {
                if (err) console.log(err)
                else res.json(data)
            })
    },
    getUserLists: function(req, res) {
        db.User
            .findOne({_id: req.params.id})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    },
    pushUserLists: function(req, res) {
        console.log('hit the controller', req.body)
        var newList = { title: req.body.title, body: req.body.body}
        db.User
           .findOneAndUpdate({_id: req.params.id},{$push:{lists: newList}})
           .then(dbUser => res.json(dbUser))
           .catch(err => res.status(422).json(err))
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
    addMediaItemToShelf: function(req, res) {
        console.log('hitting the addMediaItemToShelf route', req.body)
        db.User
            .findOneAndUpdate({_id: req.params.id}, { $push: {shelf: {item: req.body.mediaItemId, watched: req.body.watched}}}, { new: true })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
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
    findReviewByUserId: function(req, res) {
        console.log(req.params)
        db.Review
            .find({ author: req.params.id })
            .populate('mediaItem')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    createReview: function(req, res) {
        console.log('trying to create review', req.body)
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