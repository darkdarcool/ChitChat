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
function errFailed(testName, value) {
  let type = typeof value;
  if (type == 'boolean') {
    type = 'bool';
  }
  else if (type == 'object') {
    type = 'obj'
  }
  if (value instanceof Error || RangeError === true) {
    type = "Error"
  }
  console.log(bold + `❌  ${testName} failed.\nExpected Error, but received `.error + type.error + ":\n   ".error + grey + value + end);

}
module.exports = {
  errFailed
}