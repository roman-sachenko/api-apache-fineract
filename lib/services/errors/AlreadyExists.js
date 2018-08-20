const httpStatus = require('http-status');
const ApiError = require('./ApiError');

/**
 * @extends ApiError
 */
class AlreadyExist extends ApiError {
  constructor(message) {
    super(message || 'Already Exist', httpStatus.CONFLICT);
  }
}

module.exports = AlreadyExist;
