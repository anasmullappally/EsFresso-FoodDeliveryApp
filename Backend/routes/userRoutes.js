const express = require("express");
const userController = require("../Controller/userController");
const router = express.Router();

router.post("/googleSignIn", userController.googleSignIn);
router.post("/otpRequest", userController.otpRequest);
router.post("/otpVerify", userController.otpVerify);

module.exports = router;
