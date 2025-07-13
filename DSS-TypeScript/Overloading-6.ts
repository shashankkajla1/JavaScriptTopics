// ** We also can declare its type first while writting the Fn same as in C language.

/*
TS Overloading : You can have multiple Fn with same name but d/f parameter types and return types.
*/
function add(x: number, y: string): string;
function add(x: number, y: number): number;
function add(x: number): number;

// -> Not an error, while hovering it to add its showing the signature that its a overloading Fn.

function add(x: number, y: number): number {
  return x + y;
}

function add(x: number, y: string): string {
  return x + y;
}

function add(x: number): number {
  return x;
}

add(10, 20);
console.log(add(10, "Mohana"));
//add(50); // The value of x is 10
console.log(add(50)); // The value of x is 50
