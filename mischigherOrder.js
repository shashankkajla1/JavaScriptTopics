console.log(" =============== Filter Example ===================");

const users = [
  { id: 1, name: "Alice", age: 25, role: "developer", active: true },
  { id: 2, name: "Bob", age: 17, role: "intern", active: true },
  { id: 3, name: "Charlie", age: 35, role: "manager", active: false },
  { id: 4, name: "Diana", age: 32, role: "developer", active: true },
  { id: 5, name: "Edward", age: 42, role: "admin", active: true },
  { id: 6, name: "Fiona", age: 28, role: "developer", active: false }
];

const x= users.filter((v)=>{
    if(v.active && (v.role=== 'developer' && v.role!== 'undefined')){
        return v;
    }
})

console.log(x);

/*
[
  { id: 1, name: 'Alice', age: 25, role: 'developer', active: true },
  { id: 4, name: 'Diana', age: 32, role: 'developer', active: true }
]
*/

console.log("===== REDUCE EXERCISES =====");
 
const orders = [
  { id: 1, userId: 1, products: ["Laptop", "Mouse"], total: 1099 },
  { id: 2, userId: 3, products: ["Coffee Maker"], total: 129 },
  { id: 3, userId: 1, products: ["Headphones", "Speakers"], total: 249 },
  { id: 4, userId: 2, products: ["Yoga Mat", "Water Bottle"], total: 49 },
  { id: 5, userId: 3, products: ["Monitor", "Keyboard"], total: 349 },
  { id: 6, userId: 1, products: ["Smartphone"], total: 799 }
];


const xz= orders.reduce((acc, curr)=>{
 if(curr.products){
    acc = acc + curr.products.length;
 }
   return acc;
}, 0)

console.log(xz);  //10

console.log(" ===== COMBINATION EXERCISES ===== ");
 
const transactions = [
  { i: 1, userId: 3, type: "purchase", amount: 299, category: "Electronics" },
  { id: 2, userId: 1, type: "purchase", amount: 149, category: "Clothing" },
  { id: 3, userId: 2, type: "refund", amount: 29, category: "Books" },
  { id: 4, userId: 1, type: "purchase", amount: 99, category: "Electronics" },
  { id: 5, userId: 3, type: "refund", amount: 39, category: "Toys" },
  { id: 6, userId: 2, type: "purchase", amount: 199, category: "Electronics" },
  { id: 7, userId: 1, type: "purchase", amount: 49, category: "Books" }
];



