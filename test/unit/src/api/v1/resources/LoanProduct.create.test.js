const { ApiRequestService } = require('./../../../dependencies').services;
const { config, testData, api } = require('./../../../dependencies');

const ResourcePath = config.api.v1.resources.loanProduct;
const LoanProductApi = api.v1.LoanProduct;
const apiRequestService = new ApiRequestService({ auth: config.api.v1.auth, apiVersion: 'v1' });
let loanProductApi = null;


describe('LoanProduct API Test: Create', () => {

  beforeAll(() => {

    apiRequestService.get = jest.fn();
    apiRequestService.post = jest.fn();
    loanProductApi = new LoanProductApi(ResourcePath, apiRequestService);

  });

  test('#Create one: valid data provided', async () => {

    const data = testData.loanProduct.getValidData();
    await loanProductApi.createOne(data);

    expect(apiRequestService.post).toHaveBeenCalledWith(`${ResourcePath}/`, { body: data });
  });

  test('#Create one: no valid data provided', async () => {
    expect(() => {
      loanProductApi.createOne();
    }).toThrow();
    expect(apiRequestService.post).toHaveBeenCalled();
  });
});
