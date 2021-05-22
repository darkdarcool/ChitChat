#!/usr/bin/env node
var colors = require('colors');
var ff = require('./errors/NumFail.js');
var aa = require("./passes/NumPass.js");
var ll = require('./passes/TextPass.js');
var gg = require('./errors/TextFail.js');
var jj = require('./passes/BoolPass.js');
var dd = require('./errors/BoolFail.js');
var ww = require('./passes/ArrPass.js');
var yy = require('./errors/ArrFail.js');
var xx = require('./errors/ObjFail.js')
var zz = require('./errors/ErrFailed.js')
colors.setTheme({
  passed: 'green',
  error: 'red'
});
var bold = '\033[1m';
var result;
var testName;
function expectToBeErr() {

  if (result instanceof Error === true) {
    ww.arrPassed(testName);

  }
  else {
    zz.errFailed(testName, result);
  }

}
function expectToBeObj(value) {
  if (typeof value !== number) {
    let err = bold + 'Type given to Obj function in '.error + testName + " is not a Obj.".error
    throw new Error(err)
  }
  if (Array.isArray(value) == true) {
    console.log("Please use array function for array")
    return;
  }
  if (value == undefined) {
    let err = bold + "Value must be defined to expect".error
    throw new Error(err);
  }
  if (result == undefined || null) {
    let err = bold + "Variable must be used in return statment in TestCase".error;
    throw new Error(err);
  }
  if (value == result) {
    ww.arrPassed(testName);
    result = null
    return true
  }
  else {
    xx.objFailed(testName, result, value);
    return false
  }
}
function expectToBeArr(value) {
  if (Array.isArray(value) == false) {
    let err = bold + 'Type given to Array function in '.error + testName + " is not a Array.".error
    throw new Error(err)
  }
  if (value == undefined) {
    let err = bold + "Value must be defined to expect".error
    throw new Error(err);
  }
  if (result == undefined || null) {
    let err = bold + "Variable must be used in return statment in TestCase".error;
    throw new Error(err);
  }
  value = JSON.stringify(value)
  result = JSON.stringify(result)
  if (value == result) {
    ww.arrPassed(testName);
    result = null
    return true
  }
  else {
    yy.arrFailed(testName, result, value);
    return false
  }
}
function expectToBeNum(value) {
  if (typeof value !== 'number') {
    let err = bold + 'Type given to number function in '.error + testName + " is not a number.".error
    throw new Error(err)
  }
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
  if (typeof value !== 'string') {
    let err = bold + 'Type given to number function in '.error + testName + " is not text.".error
    throw new Error(err)
  }
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
      return true;
    }
    else {
      result = null;
      gg.textFailed(testName, result, value);
      return false;

    }
  }
  else {
    console.log(bold + 'Value expected is not a string.'.error);
  }
}
function expectToBeBool(value) {
  if (typeof value !== 'boolean') {
    let err = bold + 'Type given to number function in '.error + testName + " is not boolean.".error
    throw new Error(err)
  }
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
    jj.boolPassed(testName);
    result = null;
    return true;
  }
  else {
    dd.boolFailed(testName, result, value);
    result = null;
    return false;
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
  if (result instanceof Error || RangeError === true) {
    return data(result, {
      expectToBeErr
    });
  }
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
  else if (typeof result === 'boolean') {
    return data(result, {
      expectToBeBool
    });
  }
  else if (Array.isArray(result) == true) {
    return data(result, {
      expectToBeArr
    });
  }
  else if (typeof result === 'object') {
    return data(result, {
      expectToBeObj
    })
  }
  else {
    console.log("Unknown type. Please contact us if you want your type added")
  }
}
module.exports = {
  TestCase,
  expectToBeNum,
  expectToBeText,
  expectToBeBool,
  expectToBeArr,
  expectToBeObj,
  expectToBeErr
}