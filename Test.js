const today = new Date();

// Normalize today's date (set hours etc to zero to avoid time issues)
today.setHours(0, 0, 0, 0);

let dateArr = ["4.05.2025", "5.01.2025", "6.4.2025"];

for (let i = 0; i < dateArr.length; i++) {
    const parts = dateArr[i].split('.'); // split "DD.MM.YYYY" into [DD, MM, YYYY]
    
    // Create a Date object from the array parts
    // Note: months are 0-based, so subtract 1 from month
    const arrDate = new Date(parts[2], parts[1] - 1, parts[0]);
    
    if (today > arrDate) {
        console.log(`Current date (${today.toLocaleDateString()}) is greater than ${dateArr[i]}`);
       // take out = // check for status pill if found

    } else {
       // click next button
    }

    // Open document validate the pill status in first of thats it
}


let array = ["Bob", "Alice", "Charlie", "Dave"];

let text = "ce"
let index = 0;

for(let i=0; i<array.length; i++){
    if(array[i].indexOf(text) !== -1){
        index = i+1 ;
    }
}

console.log(`Index : ${index}`);

if(index === 0){
    console.log(`No empty string found in the array. ${index}`);
}

console.log(array[0].indexOf("b")); // -1