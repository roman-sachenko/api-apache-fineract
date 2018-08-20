
### [<- Main](../../../README.md)
### [<- API Usage Index](./usage.index.md)


## API Usage: Loan

- [Description](#description)
- [Create a new loan application](#create-a-new-loan)
- [Retrieve loan application](#retrieve-loan-application)
- [Retrieve loan application list](#retrieve-loan-application-list)
- [Approve loan application](#approve-loan-application)
- [Reject loan application list](#rject-loan-application)
- [Withdraw loan application list](#withdraw-loan-application)



## Description

Fineract Loan API.
A Loan product is a template that is used when creating a loan. <br/>
Much of the template definition can be overridden during loan creation.

- Field Descriptions
    - **accountNo:** <br/>
        The account no. associated with this loan. Is auto generated if not provided at loan application creation time.
    - **externalId:** <br/>
        A place to put an external reference for this loan e.g. The ID another system uses.
        If provided, it must be unique.
    - **fundId:** <br/>
        Optional: For associating a loan with a given fund.
    - **loanOfficerId:** <br/>
        Optional: For associating a loan with a given staff member who is a loan officer.
    - **loanPurposeId:** <br/>
        Optional: For marking a loan with a given loan purpose option. Loan purposes are configurable and can be setup by system admin through code/code values screens.
    - **principal:** <br/>
        The loan amount to be disbursed to through loan.
    - **loanTermFrequency:** <br/>
        The length of loan term <br/>
        Used like: loanTermFrequency loanTermFrequencyType <br/>
        e.g. 12 Months <br/>
    - **loanTermFrequencyType:** <br/>
        The loan term period to use. Used like: loanTermFrequency loanTermFrequencyType <br/>
        e.g. 12 Months Example Values: 0=Days, 1=Weeks, 2=Months, 3=Years
    - **numberOfRepayments:** <br/>
        Number of installments to repay. <br/>
        Used like: numberOfRepayments Every repaymentEvery repaymentFrequencyType <br/>
        e.g. 10 (repayments) Every 12 Weeks
    - **repaymentEvery:** <br/>
        Used like: numberOfRepayments Every repaymentEvery repaymentFrequencyType <br/>
        e.g. 10 (repayments) Every 12 Weeks
    - **repaymentFrequencyType:** <br/>
        Used like: numberOfRepayments Every repaymentEvery repaymentFrequencyType <br/>
        e.g. 10 (repayments) Every 12 Weeks  <br/>
        Example Values: 0=Days, 1=Weeks, 2=Months
    - **interestRatePerPeriod:** <br/>
        Interest Rate. <br/>
        Used like: interestRatePerPeriod % interestRateFrequencyType - interestType <br/>
        e.g. 12.0000% Per year - Declining Balance
    - **interestRateFrequencyType:** <br/>
        Used like: interestRatePerPeriod% interestRateFrequencyType - interestType <br/>
        e.g. 12.0000% Per year - Declining Balance  <br/>
        Example Values: 2=Per month, 3=Per year
    - **graceOnPrincipalPayment:** <br/>
        Optional: Integer - represents the number of repayment periods that grace should apply to the principal component of a repayment period.
    - **graceOnInterestPayment:** <br/>
        Optional: Integer - represents the number of repayment periods that grace should apply to the interest component of a repayment period. Interest is still calculated but offset to later repayment periods.
    - **graceOnInterestCharged:** <br/>
        Optional: Integer - represents the number of repayment periods that should be interest-free.
    - **graceOnArrearsAgeing:** <br/>
        Optional: Integer - Used in Arrears calculation to only take into account loans that are more than graceOnArrearsAgeing days overdue.
    - **interestChargedFromDate:** <br/>
        Optional: Date - The date from with interest is to start being charged.
    - **expectedDisbursementDate:** <br/>
        The proposed disbursement date of the loan so a proposed repayment schedule can be provided.
    - **submittedOnDate:** <br/>
        The date the loan application was submitted by applicant.
    - **linkAccountId:** <br/>
        The Savings Account id for linking with loan account for payments.
    - **amortizationType:** <br/>
        Example Values: 0=Equal principle payments, 1=Equal installments
    - **interestType:** <br/>
        Used like: interestRatePerPeriod% interestRateFrequencyType - interestType <br/>
        e.g. 12.0000% Per year - Declining Balance  <br/>
        Example Values: 0=Declining Balance, 1=Flat
    - **interestCalculationPeriodType:** <br/>
        Example Values: 0=Daily, 1=Same as repayment period
    - **allowPartialPeriodInterestCalcualtion:** <br/>
        This value will be supported along with interestCalculationPeriodType as Same as repayment period to calculate interest for partial periods. Example: Interest charged from is 5th of April , Principal is 10000 and interest is 1% per month then the interest will be (10000 * 1%)* (25/30) , it calculates for the month first then calculates exact periods between start date and end date(can be a decimal)
    - **inArrearsTolerance:** <br/>
        The amount that can be 'waived' at end of all loan payments because it is too small to worry about. <br/>
        This is also the tolerance amount assessed when determining if a loan is in arrears.
    - **transactionProcessingStrategyId:** <br/>
        An enumeration that indicates the type of transaction processing strategy to be used. This relates to functionality that is also known as Payment Application Logic. <br/>
        A number of out of the box approaches exist, some are custom to specific MFIs, some are more general and indicate the order in which payments are processed. <br/>
    
        Refer to the Payment [Application Logic / Transaction Processing Strategy](https://demo.openmf.org/api-docs/apiLive.htm#paymentapplicationlogic) section in the appendix for more detailed overview of each available payment application logic provided out of the box. <br/>
    
        List of current approaches: <br/>
        1 = Mifos style (Similar to Old Mifos) <br/>
        2 = Heavensfamily (Custom MFI approach) <br/>
        3 = Creocore (Custom MFI approach) <br/>
        4 = RBI (India) <br/>
        5 = Principal Interest Penalties Fees Order <br/>
        6 = Interest Principal Penalties Fees Order <br/>
        7 = Early Payment Strategy <br/>
    - **loanType:** <br/>
        To represent different type of loans. <br/>
        At present there are three type of loans are supported.  <br/>
        Available loan types: <br/>
        individual: Loan given to individual member <br/>
        group: Loan given to group as a whole <br/>
        jlg: Joint liability group loan given to members in a group on individual basis. JLG loan can be given to one or more members in a group.
    - **recalculationRestFrequencyDate:** <br/>
        Specifies rest frequency start date for interest recalculation. This date must be before or equal to disbursement date
    - **recalculationCompoundingFrequencyDate:** <br/>
        Specifies compounding frequency start date for interest recalculation. This date must be equal to disbursement date


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

const newLoan = await api.loan.createOne(newLoanData);
```

### Retrieve a loan application 
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const loan = api.loan.getOne(loanId);
```

### Retrieve loan application list
    
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