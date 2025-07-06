//"use strict";

// 1. this : behaves d/f depends on where we are using
console.log(this); // Global Object in browser (window), in node it will be an empty object

//2. In function strict mode this refres to undefined | non-strict mode it refers to global object inside function
function test() {
  console.log(this);
}

test(); // window obj, due to this substitution : if the value is undefined, it will be replaced with global object


//3. In object method, this refers to the object itself, inside obj if function is there it called method.
const obj = {
  name: "Joy",
  getName: function() {
    console.log(this);
  }
};

obj.getName(); // obj itself, this refers to the object itself
// {name: 'Joy', getName: ƒ}

//4. In constructor function, this refers to the newly created object
function Person(name) {
  this.name = name;
  console.log(this);
}

const person = new Person("Joy"); // this refers to the newly created object

//5. In class, this refers to the instance of the class
class Animal {
  constructor(name) {
    this.name = name;
    console.log(this);
  }
}

const animal = new Animal("Dog"); // this refers to the instance of the class

//6. In call bind and apply methods, this refers to the object passed as the first argument
// Lets say i want to use the same function which available in another obj, instead of creating new one.

const student1={
    nam : "Mohan",
    age: 22,
    getName: function() {
        console.log(this.nam, this.age);
    }
}

const student2={
    nam : "Sohan",
    age: 20
}

student1.getName(); // Mohan , 22
student1.getName.call(student2); // Sohan

//7. This with arrow function refres to enclosed lexical context. it dosent have their own this

const arrowFunction = () => {
  console.log(this);
}

arrowFunction(); // Global object in browser (window), in node it will be an empty object

console.log("Hello World!");
const obj2 = {
  name: "Joy",
  getName: () => {
    console.log(this); // Global object in browser (window), in node it will be an empty object
  }
};

obj2.getName(); // Global object in browser (window), in node it will be an empty object

//8. In nested object method with this using arrow function refers to the global object
const nestedObj = {
  name: "Joy",
  getName: function() {
    const innerFunc = () => {
      console.log(this); // Global object in browser (window), in node it will be an empty object
    }
    innerFunc();
  }
};

nestedObj.getName(); // Global object in browser (window), in node it will be an empty object

// {name: 'Joy', getName: ƒ}
  