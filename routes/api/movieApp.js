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
    .route("/user/name/:name")
    .get(movieController.findUserByName)

router
    .route("/user/email/:email")
    .get(movieController.findUserByEmail)

router
    .route("/user/shelf/:id")
    .get(movieController.getUserShelf)
    .put(movieController.addMediaItemToShelf)

router
    .route("/user/lists/:id")
    .get(movieController.getUserLists)
    .put(movieController.pushUserLists);

router
  .route("/media")
  .get(movieController.findAllMedia)
  .post(movieController.createMedia);

router
  .route("/media/validate")
  .post(movieController.findMediaBySynopsis)

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

router
    .route("/review/user/:id")
    .get(movieController.findReviewByUserId)

module.exports = router;