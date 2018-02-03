const router = require("express").Router();
const movieAppRoutes = require("./movieApp");

router.use("/movieApp", movieAppRoutes);

module.exports = router;