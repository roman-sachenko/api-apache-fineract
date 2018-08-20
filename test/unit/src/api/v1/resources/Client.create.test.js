const { ApiRequestService } = require('./../../../dependencies').services;
const { config, testData, api } = require('./../../../dependencies');

const ResourcePath = config.api.v1.resources.client;
const ClientApi = api.v1.Client;

const apiRequestService = new ApiRequestService({ auth: config.api.v1.auth, apiVersion: 'v1' });

let clientApi = null;
let createdClientData = null;


describe('Client API Test: Create', () => {

  beforeAll(() => {

    apiRequestService.get = jest.fn();
    apiRequestService.post = jest.fn().mockImplementation(() => {
      createdClientData = testData.client.getCreationResult();
      return createdClientData;
    });
    clientApi = new ClientApi(ResourcePath, apiRequestService);

  });

  test('#Create one: valid data provided', async () => {

    const data = testData.client.getValidData();
    const createdClientObject = await clientApi.createOne(data);

    expect(apiRequestService.post).toHaveBeenCalledWith(`${ResourcePath}/`, { body: data });
    expect(createdClientObject).toEqual(createdClientData);
  });

  test('#Create one: no valid data provided', async () => {
    expect(() => {
      clientApi.createOne();
    }).toThrow();
    expect(apiRequestService.post).toHaveBeenCalled();
  });
});
