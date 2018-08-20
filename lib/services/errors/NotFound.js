const httpStatus = require('http-status');
const ApiError = require('./ApiError');

/**
 * @extends ApiError
 */
class NotFound extends ApiError {
  constructor(message) {
    super(message || 'Not Found', httpStatus.NOT_FOUND);
  }
}

module.exports = NotFound;
