const httpStatus = require('http-status');
const ApiError = require('./ApiError');

/**
 * @extends ApiError
 */
class NotAuthorized extends ApiError {
  constructor(message) {
    super(message || 'Not Authorized', httpStatus.UNAUTHORIZED);
  }
}

module.exports = NotAuthorized;
