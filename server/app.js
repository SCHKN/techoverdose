const express = require("express");
const mongoose = require("mongoose");
const config = require("./db");
const Frameworks = require("./models/Frameworks");

mongoose
  .connect(
    config.db,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Can not connect to the database" + err);
    }
  );

const app = express();

app.get("/frameworks", function(req, res) {
  var q = req.query.q;
  Frameworks.find({ name : { $regex: new RegExp(q)}}).then(frameworks => {
    return res.json({
      frameworks
    });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
