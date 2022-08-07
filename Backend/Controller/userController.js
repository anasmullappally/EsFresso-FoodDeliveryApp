const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const asyncHandler = require('express-async-handler')
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const Users = require("../models/userModel");
const otpHandler = require("../otpHandler/otpHandler");
const { createError } = require('../createError')

module.exports = {
  googleSignUp:asyncHandler( async (req, res) => {
      const { token } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      let user = [];
      const { name, email, picture } = ticket.getPayload();
      user = { name, email, picture };
      console.log(user);
      await Users.create({ ...user });
      res.status(201).json({ name, email, picture });
  }),
  otpRequest:asyncHandler( async (req, res, next) => {
    let data = req.body
    console.log(data);
      let user = await Users.findOne({
        $or: [{ phoneNumber: data.phoneNumber }, { email: data.email }],
      });
      if (user){
       return next(createError(409,'user already exists'))
      }else{
        res.status(200).json()
        // otpHandler.make(data.phoneNumber).then((verification) => console.log(verification))
      }
  }),
};
