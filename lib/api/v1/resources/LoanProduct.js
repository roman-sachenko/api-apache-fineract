const Resource = require('../../../api/v1/Resource');
/**
 * Represents Loan Product API V1
 * @constructor
 * @param {String} resourcePath - resource endpoint, represents entity UR
 * @param {String} apiRequestService - api request instance (ApiRequestService Class) for making API requests
 */
const LoanProduct = class LoanProduct extends Resource {
  /**
   * Creates a new loan product
   * @param {Object} inputData 
   * @param {Strings} inputData.name  
   * @param {Strings} inputData.shortName  
   * @param {Strings} inputData.currencyCode
   * @param {String} inputData.digitsAfterDecimal
   * @param {String} inputData.inMultiplesOf
   * @param {String} inputData.principal
   * @param {String} inputData.numberOfRepayments
   * @param {String} inputData.repaymentEvery
   * @param {String} inputData.repaymentFrequencyType
   * @param {String} inputData.interestRatePerPeriod
   * @param {String} inputData.interestRateFrequencyType
   * @param {String} inputData.amortizationType
   * @param {String} inputData.interestType
   * @param {String} inputData.interestCalculationPeriodType
   * @param {String} inputData.transactionProcessingStrategyId
   * @param {String} inputData.accountingRule
   * @param {String} inputData.isInterestRecalculationEnabled
   * @param {String} inputData.daysInYearType
   * @param {String} inputData.daysInMonthType
   */
  createOne(inputData) {
    return this.createOne(inputData);
  }

  
  /**
   * Gets one loan product by Id
   * @param {String} itemId
   * @param {Object} query
   * @param {Boolean} query.template
   * @param {Array} query.fields
   */
  getOne(itemId, { query } = {}) {
    return this._getOne(itemId, query);
  }

  /**
   * Gets loan products collections 
   * @param {Object} query
   * @param {String} query.associations
   */
  getMany({ query } = {}) {
    return this._getMany({ query });
  }
};

module.exports = LoanProduct;
