// ** Fn can include parameter type and return types.

function multiple(x: number, y: number): number {
    return x * y;
}

console.log(multiple(10, 20)); // Output: 200

// ** Giving Optional Param to a Fn.
function optionalParam(nam: string, num? : number) : void {
    console.log(`Name: ${nam}`);
    if(num){
        console.log(`Number: ${num}`);
    }
}

optionalParam("Mohana"); // Output: Name: Mohana
optionalParam("Mohana", 42); // Output: Name: Mohana, Number: 42

/* ** Rest Parameters **
- Used to accomoodate n numbers of parameter easily.
- When a no. of para that a Fn is received is not known or can vary, 

- In JS is achived by args variable but in TS we can use rest parameter denotes by ellipsis ..
*/

function restParam(... nam : string[]): void{
    console.log(nam);
}

restParam("Mohana", "John", "Doe"); // Output: [ 'Mohana', 'John', 'Doe' ]
