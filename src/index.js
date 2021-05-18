var colors = require('colors');
colors.setTheme({
  passed: 'green',
  error: 'red'
});
var bold = '\033[1m'
class TestCase {
  constructor(testname, func) {
    this.testName = testname;
    if (this.testName == undefined || null) {
      console.log(bold + "TestCase was not found".error)
      this.e = true
    }
    this.func = func;
    if (this.func == undefined || null) {
      console.log(bold + "TestCase Function not found".error)
      this.e = true
    }
  }
  toBeEqualToNum = (value) => {
    if (this.e == true) {
      
    }
    else if (typeof this.func != "number") {
      console.log(bold + "Value of the variale we are trying to match is not a number. We got the value of ".error + this.func + " returned".error)
    }
    else if (value == undefined) {
      console.log(bold + "Value was expected but got none".error);
    }
    else if (typeof value === "number") {
      if (this.func == value) {
        console.log(bold + `${this.testName} passed!`.passed);
      }
      else {
        console.log(bold + `${this.testName} failed!`.error);
      }
    }
    else {
      console.log(bold + "Type of the value expected in not a num. We got the value: ".error + value.error);
    }
  }
  
}
module.exports = {
  TestCase
}