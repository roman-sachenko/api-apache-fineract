const httpStatus = require('http-status');
const ApiError = require('./ApiError');

/**
 * @extends ApiError
 */
class Forbidden extends ApiError {
  constructor(message) {
    super(message || 'Forbidden', httpStatus.FORBIDDEN);
  }
}

module.exports = Forbidden;
