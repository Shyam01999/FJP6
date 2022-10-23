//var (re-declaration , re-initialisation, hoisting)
//hoisting
console.log(a);
var a = 10;
console.log(a);

//re-declaration
var a = 20;
console.log(a);

var a = 30;
console.log(a);

//re-initilization
var a = 40;
console.log(a);

 a = 50;
console.log(a);

//let (not re-declaration , re-initialisation, not hoisting)

//hoisting
console.log(a);
let a = 10;
console.log(a);

//re-declaration
let a = 20;
console.log(a);

let a = 30;
console.log(a);

//re-initilization
let a = 40;
console.log(a);

 a = 50;
console.log(a);

//const(not re-declaration , not re-initialisation, not hoisting)
//hoisting
console.log(a);
const a = 10;
console.log(a);

//re-declaration
const a = 20;
console.log(a);

const a = 30;
console.log(a);

//re-initilization
const a = 40;
console.log(a);

 a = 50;
console.log(a);