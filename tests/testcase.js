const test = require("../index.js");
function add(num1, num2) {
  return num1 + num2
}
test.TestCase("Example Test", add(2, 2), () => {
  test.expectToBeNum(5)
});