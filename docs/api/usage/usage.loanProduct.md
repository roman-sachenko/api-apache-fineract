
### [<- Main](../../../README.md)
### [<- API Usage Index](./usage.index.md)


## API Usage: Loan Product

- [Description](#description)
- [Create a new loan product](#create-a-new-loan-product)
- [Retrieve a loan product](#retrieve-loan-product)
- [Retrieve loan product list](#retrieve-loan-product-list)



## Description

Fineract Loan Product Product API.
A Loan product is a template that is used when creating a loan. <br/>
Much of the template definition can be overridden during loan creation.

- Field Descriptions
    - **name:** <br/>
        Name associated with loan product on system.
    - **shortName:** <br/>
        Short name associated with a loan product. <br/>
        An abbreviated version of the name, used in reports or menus where space is limited, such as Collection Sheets.
    - **description:** <br/>
        For providing helpful description of product offering.
    - **fundId:** <br/>
        For associating a loan product with a given fund by default.
    - **includeInBorrowerCycle:** <br/>
        It is a flag, Used to denote whether the loans should include in loan cycle counter or not.
    - **useBorrowerCycle:** <br/>
        It is a flag, Used to denote whether the loans should depend on borrower loan cycle counter or not.
    - **currencyCode:** <br/>
        A three letter ISO code of currency.
    - **digitsAfterDecimal:** <br/>
        Override the currency default value for digitsAfterDecimal.
    - **inMultiplesOf:** <br/>
        Override the default value for rounding currency to multiples of value provided.
    - **installmentAmountInMultiplesOf:** <br/>
        Override the default value for rounding instalment amount to multiples of value provided.
    - **principal:** <br/>
        The loan amount to be disbursed to through loan.
    - **numberOfRepayments:** <br/>
        Number of installments to repay.<br/>
        Used like: numberOfRepayments Every repaymentEvery repaymentFrequencyType <br/>
        e.g. 10 (repayments) Every 12 Weeks
    - **repaymentEvery:** <br/>
        Used like: numberOfRepayments Every repaymentEvery repaymentFrequencyType <br/>
        e.g. 10 (repayments) Every 12 Weeks
    - **repaymentFrequencyType:** <br/>
        Used like: numberOfRepayments Every repaymentEvery repaymentFrequencyType <br/>
        e.g. 10 (repayments) Every 12 Weeks <br/>
        Example Values: 0=Days, 1=Weeks, 2=Months
    - **interestRatePerPeriod:** <br/>
        Interest Rate. <br/>
        Used like: interestRatePerPeriod % interestRateFrequencyType - interestType <br/>
        e.g. 12.0000% Per year - Declining Balance
    - **interestRateFrequencyType:** <br/>
        Used like: interestRatePerPeriod% interestRateFrequencyType - interestType <br/>
        e.g. 12.0000% Per year - Declining Balance <br/>
        Example Values: 2=Per month, 3=Per year
    - **amortizationType:** <br/>
        Example Values: 0=Equal principle payments, 1=Equal installments
    - **interestType:** <br/>
        Used like: interestRatePerPeriod% interestRateFrequencyType - interestType <br/>
        e.g. 12.0000% Per year - Declining Balance <br/>
        Example Values: 0=Declining Balance, 1=Flat
    - **interestCalculationPeriodType:** <br/>
        Example Values: 0=Daily, 1=Same as repayment period <br/>
    - **allowPartialPeriodInterestCalcualtion:** <br/>
        This value will be supported along with interestCalculationPeriodType as Same as repayment period to calculate interest for partial periods. Example: Interest charged from is 5th of April , Principal is 10000 and interest is 1% per month then the interest will be (10000 * 1%)* (25/30) , it calculates for the month first then calculates exact periods between start date and end date(can be a decimal)
    - **inArrearsTolerance:** <br/>
        The amount that can be 'waived' at end of all loan payments because it is too small to worry about.
        This is also the tolerance amount assessed when determining if a loan is in arrears.
    - **principalVariationsForBorrowerCycle,interestRateVariationsForBorrowerCycle,numberOfRepaymentVariationsForBorrowerCycle:** <br/>
        Variations for loan, based on borrower cycle number
    - **minimumDaysBetweenDisbursalAndFirstRepayment:** <br/>
        The minimum number of days allowed between a Loan disbursal and its first repayment.
    - **principalThresholdForLastInstalment:** <br/>
        Field represents percentage of current instalment principal amount for comparing against principal outstanding to add another repayment instalment. If the outstanding principal amount is less then calculated amount, remaining outstanding amount will be added to current instalment. Default value for multi disburse loan is 50% and non-multi disburse loan is 0%
    - **canDefineInstallmentAmount:** <br/>
        if provided as true, then fixed instalment amount can be provided from loan account.
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
    - **graceOnPrincipalPayment:** <br/>
        Optional: Integer - represents the number of repayment periods that grace should apply to the principal component of a repayment period.
    - **graceOnInterestPayment:** <br/>
        Optional: Integer - represents the number of repayment periods that grace should apply to the interest component of a repayment period. Interest is still calculated but offset to later repayment periods.
    - **graceOnInterestCharged:** <br/>
        Optional: Integer - represents the number of repayment periods that should be interest-free.
    - **graceOnArrearsAgeing:** <br/>
        Optional: Integer - Used in Arrears calculation to only take into account loans that are more than graceOnArrearsAgeing days overdue.
    - **overdueDaysForNPA:** <br/>
        Optional: Integer - represents the maximum number of days a Loan may be overdue before being classified as a NPA (non performing asset)
    - **accountMovesOutOfNPAOnlyOnArrearsCompletion:** <br/>
        Optional: Boolean - if provided as true, Loan Account moves out of NPA state only when all arrears are cleared
    - **accountingRule:** <br/>
        Specifies if accounting is enabled for the particular product and the type of the accounting rule to be used Example Values:1=NONE, 2=CASH_BASED, 3=ACCRUAL_PERIODIC, 4=ACCRUAL_UPFRONT
    - **isInterestRecalculationEnabled:** <br/>
        It is a flag, Used to denote whether interest recalculation is enabled or disabled for the particular product
    - **daysInYearType:** <br/>
        Specifies the number of days in a year. <br/>
        Example Values:1=ACTUAL(Actual number of days in year), 360=360 DAYS, 364=364 DAYS(52 WEEKS), 365=365 DAYS
    - **daysInMonthType:** <br/>
        Specifies the number of days in a month. <br/>
        Example Values:1=ACTUAL(Actual number of days in month), 30=30 DAYS
    - **interestRecalculationCompoundingMethod:** <br/>
        Specifies which amount portion should be added to principal for interest recalculation. <br/>
        Example Values:0=NONE(Only on principal), 1=INTEREST(Principal+Interest), 2=FEE(Principal+Fee), 3=FEE And INTEREST (Principal+Fee+Interest)
    - **rescheduleStrategyMethod:** <br/>
        Specifies what action should perform on loan repayment schedule for advance payments. <br/>
        Example Values:1=Reschedule next repayments, 2=Reduce number of installments, 3=Reduce EMI amount
    - **recalculationCompoundingFrequencyType:** <br/>
        Specifies effective date from which the compounding of interest or fee amounts will be considered in recalculation on late payment. <br/>
        Example Values:1=Same as repayment period, 2=Daily, 3=Weekly, 4=Monthly
    - **recalculationCompoundingFrequencyInterval:** <br/>
        Specifies compounding frequency interval for interest recalculation.
    - **recalculationCompoundingFrequencyDate:** <br/>
        Specifies compounding frequency start date for interest recalculation.
    - **recalculationRestFrequencyType:** <br/>
        Specifies effective date from which the late or advanced payment amounts will be considered in recalculation. <br/>
        Example Values:1=Same as repayment period, 2=Daily, 3=Weekly, 4=Monthly
    - **recalculationRestFrequencyInterval:** <br/>
        Specifies rest frequency interval for interest recalculation.
    - **recalculationRestFrequencyDate:** <br/>
        Specifies rest frequency start date for interest recalculation.
    - **preClosureInterestCalculationStrategy:** <br/>
        Specifies applicable days for interest calculation on pre closure of a loan. <br/>
        Example Values:1=Calculate till pre closure date, 2=Calculate till rest frequency date
    - **isArrearsBasedOnOriginalSchedule:** <br/>
        If Specified as true, arrears will be identified based on original schedule.
    - **allowAttributeOverrides:** <br/>
        Specifies if select attributes may be overridden for individual loan accounts.

### Create a new loan product 

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

### Retrieve loan product 
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const loanProduct = api.loanProduct.getOne(loanProductId);
```

### Retrieve loan product list
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const loanProductList = api.loanProduct.getList();
```