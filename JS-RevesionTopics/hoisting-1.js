getName();

console.log(x); // undefined due to memory phase of execution context it assigns undefined to x
var x = 3; 
// let x = 3; & const x= 4; : Temporal dead zone due to its block scope.
// ** ReferenceError: Cannot access 'x' before initialization

function getName() {
    console.log("Hello");
};

// xx(); : Refrence Error: Cannot access 'xx' before initialization its a Function Expression
const xx = ()=>{
    console.log("Hello again");
}

// ** Functional Decleration can be hoisted and var variable, before Decleration.

