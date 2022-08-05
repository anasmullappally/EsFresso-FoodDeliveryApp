const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: Number },
    picture: { type: String },
  },
  { collection: "userData" }
);

const model = mongoose.model("userData", userSchema);

module.exports = model;
