// Prototype Chaining :: 

function Animal(nam){
    this.nam = nam;
}

Animal.prototype.fn1= function(){
console.log(`Animal Function 1: ${this.nam}`)
}

Animal.prototype.fn2= function(){
console.log(`Animal Function 2: ${this.nam}`)
}

let d1 = new Animal("Dog");

console.log(d1.constructor); // Here 
d1.fn2();

/*
console.log(d1.constructor); : d1 obj. points to the [Function: Animal] constructor Fn Animal.

console.log(d1.__proto__ === Animal.prototype); // T, As d1 refers to the Animal Constructor

Q.) console.log(Animal.constructor) OR console.log(Animal.constructor.prototype);
o/p : ƒ () { [native code] } ??

Ans.) So you're really doing:

- Animal.constructor → refers to Function (because Animal is a function).

- console.log(Animal.constructor === Animal); 
-> Animal.constructor refers to the constructor of the function Animal, which is the built-in Function constructor of Object parent class of all.

- console.log(Function.prototype);
- Function.prototype is itself a function — the base function from which all functions inherit.

* It contains f1(), f2(), Animal(nam) constructor.

* console.log(d1.constructor); 
- Here, d1 inside Object class we have constructor Fn. which is refering to the Animal Constr 
*/

console.log(d1.__proto__ === Animal.prototype); // T
console.log(Animal.prototype.constructor=== Animal); // T

console.log(Animal.constructor === Animal); // F
// Animal.constructor refers to the global Function constructor (the parent of all functions), not to Animal itself — so the comparison is false
// Animal.constructor is the global Function constructor, which is an instance of the Object class at the top of the inheritance chain


console.log(" ============== Overriden Issue in JS =============== ");

// * Note : Inbuild property inside prototype is constructor, which refers to the function that created the instance's prototype.
// * constructor: testDog : If its not their then it refers to the Object class constructor -> console.log(d2.constructor);
// * Object.prototype : having own constructor property as its a parent class for all

function testDog(dogNam){
    this.dogNam = dogNam;
}

testDog.prototype={
    constructor: testDog, // This is important to maintain the constructor reference [Function: testDog]
    DogFn1: function(){
        console.log(`Dog Function 1: ${this.dogNam}`);
    },
    Dogfn2: function(){
        console.log(`Dog Function 2: ${this.dogNam}`);
    }
}

let d2 = new testDog("Tommy");
console.log(d2.constructor == testDog); // true, as we have set the constructor property explicitly in the prototype object

console.log(d2.constructor); // [Function: Object] // Here it refers to the Object class constructor

/*
- When you assign a new object directly to testDog.prototype, you replace the entire prototype object.

- This means that the original prototype chain is broken, and the constructor property of the new prototype object points to Object, not to testDog.

- to overcome this problem, :: constructor: testDog
*/