
### [<- Main](../../../README.md)
### [<- API Usage Index](./usage.index.md)


## API Usage:Clients

- [Description](#description)
- [Create a new loan application](#create-a-new-loan)
- [Retrieve loan application](#retrieve-loan-application)
- [Retrieve loan application list](#retrieve-loan-application-list)
- [Approve loan application](#approve-loan-application)
- [Reject loan application list](#rject-loan-application)
- [Withdraw loan application list](#withdraw-loan-application)



## Description

Fineract Loan API

## Create a new loan 

```js
const newLoanData = {
  dateFormat: 'dd MMMM yyyy',
  locale: 'en_GB',
  clientId: 1,
  productId: 1,
  principal: '10,000.00',
  loanTermFrequency: 12,
  loanTermFrequencyType: 2,
  loanType: 'individual',
  numberOfRepayments: 10,
  repaymentEvery: 1,
  repaymentFrequencyType: 2,
  interestRatePerPeriod: 10,
  amortizationType: 1,
  interestType: 0,
  interestCalculationPeriodType: 1,
  transactionProcessingStrategyId: 1,
  expectedDisbursementDate: '10 Jun 2013',
  submittedOnDate: '10 Jun 2013',
  linkAccountId : '1',
  fixedEmiAmount:1100,
  maxOutstandingLoanBalance:'35000',
  disbursementData:[
    {
      expectedDisbursementDate:'01 November 2013',
      principal:22000,
      approvedPrincipal:22000
    }
  ],
  datatables: [
    {
      registeredTableName: 'loan_balance',
      data: {
        locale: 'en',
        'account_number': '0000001',
        Balance: '3300.00',
        DateField: '01 December 2016 00:00',
        dateFormat: 'dd MMMM yyyy HH:mm',
        DateTimeField: '01 December 2016 12:00'
      }
    },
    {
      registeredTableName: 'Date Loan Field',
      data: {
        locale: 'en',
        'Activation Date': '01 December 2016 00:00',
        dateFormat: 'dd MMMM yyyy HH:mm'
      }
    }
  ]
}

const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const newLoan = await api.client.createOne(newLoanData);
```

# Retrieve a loan application 
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const client = api.client.getOne(loanId);
```

# Retrieve loan application list
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const loanList = api.loan.getList();
```

### Approve loan application

```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const approveLoanData = { approvedOnDate: new Date() };
const approveResult = api.loan.approve(approveLoanData);

```

### Reject loan application

```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const rejectLoanData = { rejectedOnDate: new Date() };
const rejectResult = api.loan.reject(rejectLoanData);

```

### Withdraw loan application

```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const withdrawLoanData = { approvedOnDate: new Date() };
const withdrawResult = api.loan.withdraw(withdrawLoanData);

```