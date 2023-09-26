let obj = {
    name:"Shyam",
    address:{
        country:"India",
        state:{
            dist:"Dhenkanal",
            pin:759001
        }

    }
}

// let obj2 = {...obj}

//Shallow Copy -> it will copy the hole object upto first level.
// obj2.name = "Dipu"//
// obj2.address.country = "America"

// console.log(obj);
// console.log(obj2);

//Deep copy ->It will copy the whole object in another variable if any change made in that variable will not affect to the first variable.

let obj2 = JSON.parse(JSON.stringify({...obj}))

obj2.address.country = "America"

console.log(obj);
console.log(obj2);



