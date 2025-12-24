const express = require("express");
const router = express.Router();
const controller = require("../controllers/employee.controller");

const validate = require("./middlewares/validate");

const validator = require("../validators/employee.validator");

router.post(
  "/",
  validator.createEmployeeValidator,
  validate,
  controller.createEmployee
);

router.get("/", controller.getEmployees);

router.get("/:id", controller.getEmployeeById);

router.put(
  "/:id",
  validator.updateEmployeeValidator,
  validate,
  controller.updateEmployee
);

router.delete("/:id", controller.deleteEmployee);

module.exports = router;
