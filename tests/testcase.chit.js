var chit = require('../index.js') // latest stuf
function add(num1, num2) {
  return ([num1, num2]);
};
chit.TestCase('This is an example', add(2, 2), () => {
  // ..
  return chit.expectToBeArr([2, 2]);
});
chit.TestCase('This is also an example', add(4, 4), () => {
  return chit.expectToBeArr([4, 4]);
});

