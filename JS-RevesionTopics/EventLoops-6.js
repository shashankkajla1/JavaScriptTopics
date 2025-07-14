console.log("Hello");
setTimeout(function () {
  console.log("Set Timeout executed");
  console.log("Call stack is free now ...");
}, 1500); // call Back Queue

console.log("End of script");


// ** Promises
let p = new Promise(resolve=>{ // Micro Rask Queue
    console.log("Promise one is created");
    resolve("Promise one is resolved ...");
})
p.then((resolve)=>{
    console.log(resolve);
})

let p1 = new Promise((resolve, reject)=>{ // Micro Rask Queue
   setTimeout(()=>{ 
    // If inside promise there is a set Time Out it will be added to the Web API and then to the Micro Task Queue
    // So it will be executed after the call stack is free and all the micro tasks are done.
    if(resolve){
        console.log("Promise Two is created");
       resolve("Promise Two is resolved ...");
    }

   },5000)
    
})
p1.then((resolve)=>{
    console.log(resolve);
})

function test() {
    console.log(" Synchronous Test function is called");
}

test(); // Synchronous code will be executed first