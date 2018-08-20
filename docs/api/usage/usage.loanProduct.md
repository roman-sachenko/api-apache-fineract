
### [<- Main](../../../README.md)
### [<- API Usage Index](./usage.index.md)


## API Usage:Clients

- [Description](#description)
- [Create a new loan product](#create-a-new-loan-product)
- [Retrieve a loan product](#retrieve-loan-product)
- [Retrieve loan product list](#retrieve-loan-product-list)



## Description

Fineract Loan Product API

## Create a new client 

```js
const loanProductData = {
  currencyCode:'USD',
  includeInBorrowerCycle:'true',
  useBorrowerCycle:true,
  digitsAfterDecimal:'2',
  inMultiplesOf:'0',
  repaymentFrequencyType:0,
  interestRateFrequencyType:2,
  amortizationType:1,
  interestType:0,
  interestCalculationPeriodType:1,
  transactionProcessingStrategyId:1,
  principalVariationsForBorrowerCycle:[],
  interestRateVariationsForBorrowerCycle:[],
  numberOfRepaymentVariationsForBorrowerCycle:[
    {
        valueConditionType:2,
        borrowerCycleNumber:'1',
        minValue:'5',
        defaultValue:'10',
        maxValue:'15'
    },
    {
        valueConditionType:3,
        borrowerCycleNumber:'1',
        minValue:'7',
        defaultValue:'15',
        maxValue:'20'
    }
  ],
  allowAttributeOverrides:
    {amortizationType : true,
     interestType : true,
     transactionProcessingStrategyId : false,
     interestCalculationPeriodType : true,
     inArrearsTolerance : false,
     repaymentEvery : true,
     graceOnPrincipalAndInterestPayment : true,
     graceOnArrearsAgeing : true
     },
  accountingRule:'2',
  name:'product 5',
  shortName:'prd5',
  principal:'5000',
  numberOfRepayments:'7',
  repaymentEvery:'7',
  interestRatePerPeriod:'5',
  paymentChannelToFundSourceMappings:[],
  feeToIncomeAccountMappings:[],
  penaltyToIncomeAccountMappings:[],
  charges:[],
  overdueDaysForNPA:2,
  dateFormat:'dd MMMM yyyy',
  locale:'en',
  fundSourceAccountId:1,
  loanPortfolioAccountId:2,
  transfersInSuspenseAccountId:3,
  interestOnLoanAccountId:4,
  incomeFromFeeAccountId:8,
  incomeFromPenaltyAccountId:9,
  writeOffAccountId:10,
  overpaymentLiabilityAccountId:11,
  daysInMonthType:1,
  daysInYearType:1,
  isInterestRecalculationEnabled:'false',
  holdGuaranteeFunds:'false',
  principalThresholdForLastInstallment:20
};

const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const newLoanProduct = await api.loanProduct.createOne(loanProductData);
```

# Retrieve loan product 
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const loanProduct = api.client.getOne(loanProductId);
```

# Retrieve loan product list
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const loanProductList = api.loanProduct.getList();
```