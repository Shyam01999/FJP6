let obj = {
    name:"Shyam",
    address:{
        country:"India",
        state:{
            pin:759001,
            dist:"Dhenkanal"
        }
    }
}

// let {name:firstname} = obj;
// console.log(firstname);

// nested object destructuring
let {address:{country:abc}} = obj;
console.log(abc);

let {address:{state:{pin:code}}} = obj;
console.log(code)