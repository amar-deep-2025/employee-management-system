const express = require("express");

const employeeRoutes = require("./routes/employee.routes");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/logger");
const limiter = require("./middlewares/rateLimiter");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const authRoutes = require("./routes/auth.routes");

const cookieParser = require("cookie-parser");

const app = express();

// ✅ Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ Logger (must be before routes)
app.use(requestLogger);

// ✅ Body parser
app.use(express.json());

//add cookie Parser
app.use(cookieParser());

//add auth routes
app.use("/api/auth", authRoutes);

// ✅ Rate limiter
app.use("/api", limiter);

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);

// ✅ Error handler (always last)
app.use(errorHandler);

module.exports = app;
