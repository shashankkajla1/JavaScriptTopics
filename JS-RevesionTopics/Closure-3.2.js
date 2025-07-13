// ** Data hiding and encapsulation in Closure ::

/*
-->> ** Without Closure. 
var count = 0;
function increment(){
 count++;
}
// in the above code, anyone can access count and change it.
*/


// -->> ** With Closure.
function closureCounter(){
    let counter = 0;

    return function incremeentCounter(){
        counter ++;
        console.log(`Counter Value : ${counter}`);
    }
    // return incremeentCounter;
}

const xma = closureCounter(); // TypeError: closureCounter is not a function
xma(); // Counter Value : 1
xma(); // Counter Value : 2