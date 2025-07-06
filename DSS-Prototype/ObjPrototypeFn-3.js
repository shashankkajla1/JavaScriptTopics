// String proto type will check from chatgpt.

const PersonObj = {
    displayName : function(){
        console.log(`Name: ${this.name}`)
    },
    displayAge : function(){
        return `Age: ${this.age}`;
    }
}

const pOne = {
    name: "Alice",
    age: 30,
}

const pTwo = {
    name: "Jack",
    namT: "Bob",
    age: 27,
    city: "New York",
    __proto__: PersonObj // Setting prototype to PersonObj
}

// 1st way using call, bind & apply methods
PersonObj.displayName.call(pOne); // Name: Alice
console.log(PersonObj.displayAge.call(pTwo)); // Age: 30

// Other way is using __proto__
pTwo.displayName(); // Jack
console.log(pTwo.displayAge()); // Age: 27

console.log(pTwo.hasOwnProperty("namT")); // true
console.log(pTwo.hasOwnProperty("displayName")); // false, its coming from PersonObj which is assign from __proto__