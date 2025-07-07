import { add, subtract, UnName, pi} from './Fn-1.js';
import { FnOne, FnTwo, UnAge } from './FN-2.js';
import * as testFn from './Fn-3.js';
import testDefault, {testUser}  from './Fn-4.js';
import { changeNameOne as NameOne, changeNameTwo as NameTwo } from './FN-5.js';


// Fn-1.js exports
console.log("pi = " + pi);
console.log(add(10, 20));
console.log(subtract(20, 10));
const unName = new UnName("John Doe");
unName.dispName();

// Fn-2.js exports
FnOne();
FnTwo();
const unAge = new UnAge(25);
unAge.dispAge();

// Fn-3.js exports
testFn.test();
testFn.testOne();

console.log(" =============================== ");

// Fn-4.js default export
testDefault();
testUser();

// Fn-5.js import change name
NameOne();
NameTwo();