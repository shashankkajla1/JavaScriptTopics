function test(){
    console.log("Test function in FN-4.js called");
}

export default function testDefault(){ // It should be one 
    test();
    console.log("Default export");
}

export function testUser(){
    console.log("testUser Fn in Fn-4.js called");
}