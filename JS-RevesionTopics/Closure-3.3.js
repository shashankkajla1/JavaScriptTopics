// setTimeOut+ Closure

function closure_setTimeOuts() {
  var s = 1;

  setTimeout(function () {
    console.log(s);
  }, 500);

  console.log("Hello JS!");
}

closure_setTimeOuts();

// Here setTimeOut register with var s with 3sec once call stack free then settime out
// will execute and print s value as 1 after 3 sec.
// Note: setTimeOut is a Web API, so it will not block the call stack

function two() {
  for (let i = 1; i <= 4; i++) {
    // var
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("JS Hello !!");
}

two(); // JS Hello !! 5, 5, 5, 5

/*

- This happens because of closures. When setTimeout stores the function somewhere
and attaches timer to it, the function remembers its reference to i, not value of i. All 4
copies of function point to same reference of i. JS stores these 5 functions, prints string
and then comes back to the functions. By then the timer has run fully. And due to
looping, the i value became 6. And when the callback fun runs the variable i = 6. So same
6 is printed in each log
To avoid this, we can use let instead of var as let has Block scope. For each iteration, the
i is a new variable altogether(new copy of i). Everytime setTimeout is run, the inside
function forms closure with new variable i

*/
