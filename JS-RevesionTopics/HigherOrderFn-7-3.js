// ** Questions ** //
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(users.map((x) => x.name));

const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 21 },
  { name: "Tom", age: 18 },
];

const yy = people.reduce((acc, value) => {
  if (value.age >= 18) {
    acc.push(value.name);
   }
    return acc;

}, []);

console.log(yy); // [ 'Jane', 'Tom' ]

// Count of fruits in an array
const input = ["apple", "banana", "apple", "orange", "banana", "apple"];

const tt = input.reduce((acc, value)=>{
    if(acc[value]){
        acc[value] = ++acc[value]
    }
    else{
        acc[value] = 1;
    }

    return acc;

}, [])

console.log(tt); // { apple: 3, banana: 2, orange: 1 }

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

