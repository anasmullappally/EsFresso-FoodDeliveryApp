const dotenv = require("dotenv");
dotenv.config();
const Admin = require("../../models/adminModel");
const asyncHandler = require("express-async-handler");
const { createError } = require("../../createError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  sigin: asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return next(createError(401, "incorrect mail"));
    } else {
      const passwordValid = await bcrypt.compare(password, admin.password);
      if (!passwordValid) {
        return next(createError(403, "incorrect password"));
      } else {
        return res.status(200).json({ message: "Sign-In success" });
      }
    }
  }),
};
