const express = require("express");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/userControllers");
const { verifyJwt } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", registerUser).post("/login", loginUser);
router.get("/", verifyJwt, allUsers);

module.exports = router;
