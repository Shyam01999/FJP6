import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../../Context/AuthContext';
import './Feed.css';
import Upload from './Upload';
import { database } from '../../firebase';
import Posts from './Posts';
import Navbar from '../Profile/Navbar';

function Feed() {
  const {user,logout} = useContext(AuthContext)
  const [userData,setUserData]= useState('');
  useEffect(()=>{
    const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
      setUserData(snapshot.data())
    })
    return ()=>{unsub()}
  },[user])
  
  return (
    <>
      <Navbar userData={userData}/>
        <div className='feedWrapper'>
              {/* <div className='feedHeader'>
                  <h1>Welcome to Feed Page.</h1>
                  <button onClick={logout}>Logout</button>
              </div>  */}
              <div >
              <Upload user={userData}/>
              </div>
              <div>
              <Posts user={userData}/>
              </div>
              
        </div>
    </>

  )
}

export default Feed