let arr = ['Apple','Banana','Pappay','Watermelon'];

let newArr = [];

newArr = arr.filter((value)=>{
    if(value.length > 6){
        return value;
    }
})

console.log(arr);
console.log(newArr);