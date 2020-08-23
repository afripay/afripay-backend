const axios = require('axios');
const handleError = require('../libs/handleError');

const Main = function (api_key, master_key, mode) {
  const baseUrl =
    mode === 'live'
      ? 'https://jinipay.herokuapp.com/api/v1'
      : 'https://jinipay-ussd-sandbox.herokuapp.com/api/v1';

  this.getBaseUrl = function () {
    return baseUrl;
  };
  this.getApiKey = function () {
    return api_key;
  };
  this.getMasterKey = function () {
    return master_key;
  };

  this.setBaseUrl = function (url) {
    baseUrl = url;
  };
  this.getToken = function () {
    // we can create a method there to get token that can be use for each api called
  };

  this.request = function (uri, method, payload, baseUrl = false) {
    console.log('uri', uri);
    let options = {};
    const headers = {
      JNP_API_KEY: this.getApiKey(),
      JNP_MASTER_KEY: this.getMasterKey(),
    };
    console.log('headers option', headers);

    options.url = uri;
    options.method = method;
    options.data = payload;
    options.baseUrl = baseUrl || this.getBaseUrl();
    options.headers = headers;
    console.log('request option', options);
    return this.makeRequest(options);
  };
};

Main.prototype.makeRequest = async function (options) {
  try {
    const getRequestData = await axios(options);

    return getRequestData.data;
  } catch (e) {
    return handleError(e);
  }
};

module.exports = Main;
