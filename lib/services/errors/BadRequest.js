const httpStatus = require('http-status');
const ApiError = require('./ApiError');


/**
 * @extends ApiError
 */
class BadRequest extends ApiError {
  constructor(message) {
    super(message || 'Bad Request', httpStatus.BAD_REQUEST);
  }
}

module.exports = BadRequest;
