let arr = ["Hi","I","am","shyam"];

//Destructuring ->A convient way of Extrating properties from an array or object.
// let [a,b,c,d] = arr;

// console.log(a,b,c,d);

//skip value
// let [a,b,,d] = arr;
// console.log(a,b,d);

//default value
let [a,b,c,d,extra="sundar"] = arr;

console.log(a,b,c,d,extra);