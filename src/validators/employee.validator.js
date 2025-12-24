const { body, param } = require("express-validator");

exports.createEmployeeValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("department").notEmpty().withMessage("Department is required"),
  body("designation").notEmpty().withMessage("Designation is required"),
];

exports.updateEmployeeValidator = [
  param("id").isMongoId().withMessage("Invalid employee id"),
];
