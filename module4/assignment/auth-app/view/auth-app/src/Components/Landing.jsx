import React, { useEffect, useState } from 'react'
import "./Landing.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { doLogout, getCurrentUser } from './auth';

function Landing() {
  const userdetails = JSON.parse(getCurrentUser())
  const [user,setUser]= useState(userdetails);
  console.log(user)
  const navigate = useNavigate()
   const handleLogout=async()=>{
    try{
      const response = await axios.get('http://localhost:3000/user/logout')
      console.log("respo->",response);
      if(response.data.message == 'user logged out successfully'){
          alert('User has been Logout');
          doLogout(()=>{
            navigate('/login');
          })   
      }
      else{
          alert(response.data.message)
         
      }
  }
  catch(err){
      console.log(err)
  }
  }

  return (
    <div className='landingContainer'>
        <div className="navbarContainer">
          <ul>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
        <div className="detailsContainer">
          <div className="userinfo">
            <h1 style={{color:'white',marginLeft:'13rem',marginTop:"3rem"}}>User Details</h1>
              <ul>
                <li><span>Name :</span>{userdetails.name}</li>
                <li><span>Email :</span>{user.email}</li>
                <li><span>Mobile no. :</span>{user.mobile}</li>
                <li><span>Address :</span>{user.address}</li>
                <li><span>ProfileImg :</span><img src={user.profileImg} /></li>
              </ul>
          </div>
        </div>
    </div>

  )
}

export default Landing