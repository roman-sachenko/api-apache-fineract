const Api = require('../index');

const ApiV1 = Api.V1({
  user: 'mifos',
  pass: 'password',
});

const api = new ApiV1();

const listLoans = async () => {
  const loansList = await api.loan.getList();
  console.log(loansList);
};

const getOne = async () => {
  const loan = await api.loan.getOne(112);
  console.log(loan);
};

listLoans();
getOne();
