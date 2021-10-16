const mongoose = require("mongoose");
var crypto = require("crypto");

const UserSchema = mongoose.Schema({
  userID: {
    type: "string",
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  gender: {
    type: "string",
    required: true,
  },
  country: {
    type: "string",
    required: true,
  },
  passportId: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
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
UserSchema.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString("hex");

  // Hashing user's salt and password with 1000 iterations,

  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
};

// Method to check the entered password is correct or not
UserSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.hash === hash;
};

module.exports = mongoose.model("Users", UserSchema);
