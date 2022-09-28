//Function in javascript without parameter
function sayHello(){
    console.log("Hello from function");
}

sayHello();

//function with parameter
function sum(num1, num2){
    let addition = num1 + num2;
    console.log("Addition of two number is " +addition);
}

sum(5,3);

//function with return type
function multiply(num1, num2){
  return num1 * num2;
}

let ans = multiply(5,3);
console.log(ans);

//function are first class citizen
let a = function sub(num1, num2){
    return num1 - num2;
}

console.log(a(5, 3));

//IIFE -> Immediately Invoked Function Express
(function(){
    console.log("Hello from IIFE");
})();

//IIFE with parameter
(function(num1, num2){
    console.log(num1/num2);
})(10, 5);

//IIFE without parameter
(function(){
    console.log("Hello I am IIFE");
})();

//IIFE with parameters
(function(num1,num2){
    console.log(num1 + num2);
})(5,10);