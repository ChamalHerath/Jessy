const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = require("../models/Post");

//Get the default connection
var db = mongoose.connection;

router.get("/", (req, res) => {
  res.send("Testing Post");
});

//get all the posts
router.get("/view_all", async (req, res) => {
  try {
    console.log("Testing in the View all");
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: "Error while finding the posts in the collection" });
  }
});

//submit the posts to the collection
router.post("/", async (req, res) => {
  //debug
  console.log(req.body);

  //Bind connection to error event (to get notification of connection errors)
  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  const post = new Post({
      title: req.body.title,
      description: req.body.description,
  });

  // const savedPost = post.save();
  // console.log("Saved Post Item", savedPost);

  try {
    
    // console.log("Testing the try in the save post item thing", req.body);
    const savedPost = await post.save();
    console.log("Object after the save Post call", savedPost);
    res.json(savedPost);
  } catch (err) {
    console.log('err' + err);
    res.json({ message: "Error While saving the post" });
    res.status(500).send(err);
  }

});

// specific post creation
router.get("/postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

//deleting a post from the collection
router.delete("/:postId", async (req, res) => {
  try {
    const post = await Post.remove({ _id: req.params.postId });
  } catch (error) {
    res.json({ message: "Error while deleting" });
  }
});

module.exports = router;
