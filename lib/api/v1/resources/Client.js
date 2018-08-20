const Resource = require('../../../api/v1/Resource');

/**
 * Represents Client API V1
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
   */
  getMany({ query } = {}) {
    // query = Client._mapQueryFilters(query);
    return this._apiRequest.get(this._getFullResourcePath(), { query });
  }

  // static _mapQueryFilters(query = {}) {
  //   if (!query.offset) {
  //     query.offset = 0;
  //   }

  //   query.offset = query.offset ? query.offset : 0;
  //   query.limit = !Number.isNaN(Number(query.limit)) ? query.limit : 200;

  //   const SORT_BY_ALLOWED = ['ASK', 'DESK'];

  //   if (query.orderBy && !(query.sortBy && SORT_BY_ALLOWED.includes(sortBy.toUpperCase()))) {
  //     query.sortBy = sortBy.toUpperCase();
  //   } else {
  //     delete query.sortBy;
  //   }

  //   if (!query.orphansOnly) {
  //     query.orphansOnly = false;
  //   }

  //   return query;
  // }
};

module.exports = Client;
