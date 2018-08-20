const { ApiRequestService } = require('./../../../dependencies').services;
const { config, testData, api } = require('./../../../dependencies');

const ResourcePath = config.api.v1.resources.loan;
const LoanApi = api.v1.Loan;
const apiRequestService = new ApiRequestService({ auth: config.api.v1.auth, apiVersion: 'v1' });
let loanApi = null;


describe('Loan API Test: Create', () => {

  beforeAll(() => {

    apiRequestService.get = jest.fn();
    apiRequestService.post = jest.fn();
    loanApi = new LoanApi(ResourcePath, apiRequestService);

  });

  test('#Create one: valid data provided', async () => {

    const data = testData.loan.getValidData();
    await loanApi.createOne(data);

    expect(apiRequestService.post).toHaveBeenCalledWith(`${ResourcePath}/`, { body: data });
  });

  test('#Create one: no valid data provided', async () => {
    expect(() => {
      loanApi.createOne();
    }).toThrow();
    expect(apiRequestService.post).toHaveBeenCalled();
  });
});
