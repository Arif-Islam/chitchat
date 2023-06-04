const Chat = require("../models/chatModel");
const User = require("../models/userModel");

exports.accessChat = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("UserId param wasn't sent with the request");
    return res.sendStatus(400);
  }

  let chatExists = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  //   console.log(chatExists);

  chatExists = await User.populate(chatExists, {
    path: "latestMessage.sender",
    select: "name email",
  });

  //   console.log(chatExists);

  if (chatExists.length > 0) {
    res.send(chatExists[0]);
  } else {
    let chatData = {
      chatName: "new chat",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const chat = await Chat.find({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(chat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
};
