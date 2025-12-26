const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Arun Kumar
 *               email:
 *                 type: string
 *                 example: arun@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
router.post("/register", controller.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user and set JWT cookie
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: arun@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", controller.login);

/**
 *  @Swagger
 * /api/auth/logout:
 * post:
 *      summary:Logout user(clear JWT cookie)
 * tags: [Auth]
 * responses:
 *  200:
 *   description:
 *  Logout successful
 */
router.post("/logout", controller.logout);

module.exports = router;
