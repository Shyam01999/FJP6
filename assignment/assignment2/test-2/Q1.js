// Q-  List the side effect and convert the function to a pure function which does the same thing

let arr = [1, 2, 3, 4];

function f(arr) {
    for (x in arr) {
        arr[x] = 0
    }
    return arr;
}

console.log(arr);

console.log(d(arr));

console.log(arr);

//solution 

function d(arr){
    let newArr = [];
    for(x in arr){
        newArr[x] = 0;
    }
    return newArr;
}
