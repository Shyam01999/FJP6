// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
// let fs = require("fs");
// const { format } = require("path");
// let path = require("path");

// let arr = ['audio' , 'video' , 'image' , 'software' , 'document' , 'application' , 'other'];
// let nameArr = ['abc' , 'xyz' , 'def' , 'efg'];
// let extArr = ['.mp3' , '.mp4' , '.jpg' , '.exe', '.pdf' , '.apk' , '.rar'];

// let organisePath = path.join(__dirname, "Organise");
// if (!fs.existsSync(organisePath)){
//     fs.mkdirSync(organisePath);
// }

// for(let i = 0; i < arr.length; i++ ){
//     let folderKaPath = path.join(organisePath , arr[i]);
//     if(!fs.existsSync(folderKaPath)){
//         fs.mkdirSync(folderKaPath);
//     }
//     for(let j =0 ; j < nameArr.length ; j++){
//         let fileName = nameArr[j] + extArr[i];
//         let fileKaPath = path.join(folderKaPath , fileName);
//         fs.writeFileSync(fileKaPath, "");
//     }
// }

let fs = require("fs");
let path = require("path");

let arr = ['audio','Video','image', 'software', 'document', 'applications', 'other'];
let fileArr = ['abc','pqr','xyz','asd'];
let extArr = ['.mp3','.mp4','.jpg','.exe','.pdf','.apk','.rar'];

let folderPath = path.join(__dirname,"Organise");
if(!fs.existsSync(folderPath))
fs.mkdirSync(folderPath);

for(let i=0; i<arr.length; i++){
    let folderKaPath = path.join(folderPath,arr[i]);
    if(!fs.existsSync(folderKaPath))
    fs.mkdirSync(folderKaPath);
    for(let j=0; j<fileArr.length; j++){
        let fileName = fileArr[j] + extArr[i];
        let fileKaPath = path.join(folderKaPath,fileName);
        fs.writeFileSync(fileKaPath,"");
    }
}




