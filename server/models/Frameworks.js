const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FrameworksSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Frameworks = mongoose.model("frameworks", FrameworksSchema);

module.exports = Frameworks;
