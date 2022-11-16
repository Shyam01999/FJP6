let fs = require("fs");

let inputArr = process.argv.slice(2);
console.log(inputArr);

let optionArr = [];
let fileArr = [];

for(let i=0; i<inputArr.length; i++){
    if(inputArr[i].charAt(0) == "-"){
        optionArr.push(inputArr[i])
    }else{
        fileArr.push(inputArr[i])
    }
}

// console.log(optionArr);
// console.log(fileArr)


let content = "";
for(let i=0; i<fileArr.length; i++){
    let fileContent = fs.readFileSync(fileArr[i]);
    content += fileContent + "\r\n";
}
console.log(content);
let buffer = content.split("\r\n");
let isPresent = optionArr.includes("-s");
if(isPresent == true){
    for(let i =1; i<buffer.length; i++){
        if(buffer[i] == "" && buffer[i-1]==""){
            buffer[i]==null;
        }

        else if(buffer[i] == "" && buffer[i-1] == null){
            buffer[i] == null
        }
    }
}

let tempArr = [];

for(let i=0; i<buffer.length; i++){
    if(buffer[i]!== null){
        tempArr.push(buffer[i]);
    }
}

buffer = tempArr;

console.log(buffer);


