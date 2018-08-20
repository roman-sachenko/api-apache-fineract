const { ApiRequestService } = require('./../../../dependencies');
const ClientApi = require('./../../../../../lib/api/v1/resources/Client');

jest.mock('./../../../../../lib/services/ApiRequestService');


describe('Client API Test', () => {

  beforeEach(() => {
    mockedApiRequestService = new ApiRequestService();

    mockedApiRequestService.post.mockImplementation((resourcePath, { body }) => {
      return body;
    });

    mockedApiRequestService.get.mockImplementation((resourcePath, { query }) => {
      return { resourcePath, query };
    });
  });

  test('#Create one: valid data provided', () => {
    const clientApi = new ClientApi('client', mockedApiRequestService);

    const data = { name: 'test name' };
    const result = clientApi.createOne(data);

    expect(result).toEqual(data);
  });

});
