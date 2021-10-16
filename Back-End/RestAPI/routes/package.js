const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Package = require("../models/Package");

//Get the default connection
// var db = mongoose.connection;

router.get("/", (req, res) => {
  res.send("Testing Package");
});

router.get("/view_all", async (req, res) => {
  try {
    console.log("Testing in the View all");
    const package = await Package.find();
    res.json(package);
  } catch (error) {
    res.json({message: "Error while finding the packages in the collection"});
  }
});

// specific package details retrieve
router.get("/packageID", async (req, res) => {
  try {
    const package = await Package.findById(req.params.packageID);
    res.json(package);
  } catch (error) {
    res.json({message: error});
  }
});

module.exports = router;
