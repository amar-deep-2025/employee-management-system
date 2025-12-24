const jwt = require("jsonwebtoken");

exports.generationToken = (userId) => {
  return jwt.sign({ id: userid }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
