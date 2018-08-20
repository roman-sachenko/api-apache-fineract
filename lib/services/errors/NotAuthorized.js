const httpStatus = require('http-status');
const ApiError = require('./ApiError');

/**
 * Represents NotAuthorized HTTP/HTTPS Error
 * statusCode: 401
 * @extends ApiError
 * @constructor
 * @param {String} message - error message
 */
class NotAuthorized extends ApiError {
  constructor(message) {
    super(message || 'Not Authorized', httpStatus.UNAUTHORIZED);
  }
}

module.exports = NotAuthorized;
