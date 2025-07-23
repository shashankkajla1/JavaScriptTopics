/*
- Callback: The guest at the party.
- Higher-Order Function: The host who invites and manages the guest.
*/
// Call Back : A function passed as an argument to another function and called inside it.
// Higher Order Fn : A Higher-order functions are functions that take other functions as arguments or return functions as their result.

function myTestCallbackIs(str) {
  console.log("This is my test callback function: " + str);
  return typeof str;
}

function myTestHigerOrderFn(passedFn, str, num) { // callBack Fn
  const value = passedFn(str);
  return value + num;
}

const xx = myTestHigerOrderFn(myTestCallbackIs, "Joker", 11);
console.log(xx); // Output: This is my test callback function: Joker | string 11

function newCall(){
    console.log("Hello");
}

const testCall = (myFN, numbr)=>{
    myFN();
    console.log("Number is: " + numbr);
    return numbr;
}

const n = testCall(newCall, 10); // Output: Hello | Number is: 10
console.log(n);


function newCallOne(){
    console.log("Hello");
}

const testCallOne = (myFN, numbr)=>{
    myFN();
    console.log("Number is: " + numbr);
    // return testCallOne(myFN, numbr); Infinite call

    if (numbr > 10) {
        return testCallOne(myFN, numbr - 1); // Recursive call
    }
   // return ""; // if not use it print undefined
}

const nOne = testCallOne(newCallOne, 15);
//console.log(nOne);