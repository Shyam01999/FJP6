import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';

function Fireauth() {
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [user,setUser] = useState(null);

    let handleCreate=async()=>{
        // console.log('hii')
        let res = await auth.createUserWithEmailAndPassword(email,password);
        console.log(res)
    }

    useEffect(()=>{
      let unsub = auth.onAuthStateChanged(user => {
          setUser(user)
      })
        
      return ()=>{
          unsub(); //cleanup
        }
      
    },[])

    let handleLogout=async()=>{
      await auth.signOut()
    }

    const handleLogin = async()=>{
      await auth.signInWithEmailAndPassword(email,password)
    }

  return (
    <>
    {
      user==null?
      <div>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' />
        <br/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' />
        <br/>
        <button onClick={handleLogin}>Login</button>
     </div> :
      <>
      <div>{user.email}</div>
      <button onClick={handleLogout}>Logout</button>
      </>
    }
    </>
    
   
  )
}

export default Fireauth