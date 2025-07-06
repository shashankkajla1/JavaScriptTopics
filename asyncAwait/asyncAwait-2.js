// promise Fn suspended when JS seens await in program

const px1 = new Promise((res, rej)=>{
    setTimeout(()=>{
    res("P1 : Promise is Created !!");
    }, 5000)
});

const px2 = new Promise((res, rej)=>{
    setTimeout(()=>{
    res("P2 : Promise is Created !!");
    }, 7000)
});

console.log("This is test");

async function testCheckPromise(){
    console.log("Before await");
    const value1= await px1;
    console.log(" In P1");
    console.log(value1); // P1 : Promise is Created !!

    const value2= await px2;
    console.log("In P2");
    console.log(value2); // P2 : Promise is Created !!
}

function check(){
    console.log("check Fn");
}


testCheckPromise();

check();

// If same promise executing twice in code so it will take same time to resolve
// * p1 = 10 sec & p2 = 10 sec calling in async await it will take 10 sec to fullfill only.
// * p1 = 10 sec & p2 = 07 sec calling in async await Fn it will take 10 sec to fullfill both coz internally its resolved the second one
// only wait for 10 sec and print whole value.

console.log("============ Fetch() ===============");

/*
fetch() => is a promise returns response obj

const data = await fetch()
const jsonData=  await data.json() - here json return again promise and data containing response obj of fetch
clg(jsonData);

OR ::

fetch(apiUrl).then(res=> res.json()).then(data => console.log(data));

*/


