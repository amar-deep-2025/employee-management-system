const Employee = require("../models/Employee");

//create

const createEmployee = async (data) => {
  return await Employee.create(data);
};

//Retrieve

const getEmployees = async () => {
  return await Employee.find();
};

//By id
const getEmployeeById = async (id) => {
  return await Employee.findById(id);
};

//Update
const updateEmployee = async (id, data) => {
  return await Employee.findByIdAndUpdate(id, data, { new: true });
};

//delete
const deleteEmployee = async (id) => {
  return await Employee.findByIdAndDelete(id);
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
