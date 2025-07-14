// Arrow Fn: 
const xx = ()=>{
    let m =11
    console.log(this); // window object in browser or global object in Node.js
    console.log(this.m); // undefined, because arrow functions do not have their own 'this' context
}

xx(); // undefined

const xj ={
    mz : 11,
    xVal : function() {
        yVal = ()=>{
            console.log(this.mz); // 11, because arrow function captures the 'this' value from its enclosing lexical context i.e xj object
        }
        yVal();
    }
}

xj.xVal(); // undefined


