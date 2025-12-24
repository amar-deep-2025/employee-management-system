const morgan = require("morgan");
const logger = require("../utils/logger");

morgan.token("message", (req, res) => res.locals.errorMessage || "");

module.exports = morgan(":method :url :status :response-time ms :message", {
  stream: {
    write: (msg) => logger.info(msg.trim()),
  },
});
