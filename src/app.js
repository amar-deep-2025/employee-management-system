const express = require("express");

const employeeRoute = require("./routes/employee.routes");
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/logger");

const app = express();

//add Logger
app.use(requestLogger);
app.use(express.json());

app.use("/api/employees", employeeRoute);

//add errorHandler must always last
app.use(errorHandler);

module.exports = app;
