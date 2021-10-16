const mongoose = require("mongoose");
var crypto = require("crypto");

const SuggestionsSchema = mongoose.Schema({
   locationID: {
    type: "string",
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  
});

module.exports = mongoose.model("Suggestions", SuggestionsSchema);
