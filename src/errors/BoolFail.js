var colors = require('colors');
colors.setTheme({
  passed: 'green',
  error: 'red',
  rec: 'grey',
});
var bold = '\033[1m';
var grey = '\33[90m';
function boolFailed(testName, value, expected) {
  let type = typeof value;
  if (type == 'boolean') {
    type = 'bool';
  }
  console.log(bold + `❌  ${testName} failed.\nExpected bool:\n   ` .error + grey + expected + "\nbut received ".error + type.error + ":\n   ".error + grey + value);
}
module.exports = {
  boolFailed
}