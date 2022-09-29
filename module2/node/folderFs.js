let fs = require("fs");
//console.log(fs);

let path = require('path');

let folderName = "test";

//let filePath = path.join(folderName,"text.txt")
//C-Create directory
try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName) ;
    }
  } catch (err) {
    console.log(err);
  }

  //R-Read
  console.log(fs.readdirSync(folderName));

  //D-Delete
  //fs.rmdirSync(folderName);
