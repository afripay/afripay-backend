const envPath = __dirname + '/../.env';
require('dotenv').config({ path: envPath });
const chai = require('chai');
const Main = require('../core/main');
const customer = require('../core/customer');

describe('Customer test', () => {
  const API_KEY = process.env.JNP_API_KEY;
  const MASTER_KEY = process.env.JNP_MASTER_KEY;
  const MODE_ENV = process.env.JNP_MODE_ENV;

  const Init = new Main(API_KEY, MASTER_KEY, MODE_ENV);

  const Customer = new customer(Init);

  it('should create a new customer', async () => {
    const datas = {
      firstname: 'mass',
      lastname: 'koder',
      phone: '+15183038176',
    };
    const newCustomer = await Customer.create(datas);
    console.log('datas received', newCustomer);
    return chai.expect(newCustomer).to.have.property('data');
  });
});
