const router = require("express").Router();
const path = require("./router");

router.use("/", path);

module.exports = router;
