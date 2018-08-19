const requestProvider = require('request-promise');
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
   * @param {String} resource - API resource (client, loan, loan product etc.)
   * @param {String} method - HTTP/HTTPS Method (post, get, update, delete, patch) 
   * @param {Object} body - HTTP/HTTPS body parameters
   * @param {Object} query - query parameters (query string)
   */
  _getFullRequestOptions(resource, { method, body = {}, query = {} }) {
    const options = {};
    Object.assign(options, { method }, { body }, { qs: query }, this._basicOptions, {
      uri: `${this._urlBase}/${resource}`,
    });
    return options;
  }

  /**
   * 
   * @param {String} resource - API resource (client, loan, loan product etc.)
   * @param {String} method- HTTP/HTTPS Method (post, get, update, delete, patch) 
   * @param {Object} body - HTTP/HTTPS body parameters
   * @param {Object} query - query parameters (query string)
   * @return {Promise} 
   */
  async _sendRequest(resource, method, { body, query } = {}) {
    try {
      const requestOptions = this._getFullRequestOptions(resource, { method, body, query });
      console.log(requestOptions);
      const requestResult = await this._request(requestOptions);
      return requestResult.body;
    } catch (err) {
      throw err.response.body;
    }
  }

  /**
   * Represents GET request
   * @param {String} resource - API resource (client, loan, loan product etc.)
   * @param {Object} query - query parameters (query string)
   * @return {Promise}
   */
  get(resource, { query }) {
    return this._sendRequest(resource, 'GET', { query });
  }

  /**
   * Represents POST request
   * @param {String} resource - API resource (client, loan, loan product etc.)
   * @param {Object} query - query parameters (query string)
   * @param {Object} body - body parameters
   * @return {Promise}
   */
  post(resource, { body, query }) {
    return this._sendRequest(resource, 'POST', { body, query });
  }

  /**
   * Represents PUT request
   * @param {String} resource - API resource (client, loan, loan product etc.)
   * @param {Object} query - query parameters (query string)
   * @param {Object} body - body parameters
   * @return {Promise}
   */
  put(resource, { body }) {
    return this._sendRequest(resource, 'PUT', { body, query });
  }

  /**
   * Represents DELETE request
   * @param {String} resource - API resource (client, loan, loan product etc.)
   * @param {Object} query - query parameters (query string)
   * @param {Object} body - body parameters
   * @return {Promise}
   */
  delete(resource, { body, query }) {
    return this._sendRequest(resource, 'DELETE', { body, query });
  }
};

module.exports = ApiRequestService;
