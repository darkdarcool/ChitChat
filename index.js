#!/usr/bin/env node

var e = require("./src/index.js");
module.exports = {
  TestCase : e.TestCase,
  expectToBeNum : e.expectToBeNum,
  expectToBeText : e.expectToBeText,
  expectToBeBool : e.expectToBeBool,
  expectToBeArr : e.expectToBeArr,
  expectToBeObj : e.expectToBeObj,
  expectToBeErr : e.expectToBeErr
}