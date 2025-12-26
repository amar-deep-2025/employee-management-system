const User = require("../models/User");

const getUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

// ✅ SELF PROFILE UPDATE
const updateProfile = async (userId, data) => {
  const allowedFields = ["name", "email"];

  const updateData = {};
  allowedFields.forEach((field) => {
    if (data[field]) updateData[field] = data[field];
  });

  return await User.findByIdAndUpdate(userId, updateData, { new: true }).select(
    "-password"
  );
};

// 🔐 ADMIN ROLE UPDATE
const updateRole = async (userId, role) => {
  return await User.findByIdAndUpdate(userId, { role }, { new: true }).select(
    "-password"
  );
};
module.exports = {
  getUsers,
  getUserById,
  updateProfile,
  updateRole,
  deleteUser,
};
