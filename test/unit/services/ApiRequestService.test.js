const { ApiRequestService } = require('../dependencies');

// jest.mock('request-promise');

describe('Services Test: API Request Service', () => {
  test('API config', () => {
    const user = 'mifos';
    const pass = 'password';
    const auth = { user, pass };
    
    const apiRequestService = new ApiRequestService({ auth, apiVersion: 'v1' });
    const basicOptions = apiRequestService._basicOptions;
    expect(basicOptions.headers['Content-Type']).toEqual('application/json');
  });
});
