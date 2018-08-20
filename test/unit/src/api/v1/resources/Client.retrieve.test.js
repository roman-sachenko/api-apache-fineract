const { ApiRequestService } = require('./../../../dependencies').services;
const { config, testData, api } = require('./../../../dependencies');

const ResourcePath = config.api.v1.resources.client;
const ClientApi = api.v1.Client;
const apiRequestService = new ApiRequestService({ auth: config.api.v1.auth, apiVersion: 'v1' });

let clientApi = null;
let retrieveOneClientData = null;

describe('Client API Test: Retrieve', () => {

  beforeAll(() => {

    apiRequestService.get = jest.fn().mockImplementation(() => {
      retrieveOneClientData = testData.client.getRetrieveOneResult();
      return retrieveOneClientData;
    });
    apiRequestService.post = jest.fn();
    clientApi = new ClientApi(ResourcePath, apiRequestService);

  });

  test('#Retrieve one: valid data provided', async () => {

    const itemId = testData.shared.getRandomId();
    const clientObject = await clientApi.getOne(itemId);

    expect(apiRequestService.get).toHaveBeenCalledWith(`${ResourcePath}/${itemId}`, {});
    expect(clientObject).toEqual(retrieveOneClientData);
  });

  test('#Retrieve one: missing id', async () => {

    expect(() => {
      clientApi.getOne();
    }).toThrow();
    expect(apiRequestService.get).toHaveBeenCalled();
  });

  test('#Retrieve List: valid request', async () => {
    await clientApi.getList();

    expect(apiRequestService.get).toHaveBeenCalledWith(`${ResourcePath}/`, {});
  });

});
