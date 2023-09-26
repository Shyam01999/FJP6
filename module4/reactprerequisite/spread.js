// let arr = [1,2,3,4,5];
// let arr2 = [...arr];

// arr2[2] = 7

// console.log(arr);
// console.log(arr2);

//Spread operator in Object

let obj = {
    name: "Shyam",
    address: {
        country: "India",
        state: {
            stateName: "Dhenkanal",
            pincode: 759001
        }
    }
}

//Shallow copy
let obj2 = {...obj}

obj2.name = "Dipu";

obj2.address.country = "USA";

obj2.address.state.stateName = "Bhubneswar";
console.log(obj.address.country);
console.log(obj2.address.country);
console.log(obj.address.state.stateName);
console.log(obj2.address.state.stateName);

// //deep copy

let obj3 = JSON.parse(JSON.stringify(obj));

obj3.address.state.pincode = 759002;

console.log(obj.address.state.pincode);
console.log(obj3.address.state.pincode);


