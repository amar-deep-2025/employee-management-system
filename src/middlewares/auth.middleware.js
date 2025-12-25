const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    //get cookie from token
    const token = req.cookies.token;
    //token
    if (!token) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    //token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //find user from db
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }
    //set user with req
    req.user = user;
    //send route
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
