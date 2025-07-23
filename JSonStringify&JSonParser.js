/*
JSON.stringify() : static method converts a JavaScript value to a JSON string.
- Optionally replacing values if a replacer function is specified. 
- OR Optionally including only the specified properties if a replacer array is specified.
*/

const unObj = {
    nam : "Sohana",
    age : 25,
    city : "Delhi",

    nextObj : {
        nam : "Shashank",
        age : 30,
        city : "Noida"
    }
}

const str = JSON.stringify(unObj);
console.log(typeof str); // string

// ** Using Replace Fn ** 
const user = {
  name: "Sohana",
  age: 30,
  password: "secret",
  email: "sohana@example.com"
};

const str2 = JSON.stringify(user, ["nam", "age"]); // Only include
console.log(str2); // {"nam":"Sohana","age":30}

// ** Using JSON.stringify(value, replacer, space)

/*
* value: the JavaScript object you want to convert
* replacer: use null if you don’t want to filter or transform
* space: number of spaces used for indentation in the resulting string
*/

const userTwo = {
  name: "Test",
  age: 30,
  address: {
    city: "Bangalore",
    zip: "560001"
  }
};

const jsonPretty = JSON.stringify(userTwo, null, 2);
console.log(jsonPretty);

// ** JSON.parse() : static method parses a JSON string, 
// * converting JSON strings into actual JavaScript objects.
// * It can also parse JSON strings into arrays, numbers, booleans, or null.
// * If the string is not valid JSON, it throws a SyntaxError.

const string = '{"name":"Sohana","age":30}';
const obj = JSON.parse(string); // { name: 'Sohana', age: 30 }
console.log(typeof obj); // object