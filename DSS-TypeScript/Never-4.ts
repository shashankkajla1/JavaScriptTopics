// ** The void type can have undefined or null but never cannot have any value.

/*

function msg() : void{
clg("Hello")
}

const x: void = msg(); // give you undefined
clg(x); // Output: undefined

*/



/*
NEVER Data type : 
-It indicates the value that will never occur.

- The Never type is used when you are sure that something is never going to occur, you 
write a Fn which will not return to its end point or alwz. through an exception.

- It is often used in functions that throw errors or have infinite loops.

---> Functions that never return (e.g. they throw an error or run infinitely).
*/

function throwError(msg : string) : never {
throw new Error(msg);
}


/*
let a : never ;
a= 20;
console.log(a); // This will cause an error because 'never' cannot be assigned a value
*/

throwError("This is an error message"); // This will throw an error and never return

