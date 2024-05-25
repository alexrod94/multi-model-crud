const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet.model");
const User = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  Pet.find().then((data) => {
    res.render("pets", { pets: data });
  });
});

router.get("/create", (req, res) => {
  User.find().then((data) => {
    res.render("create-pet", { users: data });
  });
});

router.post("/create", (req, res) => {
  if (req.body.chip === "on") req.body.chip = true;
  else req.body.chip = false;

  Pet.create(req.body)
    .then((data) => {
      console.log(data);
      return User.findByIdAndUpdate(req.body.owner, {
        $push: { pets: data._id },
      });
    })
    .then((data) => {
      console.log(data);
      res.redirect("/pets");
    });
});

module.exports = router;
