console.log(" ========== Map ==============");

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Coffee Maker", price: 129, category: "Kitchen" },
  { id: 3, name: "Running Shoes", price: 89, category: "Fitness" },
  { id: 4, name: "Bluetooth Speaker", price: 69, category: "Electronics" },
  { id: 5, name: "Yoga Mat", price: 29, category: "Fitness" }
];

let c= products.map((v)=>{
    return v.category
})
console.log(c); // [ 'Electronics', 'Kitchen', 'Fitness', 'Electronics', 'Fitness' ]

console.log(products.map(v=> "$"+""+v.price)); // [ '$999', '$129', '$89', '$69', '$29' ]

console.log("========= Using Obj with Map in O/p =======");
const xy = products.map(function (v){
    return { id: v.id, name: v.name };
})

console.log(xy); // [ { id: 1, name: 'Laptop' }, { id: 2, name: 'Coffee Maker' }, { id: 3, name: 'Running Shoes' }, { id: 4, name: 'Bluetooth Speaker' }, { id: 5, name: 'Yoga Mat' } ]

// or using reduce to create an Obj.

const cc= products.reduce((acc, curr)=>{
    
    if([curr.id] && [curr.name])
    acc.push(curr.id + "-" + curr.name);
    return acc;
},[])

console.log(cc); // [ '1- Laptop', '2- Coffee Maker', '3- Running Shoes', '4- Bluetooth Speaker', '5- Yoga Mat' ]

const updatedProducts = products.map(product => {
  return {
    ...product, // copy existing properties
    shortName: product.name.slice(0, 10) // limit name to 10 characters
  };
});

console.log(updatedProducts);

console.log(" ========= Reduce with object ==========");
const ccx = products.reduce((acc, curr) => {
  if (curr.id && curr.name) {
    acc[curr.id] = curr.name;          // key = id, value = name
  }
  return acc;
}, {});                               // initialize as empty object

console.log(ccx);

/*
{
  '1': 'Laptop',
  '2': 'Coffee Maker',
  '3': 'Running Shoes',
  '4': 'Bluetooth Speaker',
  '5': 'Yoga Mat'
}
*/