//Write a program to add two numbers
//Regular function
let regularFuncton = function(a,b){
    console.log(a+b);
}

// regularFuncton(1,4);

// Arrow function
let add = (a,b)=>{
    console.log(a+b);
}
// add(1,5);

let arrowFunction = ()=>{
    console.log(this);
}
//arrowFunction();

let obj = {
    name:"Shyam",
    age:24,
    showDetails:function(){
        console.log(this.name+" "+this.age);
    },
    showDetailsArrow:()=>{
        console.log(this);
        console.log(this.name+" "+this.age);
    }
}

//obj.showDetails();
//obj.showDetailsArrow();

//handleArrow(); //Can not be called before its declaration.

// const handleArrow=() =>{
//     console.log("Hello ")
// }

function handleArrow(){
    console.log("Hii")
}

handleArrow(); //Can be called anywhere

