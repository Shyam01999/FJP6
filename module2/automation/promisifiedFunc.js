function promisifiedFunc(){
    return new Promise(function(resolve,reject){
        let a =1;
        let b =1;
        if(a == b){
            resolve("Equal")
        }else{
            reject("Unequal")
        }
    })
}

let somePromise = promisifiedFunc();

somePromise.then(function(x){
    console.log(x);
})