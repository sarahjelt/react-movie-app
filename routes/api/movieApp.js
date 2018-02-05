const router = require("express").Router();
const movieController = require("../../controllers/movieController");

router
  .route("/user")
  .get(movieController.findAllUsers)
  .post(movieController.createUser);

router
  .route("/user/:id")
  .get(movieController.findUserById)
  .put(movieController.updateUser)
  .delete(movieController.removeUser);

router
  .route("/media")
  .get(movieController.findMediaBySynopsis)
  .post(movieController.createMedia);

router
  .route("/media/:id")
  .get(movieController.findMediaById)
  .put(movieController.updateMedia)
  .delete(movieController.removeMedia);

router
  .route("/review")
  .get(movieController.findAllReviews)
  .post(movieController.createReview);

router
  .route("/review/:id")
  .get(movieController.findReviewById)
  .put(movieController.updateReview)
  .delete(movieController.removeReview);

module.exports = router;