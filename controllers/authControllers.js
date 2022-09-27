const { User } = require("../models");
const passport = require("../lib/passport");

function format(user) {
  const { id, username } = user;
  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  },
  login: passport.authenticate("local", {
    successRedirect: "/whoami",
    failureRedirect: "/login",
    failureFlash: true,
    whoami: (req, res) => {
      res.render("index", req.user.dataValues);
    },
  }),
  login: (req, res) => {
    User.authenticate(req.body).then((user) => {
      re.json(format(user));
    });
  },
  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },
};
