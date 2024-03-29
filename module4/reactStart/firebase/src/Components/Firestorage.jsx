import React, { useState } from 'react'
import { storage } from '../firebase';

function Firestorage() {
    const [file,setFile] = useState('');
    const upload = async()=>{
        const uploadTask = storage.ref(`/data/${file.name}`).put(file)  ;     
        uploadTask.on('state changed',fn1,fn2,fn3) 
        function fn1(snapshot){
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Uplooad is ${progress} done.`)
        }
        function fn2(error){
            console.log('error',error)
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url)
            })
        }
    }
  return (
    <div>
        <label htmlFor="file">File:</label>
        <input type="file" accept='image/*' onChange={(e)=>setFile(e.target.files[0])} />
        <button onClick={upload}>Upload</button>
    </div>
  )
}

export default Firestorage