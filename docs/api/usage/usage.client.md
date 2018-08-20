
### [<- Main](../../../README.md)
### [<- API Usage Index](./usage.index.md)


## API Usage: Client

- [Description](#description)
- [Create a new Client](#create-a-new-client)
- [Retrieve client](#retrieve-client)
- [Retrieve client list](#retrieve-client-list)



## Description

Fineract Client API
Clients are people and businesses that have applied (or may apply) to an MFI for loans.
Clients can be created in Pending or straight into Active state.

- Field Descriptions
    - **accountNo:** <br/>
        If provided during client creation, its value is set as account no. for client account, otherwise an auto generated account no. is put in place based on the configured strategy.
    - **externalId:** <br/>
        A place to put an external reference for this client e.g. The ID another system uses.
        If provided, it must be unique.
    - **active:** <br/>
        Indicates whether this client is to be created as active client. If active=true, then activationDate must be provided. If active=false, then the client is created as pending.
    - **activationDate:** <br/>
        The date on which the client became active.
    - **firstname:** <br/>
        Facility to break up name into parts suitable for humans.
    - **middlename:** <br/>
        Facility to break up name into parts suitable for humans.
    - **lastname:** <br/>
        Facility to break up name into parts suitable for humans.
    - **fullname:** <br/>
        Facility to set name of a client or business that doesn't suit the firstname,middlename,lastname structure.
    - **mobileNo: <br/>
        Optional: unique mobile number that is used by SMS or Mobile Money functionality.
    - **staffId:** <br/>
        The staffId of the staff member dealing with the client office. The staff member is not specifically the loan officer.
    - **savingsProductId:** <br/>
        Optional: Default overdraft savings account of client
    - **datatables:** <br/>
        Facility to enrich client details.

### Create a new client 

```js
const newClientData = {
  officeId: 1,
  firstname: 'Petra',
  lastname: 'Yton',
  externalId: '786YYH7',
  dateFormat: 'dd MMMM yyyy',
  locale: 'en',
  active: true,
  activationDate: '04 March 2009',
  submittedOnDate:'04 March 2009',
  savingsProductId : 4,
  datatables: [{
    registeredTableName: 'Family Details',
    data: {
      locale: 'en',
      'Number of members': '5',
      'Number of dependents': '3',
      'No of Children': '2',
      'Date of verification': '14 December 2016',
      dateFormat: 'dd MMMM yyyy'
    }
  },
  {
    registeredTableName: 'Residency Address',
    data: {
      locale: 'en',
      'Address Line': 'Basavana Gudi Road',
      Street: 'Gandhi Bazaar',
      Landmark: 'Aashrama',
      COUNTRY_cd_Country: 17,
      STATE_cd_State: '7',
      DISTRICT_cd_District: '13',
      Pincode: '560040'
    }
  }]
};

const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const newClient = await api.client.createOne(newClientData);
```

### Retrieve client 
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const client = api.client.getOne(clientId);
```

### Retrieve client list
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const client = api.client.getList();
```