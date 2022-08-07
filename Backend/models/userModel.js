const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const userSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     mobileNumber: { type: Number },
//     picture: { type: String },
//   },
//   { collection: "userData" }
// );
const userSchema1 = new Schema(
  {
    name: { type: String, required: true },
    email: { unique: true, type: String, required: true, index: true },
    phoneNumber: { type: Number },
    picture: { type: String },
  },
  { collection: "users" }
);

const model = mongoose.model("userData", userSchema1);

module.exports = model;
