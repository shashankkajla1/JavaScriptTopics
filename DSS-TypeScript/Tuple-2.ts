// Tuple : is a datat type can store multiple values of different types in a single variable.

let value : [string, boolean, number] = ["Hello", true, 12]
value.push(15); 
console.log(value); // [ 'Hello', true, 12, 15 ]

// ** You can declare Array of Tuple also.
let arrOfTuple: [string, number][] = [
    ["Apple", 1],
    ["Banana", 2],
    ["Cherry", 3]
];


arrOfTuple.push(["Date", 4]);
console.log(arrOfTuple);
// ** [ [ 'Apple', 1 ], [ 'Banana', 2 ], [ 'Cherry', 3 ], [ 'Date', 4 ] ] **

// ** ENUM **
// Number enum idx starts from 0 by default, here no value assigned so it give number
enum Color {
    Red ,
    Green, 
    Blue 
}

console.log(Color.Red);   // 0
console.log(Color.Green); // 1  
console.log(Color.Blue);  // 2

// ** String enum idx starts from 0 by default, here value assigned so it give string
enum Direction {    

    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
    Test = getMixedEnum_thirdValue()
}

console.log(Direction.Up);    // UP
console.log(Direction.Down);  // DOWN   
console.log(Direction.Left);  // LEFT
console.log(Direction.Right); // RIGHT
console.log(Direction.Test);  // 20

// ** Hetrogeneous Enum **
enum MixedEnum {
    First = 1,
    Second = "Two",
    Third = getMixedEnum_thirdValue()
}
console.log(MixedEnum.First);  // 1
console.log(MixedEnum.Second); // Two   
console.log(MixedEnum.Third);  // 3


function getMixedEnum_thirdValue(): number {
    return 20;
}
