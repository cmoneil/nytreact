const router = require("express").Router();
const searchRoutes = require("./search");
const articleRoutes = require("./article");

// Article routes
router.use("/article", articleRoutes);
router.use("/search", searchRoutes)

module.exports = router;
