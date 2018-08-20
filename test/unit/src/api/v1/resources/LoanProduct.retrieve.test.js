const { ApiRequestService } = require('./../../../dependencies').services;
const { config, testData, api } = require('./../../../dependencies');

const RequestedApi = api.v1.LoanProduct;
const requestedResource = config.api.v1.resources.loanProduct;
const apiRequestService = new ApiRequestService({ auth: config.api.v1.auth, apiVersion: 'v1' });
let requestedApi = null;

describe('LoanProduct API Test: Retrieve', () => {

  beforeAll(() => {

    apiRequestService.get = jest.fn();
    apiRequestService.post = jest.fn();
    requestedApi = new RequestedApi(requestedResource, apiRequestService);

  });

  test('#Retrieve one: valid data provided', async () => {
    
    const itemId = testData.shared.getRandomId();
    await requestedApi.getOne(itemId);

    expect(apiRequestService.get).toHaveBeenCalledWith(`${requestedResource}/${itemId}`, {});
  });

  test('#Retrieve one: missing id', async () => {

    expect(() => {
      requestedApi.getOne();
    }).toThrow();
    expect(apiRequestService.get).toHaveBeenCalled();
  });

  test('#Retrieve List: valid request', async () => {
    await requestedApi.getList();

    expect(apiRequestService.get).toHaveBeenCalledWith(`${requestedResource}/`, {});
  });

});
