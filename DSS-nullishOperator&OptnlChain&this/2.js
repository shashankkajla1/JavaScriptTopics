// nullish Collosion ?? : always check the left side first if null or undefined then return right side value.
// either cases alwz return left side even its falsy values i.e. 0, "", false, NaN.

const nObj = {
  nam: "Sohana",
  age: 42,

  addrrDetails: {
    street: "MG Road",
    city: "Bangalore",
    nOthers: null,
    "Test User": 123,
    NsrOne: undefined,

    contact: {
      phone: "1234567890",
      email: "@xyz",
      others: "",
    },
  },
};

console.log(nObj?.addrrDetails?.nOthers ?? "Hello");
console.log(nObj?.addrrDetails?.NsrOne ?? "Hello Again");
console.log(nObj?.addrrDetails?.contact?.others ?? "Not this time"); // empty string

console.log(" ======= Using with Arrays ===========");
const arr = [1, 2, 3, null, 5, undefined, 7];

console.log(arr[3] ?? "Heyaa"); // Heyaa
console.log(arr[2] ?? "Heyaa"); // 3
