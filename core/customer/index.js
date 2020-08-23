// create customer
// get customer
// get all customer
const Validator = require('../../libs/validator');
function Customer(Main) {
  this.create = function (payload) {
    const { firstname, lastname, phone } = payload;
    if (!(firstname && lastname && phone)) {
      throw new Error('params firstname, lastname, phone are required');
    }
    const rules = {
      firstname: 'string|required',
      lastname: 'string|required',
      phone: 'string|required',
    };
    const isValid = Validator(payload, rules);

    if (typeof isValid === 'boolean' && isValid === true) {
      const method = 'POST';
      const uri = '/customer/create';

      return Main.request(uri, method, payload);
    } else {
      console.log('not ok');
      return;
    }
  };
  this.get = function () {};

  this.lists = function () {};
}

module.exports = Customer;
