# ChitChat

> Jest clone with more strict types

Hi! Welcome to ChitChat! Or more professionally known as `ChitChatsjs` as the npm module! This is a jest clone with similar syntax, but with stricter types! 

# Installation

You can install ChitChat easily! Here is how:

``` bach
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
  test.expectToBeNum(6)
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
expectToBeFalse()
expectToBeTrue()
expectToThrowError()
expectToBeAny(what-you-are-expecting)
```

# Contributing!

I won't really except contributers, cause this is me learning js, but if I know you, and want you on the project, maybe you'll be invited! 

But if you have your heart set on contributing, you can leave suggestions in this github repo!

# Credits

* **My Brain**, for punching me in the stomach until I did this
* **@darkdarcool(myself)**, for doing this
* **@RayhanADev**, for helping me with the function in the TestCase function 

# Conclusion

Thanks for reading this. If you wanna use this, go ahead. This does not replace `jest`. I worked hard on this and hope you try it out. 

## KTHXBAI!!
