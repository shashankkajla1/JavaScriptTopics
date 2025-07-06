const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

let fullNamsIs = users.map(function user(v){
return v.firstName + " " + v.lastName;
})

console.log(fullNamsIs); // [ 'Alok Raj', 'Ashish Kumar', 'Ankit Roy', 'Pranav Mukherjee' ]

console.log(" =========== Unique People with Unique Age ============ ");

// Obj should have count of uniue value of age
let x= users.reduce((acc, curr)=>{

 if(acc[curr.age]){
    acc[curr.age] = ++ acc[curr.age]
}
else{
    acc[curr.age] = 1;
}
return acc;

}, {})

console.log(x); 

/* acc : { '23': 1, '29': 2, '50': 1 }

- Here current iterating age value from array obj 1 by 1

1st Itr: 
*if(acc[curr.age]) i.3 23 at first is present or not 
here, acc {} has empty obj means 23 not present in acc so else part executes and add 1 to it

2nd Itr: 
* check for 29, acc[curr.age] i.e. 29 is present or not in acc 
Here in acc for now {23: 1}, so not present again else part executes

3rd time: 
* check for 29, acc[curr.age] i.e. 29 is present or not in acc
Here acc present {23: 1, 29: 1} so it will increment the value of 29 by 1 i.e. 2
- {23 : 1, 29: 2}

*/

console.log(" =========== Chaining Example ============");

// Firts name that age less than 50
let xx= users.filter(function (v){
    if(v.age < 50){
        return v;
    }
}).map((vv)=>{
return vv.firstName;
})

console.log(xx); // [ 'Alok', 'Ashish', 'Ankit' ]

console.log(" ======== Impl same thing with reduce ============");

let r= users.reduce(function (acc, curr){

    if(curr.age < 50){
        acc.push(curr.firstName + " "+ curr.lastName);
    }

    return acc
},[])

console.log(r); // [ 'Alok Raj', 'Ashish Kumar', 'Ankit Roy' ]
