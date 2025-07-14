const testObj_One = {
  nam: "Sohana",
  age: 42,
  gender : "Female",

  printTestObj_One: function (ID) {
    console.log(`ID: ${ID} | Name: ${this.nam} & Age: ${this.age}`);
  },

  printTestObj_Two: function () {
    console.log(`Name: ${this.nam} & Age: ${this.age}`);
  },
};

const testObj_Two = {
  nam: "Sohana",
  age: 42,
  gender : "Male",

    printTestObj_Two: function () {
        return `Gender: ${this.gender}`;
    },

};

const gender= testObj_Two.printTestObj_Two.call(testObj_One);
console.log(gender);

testObj_One.printTestObj_One.apply(testObj_Two, [101, 102]); // wont take 102 coz it is not defined in the function as ... rest args

testObj_One.printTestObj_One.bind(testObj_Two, 103)(); // bind returns a new function, so we need to call it with ().

const zz= testObj_One.printTestObj_One.bind(testObj_Two, 1034)();
//console.log(zz()); 
// Print oBj has no return statement so it will return undefined.

