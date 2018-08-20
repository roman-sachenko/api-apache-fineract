const faker = require('faker');

module.exports = {
  getValidData() {
    return {
      firstname: faker.name.firstName(),
      lastname: faker.name.firstName(),
      active: faker.random.boolean(),
      activationDate: new Date(),
    };
  },
  getCreationResult() {
    return {
      officeId: 1,
      clientId: 1,
      resourceId: 1,
      savingsId: 10,
    };
  },
  getRetrieveOneResult() {
    return {
      id: 27,
      accountNo: '000000027',
      status: {
        id: 300,
        code: 'clientStatusType.active',
        value: 'Active',
      },
      active: true,
      activationDate: [
        2013,
        1,
        1,
      ],
      firstname: 'savings',
      lastname: 'test',
      displayName: 'savings test',
      officeId: 1,
      officeName: 'Head Office',
      timeline: {
        submittedOnDate: [
          2013,
          1,
          1,
        ],
        submittedByUsername: 'mifos',
        submittedByFirstname: 'App',
        submittedByLastname: 'Administrator',
        activatedOnDate: [
          2013,
          1,
          1,
        ],
        activatedByUsername: 'mifos',
        activatedByFirstname: 'App',
        activatedByLastname: 'Administrator',
      },
      savingsProductId: 4,
      savingsProductName: 'account overdraft',
      groups: [],
    };
    
  },
};
