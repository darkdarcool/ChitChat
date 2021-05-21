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
function objFailed(testName, value, expected) {
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
  console.log(bold + `❌  ${testName} failed.\nExpected Obj:\n   ` .error + grey + expected + "\nbut received ".error + type.error + ":\n   ".error + grey + value + end);
}
module.exports = {
  objFailed
}