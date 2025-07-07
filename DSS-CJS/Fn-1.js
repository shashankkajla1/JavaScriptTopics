const x = 20;

function f1() {
  console.log("Function f1 called with x =", x);
}

function f2() {
  console.log("Function f2 called with x =", x);
}

class Test {
  constructor(nam) {
    this.nam = nam;
  }

  display() {
    console.log("Test class instance with nam =", this.nam);
  }
}

function f3() {
  console.log("Function f3 called with x =", x);
}


module.exports = {
  varX: x,
  myClass :Test,
  FnOne : f1,
  FnTwo : f2,
  f3
  
};
