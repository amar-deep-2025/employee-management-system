const express = require("express");
const router = express.Router();

const controller = require("../controllers/employee.controller");
const validate = require("../middlewares/validate");
const validator = require("../validators/employee.validator");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Get all employees (not require role)
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: Employee list fetched successfully
 */
router.get("/", controller.getEmployees);

/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Create a new employee (Admin only)
 *     tags: [Employees]
 *     security:
 *       - cookieAuth: []   # 🔐 TOKEN REQUIRED
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               department:
 *                 type: string
 *               designation:
 *                 type: string
 *     responses:
 *       201:
 *         description: Employee created
 *       401:
 *         description: Unauthorized
 */
router.post("/", auth, role("ADMIN"), validate, controller.createEmployee);
/**
 * @swagger
 * /api/employees/{id}:
 *   get:
 *     summary: Get employee by ID (not require role)
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee found
 *       404:
 *         description: Employee not found
 */
router.get("/:id", controller.getEmployeeById);

/**
 * @swagger
 * /api/employees/{id}:
 *   put:
 *     summary: Update employee by ID (Admin only)
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               department:
 *                 type: string
 *               designation:
 *                 type: string
 *     responses:
 *       200:
 *         description: Employee updated successfully
 */
router.put(
  "/:id",
  auth,
  role("ADMIN"),
  validator.updateEmployeeValidator,
  validate,
  controller.updateEmployee
);

/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: Delete employee by ID (Admin only)
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 */
router.delete("/:id", auth, role("ADMIN"), controller.deleteEmployee);

module.exports = router;
