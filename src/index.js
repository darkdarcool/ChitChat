class TestCase {
  constructor(testname, func) {
    this.testName = testname
    this.func = func;
  }
  toBeEqualToNum = (value) => {
    if (typeof value === "number") {
      if (this.func == value) {
        console.log(`${this.testName} passed!`)
      }
      else {
        console.log(`${this.testName} failed!`)
      }
    }
    else {
      console.log("Type of the value expected in not a num. We got the value: " + value)
    }
  }
  
}
module.exports = {
  TestCase : TestCase
}