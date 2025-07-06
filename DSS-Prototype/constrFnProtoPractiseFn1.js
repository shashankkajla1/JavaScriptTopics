function Car(a, b, c) {
  this.nam = a;
  this.make = b;
  this.model = c;
}

Car.prototype.dispName()= function(details){
    console.log(`${details} : ${this.nam}`);
}

Car.prototype.dispMake = function(){
    console.log(`Make: ${this.make}`);
}

Car.prototype.dispModel = function(){
    console.log(`Model: ${this.model}`);
}

let c1 = new Car("Mahindra XUV 300", "Mahindra", 2024);
let c2 = new Car("Creta", "Hyundai", 2020);

console.log(c1.hasOwnProperty("nam")); // T
console.log(c1.hasOwnProperty("dispName")); // F, its at prototype level

c1.dispName("Car Name One");
c1.dispMake(); // Make: Mahindra
c1.dispModel(); // Model: 2024

c2.dispName("Car Name Two");
c2.dispMake(); // Make: Hyundai
c2.dispModel(); // Model: 2020

console.log(c2.hasOwnProperty("toString()")); // F, its at prototype level
c2.toString(); // [object Object] - as toString() is a method of Object.prototype

/*
-Here c1 obj point to person in person it will check dispName method or other method if not found
then it will check inside the prototype on Car.prototype and then Object.prototype coz its a parent of all.

- Example toString() : open Object class and check
- Every function have base class Parent class which is Object class in JS.

- Here ctrl + click open Object class i.e. Parent and see other predefined methods like toString, hasOwnProperty, etc.
*/