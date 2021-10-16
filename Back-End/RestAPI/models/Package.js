const mongoose = require("mongoose");
var crypto = require("crypto");

const PackageSchema = mongoose.Schema({
  packageID: {
    type: "string",
    required: true,
  },
  packageName: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  selected: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Package", PackageSchema);
