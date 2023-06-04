const express = require("express");
const { registerUser, loginUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/signup", registerUser).post("/login", loginUser);

module.exports = router;
