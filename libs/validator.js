const Validator = require('validatorjs');
const validator = (data, rules, customMessages) => {
  const validation = new Validator(data, rules);
  if (validation.passes()) return true;
  if (validation.fails()) return validation.errors;
};

module.exports = validator;
