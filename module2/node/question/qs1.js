//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made


let fs = require('fs');

let path = require('path');

if(!fs.existsSync("newFolder")){
    fs.mkdirSync("newFolder")
}

//C-Create a file
let filePath = path.join(__dirname,"newFolder","test.txt");
console.log(filePath);

fs.writeFileSync(filePath,"Hello I am content inside test file.");
