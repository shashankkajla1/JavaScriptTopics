function PetAnimal(nam){
    this.nam = nam; 
}

PetAnimal.prototype.getName = function(){

    console.log(`Pet Animal Name: ${this.nam}`);
}

function Dog(nam, breed){
   PetAnimal.call(this, nam);
   this.breed = breed;
}

Dog.prototype.getBreed = function(){
    console.log(`Breed: ${this.breed}`);
}

Dog.prototype = PetAnimal.prototype;

function Cat(nam, breed, color){
    Dog.call(this, nam, breed);
    this.color = color;
}

Cat.prototype.getColor = function(){
    console.log(`Color: ${this.color}`);
}

Cat.prototype = Dog.prototype;

let d = new Dog("Buddy", "Lebra");
let c = new Cat("Tommy", "Persian", "White");

console.log(d.constructor); 
console.log(c.constructor);

c.getName();
c.getBreed();
c.getColor();