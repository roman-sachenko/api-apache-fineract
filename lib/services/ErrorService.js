/**
 * This module helps to handle API errors
 * Wraps API Errors responses in order to get standardized error messages
 */
const ErrorCollection = require('./errors');

/**
 * ErrorService Class
 * Wraps HTTP/HTTPS response errors
 */
const ErrorService = class ErrorService {
  /**
   * 
   * @param {Object} err - error object for wrapping
   * @return {Object} - mapped and wrapper API response error 
   */
  static handleError(err) {
    const errorBody = (err.response && err.response.body) ? err.response.body : '';

    switch (err.statusCode) {
      case 400:
        return new ErrorCollection.BadRequest(errorBody);
      case 401:
        return new ErrorCollection.NotAuthorized(errorBody);
      case 403:
        return new ErrorCollection.Forbidden(errorBody);
      case 404:
        return new ErrorCollection.NotFound(errorBody);
      case 409:
        return new ErrorCollection.AlreadyExists(errorBody);
      default:
        return new ErrorCollection.ApiError();
    }
  }
};

module.exports = ErrorService;
