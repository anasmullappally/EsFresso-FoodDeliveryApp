const express = require("express");
const userController = require("../Controller/authentication");
const router = express.Router();

router.post("/googleSignIn", userController.googleSignIn);
router.post("/otpRequest", userController.otpRequest);
router.post("/otpVerify", userController.verifyRegisterOtp);
router.post('/signIn' , userController.signIn)
router.post('/verifySignin',userController.verifySignin)


module.exports = router;
