const test = require("../index.js");
function add(num1, num2) {
  return num1 + num2;
}
test.TestCase('First Test', add(1, 5), () => {
  return test.expectToBeNum(6)
});