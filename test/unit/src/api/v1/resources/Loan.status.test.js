const { ApiRequestService } = require('./../../../dependencies').services;
const { config, testData, api } = require('./../../../dependencies');

const ResourcePath = config.api.v1.resources.loan;
const LoanApi = api.v1.Loan;
const apiRequestService = new ApiRequestService({ auth: config.api.v1.auth, apiVersion: 'v1' });
let loanApi = null;


describe('Loan API Test: Status', () => {

  beforeAll(() => {

    apiRequestService.get = jest.fn();
    apiRequestService.post = jest.fn();
    loanApi = new LoanApi(ResourcePath, apiRequestService);

  });

  test('#Approve one: valid data provided', async () => {

    const itemId = testData.shared.getRandomId();
    await loanApi.approveOne(itemId);

    expect(apiRequestService.post).toHaveBeenCalledWith(`${ResourcePath}/${itemId}`, { query: { command: 'approve' } });
  });

  test('#Reject one: valid data provided', async () => {

    const itemId = testData.shared.getRandomId();
    await loanApi.rejectOne(itemId);

    expect(apiRequestService.post).toHaveBeenCalledWith(`${ResourcePath}/${itemId}`, { query: { command: 'reject' } });
  });

  test('#Withdraw one: valid data provided', async () => {

    const itemId = testData.shared.getRandomId();
    await loanApi.withdrawOne(itemId);

    expect(apiRequestService.post).toHaveBeenCalledWith(`${ResourcePath}/${itemId}`, { query: { command: 'withdrawnByApplicant' } });
  });

  test('#Approve one: invalid data provided', async () => {
    expect(() => {
      loanApi.approveOne();
    }).toThrow();
    expect(apiRequestService.post).toHaveBeenCalled();
  });

  test('#Reject one: invalid data provided', async () => {
    expect(() => {
      loanApi.rejectOne();
    }).toThrow();
    expect(apiRequestService.post).toHaveBeenCalled();
  });

  test('#Withdraw one: invalid data provided', async () => {
    expect(() => {
      loanApi.withdrawOne();
    }).toThrow();
    expect(apiRequestService.post).toHaveBeenCalled();
  });

});
