/* 
-> async is a keyword to create async Fn before Fn.
* This async is alwz return a promise.

i.) Either you return a promise here, if async Fn return promise then it needs to be resolved without await with then()
or with await it just directly return the resolved value of promise.

ii.) Suppose async Fn dont returning non- promise values i.e. String, boolean, float, num etc.
then the value basically wrap inside the promise and it will return it i.e. p.then() or await.

*/

// 1.) Case:
const p = new Promise((res, rej)=>{
    res("Promise is Created !!");
})

// async Fn returning promise
async function getDataOne(){
    return p;
}
const x = getDataOne();
x.then((res)=>{
    console.log((res));
})

// async Fn returning promise with await
async function getDataTwo(){
    const xx = await p;
    console.log(xx);
}
getDataTwo();
// - You're awaiting the promise and logging the resolved value inside the async function.
// - await pauses execution inside the async function until the promise is resolved


/* >>> In case Of returning :
Here, 
- getDataOne() is an async function, which always returns a promise.
- When you do console.log(getDataOne()), you're logging the promise itself — and at that moment, it’s still pending because the await hasn’t finished yet.

*/

const p1 = new Promise((res, rej)=>{
    res("P1 Promise is Created !!");
});

async function test(){
    return await p1;
}

// 1. way to handle then
test().then(res=>console.log(res));

//2. way to handle with await
async function test2(){
    const z= await test();
    console.log(z);
}

test2();

// Case 2.): 
async function getDataTest(){
    return "This is a string value";
}
getDataTest().then(res => console.log(res)); // This is a string value

async function getDataTest(){
    return "This is a string value";
}




