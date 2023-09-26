//Q create a polyfill of reduce

// Solution:
let arr = [1,2,3,4,5,6,7,8,9]

function myReduce(arr, cb){
    let newArray = [];
    for(let i=0; i<arr.length; i++){
        let ele = arr[i];
        newArray.push(cb(ele));
    }
    return newArray;
}

let b = myReduce(arr, function(prev, ele){
    return prev+ele;
})

console.log(b)