const express = require("express");

const employeeRoute = require("./routes/employee.routes");

const app = express();

app.use(express.json());

app.use("/api/employees", employeeRoute);

module.exports = app;
