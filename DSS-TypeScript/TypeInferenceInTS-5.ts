/*
Type Inference In TypeScript ::

- It is not mandatory to annotate type. TS infers types of variables when there is no explicit
information available in form of type annotation.

** Types are Inferred  by TS compiler when ::

- Variable are initialize
- Default value are set for parameter
- Fn return type is not defined

*/

var a = 10;
var b = "Hello";

console.log(typeof a === typeof b); // false