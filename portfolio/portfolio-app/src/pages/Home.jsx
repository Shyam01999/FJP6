import React, { useEffect } from 'react'
import { notifySuccess } from '../constant/toastAlerts';
import Header from '../components/Header';

function Home() {
    useEffect(()=>{
        notifySuccess("Welcome to my portfolio app")
    },[])
  return (
    <>
    {/* <Header/> */}
      <section>
        <div>
        <h1>Hello My name is</h1>
        <h2>Shyam Sundar Sahoo</h2>
        <p>I'm a Web Devloper, Frontend Developer, Backend Developer, Database administrator</p>
        </div>
        <div>
          <img src="" alt="Profile image" />
        </div>
      </section>
    </>
  )
}

export default Home