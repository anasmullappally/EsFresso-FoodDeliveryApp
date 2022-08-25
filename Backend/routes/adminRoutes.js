const express = require("express");
const router = express.Router();
const adminController = require("../Controller/admin/authentication");

router.post("/signIn", adminController.sigin);

module.exports = router;