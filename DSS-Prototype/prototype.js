/*
Prototypal chain :: Check in dev console.

arr.__proto__ = Array.prototype;
arr.__proto__.__proto__ = Object.prototype;
arr.__proto__.__proto__.__proto__ = null; // end of prototype chain

* So, whenver create an array has proto type with Arra.prototype, 
and Array.prototype it also have a prototype which is Object.prototype & then Obj.prototype is null.

*/

const obj1 = {
    nam: "Mohan",
    city : "Delhi",
    age : 22,
    dept : "CSE",
    getDetails : function(){
        console.log(`Name: ${this.nam}, City: ${this.city} Age : ${this.age} Dept: ${this.dept}`);
    }
}

const obj2 = {
    nam : "Sohan",
    age : 33
}

console.log(obj2.hasOwnProperty("dept")); // false

obj2.__proto__=obj1;
console.log(obj2.hasOwnProperty("dept")); // false

obj2.getDetails();

/*
*When try to access the prototype first it will check in obj2 as this refers to obj2 here if not their then 
it will goes to the __proto__.__proto__ if not foud here as well gives null.

- Now here it will check property in obj1 prototype assign by JS engine after this obj2.__proto__=obj1;
- If found print it and if its available in obj2 then it takes from obj2 itself coz this refres to obj2.
*/

// Now same for function ::

Function.prototype.myBind= function(){
    console.log("Hello");
}

const f1 = function(){
    console.log("Function 1");
}

const f2 = function(){
    console.log("Function 2");
}

f2.myBind(); // Hello

