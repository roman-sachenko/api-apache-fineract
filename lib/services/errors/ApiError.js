const httpStatus = require('http-status');

/**
 * Represents Main Error Class
 * Respond with statsuCode 500 by default
 * @extends Error
 * @constructor
 * @param {String} message - error message
 * @param {String} status - error status
 */
class ApiError extends Error {
  constructor(message, status) {
    super(message);

    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.status = status || httpStatus.INTERNAL_SERVER_ERROR;
    this.message = message;
  }
}

module.exports = ApiError;
