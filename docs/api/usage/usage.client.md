
### [<- Main](../../../README.md)
### [<- API Usage Index](./usage.index.md)


## API Usage:Clients

- [Description](#description)
- [Create a new Client](#create-a-new-client)
- [Retrieve client](#retrieve-client)
- [Retrieve client list](#retrieve-client-list)



## Description

Fineract Client API

## Create a new client 

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

# Retrieve client 
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const client = api.client.getOne(clientId);
```

# Retrieve client list
    
```js
const Api = require('apache-fineract-api');
const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const client = api.client.getList();
```