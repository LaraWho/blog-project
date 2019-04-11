const express = require("express");
const userRoutes = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

userRoutes.post("/register", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, existingUser) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (existingUser !== null) {
      res.status(400);
      return next(new Error("That username is taken!"));
    }

    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) {
        return res.status(500).send(err);
      }
      const token = jwt.sign(user.toObject(), process.env.SECRET);
      return res
        .status(201)
        .send({ success: true, user: user.toObject(), token });
    });
  });
});

userRoutes.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user || user.password !== req.body.password) {
      res.status(403);
      return next(new Error("Username or password are incorrect!"));
    }
    const token = jwt.sign(user.toObject(), process.env.SECRET);
    return res.send({ token: token, user: user.toObject(), success: true });
  });
});

module.exports = userRoutes;