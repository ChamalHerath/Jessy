const express = require("express");
const app = require("express")();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000;

// database connections
mongoose
  .connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware configuration
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bodyParser = require("express").json;
app.use(bodyParser());

// import routes
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const guideRoute = require("./routes/guide");
const suggestionRoute = require("./routes/suggestions");
const packageRoute = require("./routes/package");

// routes
app.get("/", (req, res) => {
  res.send("Testing main API for the JESSY");
});

app.use("/post", postRoute);
app.use("/user", userRoute);
app.use("/post", guideRoute);
app.use("/suggestions", suggestionRoute);
app.use("/package", packageRoute);
app.use("/guides", guideRoute);

//listening from the server_error
app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
