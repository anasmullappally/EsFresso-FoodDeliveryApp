const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const User = require("../models/userModel");

module.exports = {
  googleSignUp: async (req, res) => {
    try {
      const { token } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      let user = [];
      const { name, email, picture } = ticket.getPayload();
      user = { name, email, picture };
      console.log(user);
      await User.create({ ...user });
      res.status(201).json({ name, email, picture });
    } catch (err) {
      console.log(err);
      res.status(200).json({  });
    }
  },
};
