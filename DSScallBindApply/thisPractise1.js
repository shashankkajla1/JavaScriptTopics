
// Case 1.) witout strict mode in fn this refers to global object. in i.e. in x=10 case
// Case 2.) without strict mode due to this substitution the value of undefine changes to global object.
// Case 3.) undefined in strict mode
//'use strict';

// Case1.) : x=10; -> This implicitly creates a global variable.
//In browsers, it becomes a property of the global object (window object).
function test(){
    console.log(this.x); // global obj & undefined in strict mode
}

test();

// Case 4.) Terms to Object this: Whenever this is called inside the method the value of this will be the object
const objThis = {
     xx : 15,
     method : function() {
         console.log(this.xx); // objThis {x: 10, method: ƒ, Prototype Object}
     }  
}

objThis.method();

// Case 5.) In terms of arrowe fn : value of this would be enclosed lexical context i.e.
// i.e. When you use an arrow function, the value of this is not its own — it "remembers" the this from where it was created.
// In this case, it refers to the global object

let xxz = 33;
const objArrow = {
    xxz : 20,
    method : () => {
        console.log(this); // window obj
        console.log(this.xxz); // undefined, because arrow functions do not have their own 'this' context
        console.log(this.xxxz);
  }
}

objArrow.method();

// Case 6.) In html button in case of DOM elements the value of this refers to the element itself.

// Case 7.) 
// In case of event listeners, the value of this refers to the element that triggered the event.
/*
document.getElementById("btn").addEventListener("click", function() {
    console.log(this); // refers to the button element
});
*/

// Case 8: nested arrow case :: 

const nestedArrow = {
    m: 10,
    method: function() {
        const innerArrow = () => { 
            console.log(this.m); // refers to the outer method's context, which is nestedArrow
        };
        innerArrow();
    }
};

nestedArrow.method(); // Output: 10

// Case 9: nested function case ::
const nestedFunction = {
    mx: 20,
    method: function() {
        function innerFunction() { 
            console.log(this.mx); // undefined, because 'this' refers to the global object or is undefined in strict mode
        }
        innerFunction();
    }
};

nestedFunction.method(); // Output: undefined