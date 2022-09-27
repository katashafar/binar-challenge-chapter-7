const router = require("express").Router();
const auth = require("../controllers/authControllers");
const restrict = require("../middleware/restrict");

router.get("/", (req, res) => res.render("index"));
router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));
router.get("/whoami", restrict, auth.whoami);
router.get("/", (req, res) => res.render("home"));
router.get("/", restrict, (req, res) => res.render("index"));
router.get("/api/v1/auth/whoami", restrict, auth.whoami);
router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/api/v1/auth/register", auth.register);
router.post("/api/v1/auth/login", auth.login);

module.exports = router;
