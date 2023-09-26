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

//add new key in object
console.log("Object before add a new key",captainAmerica);
captainAmerica.Movie = ["Avengers","Endgame","civilwar"];
console.log("Object After add a new key" ,captainAmerica);

//delete a key in object
delete captainAmerica.Movie;
console.log(captainAmerica);

//Update a key
captainAmerica.Address.state = "New York";
console.log(captainAmerica);

//second method to access a key
console.log(captainAmerica.Name);
console.log(captainAmerica["Name"]);
console.log(captainAmerica['Address']['city']);






