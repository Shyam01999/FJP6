let fs = require("fs");
//console.log(fs);

let path = require('path');

// let folderName = "Audio";

// //let filePath = path.join(folder,"abc.mp3")
// //C-Create directory
// try {
//     if (!fs.existsSync(folderName)) {
//        let folder = fs.mkdirSync(folderName) ;
//        let folderContent = fs.writeFileSync(folder,"abc.mp3");
//        let fileContent = fs.writeFileSync(folderContent , "Hello I am a audio file.")
//        console.log(fileContent);
//     }
//   } catch (err) {
//     console.log(err);
//   }

//   //R-Read
//   console.log(fs.readdirSync(folderName));

//   //D-Delete
//   fs.rmdirSync(folderName);

  //C- Copy
let sourcePath = path.join(__dirname,"file.txt");
let destinationPath = path.join(__dirname,"module","file.txt");
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);