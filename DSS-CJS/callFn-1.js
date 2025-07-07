const {varX, myClass, FnOne, FnTwo, f3 } = require('../DSS-CJS/Fn-1')

console.log("varX Value", varX);

const t = new myClass("Shashank");
t.display();

FnOne();
FnTwo();
f3();

const { addFn, subtractFn } = require('../DSS-CJS/Fn-2');

console.log(addFn(10, 20)); // Using the add function from Fn-2.js
console.log(subtractFn(20, 10)); // Using the subtract function from Fn-2.js

const test = require('../DSS-CJS/Fn-3');

console.log(test.multiply(10, 20)); // Using the multiply function from Fn-3.js
test.x(); // Calling the x function from Fn-3.js
test.zz(); // Calling the y function from Fn-3.js