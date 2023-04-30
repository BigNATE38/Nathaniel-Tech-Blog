const router = require('express').Router();

// const apiRoutes = require("./api");
const homeRoutes = require('./homeRoutes.js');
// const dashboardRoutes = require("./dashboardRoutes")

router.use('/', homeRoutes);
// router.use("/dashboard", dashboardRoutes);
// router.usd("/api", apiRoutes);

module.exports = router;