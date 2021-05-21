#!/usr/bin/env node

var colors = require('colors');
colors.setTheme({
  passed: 'green',
  error: 'red',
  rec: 'grey',
});
var bold = '\033[1m';
var grey = '\33[90m';
var end  = "\x1b[0m";
function numFailed(testName, value, expected) {
  let type = typeof value;
  if (type == 'boolean') {
    type = 'bool';
  }
  console.log(bold + `❌  ${testName} failed.\nExpected number:\n   ` .error + grey + expected + "\nbut received ".error + type.error + ":\n   ".error + grey + value + end);
}
module.exports = {
  numFailed
}