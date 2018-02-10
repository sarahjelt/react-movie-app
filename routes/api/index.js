const router = require("express").Router();
const movieAppRoutes = require("./movieApp");
const authenticateRoutes = require("./authenticate")

router.use("/movieApp", movieAppRoutes);
router.use("/authenticate", authenticateRoutes)

module.exports = router;