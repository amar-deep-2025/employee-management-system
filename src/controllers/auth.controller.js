const authService = require("../services/auth.services");

const { generateToken } = require("../utils/token");

exports.register = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ message: "User registered ", user });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await authService.loginUser(req.body.email, req.body.password);
    const token = generateToken(user._id);
    console.log("JWT Token", token);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });

    res.json({ message: "Login successful", token: token });
  } catch (err) {
    next(err);
  }
};
