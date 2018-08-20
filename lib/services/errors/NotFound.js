const httpStatus = require('http-status');
const ApiError = require('./ApiError');

/**
 * Represents NotFound HTTP/HTTPS Error
 * statusCode: 404
 * @extends ApiError
 * @constructor
 * @param {String} message - error message
 */
class NotFound extends ApiError {
  constructor(message) {
    super(message || 'Not Found', httpStatus.NOT_FOUND);
  }
}

module.exports = NotFound;
