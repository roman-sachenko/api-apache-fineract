const ClientApi = require('./resources/Client');
const LoanApi = require('./resources/Loan');
const LoanProductApi = require('./resources/LoanProduct');
const ApiRequestService = require('../../services/ApiRequestService');

/**
 * Represents API V1 Class
 * Contains API V1 entities and methods
 */
const ApiV1 = class ApiV1 {
  /**
  * @constructor
  * @param {object} auth - authentication parameters for API 
  * @param {string} auth.user - API username 
  * @param {string} auth.pass - API password 
  */
  constructor({ user, pass } = {}) {
    this._version = 'v1';
    const auth = { user, pass };

    this._apiRequest = new ApiRequestService({ auth, apiVersion: this._version });
    this._setApiResources();
  }

  /**
   * Sets API resources/injects available functionality
   */
  _setApiResources() {
    this._client = new ClientApi('clients', this._apiRequest);
    this._loan = new LoanApi('loans', this._apiRequest);
    this._loanProduct = new LoanProductApi('loanproducts', this._apiRequest);
  }

  /**
   * Gets API request instance
   * @return {Object} - API request object
   */
  get _apiRequest() {
    return this._apiRequestService;
  }

  /**
   * Sets API request instance
   * @param {Object} - API request instance
   */
  set _apiRequest(value) {
    this._apiRequestService = value;
  }

  /**
   * Returns client object with related functionality
   * @return {Object} - Client object with related functionality
   */
  get client() {
    return this._client;
  }

  /**
   * Returns loan object with related functionality
   * @return {Object} - Loan object with related functionality
   */
  get loan() {
    return this._loan;
  }

  /**
   * Returns Loan Product object with related functionality
   * @return {Object} - Loan Product object with related functionality
   */
  get loanProduct() {
    return this._loanProduct;
  }

};

module.exports = ApiV1;
