// const fastpay = new jinipay('api_key', 'api_secret','live')
// fastpay.customer.create(data).then(x).catch(y)
const Main = require('./core/main');
const transaction = require('./core/transaction');
const customer = require('./core/customer');
const order = require('./core/order');

const Jinipay = function (api_key, master_key, mode) {
  if (!(api_key && master_key)) {
    throw new Error('api_key and master_key credentials are required');
  }

  const Init = new Main(api_key, master_key, mode);
  console.log('init data', Init);

  this.Customer = new customer(Init);
  this.Order = new order(Init);
  this.Transaction = new transaction(Init);
};

module.exports = Jinipay;
