const Resource = require('../../../api/v1/Resource');
/**
 * Represents Loan API V1
 * @constructor
 * @param {String} resourcePath - resource endpoint, represents entity UR
 * @param {String} apiRequestService - api request instance (ApiRequestService Class) for making API requests
 */
const Loan = class Load extends Resource {

  /**
   * @private
   * @param {String} command ('approve', 'reject', 'withdrawnByApplicant')
   * @param {String} itemId 
   * @param {Object} body 
   * @return {String}
   */
  _executeCommand(command, itemId, body) {
    const query = { command };
    return this._apiRequest.post(this._getFullResourcePath(itemId), { query, body });
  }

  /**
   * Creates a new loan
   * @param {Object} inputData 
   * @param {Strings} inputData.firstname 
   * @param {Strings} inputData.lastname 
   * @param {Strings} inputData.fullname
   * @param {Boolean} inputData.active
   * @param {Boolean} inputData.activationDate
   */
  createOne(inputData) {
    return this.createOne(inputData);
  }

  /**
   * Gets one loan by Id
   * @param {String} itemId 
   * @param {Object} query
   * @param {Boolean} query.template
   * @param {Array} query.associations (all, repaymentSchedule, originalSchedule, futureSchedule, transactions, charges, guarantors, collateral)
   * @param {Array} query.exclude (all, repaymentSchedule, originalSchedule, futureSchedule, transactions, charges, guarantors, collateral)
   * @param {Array} query.fields
   */
  getOne(itemId, { query } = {}) {
    return this._getOne(itemId, query);
  }

  /**
   * Gets loan collection
   * @param {Object} query 
   * @param {Strings} query.offset (default:200) 
   * @param {Strings} query.limit 
   * @param {Strings} query.orderBy
   * @param {Strings} query.sortBy
   * @param {Strings} query.officeId
   * @param {Strings} query.underHierarchy
   * @param {Array} query.fields (accountNo, externalId)
   */
  getMany({ query } = {}) {
    return this._getMany({ query });
  }

  /**
   * Approves one loan
   * @param {String} itemId 
   * @param {Object} body 
   * @param {String} body.approvedOnDate 
   * @param {Number} body.approvedLoanAmount 
   * @param {String} body.expectedDisbursementDate 
   */
  approveOne(itemId, body) {
    return this._executeCommand('approve', itemId, body);
  }

  /**
   * Rejects one loan
   * @param {String} itemId 
   * @param {Object} body 
   * @param {String} body.approvedOnDate 
   * @param {Number} body.approvedLoanAmount 
   * @param {String} body.expectedDisbursementDate 
   */
  rejectOne(itemId, body) {
    return this._executeCommand('reject', itemId, body);
  }

  /**
   * Withdraw one loan
   * @param {String} itemId 
   * @param {Object} body 
   * @param {String} body.withdrawalDate 
   * @param {Number} body.withdrawalReasonId 
   */
  withdrawOne(itemId, body) {
    return this._executeCommand('withdrawnByApplicant', itemId, body);
  }
};

module.exports = Loan;
