var testFunction1 = function(value) {
  return value + "!";
};

var testFunction2 = function(callMe) {
  return callMe();
};

module.exports = {
  testFunction1: testFunction1,
  testFunction2: testFunction2
};
