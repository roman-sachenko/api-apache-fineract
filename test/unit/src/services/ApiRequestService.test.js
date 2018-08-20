const { ApiRequestService } = require('../dependencies').services;
const { config, testData } = require('../dependencies');

const API_VERSION = config.api.v1.name;
const apiRequestService = new ApiRequestService({ auth: config.api.v1.auth, apiVersion: API_VERSION });


describe('Services Test: API Request Service', () => {

  test('API headers: valid data provided', () => {

    const RESOURCE_PATH = config.api.v1.resources.client;
    const REQUEST_METHOD = 'POST';
    const REQUEST_BODY = testData.client.getValidData();
    const requestOptions = apiRequestService._getFullRequestOptions(RESOURCE_PATH, { method: REQUEST_METHOD, body: REQUEST_BODY });

    expect(requestOptions.headers['Content-Type']).toEqual('application/json');
    expect(requestOptions.headers['Fineract-Platform-TenantId']).toEqual('default');
    expect(requestOptions.resolveWithFullResponse).toEqual(true);
    expect(requestOptions.simple).toEqual(true);
    expect(requestOptions.json).toEqual(true);
    expect(requestOptions.uri).toEqual(`${config.api.v1.uri}${RESOURCE_PATH}`);
    expect(requestOptions.method).toEqual(REQUEST_METHOD);
    expect(requestOptions.body).toEqual(REQUEST_BODY);
  });


  test('API headers: HTTP method not provided', () => {

    const RESOURCE_PATH = config.api.v1.resources.client;
    const DEFAULT_METHOD = 'GET';
    const requestOptions = apiRequestService._getFullRequestOptions(RESOURCE_PATH);

    expect(requestOptions.headers['Content-Type']).toEqual('application/json');
    expect(requestOptions.headers['Fineract-Platform-TenantId']).toEqual('default');
    expect(requestOptions.resolveWithFullResponse).toEqual(true);
    expect(requestOptions.simple).toEqual(true);
    expect(requestOptions.json).toEqual(true);
    expect(requestOptions.uri).toEqual(`${config.api.v1.uri}${RESOURCE_PATH}`);
    expect(requestOptions.method).toEqual(DEFAULT_METHOD);
    expect(requestOptions.body).toEqual({});
  });

});
