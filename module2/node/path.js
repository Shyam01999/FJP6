// "E:\FJP-6(DEV)\module2\node\path.js"

let path = require('path');
console.log(path);

let extensionName = path.extname("E:\FJP-6(DEV)\module2\node\path.js");
console.log(extensionName);

let baseName = path.basename(__filename);
console.log(baseName);

let directoryName = path.dirname("E:\FJP-6(DEV)\module1\index.html");
console.log(directoryName);

console.log(__dirname);

console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"os.js");
console.log(newFilePath);

