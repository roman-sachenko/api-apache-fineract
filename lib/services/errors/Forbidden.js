const httpStatus = require('http-status');
const ApiError = require('./ApiError');

/**
 * Represents Forbidden HTTP/HTTPS Error
 * statusCode: 403
 * @extends ApiError
 * @constructor
 * @param {String} message - error message
 */
class Forbidden extends ApiError {
  constructor(message) {
    super(message || 'Forbidden', httpStatus.FORBIDDEN);
  }
}

module.exports = Forbidden;
