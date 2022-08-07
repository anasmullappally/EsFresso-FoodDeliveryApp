const express = require("express");
const userController = require("../Controller/userController");
const router = express.Router();

router.post("/googleSignUp", userController.googleSignUp);
router.post("/googleSignIn", userController.googleSignUp);
router.post('/otpRequest' , userController.otpRequest)

module.exports = router;
