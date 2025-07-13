// Imp :: Local memory + parent of lexical environment in debugger in scope you can see.

function a() {
  c();
  function c() {
    console.log(b);
  }
}

var b = 10;
a();

// : But its value (10) is assigned after you run a()
/* Reason : When var b =10; defined after a() Fn is called. gives undefined
1. Call Stack - GEC - Execution env - Memory Component - b = undefined, a()
2. Local Exe env of a() + parent of lexical Env i.e. GEC in case of a() here, b = undefined in memory phase
3. Execution context = c() + parent of Lexical env i.e. a(), in a(), b is not available so it will look for parent of lexical env of a() i.e. GEC, where b is available with value undefined in memory phase. 

4. Note :: - c() Fn check the scope chain in debugger their local + global where b = undefined

For let case it will give ReferenceError: Cannot access 'b' before initialization
*/

function aa() {
  cc();
  function cc() {
    console.log(bb);
  }
}

aa(); // undefined

var bb = 10;

console.log("===== Another Case ======");

function xy() {
  console.log(c);
}

var c = 20;
xy();

// xy() : scope - local Scope + parent of lexical env i.e. GEC or Global Scope

console.log(` ============= CASE : 3 ================== `);

function test() {
  testc();
  function testc() {
    var mz = 100;
    console.log(mz); // 100
  }
}
var mz = 10;
test();
// ** Here testb is defined in the local scope of testc() function, so it will print 100.

console.log(` ============= CASE : 4 ================== `);

function aj() {
  var bm = 10;
  cj();
  function cj() {
    console.log(bm); // 10
  }
}
aj();
//console.log(bm); // ReferenceError: bm is not defined, as bm is defined in the local scope of aj() function, so it will not be accessible outside of aj() function.
