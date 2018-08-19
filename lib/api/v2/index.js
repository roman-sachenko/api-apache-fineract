const ApiV1 = require('../v1');
const ApiRequestService = require('../../services/ApiRequestService');

/**
 * Represents API V2 Class
 * Contains API V2 entities and methods
 */
const ApiV2 = class ApiV2 extends ApiV1 {
  /**
  * @constructor
  * @param {object} auth - authentication parameters for API 
  * @param {string} auth.user - API username 
  * @param {string} auth.pass - API password 
  */
  constructor({ user, pass } = {}) {
    super({ user, pass });
    this._version = 'v2';
    const auth = { user, pass };

    this._apiRequest = new ApiRequestService({ auth, apiVersion: this._version });
    this._setApiResources();
  }
};

module.exports = ApiV2;
