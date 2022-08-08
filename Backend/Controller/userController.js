const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const asyncHandler = require("express-async-handler");
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const Users = require("../models/userModel");
const otpHandler = require("../otpHandler/otpHandler");
const { createError } = require("../createError");

module.exports = {
  googleSignIn: asyncHandler(async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    let user = [];
    const { name, email, picture } = ticket.getPayload();
    user = { name, email, picture };
    let userExist = await Users.findOne({ email: email });
    // console.log(userExist);
    if (userExist) return res.status(200).json({ userExist });

    await Users.create({ ...user });
    return res.status(201).json({ name, email, picture });
  }),
  otpRequest: asyncHandler(async (req, res, next) => {
    let data = req.body;
    console.log(data);
    let user = await Users.findOne({
      $or: [{ phoneNumber: data.phoneNumber }, { email: data.email }],
    });
    if (user) {
      return next(createError(409, "user already exists"));
    } else {
      await otpHandler
        .make(data.phoneNumber)
        .then((verification) => console.log(verification));
      res.status(200).json();
    }
  }),
  otpVerify: asyncHandler(async (req, res, next) => {
    let user = req.body.data;
    let otp = req.body.otp;
    let response = await otpHandler.verifyOtp(otp, user.phoneNumber);
    // console.log(response)
    if (response.status == "approved") {
      let userDetails = await Users.create(user);
      console.log(userDetails);
      res.status(201).json(userDetails);
    } else  {
      return next(createError(409, "Invalid Otp"));
    }
  }),
};

