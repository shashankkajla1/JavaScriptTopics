let myArrayValue = [1, 2, 3, 7, 8, 11, 4];

const largestValue = (myArr)=>{
    if (myArr.length === 0) return undefined; // Handle empty array

    let max = 0; // Initialize max with the first element
    for (let i = 1; i < myArr.length; i++) { // Start from the second element
        if (myArr[i] > max) {
            max = myArr[i];
        }
    }
    return max;
}

const smallValue = (myArr)=>{
    if (myArr.length === 0) return undefined; // Handle empty array

    let min = 100; // Initialize max with the first element
    for (let i = 1; i < myArr.length; i++) { // Start from the second element
        if (myArr[i] < min) {
            min = myArr[i];
        }
    }
    return min;
}


function applyToArray(fn, arr) {
    return fn(arr);
}

const large = applyToArray(largestValue, myArrayValue);
console.log(large);

function applyToArray(fn, arr) {
    return fn(arr);
}

const small = applyToArray(smallValue, myArrayValue);
console.log(small);

console.log(" ============ Other Examples ==================");

// Higher Order Fn : A Higher-order functions are functions that take other functions as arguments or return functions as their result.

function x(){
    console.log("Hello");
}

function y(fn){
    fn();
}

y(x);

function xx(nam){
    console.log("Hello" + " "+nam);
}

function yy(fn, str = "Mohana"){
    fn(str);
}

yy(xx);

console.log(" ================ Don't Repeat Yourself (DRY) principle  =============== ");

const radiusArr = [1, 2, 3, 4];

const area = function (radius) {
   return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const cal = function(fn, arr){
    let output = [];
    for(let i=0; i<arr.length; i++){

      output.push(fn(arr[i]));

    }
    return output;
}

console.log(cal(area, radiusArr));
console.log(cal(circumference, radiusArr));
