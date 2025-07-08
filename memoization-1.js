/*
Memoization : Optimnization technique to store the results in cache memory to save time.
To saving previous i/p's something called cache.

Ex : Suppose, You are running code for 1st time you got the o/p for it 
and again you are running the code for the same request i/p it takes time agin to run it,
So better to store it in cache and used it when same request comes again.

-> This is called Memoization.
*/

let sum = 0;

const calc = (num) => { // 4
  for (let i = 0; i < num; i++) {
    sum = sum + i;
  }

  return sum;
};

//console.time();
//console.timeEnd(); // default: 0.251ms

//console.log(calc(4));


const memoization = (func)=>{

  let cache = {};
  return function(... args){
    let n = args[0];
    if(n in cache){ // run 1 time, If value in cache than give it from cache
      console.log("Fetching from cache");
      console.log(cache); // { '4': 6 }
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = func(n);
      cache[n] = result;
      return result;
    }
  }

}

console.time();
const memoizedCalc = memoization(calc);
console.log(memoizedCalc(4)); // Calculating result
console.timeEnd(); 

console.log(memoizedCalc(4)); 
console.timeEnd(); 


/*
-- Used in React

* Limitations: 
- Only works well for pure functions (same input → same output).
- Memory grows with cache size — may need to limit or clear it (LRU cache, etc.).
- Input values must be serializable (for object arguments, use Map or WeakMap carefully).

*/