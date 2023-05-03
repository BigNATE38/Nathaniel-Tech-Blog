const router = require('express').Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes.js");
const dashboardRoutes = require("./dashboardRoutes");
const addPostsRoutes = require("./add-posts-routes");

router.use('/', homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/add-posts", addPostsRoutes);
router.use("/api", apiRoutes);

module.exports = router;