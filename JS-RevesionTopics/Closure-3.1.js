//** > Function bundled along with it's lexical scope is closure.
//* A Fn binds together with its lexical env. or Fn. along with its lexical scope forms a closure.

function clsr() {
  var g = 12;
  function clsrOne() {
    console.log(g);
  }
  return clsrOne;
}

// * clsr()(); // 1. () will return inner Fn and 2. () call inner Fn.
const clsrStore = clsr();
console.log(clsrStore);

/*
When clsrOne is returned, not only is the function returned but the entire closure (fun
clsrOne + its lexical scope) is returned and put inside clsrStore. So when clsrStore is used somewhere else in
program, it still remembers var g inside clsr().

- A closure is a function that has access to its outer function scope even after the function has
returned. Meaning, A closure can remember and access variables and arguments reference of
its outer function even after the function has returned.

*/

console.log("================= Closure Example ====================");

function outherFn1() {
  var az = 14;
  function innerFn1() {
    console.log(az);
  }
  return innerFn1;
}

const innerFn1Store = outherFn1();
innerFn1Store(); // 14

/* >> ** 
- > Changing var to let will still behave the same.
function outer() {
  function inner() {
    console.log(a);
    }
 var a = 10;
   return inner;
 }
outer()(); // 10
*/

function outerFn2(str) {
  let xr = 17;
  function inner_Fn2() {
    console.log(str, xr);
  }
  return inner_Fn2;
}

outerFn2("Hello")(); // Hello 17

// Clouser with Outest Fn
function clsrOuter() {
  let ot = 15;
  function clsr_One(str) {
    let inr = 21;
    function clsr_Two() {
      console.log(str, inr, ot);
    }
    return clsr_Two;
  }
  return clsr_One;
}

// * clsrOuter()("Hi")();

const clsr_OuterStore = clsrOuter();
clsrOuter()("Hi")(); // Hi 21 15

function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
let a = 100;
outest()("Hello There")(); // 10 20 "Hello There"

// Advantages :: 
// Memoize
// Data hiding and encapsulation
// setTimeouts etc.

