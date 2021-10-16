const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const Guide = require("../models/Guide");

router.get("/", (req, res) => {
  res.send("Testing Guide");
});

//get all the guides
router.get("/guide_list", async (req, res) => {
  try {
    const guide = await Guide.find();
    res.json(guide);
  } catch (error) {
    res.json({message: "Error while finding the guide in the collection"});
  }
});

// specific guide output
router.get("/guideID", async (req, res) => {
  try {
    const guide = await Guide.findById(req.params.guideID);
    res.json(guide);
  } catch (error) {
    res.json({message: error});
  }
});

// add a new Guide to the collection
router.post("/", async (req, res) => {
  //Bind connection to error event (to get notification of connection errors)
  // db.on("error", console.error.bind(console, "MongoDB connection error:"));

  const post = new Guide({
    name: req.body.name,
    gender: req.body.gender,
    category: req.body.category,
    email: req.body.email,
    password: req.body.password,
    guideID: crypto.randomBytes(16).toString("hex"),
    mobile: req.body.mobile,
    registrationNo: req.body.registrationNo,
    languages: req.body.languages,
    description: req.body.description,
    location: req.body.location,
    twitter: req.body.twitter,
  });
  try {
    // console.log("Testing the try in the save post item thing", req.body);
    const savedPost = await post.save();
    console.log("Object after the save Post call", savedPost);
    res.json(savedPost);
  } catch (err) {
    console.log("err" + err);
    res.json({message: "Error While saving the post"});
    res.status(500).send(err);
  }
});

module.exports = router;
