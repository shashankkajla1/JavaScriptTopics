function printValue(){
    console.log(`${this.nam} & ${this.age}`);
}

const valueObj = {
    nam: "Sohana",
    age: 42,
   // print: printValue
}

// valueObj.print();  : Sohana & 42

// Call apply & bind Fn: 
printValue.call(valueObj);
printValue.apply(valueObj); // This will work for apply as well coz its a first parameter.

printValue.bind(valueObj)(); // bind returns a new function, so we need to call it with ()., in case using bind and fn not returning anything.
console.log("======== Another Example ========");

const personObject = {

    nam : "Alice",
    greetMsg : "Gd Morning !!",
    punchuations : "?",

    greetFn: function(greetings ,punchuations) {
        return greetings + ", "+this.nam +' '+ punchuations;
    },

    testNewFn : function(){   // If the Fn itself not taking parameter then there is not need to pass parameter.
        return this.greetMsg + ' '+ this.punchuations;
    }
}

const anotherPersonObj = {
    nam : "Jackal",
    greetMsg : "Gd Night",
    punchuations : "!!"
}

const xx = personObject.greetFn.call(anotherPersonObj, "Heyyaa", "///"); // this nam is dynamic here
console.log(xx); // means statically passed which is already present , for dynamic give args value

console.log(personObject.testNewFn.apply(anotherPersonObj)); // If the Fn itself not taking parameter then there is not need to pass parameter.

console.log(personObject.greetFn.bind(anotherPersonObj, "xzzzz", "--->>")()); // bind returns a new function, so we need to call it with ().

console.log(" ========= Another Example with FN =========== ");


function checkForValue(txt, txtOne){
    return `${txt} | ${txtOne} - ${this.namVal} & ${this.ageVal}`
}

let objTestcheck = {
    namVal: "Sohana",
    ageVal: 42,
    //checkFn: checkForValue
}
console.log(checkForValue.apply(objTestcheck, ["Heyooo", "Brooo"])); // This will work for apply as well coz its a first parameter.
