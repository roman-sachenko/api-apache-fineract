const Resource = require('../../../api/v1/Resource');

/**
 * Represents Client API V1
 * @extends Resource
 * @constructor
 * @param {String} resourcePath - resource endpoint, represents entity UR
 * @param {String} apiRequestService - api request instance (ApiRequestService Class) for making API requests
 */
const Client = class Client extends Resource {
  /**
   * Creates a new client
   * @param {Object} inputData 
   * @param {Strings} inputData.firstname 
   * @param {Strings} inputData.lastname 
   * @param {Strings} inputData.fullname 
   * @param {Boolean} inputData.active
   * @param {Boolean} inputData.activationDate
   * @return {Promise}
   */
  createOne(inputData) {
    return this._createOne(inputData);
  }

  /**
   * Gets one client by Id
   * @param {String} itemId - client id 
   * @param {Object} query
   * @param {Boolean} query.template
   * @param {Array} query.fields
   * @param {Array} query.fields (displayName, officeName)
   * @return {Promise}
   */
  getOne(itemId, { query } = {}) {
    return this._getOne(itemId, { query });
  }

  /**
   * Gets clients collection
   * @param {Object} query 
   * @param {Strings} query.offset (default:200) 
   * @param {Strings} query.limit 
   * @param {Strings} query.orderBy
   * @param {Strings} query.sortBy
   * @param {Strings} query.underHierarchy
   * @param {String} query.sqlSearch
   * @param {Boolean} query.orphansOnly
   * @param {Array} query.fields (displayName, firstname, lastname, externalid)
   * @return {Promise}
   */
  getList({ query } = {}) {
    return this._getList({ query });
  }
};

module.exports = Client;
