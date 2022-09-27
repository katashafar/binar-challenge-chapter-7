const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const { PORT = 8000 } = process.env;
const passport = require("./lib/passport");
const router = require("./router");

app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.set("view engine", "ejs");
app.use(router);
app.listen(PORT, () => {
  console.log(`Server nyala di port ${PORT}`);
});
