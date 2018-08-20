const httpStatus = require('http-status');
const ApiError = require('./ApiError');


/**
 * Represents BadRequest HTTP/HTTPS Error
 * statusCode: 400
 * @extends ApiError
 * @constructor
 * @param {String} message - error message
 */
class BadRequest extends ApiError {
  constructor(message) {
    super(message || 'Bad Request', httpStatus.BAD_REQUEST);
  }
}

module.exports = BadRequest;
