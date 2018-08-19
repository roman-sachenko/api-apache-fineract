const ApiV1 = require('./api/v1');
const ApiV2 = require('./api/v2');
/**
 * API factory. Creates required API Version instance. 
 * API V1 is available only for now. API V2 is shown as an example.
 */
const ApiFactory = {
  /**
   * Create API V1 instance
   * @param {object} auth - authentication parameters for API 
   * @param {string} auth.user - API username 
   * @param {string} auth.pass - API password 
   */
  V1({ user, pass }) {
    return ApiV1.bind(ApiV1, { user, pass });
  },

  /**
   * Create API V2 instance
   * @param {object} auth - authentication parameters for API 
   * @param {string} auth.user - API username 
   * @param {string} auth.pass - API password 
   */
  V2({ user, pass }) {
    return ApiV2.bind(ApiV2, { user, pass });
  },
};

module.exports = ApiFactory;
