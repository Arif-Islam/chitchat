const jwt = require("jsonwebtoken");

exports.generateToken = (userId) => {
  const payload = {
    id: userId,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30days",
  });

  return token;
};
