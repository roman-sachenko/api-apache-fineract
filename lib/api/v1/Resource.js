/**
 * Represents API Entities
 * Contains basic methods for CRUD operations and works withing the instance of API Request Service
 */
class Resource {
  /**
  * Create Resource
  * @constructor
  * @param {string} resourcePath - resource endpoint, represents entity URI
  * @param {string} apiRequestService - api request instance (ApiRequestService Class) for making API requests
  */
  constructor(resourcePath, apiRequestService) {
    this._apiRequestService = apiRequestService;
    this._resourcePath = resourcePath;
  }

  /**
   * Gets the full resource path (assigns resource name/path to a full API URL)
   * @param {string} itemId - optional parameter, represents resource id
   * @return {string} The resource value
   */
  _getFullResourcePath(itemId = '') {
    return `${this._resourcePath}/${itemId}`;
  }

  /**
   * Gets API request instance
   * @return {Object} - API request instance
   */
  get _apiRequest() {
    return this._apiRequestService;
  }

  /**
   * Shared method for entity/resource creation
   * @param {Object} inputData 
   * @return {Object}
   */
  _createOne(inputData) {
    return this._apiRequest.post(this._getFullResourcePath(), { body: inputData });
  }

  /**
   * Shared method for entity/resource retrieving
   * @param {String} itemId 
   * @param {Object} query 
   * @return {Object}
   */
  _getOne(itemId, { query } = {}) {
    if (query.fields) {
      query.fields = query.fields.join(',');
    }
    return this._apiRequest.get(this._getFullResourcePath(itemId), { query });
  }

  /**
   * Shared method for entity/resource list retrieving
   * @param {Object} query
   * @return {Array}
   */
  _getMany({ query } = {}) {
    if (query.fields) {
      query.fields = query.fields.join(',');
    }
    return this._apiRequest.get(this._getFullResourcePath(), { query });
  }
}

module.exports = Resource;
