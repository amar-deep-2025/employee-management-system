const express = require("express");

const userService = require("../services/user.services");
const response = require("../utils/apiResponse");

exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();
  return response.success(res, "User Fetched", users);
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not Found" });
    }
    return res.status(200).json({
      message: "User Fetched By Id",
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to find user",
      err: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const delUser = await userService.deleteUser(req.params.id);
    if (!delUser) {
      return res.status(404).json({
        message: "User not Found",
      });
    }
    return res.status(200).json({
      message: "User Deleted successfully",
      data: delUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to delete | Something is wrong in request",
      err: err.message,
    });
  }
};

exports.updateMyProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    const updatedUser = await userService.updateProfile(userId, req.body);

    return res.status(200).json({
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to update profile",
      error: err.message,
    });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const updatedUser = await userService.updateRole(
      req.params.id,
      req.body.role
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User role updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to update user role",
      error: err.message,
    });
  }
};
