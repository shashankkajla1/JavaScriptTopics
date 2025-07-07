function one() {
  console.log("Function one called");
}

function two() {
  console.log("Function two called");
}

class UnAge {
  constructor(age) {
    this.age = age;
  }
  dispAge() {
    console.log("Age is: " + this.age);
  }
}

export { one as FnOne, two as FnTwo, UnAge };
