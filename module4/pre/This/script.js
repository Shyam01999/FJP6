// console.log(this); //Window

// function fn(){
//     console.log(this); //Window 
// }

// fn();

// let obj = {
//     name:"Shyam",
//     fun:fn
// }

// obj.fun(); // object

//Method 1 : Bind Function
// function fun(){
//     console.log(this);
//     function abc(){
//         console.log(this);
//     }
//     let ret = abc.bind(this)
//     ret();
// }

// let obj1 = {
//     name:"Shyam",
//     showDetails:fun
// }

// obj1.showDetails();

// Method 2 :Arrow function

function fun(){
    console.log(this);
    let fn = ()=>{
        console.log(this)
    }
    fn()
}

let obj2= {
    name:"Rohan",
    showDetails:fun
}
obj2.showDetails();

