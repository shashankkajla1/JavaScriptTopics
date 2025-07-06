/* - Parent class function is share to child class function using prototype in 
i.e Hierarical inheritance & also create a specific class function which is related to that class only.

- Fn.call(this, varName) : used here this refers to the current instance of the class,
 i.e. let m1 = new Test("xyz") : m1 , now Fn.call value move to the parent  property.
*/


// Here name is common property for all the classes, so we can use Human as a base class.
function Human(nam){
    this.nam=nam;
}

Human.prototype.getName= function(){
    console.log(`Name: ${this.nam}`);
}

function Man(nam, gender){
    Human.call(this, nam); // Call Human constructor with this
    this.gender=gender;
}

// Assigning prototype after creating child function either get error while calling class specific fn
Man.prototype= Human.prototype; 

Man.prototype.genderMan= function(txt){  // Specific to Man only
    return `${this.nam} ${txt} Gender: ${this.gender}`;
}

function Women(nam, gender){
    Human.call(this, nam); // Call Human constructor with this
    this.gender=gender;
}

Women.prototype= Human.prototype;

Women.prototype.genderWoman= function(txt){  // Specific to Man only
    return `${this.nam} ${txt} Gender: ${this.gender}`;
}

// Inherit prototype
//Man.prototype = Object.create(Human.prototype);
//Man.prototype.constructor = Man;

// Inherit prototype
//Women.prototype = Object.create(Human.prototype);
//Women.prototype.constructor = Women;

let m1 = new Man("John Cena", "Male")
let m2 = new Man("Rock", "Male")

let w1 = new Women("Riya", "Female")

m1.getName(); // Name: John Cena
console.log(m1.genderMan("Men"));
m2.getName(); // Name: Rock
console.log(m2.genderMan("Men"));

w1.getName(); // Name: Riya
console.log(w1.genderWoman("WomanMen"));



