var colors = require('colors');
var ff = require('./errors/NumFail.js');
var aa = require("./passes/NumPass.js");
var ll = require('./passes/TextPass.js');
var gg = require('./errors/TextFail.js');
colors.setTheme({
  passed: 'green',
  error: 'red'
});
var bold = '\033[1m';
var result;
var testName;
function expectToBeNum(value) {
  if (value == undefined) {
    let err = bold + "Value must be defined to expect".error
    throw new Error(err);
    return;
  }
  if (result == undefined || null) {
    let err = bold + "Variable must be used in return statment in TestCase".error;
    throw new Error(err);
    return;
  }
  if (value == result) {
    aa.numPassed(testName);
    result = null;
    return true;
  }
  else {
    ff.numFailed(testName, result, value);
    result = null;
    return false;
  }
}
function expectToBeText(value) {
  if (value == undefined) {
    let err = bold + "Value must be defined to expect".error;
    throw new Error(err);
  }
  if (result == null) {
    let err = bold + "Variable must be used in TestCase".error;
    throw new Error(err)
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
    let err = bold + "Testname not found".error;
    throw new Error(err);
    return;
  }
  if (func == null || undefined) {
    let err = bold + "Function or return value not found".error;
    throw new Error(err);
    return;
  }
  if (data == undefined || null) {
    let err = bold + "Data for expection not found".error;
    throw new Error(err);
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