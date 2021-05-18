var colors = require('colors');
colors.setTheme({
  passed: 'green',
  error: 'red',
  rec: 'grey',
});
var bold = '\033[1m';
var grey = '\33[90m';
function numFailed(testName, value, expected) {
  console.log(bold + `❌\n${testName} failed.\nExpected number:\n   ` .error + grey + expected + "\nbut received number:\n   ".error + grey + value);
}
module.exports = {
  numFailed
}