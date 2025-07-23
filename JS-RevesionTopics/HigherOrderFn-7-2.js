// Higher Order Function : map, filter, reduce, forEach etc..
let arr = [10, 11, 13, 14];

const myMap = (myArr) => {
  return myArr * 2;
};

const x = arr.map(myMap);
console.log(x); // Output: [20, 22, 26, 28]

const y = arr.map(items => items * 0);
console.log(y); // Output: [0, 0, 0, 0]

const z = arr.map((items)=>{
    return items * 3;
});
console.log(z); // Output: [30, 33, 39, 42]

// ** Implementations Example **
console.log(" ============ Implementations Example ================== ");

let arrOne = ["Mohan ", "Sohan ", "Rohan ", "John "];

const cc= arrOne.flatMap(x => x.trim())
console.log(cc);

console.log(" ========== Reduce Example ============== ");
/*
It is a function which take all the values of array and gives a single output of it. 
It reduces the array to give a single output.

- 1st argument accumulator : takes initial value(accumulator, also needs to be initialized with initial value)
- 2nd argument currentValue: takes the current value of the array
*/

const raw = [3, 6, 4, 5, 1];

const xc= raw.reduce((acc, cval)=>{
  const v = acc + cval;
  return v;

}, 2); // ** Here 2 is initial value.

console.log(xc); // Output: 17

const minimumValue = raw.reduce((acc, val)=>{

  if(acc < val){
    return acc;
  }
  else{
    return val;
  }

}, 100);

console.log(minimumValue); // Output: 1

console.log(" ============= Using Arr Of Objects =================== ");

let objArr = [
  {name: "Mohan", age: 22, ID: 31},
  {name: "Sohan", age: 23, ID: 32},
  {name: "Rohan", age: 24, ID: 33},
  {name: "John", age: 25, ID: 34}
];

const arrObj = [];

const newName= objArr.filter((value)=>{
  if(value.age > 23 && value.ID > 31){
    arrObj.push(value.name);
    return value;
    // return value.ID or value.age; 
  }
    
});

/*
Always return in that manner as its a array of objects.
[
  { name: 'Rohan', age: 24, ID: 33 },
  { name: 'John', age: 25, ID: 34 }
]
*/

console.log(newName);
console.log(arrObj); // Output: [ 'Rohan', 'John' ]

const mm= objArr.map((value)=>{
  if(value.age > 23 && value.ID > 31){
    return value.name;
  }
  return "undefined"; // If not use it print undefined
}).filter(x => { if(x !== "undefined") return x; }); // Filter out undefined values

console.log(mm); // Output: [ 'Rohan', 'John' ]






