# ChitChat

> Jest clone with more strict types

Hi! Welcome to ChitChat! Or more professionally known as `ChitChatsjs` as the npm module! This is a jest clone with similar syntax, but with stricter types! 

# Installation

You can install ChitChat easily! Here is how:

``` bash
npm i chitchatsjs
```

And in your js code:

``` javascript
var myvar = require('chitchatsjs')
```

Typescript is not currently supported.

# Usage

After you've done all of that, you can get started with using ChitChat! Here is a quick tutorial!

## Tutorial


Let's create a file called add.js, and in it put in the following code:

``` javascript
function add(num1, num2) {
  return num1 + num2
}
module.exports = add
```

After you've done that, in your package.json file lets add:

``` json
"scripts": {
  "test": "node tests/mytest.js"
},
```

Now, lets create a folder called tests, and add a file called mytest.js in it. In it put the following code:

``` javascript
var test = require('chitchatsjs')
var add = require('../add.js')
test.TestCase('First Test', add(1, 5), () => {
  return test.expectToBeNum(6)
});
```

Then, run `npm run test`, and you should see a test prompt come up saying:

```
✅  First Test Passed!
```

That's it for this tutorial! While our little function is tiny and simple, yours can be super big and complex! If you have any problems, please contact us in out github repo or in a comment!

# Future

We have more things coming soon! Like:
```
expectToThrowError()
```

# Wrong Expection & Errors

Of course, when you are expecting return values, your going to get one wrong eventually, lets use this example wrong expection:

``` javascript
var test = require("chitchatsjs")
function add(num1, num2) {
  return num1 + num2
}
test.TestCase("Example Test", add(2, 2), () => {
  test.expectToBeNum(5)
});
```
Of course, 4 is not 5, so our expection is wrong. But, what will it return? This is what it will return if you run it:
```
❌  Example Test failed.
Expected number:
   5
but received number:
   4
```
> There will be color in the terminal/console

So, the number we expected was 5, which you can see in our code on line 6 of our example. But `add(2, 2)` would return the value of four, which is the number that the test case received from the function and would succeed if we expected it. There are also errors if you don't follow types correctly.

## Errors
This is when chitchat will throw an error that will end your tests because of an error that would cause more errors that would be hard to fix. These error include

- Incorrect types to expection, like: `expectToBeNum('Hello')`
- Fields in TestCase and expection not filled out.
# Contributing!

I won't except contributers, cause this is me learning js, but if I know you, and want you on the project, maybe you'll be invited! 

But if you have your heart set on contributing, you can leave suggestions in this github repo!

# Credits

* **My Brain**, for punching me in the stomach until I did this
* **@darkdarcool(myself)**, for doing this
* **@RayhanADev**, for helping me with the function in the TestCase function 

# Conclusion

Thanks for reading this. If you wanna use this, go ahead. This does not replace `jest`. I worked hard on this and hope you try it out. 

## KTHXBAI!!
