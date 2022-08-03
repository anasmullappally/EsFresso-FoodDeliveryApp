const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const User = require("../models/userModel");

router.get("/", (req, res) => {
  console.log("iam in landing page");
});
router.post("/googleSignUp", async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();
    // let user = []
    let user = { name, email, picture };
    console.log(user);
    await User.create(user);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
