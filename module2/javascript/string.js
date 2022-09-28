let str = "I am a String";
console.log(str);

//length
let len = str.length;
console.log(len);

//slice method => extract the part of a string
let sliced = str.slice(3,9);
console.log(sliced);

//replace method
let replaced = str.replace("am", "was");
console.log(replaced);

//toUppercase method
let uppercase = str.toUpperCase();
console.log(uppercase);

//toLowercase method
let lowercase = str.toLowerCase();
console.log(lowercase);

//split method => returns an array
let splited = str.split(" ");
console.log(splited);

//concat method
let firstName = "Shyam";
let lastName = " Sundar"
// let fullName = firstName.concat(lastName);
// console.log(fullName);

let fullName = firstName+lastName;
console.log(fullName);

//trim method
let trimmed = str.trim();
console.log(trimmed);
