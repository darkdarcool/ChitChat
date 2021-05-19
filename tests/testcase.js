const test = require("../index.js");
function add(num1, num2) {
  return num1 + num2;
}
test.TestCase('First Test', add(1, 5), () => {
  test.expectToBeNum(6)
  test.expectToBeNum(7)
});
