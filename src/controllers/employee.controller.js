const employeeService = require("../services/employee.service");
const response = require("../utils/apiResponse");

exports.createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    return res.status(201).json({
      message: "Employee Created Successfully",
      data: employee,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create employee",
      error: error.message,
    });
  }
};

exports.getEmployees = async (req, res) => {
  const employee = await employeeService.getEmployees();
  return response.success(res, "Employee fetched", employee);
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }
    return res.status(200).json(employee);
  } catch (err) {
    return res.status(500).json({
      message: "Failed to fetch employee",
      error: err.message,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await employeeService.updateEmployee(
      req.params.id,
      req.body
    );
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).json({
      message: "Employee Edit successfully",
      data: employee,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update employee",
      error: error.message,
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await employeeService.deleteEmployee(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).json({
      message: "Employee deleted successfully",
      data: employee,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to delete employee",
      error: error.message,
    });
  }
};
