// let inputArr = process.argv;
// console.log(inputArr);
// //['pathToNode','pathToFile','inputElement']
// let input = inputArr[2];
// console.log(input);

let fs = require('fs');

let folderKaPath = process.argv[2];
//console.log(folderKaPath);

let folderExists = fs.existsSync(folderKaPath)

if(folderExists){
    //we will code
    //console.log("Path is valid");
    let files = fs.readdirSync(folderKaPath);
    console.log(files);
}else{
    console.log("Path is not valid")
}