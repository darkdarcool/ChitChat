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
function textFailed(testName, value, expected) {
  let type = typeof value;
  if (type == 'boolean') {
    type = 'bool';
  }
  else if (type == 'object') {
    type = 'obj'
  }
  if (value == expected) {
    console.log()
  }
  console.log(bold + `❌  ${testName} failed.\nExpected string:\n   ` .error + grey + expected + "\nbut received " + type.error + ":\n   ".error + grey + value + end);
}
module.exports = {
  textFailed
}