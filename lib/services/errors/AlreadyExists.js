const httpStatus = require('http-status');
const ApiError = require('./ApiError');

/**
 * Represents AlreadyExists/Conflict HTTP/HTTPS Error
 * statusCode: 409
 * @extends ApiError
 * @constructor
 * @param {String} message - error message
 */
class AlreadyExists extends ApiError {
  constructor(message) {
    super(message || 'Already Exist', httpStatus.CONFLICT);
  }
}

module.exports = AlreadyExists;
