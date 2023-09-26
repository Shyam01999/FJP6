//printing in java script
console.log("Hello world");

//Variable in js
let num = 10; //Number
console.log(num);

let char = 'a'; //Character
console.log(char);

let str = 'I am a String'; //String
console.log(str);

let bool = true; //Boolean
console.log(bool);

//Loops
for(let i=0; i<=10; i++){
    console.log(i);
}

let count =10;
while(count > 0){
    console.log(count);
    count--;
}

//Write a program in javascript to check a number is prime or not?
let n = 10;
let counter = 0;
for(let i=1; i<=n; i++){
    if(n % i == 0){
        counter++
    }
}
if(counter == 2){
    console.log("Prime");
}else{
    console.log("Not prime");
}



