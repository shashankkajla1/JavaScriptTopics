/*
Before async await execution of code & after async await execution of Code
*/

console.log("Before async await execution of code");

const pf1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 1 is Resolved !!");
    }, 7000);
});

const pf2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 2 is Resolved !!");
    }, 6000);
});

async function testAsyncPromise() {
    console.log("Before 1st Promise");

    pf1.then(res=> console.log(res));
   
    console.log("after 1st Promise");

    pf2.then(res=> console.log(res));
    console.log("2nd Promise Done");
}

testAsyncPromise(); // ZFirst p2 resolved , then p1 resolved

async function testAsyncawait(){
    return pf1;
}

const z= await testAsyncawait()
console.log(` With returning ... ${z}`);

