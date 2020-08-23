//basic message for moment
module.exports = function (error, code, customMessage) {
  return {
    success: false,
    message: customMessage || error.message,
    code: code || error.code,
  };
};
