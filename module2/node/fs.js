let fs = require('fs');
//console.log(fs);

let path = require('path');

let filePath = path.join(__dirname,"file.txt");
// console.log(filePath);

//C-Create
//It create a file if does't exist else it override
fs.writeFileSync(filePath,"Again writing on text file");

//R-Read
console.log("Before Update :");
let content = fs.readFileSync(filePath,"utf-8");
console.log(content);

//U-Update
fs.appendFileSync(filePath," new added content in the text file");
console.log("After update: ")
console.log(fs.readFileSync(filePath,"utf-8"));

//D-Delete
fs.unlinkSync(filePath);