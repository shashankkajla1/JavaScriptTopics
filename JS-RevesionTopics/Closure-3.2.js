// ** Data hiding and encapsulation in Closure ::

/*
-->> ** Without Closure. 
var count = 0;
function increment(){
 count++;
}
// in the above code, anyone can access count and change it.
*/

// -->> ** With Closure.
function closureCounter() {
  let counter = 0;

  return function incremeentCounter() {
    counter++;
    console.log(`Counter Value : ${counter}`);
  };
  // return incremeentCounter;
}

const xma = closureCounter(); // TypeError: closureCounter is not a function
xma(); // Counter Value : 1
xma(); // Counter Value : 2

/*
Disadvantage of Closure ::

- Memory Leak : If you create a closure inside a loop, it can lead to memory leaks i.e with var 


function a() {
 var x = 0;
 return function b() {
 console.log(x);
 }
}
var y = a(); // y is a copy of b()
y();

- Once a() is called, its element x should be garbage collected ideally.
But fun b has closure over var x. So mem of x cannot be freed. Like this
if more closures formed, it becomes an issue. To tacke this, JS engines
like v8 and Chrome have smart garbage collection mechanisms. Say we have
var x = 0, z = 10 in above code. When console log happens, x is printed as
0 but z is removed automatically.

*/

function a() {
  var x = 13; // <-- x is used in b() :  Captured by closure (kept in memory)
  var z = 10; // <-- z Not used, garbage collected
  return function b() {
    console.log(x);
  };
}
var y = a(); // y is a copy of b()
y();
