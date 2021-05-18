e = require("../index.js")
function l() {
  return 'e'
} 
f = new e.TestCase("f2", l())
f.toBeEqualToText(98)