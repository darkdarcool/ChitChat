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
  if (value == undefined) {
    console.log(bold + "Value must be defined to expect".error);
    return;
  }
  if (result == undefined || null) {
    console.log(bold + "Variable must be used in return statment in TestCase".error)
    return;
  }
  if (value == result) {
    aa.numPassed(testName);
    return true
  }
  else {
    ff.numFailed(testName, result, value);
    return false;
  }
}
function expectToBeText(value) {
  if (value == undefined) {
    console.log("Value must be defined to expect");
  }
  if (result == null) {
    console.log("Variable must be used in TestCase")
  }
  if (typeof value === 'string') {
    if (value == result) {
      ll.textPassed(testName);
      result = null;
    }
    else {
      result = null;
      gg.textFailed(testName, result, value);
    }
  }
  else {
    console.log(bold + 'Value expected is not a string.'.error);
  }
}
function TestCase(testname, func, data) {
  if (testname == null || undefined) {
    console.log("Testname not found");
    return;
  }
  if (func == null || undefined) {
    console.log("Function or return value not found");
    return;
  }
  if (data == undefined || null) {
    console.log("Data for expection not found");
    return;
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