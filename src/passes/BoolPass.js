#!/usr/bin/env node

var colors = require('colors');
colors.setTheme({
  passed: 'green',
  error: 'red',
  rec: 'grey',
});
var bold = '\033[1m';
var grey = '\33[90m';
function boolPassed(testName) {
  console.log(bold + `✅  ${testName} Passed!`.passed);
}
module.exports = {
  boolPassed
}