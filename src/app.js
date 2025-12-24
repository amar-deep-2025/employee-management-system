const express = require("express");

const employeeRoute = require("./routes/employee.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

app.use("/api/employees", employeeRoute);

app.use(errorHandler);

module.exports = app;
