const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Suggestions = require("../models/Suggestions");
var crypto = require("crypto");

//Get the default connection
// var db = mongoose.connection;

router.get("/", (req, res) => {
  res.send("Testing Suggestions");
});

router.get("/view_all", async (req, res) => {
  try {
    console.log("Testing in the View all");
    const suggest = await Suggestions.find();
    res.json(suggest);
  } catch (error) {
    res.json({
      message: "Error while finding the Suggestions in the collection",
    });
  }
});

// specific suggestion retrieve
router.get("/name", async (req, res) => {
  try {
    const suggest = await Suggestions.findById(req.params.name);
    res.json(suggest);
  } catch (error) {
    res.json({ message: error });
  }
});

// add a new Guide to the collection
router.post("/", async (req, res) => {
  const post = new Suggestions({
    locationID: crypto.randomBytes(16).toString("hex"),
    name: req.body.name,
    description: req.body.description,
  });
  try {
    // console.log("Testing the try in the save post item thing", req.body);
    const savedPost = await post.save();
    console.log("Object after the save Post call", savedPost);
    res.json(savedPost);
  } catch (err) {
    console.log("err" + err);
    res.json({ message: "Error While saving the post" });
    res.status(500).send(err);
  }
});

module.exports = router;