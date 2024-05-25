const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  User.find()
    .populate("pets")
    .then((data) => {
      console.log(data);
      res.render("index", { users: data });
    });
});

router.get("/user/:id", (req, res) => {
  User.findById(req.params.id)
    .populate("pets")
    .then((data) => {
      console.log(data);
      res.render("user", { user: data });
    });
});

router.get("/create-user", (req, res) => {
  res.render("create-user");
});

router.post("/create-user", (req, res) => {
  User.create(req.body).then((data) => {
    res.redirect("/");
  });
});

module.exports = router;
