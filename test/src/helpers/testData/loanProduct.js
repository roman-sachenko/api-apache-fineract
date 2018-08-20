const faker = require('faker');

module.exports = {
  getValidData() {
    return {
      name: faker.random.uuid(),
      shortName: faker.random.uuid(),
      currencyCode: faker.random.word(),
      digitsAfterDecimal: faker.random.number(),
      inMultiplesOf: faker.random.word(),
      principal: faker.random.word(),
      numberOfRepayments: faker.random.number(),
      repaymentEvery: faker.random.number(),
      amortizationType: faker.random.word(),
      repaymentFrequencyType: faker.random.word(),
      interestRatePerPeriod: faker.random.number(),
      interestType: faker.random.word(),
      interestCalculationPeriodType: faker.random.word(),
      transactionProcessingStrategyId: faker.random.uuid(),
      daysInMonthType: faker.random.uuid(),
      daysInYearType: new Date(),
      accountingRule: new Date(),
      interestRateFrequencyType: new Date(),
      isInterestRecalculationEnabled: faker.random.boolean(),
    };
  },
};
