/* 
So even before, code execution, memory is created so in case of variable, it will be initialized as undefined while in
case of function the whole function code is placed in the memory

*/

console.log(x);

var x = 3;

const xx = getName("Joy");
console.log(xx);

function getName(nam) {
  return nam;
}

/* ReferenceError: Cannot access 'v' before initialization

- In case of functional expression and arrow function hoisting not possible because of 
  memory phase in execution context

v();
const v=()=>{
    console.log("Test");
}

v();
const v=function(){
    console.log("Test");
}

*/
