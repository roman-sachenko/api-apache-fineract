const Api = require('../index');

const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const listLoanProducts = async () => {
  const loanProductsList = await api.loanProduct.getList();
  console.log(loanProductsList);
};

const getOne = async () => {
  const loanProduct = await api.loanProduct.getOne(112);
  console.log(loanProduct);
};

listLoanProducts();
getOne();
