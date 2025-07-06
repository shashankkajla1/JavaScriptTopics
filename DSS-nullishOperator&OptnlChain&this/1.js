const nObj = {
  nam: "Mohan",
  age: 30,
  addrrDetails: {
    street: "MG Road",
    city: "Bangalore",
    nOthers: null,
    "Test User": 123,
    NsrOne : undefined,

    contact: {
      phone: "1234567890",
      email: "@xyz",
      others: "",
    },
  },

  addrrDetailsFn: function () {
    console.log(`${this.nam} lives on ${this.addrrDetails.street}, ${this.addrrDetails.city}`); 
  },
};


if(nObj?.addrrDetailsFn){
  console.log("Hello");
  console.log(nObj.addrrDetailsFn?.());
}

if(nObj.addrrDetails.street && nObj.addrrDetails.contact.email) {
 console.log(`Street: ${nObj.addrrDetails.street}, Email: ${nObj.addrrDetails.contact.email}`);
}

// Using Optional Chaining:: return undefined or null if the any part of chain is null or undefined, check left one first

console.log(nObj?.addrrDetails?.nOthers); // null
console.log(nObj?.addrrDetails?.contact?.others); // empty string

if(nObj?.addrrDetails?.["Test User"]){
  console.log(`Test User: ${nObj.addrrDetails["Test User"]}`); // 123

}
console.log(nObj?.addrrDetails?.NsrOne); // undefined

console.log(" ========== Using with Arrays ===========");

const arr = [1, 2, 3, null, 5, undefined, 7];

console.log(arr?.[2]); // 3
console.log(arr?.[3]); // null

console.log(" ========== Using with Functions ===========");

const getUser = (user) => {
  return user?.name ? `User: ${user.name}` : "No user found";
};

const user = {
 name: "John",
};

const xx= getUser(user)

console.log(xx);