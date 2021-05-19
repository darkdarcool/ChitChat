var colors = require('colors');
colors.setTheme({
  passed: 'green',
  error: 'red',
  rec: 'grey',
});
var bold = '\033[1m';
var grey = '\33[90m';
function textPassed(testName, value, expected) {
  console.log(bold + `✅\n${testName} Passed!`.passed);
}
module.exports = {
  textPassed
}