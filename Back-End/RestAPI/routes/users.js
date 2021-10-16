const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const Users = require("../models/Users");

router.get("/", (req, res) => {
  res.send("Testing User");
});

//get all the users
router.get("/new_user", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.json({message: "Error while finding the user in the collection"});
  }
});

//submit the user to the collection
router.post("/", async (req, res) => {
  //debug
  console.log(req.body);

  const user = new Users({
    userID: crypto.randomBytes(16).toString("hex"),
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    country: req.body.country,
    passportId: req.body.passportId,
    password: req.body.password,
    description: req.body.description,
  });

  try {
    const savedUser = await post.save();
    res.json(savedUser);
  } catch (error) {
    res.json({message: "Error While saving the User"});
    res.json({message: error});
  }
});

//deleting a user from the collection
router.delete("/:email", async (req, res) => {
  try {
    const user = await Users.remove({_id: req.params.email});
  } catch (error) {
    res.json({message: "Error while deleting"});
  }
});

/* 
 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  
|                                               |
|                                               |
|           Login and User Validations          |
|                                               |
|_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|   

*/

// User login api
router.post("/login", (req, res) => {
  // Find user with requested email
  Users.findOne({email: req.body.email}, function (err, user) {
    if (user === null) {
      return res.status(400).send({
        message: "User not found.",
      });
    } else {
      if (user.validPassword(req.body.password)) {
        return res.status(201).send({
          message: "User Logged In",
        });
      } else {
        return res.status(400).send({
          message: "Wrong Password",
        });
      }
    }
  });
});

// User signup api
router.post("/signup", (req, res, next) => {
  // Creating empty user object
  let newUser = new Users({
    email: req.body.email,
    userID: req.body.userID,
    name: req.body.name,
    description: req.body.description,
  });

  // Call setPassword function to hash password
  newUser.setPassword(req.body.password);

  // Save newUser object to database
  newUser.save((err, Users) => {
    if (err) {
      return res.status(400).send({
        message: "Failed to add user.",
      });
    } else {
      return res.status(201).send({
        message: "User added successfully.",
      });
    }
  });
});


module.exports = router;
