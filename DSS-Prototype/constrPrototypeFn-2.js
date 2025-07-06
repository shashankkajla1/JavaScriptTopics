function Person(nam, age){
    this.nam=nam;
    this.age=age;
}

Person.prototype.displayName= function() {
    console.log(`Name: ${this.nam}`);
}

Person.prototype.displayAge = function(){
    console.log(`Age: ${this.age}`);
}

Person.prototype.type="HoMo Test";


/*
-> Use getter and setter as well
Person.prototype.setName = function(newName) {
    this.nam = newName;
}

Person.prototype.setAge = function(newAge) {
    this.age = newAge;
}

*/

let p1 = new Person("Alice", 30)
let p2 = new Person("Jack", 26)

p1.displayName();
p1.displayAge();

p2.displayName();
p2.displayAge();

console.log(p1.hasOwnProperty("nam")); // T
console.log(p1.hasOwnProperty("displayName")); // F

// * As displayName() its not exclusion with the instance its at prototype level.

/*
- First it will check displayName method in Person coz this refers to it, if not found will check in prototype.
- Here, Person.prototype : contains nam, age, type, dispAge, dispName & Object Prototype
- p1.__proto__ : contains same
- p1.__proto__.__proto__ = Object.prototype : in this case as its root

*/

console.log(" ============ Returning Fn ================ ");

function Person1(nam, age){
    this.fName=nam;
    this.lName=age;

    this.greeting = function() {
      console.log("Hello, welcome to the Person class!");
    }
}

Person1.prototype.displayName1= function() {
    return `Name: ${this.fName}`;
}

Person1.prototype.displayAge1 = function(){
    return `Age: ${this.lName}`;
}

Person1.prototype.type="HoMo Test";

let pp1 = new Person1("Test One", 11)
let pp2 = new Person1("Test Two", 12)


const nameIs= pp1.displayName1();
console.log(nameIs);
const ageIs = pp1.displayAge1();
console.log(ageIs);

console.log(pp2.displayName1());
console.log(pp2.displayAge1());

console.log(pp1.hasOwnProperty("greeting")); // t
console.log(pp1.hasOwnProperty("displayName1")); //f coz. comin from prototype 
// And also hasOwnProperty coming from Object Perototype as in pp1.prototype contains : name, age, type dispName dispAge & object prototype
// If in case some method i.e. test() not available it check in Person and then check in Prototype then check in root calss i.e object
