console.log(b);
var b = 15;

// * (Hoisted let :) console.log(aa);

let aa = 10;
//console.log(window.aa); // undefined
//console.log(window.b);  // 10

/*
Here, let stored in script memory where var is in global memory.
So, window.aa is undefined because let is block scoped and not attached to the global object.

** Temporal Dead Zone : Time since when the let variable was hoisted until it is initialized some value.

- So any line till before "let aa = 10" is the TDZ for a
  Since a is not accessible on global, its not accessible in window/this also. window.bb or this.bb ->
  15; But window.a or this.a ->undefined, just like window.x->undefined (x isn't declared
  anywhere)
  Reference Error are thrown when variables are in temporal dead zone.
*/

// ** Block Scope & Shadowing :: 
// Here let x & const z & var k is declared in block scope.

{

    let x = 11;
    const z = 12;
    var k = 13;
}

console.log(k); // 13
// console.log(x); // ReferenceError: x is not defined
// console.log(z); // ReferenceError: z is not defined

/*
Thus we say, *let* and *const* are BLOCK SCOPED. They are stored in
a separate mem space which is reserved for this block. Also, they can't be
accessed outside this block. But var a can be accessed anywhere as it is
in global scope. Thus, we can't access them outside the Block.

*/

// ** shadowing

var mx = 10;

{
    var mx = 20; // shadowing
    let my = 30; // block scoped
}

console.log(mx); // 20

/* So, If one has same named variable outside the block, the variable inside the block shadows the
outside variable. This happens only for var. 
*/

console.log(" ======== Checking Example in Block Scope while Debugging ======== ");

{
    let xi = 10;
    const yi = 20;
    var zi = 30;

    console.log(xi); // 10
    console.log(yi); // 20
    console.log(zi); // 30

}