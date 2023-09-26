//read content of unorganised folder and print each file type
//for example abc.mp3 -> print Audio file
//            xyz.mp4 -> print video file
//            fsd.jpeg -> print Image file

let fs = require('fs');
let path = require('path');

let folderKaPath = path.join(__dirname,'unorganised');
console.log(folderKaPath);

let content = fs.readdirSync(folderKaPath);
console.log(content)

let extArr =[];
for(let i=0; i<content.length; i++){
  let name = content[i];
  //console.log(name);

  if(extName == ".mp3"){
    console.log(name +"-> print Audio file.");
  }else if(extName == ".mp4"){
    console.log(name+" print video file");
  }else if(extName == ".txt"){
    console.log(name+"-> print text file");
  }else if(extName == ".pdf"){
    console.log(name+"-> print pdf file");
  }else if(extName == ".apk"){
    console.log(name+"-> print apk file");
  }else{
    console.log(name+"-> print jpeg file");
  }
}