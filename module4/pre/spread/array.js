let arr = [1,2,3,4];
//Spread operator -> it is used to copy the content of an array to another variable.
let arr2 = [...arr]; 

arr2.push(5);

console.log(arr);
console.log(arr2);