const express = require("express");
const { verifyJwt } = require("../middlewares/authMiddleware");
const { accessChat } = require("../controllers/chatControllers");
const router = express.Router();

router.route("/").post(verifyJwt, accessChat);
// .get(verifyJwt, fetchChats);
// router.route("/group").post(verifyJwt, createGroupChat);
// router.route("/rename").put(verifyJwt, renameGroup);
// router.route("/groupremove").put(verifyJwt, removeFromGroup);
// router.route("/groupadd").put(verifyJwt, addToGroup);

module.exports = router;
