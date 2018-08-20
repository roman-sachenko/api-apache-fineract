module.exports = {
  services: {
    ApiRequestService: require('../../lib/services/ApiRequestService'),
  },
  api: {
    v1: {
      Client: require('../../lib/api/v1/resources/Client'),
      Loan: require('../../lib/api/v1/resources/Loan'),
      LoanProduct: require('../../lib/api/v1/resources/LoanProduct'),
      Resource: require('../../lib/api/v1/Resource'),
    },
  },
  config: require('../config.json'),
  testData: require('./helpers/testData'),
};
