const test = require("../index.js");
function isEqual(num) {
  if (num == 2) {
    return true;
  }
  else {
    return false;
  }
}

test.TestCase('First Test', isEqual(4), () => {
  let haha = false;
  test.expectToBeBool(haha);
});