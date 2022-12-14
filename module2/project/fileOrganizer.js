// let inputArr = process.argv;
// console.log(inputArr);
// //['pathToNode','pathToFile','inputElement']
// let input = inputArr[2];
// console.log(input);

let fs = require('fs');
let path = require('path');

let folderPath = process.argv[2];
//console.log(folderPath);

  let folderExists = fs.existsSync(folderPath);

  let extensions = {
    Audio : ['.mp3'],
    Video : ['.mp4' , '.mkv'],
    Document :['.doc','.pdf','.txt','.xlsx','.xls'],
    Image: ['.jpg', '.png', '.gif','.jpeg'],
    Software: ['.exe','.apk']

  };

    if(folderExists){

     //console.log("path is valid!!!");
      let files = fs.readdirSync(folderPath);
      for(let i = 0; i < files.length; i++){
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
      //console.log("Ext-->",ext ,"Folder-->",nameOfFolder);
        let pathOfFolder = path.join(folderPath , nameOfFolder);
        let exist = fs.existsSync(pathOfFolder);
        if(exist){
          moveFile(folderPath , pathOfFolder,files[i]);
        }else{
          fs.mkdirSync(pathOfFolder);
          moveFile(folderPath , pathOfFolder , files[i]);
        }

      }
    
    }
 else
 {
    console.log("Please enter a valid path!!")
}

function giveFolderName(ext){
  for(key in extensions){
    let extArr = extensions[key];
    for(let i = 0; i < extArr.length; i++){
      if(extArr[i] == ext){
        return key;
      }
    }
  }
  return 'Others';
}

function moveFile(folderPath , pathOfFolder,fileName){
  let sourcePath = path.join(folderPath , fileName);
  let destinationPath = path.join(pathOfFolder, fileName);
  fs.copyFileSync(sourcePath ,destinationPath);
  fs.unlinkSync(sourcePath);
}