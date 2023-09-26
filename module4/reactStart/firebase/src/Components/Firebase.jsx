import React, { useEffect, useState } from 'react'
import { database } from '../firebase';

function Firebase() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    const create=async()=>{
        // const res = await database.users.add({name,age});
        const res = await database.users.doc('11111111').set({name,age}) //CREATE COMMAND
        console.log(res);
    }

    // useEffect(async()=>{
    //     let uid = 'aTxoue5XmmNVZ0Sodn4J';
    //     let data = await database.users.get(); //Read Command
    //     // console.log(data.data())
    //     data.forEach((obj)=>{console.log(obj.data())})
    // })

    const update = async()=>{
        let uid = 'aTxoue5XmmNVZ0Sodn4J';
        await database.users.doc(uid).update({name,age}); //Update command
    }

    const deleteUser=async()=>{
        let uid = 'aTxoue5XmmNVZ0Sodn4J';
        await database.users.doc(uid).delete() //Delete Command
    }
  return (
    <div>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/><br />
        <input type="number" placeholder='Enter age' value={age} onChange={(e)=>setAge(e.target.value)} /><br />
        <button onClick={update}>Create</button>
        <button onClick={deleteUser}>Delete</button>
    </div>
  )
}

export default Firebase