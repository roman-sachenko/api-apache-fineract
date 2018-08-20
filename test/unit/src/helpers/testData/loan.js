const faker = require('faker');

module.exports = {
  getValidData() {
    return {
      clientId: faker.random.uuid(),
      productId: faker.random.uuid(),
      principal: faker.random.word(),
      loanTermFrequency: faker.random.number(),
      loanTermFrequencyType: faker.random.word(),
      loanType: faker.random.word(),
      numberOfRepayments: faker.random.number(),
      repaymentEvery: faker.random.number(),
      amortizationType: faker.random.word(),
      repaymentFrequencyType: faker.random.word(),
      interestRatePerPeriod: faker.random.number(),
      interestType: faker.random.word(),
      interestCalculationPeriodType: faker.random.word(),
      transactionProcessingStrategyId: faker.random.uuid(),
      expectedDisbursementDate: new Date(),
      submittedOnDate: new Date(),
    };
  },
};
