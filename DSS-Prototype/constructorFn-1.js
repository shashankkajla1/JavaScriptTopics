function Person(nam, age){
  this.nam=nam;
    this.age=age;

    this.display = function() {
        console.log(`Name: ${this.nam}, Age: ${this.age}`);
    }
    this.getName = function() {
        return this.nam;
    }
    this.getAge = function() {
        return this.age;
    }

    this.setName = function(newName) {
        this.nam = newName;
    }
    this.setAge = function(newAge) {
        this.age = newAge;
    }
}

let p1 = new Person("Mohan", 22);
let p2 = new Person("Sohan", 20);

p1.display(); // Name: Mohan, Age: 22
p2.display(); // Name: Sohan, Age: 20

console.log(p1.hasOwnProperty("nam")); // true

p1.setName("Rohan");
p1.setAge(25);

p1.display(); // Name: Rohan, Age: 25

/*
- Here i also passes the set and get functions but in this constructor function if i have 
12 functions and now i created obj 10 times for the same function and the data for this rendering on website
is take time due to data loading or page changing coz every time when obj created these methods are 
associated with seperate memory with refrence to every obj. i.e. display(), getter() & setter() functions.

10 objs means 10 methods for for every obj creates seperate memory for only that obj.
- So, to avoid this we can use prototype to create methods and then use it in every obj created.
*/