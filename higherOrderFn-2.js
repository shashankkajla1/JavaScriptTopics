// map, filter, reduce

let myArrayValue = [1, 4, 6, 3, 5];

// 1. way we can pass a function to map, No need to writ login in test() as its already 
// map doing it i.e. iterating values

function test(arr){
   return arr * 2;
    
}
console.log(myArrayValue.map(test)); // [2, 8, 12, 6, 10]

// 2. Using arrow function in 1 line doing the same thing.
console.log(myArrayValue.map(arr => arr * 2));

// 3. way by passing callback function.
let xx= myArrayValue.map((x)=>{
    return x * 2;
})

console.log(xx);

// 4. or the 3rd & 4th are same one's
let yy = myArrayValue.map(function (x){
   return x *2; 
})

console.log(yy);

console.log(" ============== Reduce ===================");

/*
It is a function which take all the values of array and gives a single output of it. 
It reduces the array to give a single output.

- 1st argument accumulator : takes initial value(accumulator, also needs to be initialized with initial value)
- 2nd argument currentValue: takes the current value of the array
*/

const x = [1,2,3,4,5]

const z= x.reduce((acc, val)=>{

    sum = acc + val;
   return sum;
}, 0)

console.log(z); // 15

const max = x.reduce((acc, val)=>{
    if(acc > val){
        return acc;
    }
    else{
        return val;
    }
}, 0)

console.log(max);

console.log(" ============= Using Arr Of Objects ===================");

let obj = [
    {name: "Mohan", age: 22},
    {name: "Sohan", age: 20},
    {name: "Rohan", age: 25},
    {name: "John", age: 18}
]

const arr= [];
const n = obj.filter((x)=>{
    if(x.age > 20){
        arr.push(x.name); // x.name & x.age will return same arr obj
        return x; // x.name & x.age will return same arr obj
    }
})

console.log(arr);
console.log(n);

const m = obj.map((x)=>{
    if(x.age > 20){
        return x.name; // x.name & x.age will return same arr obj
    } 
    else{
        return "Not Eligible"; 
    }
});

console.log(m);

const newArr = []

obj.map((xx)=>{
if(xx.age > 20){
    newArr.push(xx.name); // x.name & x.age will return same arr obj
}
 })

console.log(newArr);

console.log(" ============= Using Objects Of Arr ===================");

let obj2 = {
    
    num1 : [11, 12, 13, 14],
    num2 : [21, 22, 23, 24]
}

const c= obj2.num1.filter((x)=>{
    if(x > 13){
        return x;
    }
})

console.log(c); // 14
