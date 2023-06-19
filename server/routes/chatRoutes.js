const express = require("express");
const { verifyJwt } = require("../middlewares/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");
const router = express.Router();

router.route("/").get(verifyJwt, fetchChats);
router.route("/").post(verifyJwt, accessChat);
router.route("/create-group").post(verifyJwt, createGroupChat);
router.route("/rename-group").put(verifyJwt, renameGroup);
router.route("/add-to-group").put(verifyJwt, addToGroup);
router.route("/remove-from-group").put(verifyJwt, removeFromGroup);

module.exports = router;
