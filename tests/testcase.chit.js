var chit = require('../index.js') // latest stuf
function add(num1, num2) {
  return [num1, num2]
}
TestCase('Hello', add(3,3), () => {
  return expectToBeErr();
});