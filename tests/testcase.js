const test = require("../index.js");
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
test.TestCase('First Test', add(1, 5), () => {
  let haha = subtract(9, 3);
  test.expectToBeNum(haha);
});
