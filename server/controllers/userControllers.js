const User = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body.formData;
    const { image } = req.body.imageUrl;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please give all the field information");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("This user already exists!");
    }

    const user = await User.create({ name, email, password, image });
    if (user) {
      res.status(200).json({
        message: "user created successfully",
        data: user,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Failed to create user");
    }
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong!",
      error: error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      res.status(200).json({
        message: "Login successfull",
        data: user,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password!");
    }
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong!",
      error: error,
    });
  }
};

exports.allUsers = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
};

