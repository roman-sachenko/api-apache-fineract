const Api = require('../index');

const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const listClients = async () => {
  const clientsList = await api.client.getList();
  console.log(clientsList);
};

const getOne = async () => {
  const client = await api.client.getOne(112);
  console.log(client);
};

listClients();
getOne();
