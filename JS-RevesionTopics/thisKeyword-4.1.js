/*
let x = 10; | x= 10;
console.log(this.x);

JS Browser : o/p: 10; Coz in case of browser, this refers to i.e window.
In Node.js : undefined, because in Node.js, the global object is not the same as the global scope.
- Value of this in node js will refers to global object.

*/

// 1. strict mode value of this is undefined inside Fn.
// In non-strict mode inside Fn this refers to the global object.

let xx = 11;
function test() {
  let xx = 12;
  console.log(this); // this substitution  with non-strict mode
  console.log(this.xx); // IN node JS this is global object, so undefined
}

test();
// 2. ** Here due to-  this substitution : If the value of this is undefined ofr null this will be replaced with the global object.

// 3. Whenever this is called insdie a method value of this will be the object.
const myObj = {
  nam: "Shashank",
  age: 30,
  greet: function () {
    // method : when Fn created inside Obj call method

    console.log(this); // myObj : { nam: 'Shashank', age: 30, greet: [Function: greet] }
    console.log(`Nam :${this.nam} Age :${this.age}`);
  },
};

myObj.greet(); // Nam :Shashank Age :30


console.log(" =========== Case 4 : Call, Bind, Apply =========== ");
// 4. Call, bind , apply used when you have to share method.

const student = {
  stuDID: 11,
  stuDAge: 37,
  studDept: "CSE",
  details: function (nam) {
    console.log(`Stud Name : ${nam}, ID : ${this.stuDID}, Age : ${this.stuDAge}, Dept : ${this.studDept}`);
  },
};

const teacher = {
  stuDID: 22,
  teaDAge: 45,
  teaDept: "Maths",
};

// Using Call
student.details.call(teacher, "Shri") // Stud Name : Shri, ID : 22, Age : undefined, Dept : undefined
// ** Here age and Dept undefined because the teacher object does not have those properties i.e stuDAge and studDept.


