//move a file

// let fs = require("fs");
// let path = require("path");
 
// let srcPath = path.join(__dirname , "abcd.txt");
// // console.log(srcPath);

// let destPath = path.join(__dirname, "newFolder","abcd.txt");
// // console.log(destPath);
// fs.copyFileSync(srcPath , destPath);

// fs.unlinkSync(srcPath);

let fs = require('fs');
let path = require('path');

let sourcePath = path.join(__dirname,"abc.txt");
let destinationPath = path.join(__dirname,"newFolder","abc.txt");

fs.copyFileSync(sourcePath,destinationPath);
fs.unlinkSync(sourcePath);