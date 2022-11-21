let fs = require("fs");
// const { arrayBuffer } = require("stream/consumers");

let inputArr = process.argv.slice(2);
//console.log(inputArr);
//-s :- Multiple linebreak to singular line break.
//-b :- Numbering to each line.
//-n :- Numbering to non-empty line.

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

let bothBNpresent = optionArr.includes("-b")&&optionArr.includes("-n");

if(bothBNpresent == true){
    console.log("either b can given as input or n can be given");
    return;
}

for(let i=0; i<fileArr.length; i++){
    let isPresent = fs.existsSync(fileArr[i]);
    if(isPresent == false){
        console.log("Please input correct file name.");
        return;
    }
}


let content = "";
for(let i=0; i<fileArr.length; i++){
    let fileContent = fs.readFileSync(fileArr[i]);
    content += fileContent + "\r\n";
}
//console.log(content);
let buffer = [];
buffer = content.split("\r\n");
let isSPresent = optionArr.includes("-s");
if(isSPresent == true){
    for(let i =1; i<buffer.length; i++){
        if(buffer[i] == "" && buffer[i-1]==""){
            buffer[i] = null;
        }

        else if(buffer[i] == "" && buffer[i-1] == null){
            buffer[i] = null
        }
    }
}

let isNPresent  = optionArr.includes("-n");
if(isNPresent == true){
    let count =1;
    for(let i=0; i<buffer.length; i++){
        buffer[i] = `${count}. ${buffer[i]}`;
        count++;
        //console.log(count);
    }
}
//   console.log(buffer.join("\n"));

let counter = 1;
let isBPresent = optionArr.includes("-b");
if(isBPresent == true){
    for(let i=0; i<buffer.length; i++){
        if(buffer[i] != ""){
            buffer[i] = `${counter} ${buffer[i]}`;
            counter++;
        }
    }
}
 console.log(buffer.join("\n"));



// let tempArr = [];

// for(let i=0; i<buffer.length; i++){
//     if(buffer[i]!= null){
//         tempArr.push(buffer[i]);
//     }
// }

// buffer = tempArr;
// console.log(buffer.join("\n"));



