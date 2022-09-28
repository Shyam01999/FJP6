//empty array
let arr = [];
console.log(arr);

//array with element
let array = [1,2,3,4,"Hello i am a string",false, 'a',4.6];
console.log(array);
console.log("Element at 4th index "+array[4]);
console.log("Element at 2nd index "+array[2]);
array[2] = "Nothing";
console.log(array);

//Array Method
//1. Push
console.log("Array before push : " +array);
array.push("new item");
console.log("Array after push : "+array);

//2. Pop
console.log("Array before pop : "+array);
array.pop();
console.log("Array after pop : "+array);

//3. Shift
console.log("Array before shift : "+array);
array.shift();
console.log("Array after shift : "+array);

//4.Unshift
console.log("Array before unsift : "+array);
array.unshift("newly added item");
console.log("Array after unshift : "+array);