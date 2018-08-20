const faker = require('faker');

module.exports = {
  shared: {
    getRandomId() {
      return faker.random.uuid();
    },
  },

  client: require('./testData/client'),

  loan: require('./testData/loan'),

  loanProduct: require('./testData/loanProduct'),
};
