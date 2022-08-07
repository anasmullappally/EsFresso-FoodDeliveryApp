const express = require("express");
const userController = require("../Controller/userController");
const router = express.Router();

router.post("/googleSignUp", userController.googleSignUp )
router.post("/googleSignIn", userController.googleSignUp  )









module.exports = router;
