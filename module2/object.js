let obj ={}
console.log(obj);

let objShyam = {
    Name : "Shyam Sundar Sahoo",
    Age : 37,
    MobileNo : 9337757671,
    "LastName" : "Sahoo",
}
console.log(objShyam);

let captainAmerica = {
 Name :"Steve",
 Age : 45,
 Friends : ['Natasha','Thor','Hulk','Bruce'],
 Address : {
    city :"Queen",
    state :"Banglore"
 },
 sayHi:function(){
    console.log("captain America says hiii");
 }
}
//whole key Access
// console.log(captainAmerica);

//Particular key Access
console.log(captainAmerica.Name);
console.log(captainAmerica.Age);
console.log(captainAmerica.Friends);
console.log(captainAmerica.Friends[1]);
console.log(captainAmerica.Address);
console.log(captainAmerica.Address.city);
console.log(captainAmerica.sayHi());
captainAmerica.sayHi();



