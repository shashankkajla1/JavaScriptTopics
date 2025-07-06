function testA() {
  var b = 10;

  function testB() {

  }
  testB();
}

testA(); 
//console.log(b);

/*
- Call Stack - Execution Context of testA(), having the refrence of lexical env of parent i.e. Global env - 
  testA() - have its own local memory + refrence of parent lexical env i.e. Global env, now execution starts and 
  memory initialize of b.

- testB() - Execution Context of testB(), having the refrence of lexical env of parent i.e. testA(), now
  when testB() is called, a new Execution context is created for testB() with its own local memory and parent refrence of testA() lexical env.
  here, it will check var b is present in its own scope if not then it will check in parent scope i.e. testA() lexical env,
  if not then it will check in parent scope i.e. Global env.

- Here, in global env is the upper most refrec lexical env is available when execution context is created, so 
   it will check and see it i.e. the global env execution context which is holding global refrenc of parent scope 
   it is by default having null on it i.e. ReferenceError: b is not defined

*/

/*

/*
Call Stack:

1. Global Execution Context is created:
   - Memory Phase: 
     - testA → function definition
   - Execution Phase:
     - testA() is called → new Execution Context for testA is created.

2. Execution Context for testA:
   - Memory Phase:
     - b → undefined
     - testB → function definition
   - Execution Phase:
     - b is assigned 10
     - testB() is called → new Execution Context for testB is created.

3. Execution Context for testB:
   - Memory Phase:
     - Nothing declared locally
   - Execution Phase:
     - Nothing happens (empty function body)
   - testB has access to its lexical scope (testA), so it could access `b` if needed.

4. After testA finishes, its context is removed from the stack.
   - The variable `b` was declared inside testA, so it’s not available globally.

5. console.log(b) is in the global scope:
   - Looks for `b` in the global lexical environment → not found → ❌ ReferenceError.
*/

// NOTE: Lexical scope determines variable accessibility based on where a function is defined, not where it's called.

function testEnvA(){

    let count = 0;

     return function x(){
        count++;
        
    }
}

const testEnvB = testEnvA();
console.log(testEnvB());  // undefined
console.log(testEnvB());  // undefined

/*
- You're logging the function itself, not its result.
*/

function testEnvAA(){

    let count = 0;

     return function(){
        count++;
        return count;
    }
}

const testEnvBB = testEnvAA();
console.log(testEnvBB());  // 1
console.log(testEnvBB());  // 2

/*
- Without return count;, the output will be:
  undefined
  undefined
- With return count;, it will correctly be:
  1
  2
*/

function test(){
    let a=11;
    // const =11; // Assignment is constant variable

    return function(){
        a=30;
        return a;      
    }
}

const testB = test();
console.log(testB());  // 30


function xx(){
    let a=11;
    // const =11; // Assignment is constant variable

    function xy(){
        a=40;
        console.log(a);  
    }
    xy();
}

xx(); // 40

function ma(){
    let a=11;
    // const =11; // Assignment is constant variable

    return function na(){
        a=77;
        return a;  
    }
     
}

const z= ma();
console.log(z()); // 77