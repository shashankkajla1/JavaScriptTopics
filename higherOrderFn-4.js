 const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

let c= users.map(function (v){
    return v.name;
})
console.log(c); // [ 'Alice', 'Bob', 'Charlie' ]

const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 21 },
  { name: "Tom", age: 18 }
];


let m= people.filter(function (v){
    if(v.age >=18){
        return v;
    }
}).map((vv)=>{
    return vv.name;
})

console.log(m); // [ 'Jane', 'Tom' ]

const v= people.reduce((acc, curr)=>{

    if(curr.age >=18){
        acc.push(curr.name);
    }
    return acc;

}, [])

console.log(v);

console.log(" =========================== ");

let input = ["apple", "banana", "apple", "orange", "banana", "apple"]

let j = input.reduce((acc, curr)=>{

    if(acc[curr]){
        acc[curr] = ++ acc[curr];
    }
    else{
        acc[curr] = 1;
    }

    return acc;
}, {})

console.log(j); // { apple: 3, banana: 2, orange: 1 }

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Pencil", price: 5 },
  { name: "Bag", price: 50 }
];

const cc= products.reduce((acc, curr)=>{
    if(curr.price > 20) {
      
       acc = acc + curr.price; // or acc += item.price;
    }

    return acc;
}, 0)

console.log(cc); // 75



