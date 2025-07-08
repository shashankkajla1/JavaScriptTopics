// ** Data Types **

let str1: string = "Hello";
let str2: string = `${str1} World!`;

console.log(str2);

let num1 : number = 43.445322;
console.log(num1);

let isPresent: boolean = true;
console.log(isPresent);

let anyType: any = "This can be anything";
anyType = 42; // Now it's a number  
console.log(anyType);

let nullType: null = null;
console.log(nullType);

// ** ARRAY TYPE Decleration ** :: 

let arr: Array<number> = [1, 2, 3, 4, 5];
console.log(arr);

let arr1: string[] = ["Hello", "Mohana", "World"];
console.log(arr1);

let fruits: string[]=[];

fruits.push('Apple');
fruits.push("Banana");

console.log(fruits);

let array = new Array<number | string>(3);

array[0] = 1;
array[1] = "Two";
array[2] = 3;
console.log(array);
