const requestProvider = require('request-promise');
const ErrorHandler = require('./ErrorService');
/**
 * Class represents API Calls/Request Service. 
 */
const ApiRequestService = class ApiRequestService {
  /**
   * 
   * @param {object} object - New API Data
   * @param {object} object.auth - Authentication data for API
   * @param {string} object.auth.user - API username 
   * @param {string} object.auth.pass - API password 
   * @param {string} object.apiVersion - API version 
   */
  constructor({ auth, apiVersion }) {
    this._errorHandler = ErrorHandler;
    this._requestProvider = requestProvider;
    this._urlBase = `https://demo.openmf.org/fineract-provider/api/${apiVersion}`;
    this._apiVersion = apiVersion;
    this._basicApiOptions = {
      resolveWithFullResponse: true,
      simple: true,
      json: true,
      headers: {
        Authorization: `Basic ${Buffer.from(`${auth.user}:${auth.pass}`).toString('base64')}`,
        'Content-Type': 'application/json',
        'Fineract-Platform-TenantId': 'default',
      },
    };
  }

  /**
   * Gets request provider, library for making HTTP/HTTPS requests
   * @return {Object} - request provider
   */
  get _request() {
    return this._requestProvider;
  }

  /**
   * Gets basic request options (basic HTTP/HTTPS settings)
   */
  get _basicOptions() {
    return this._basicApiOptions;
  }

  /**
   * Gets full request settings including basic options
   * @param {String} resourcePath - API resourcePath (client, loan, loan product etc.)
   * @param {String} method - HTTP/HTTPS Method (post, get, update, delete, patch) 
   * @param {Object} body - HTTP/HTTPS body parameters
   * @param {Object} query - query parameters (query string)
   */
  _getFullRequestOptions(resourcePath, { method = 'GET', body = {}, query = {} } = {}) {
    const options = {};
    Object.assign(options, { method }, { body }, { qs: query }, this._basicOptions, {
      uri: `${this._urlBase}/${resourcePath}`,
    });
    return options;
  }

  /**
   * 
   * @param {String} resourcePath - API resourcePath (client, loan, loan product etc.)
   * @param {String} method- HTTP/HTTPS Method (post, get, update, delete, patch) 
   * @param {Object} body - HTTP/HTTPS body parameters
   * @param {Object} query - query parameters (query string)
   * @return {Promise} 
   */
  async _sendRequest(resourcePath, method, { body, query } = {}) {
    try {
      const requestOptions = this._getFullRequestOptions(resourcePath, { method, body, query });
      const requestResult = await this._request(requestOptions);
      return requestResult.body;
    } catch (err) {
      const error = this._errorHandler.handleError(err);
      throw error;
    }
  }

  /**
   * Represents GET request
   * @param {String} resourcePath - API resourcePath (client, loan, loan product etc.)
   * @param {Object} query - query parameters (query string)
   * @return {Promise}
   */
  get(resourcePath, { query } = {}) {
    return this._sendRequest(resourcePath, 'GET', { query });
  }

  /**
   * Represents POST request
   * @param {String} resourcePath - API resourcePath (client, loan, loan product etc.)
   * @param {Object} query - query parameters (query string)
   * @param {Object} body - body parameters
   * @return {Promise}
   */
  post(resourcePath, { body, query } = {}) {
    return this._sendRequest(resourcePath, 'POST', { body, query });
  }

  /**
   * Represents PUT request
   * @param {String} resourcePath - API resourcePath (client, loan, loan product etc.)
   * @param {Object} query - query parameters (query string)
   * @param {Object} body - body parameters
   * @return {Promise}
   */
  put(resourcePath, { body } = {}) {
    return this._sendRequest(resourcePath, 'PUT', { body, query });
  }

  /**
   * Represents DELETE request
   * @param {String} resourcePath - API resourcePath (client, loan, loan product etc.)
   * @param {Object} query - query parameters (query string)
   * @param {Object} body - body parameters
   * @return {Promise}
   */
  delete(resourcePath, { body, query } = {}) {
    return this._sendRequest(resourcePath, 'DELETE', { body, query });
  }
};

module.exports = ApiRequestService;
