// Its a data type that provide choice to store.
let c: (string | number );
c= "Hello";
console.log(c);
c = 42; // Now it's a number
console.log(c);


function processValue(value : (string | number)) :  void{
    if(typeof value === "string"){
        console.log(`String value: ${value}`);
    }
    else if(typeof value === "number"){
        console.log(`Number value: ${value}`);
    }
    else {
        console.log("Unknown type");
    }
}

processValue("Mohana"); // Output: String value: Hello
processValue(100); // Output: Number value: 100