var colors = require('colors');
var ff = require('./errors/NumFail.js')
var aa = require("./passes/NumPass.js")
var ll = require('./passes/TextPass.js')
var gg = require('./errors/TextFail.js')
colors.setTheme({
  passed: 'green',
  error: 'red'
});
var bold = '\033[1m'
var result;
var testName;
function expectToBeNum(value) {
  if (value == result) {
    aa.numPassed(testName); // result passed function goes here
  }
  else {
    ff.numFailed(testName, result, value);
  }
}
function expectToBeText(value) {
  if (typeof value === 'string') {
    if (value == result) {
      ll.textPassed(testName);
    }
    else {
      gg.textFailed(testName, result, value)
    }
  }
  else {
    console.log(bold + 'Value expected is not a string.'.error)
  }
}
function TestCase(testname, func, data) {
  if (testname == null || undefined) {
    console.log("Testname not found");
    return 0;
  }
  if (func == null || undefined) {
    console.log("Function or return value not found");
    return 0;
  }
  if (data == undefined || null) {
    console.log("Data for expection not found");
    return 0;
  }
  result = func;
  testName = testname;
  if (typeof result === 'number') {
    return data(result, {
      expectToBeNum
    });
  }
  else if (typeof result === 'string') {
    return data(result, {
      expectToBeText
    });
  }
}
module.exports = {
  TestCase,
  expectToBeNum,
  expectToBeText
}