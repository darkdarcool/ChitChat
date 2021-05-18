e = require("../index.js")
function l(num1, num2) {
  return num1 + num2
} 
f = new e.TestCase("f2", l(4, 5))
f.toBeEqualToNum(9)