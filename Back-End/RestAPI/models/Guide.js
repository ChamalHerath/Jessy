const mongoose = require("mongoose");
var crypto = require("crypto");

const GuideSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  gender: {
    type: "string",
    required: true,
  },
  category: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  mobile: {
    type: "string",
    required: true,
  },
  registrationNo: {
    type: "string",
    required: true,
  },
  languages: {
    type: "string",
    required: true,
  },
  guideID: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  location: {
    type: "string",
    required: true,
  },
  twitter: {
    type: "string",
    required: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  hash: String,
  salt: String,
});

// Method to set salt and hash the password for a user
GuideSchema.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString("hex");

  // Hashing user's salt and password with 1000 iterations,

  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
};

// Method to check the entered password is correct or not
GuideSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.hash === hash;
};

module.exports = mongoose.model("Guide", GuideSchema);
