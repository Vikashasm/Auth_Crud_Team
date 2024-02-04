const express = require("express");
const router = express.Router();
const user = require("../Controller/auth");
const {userRegistrationValidate, userLoginValidate} = require("../Utility/validation");

router.post("/signUp", userRegistrationValidate, user.createUser);
router.post("/signIn", userLoginValidate, user.loginUser);

exports.router = router;
