import React, { useEffect } from 'react'
import { notifySuccess } from '../constant/toastAlerts'

function Homepage() {
    useEffect(()=>{
        notifySuccess("Welcome to my portfolio app")
    },[])
  return (
    <>
    <h1>Hello Welcome to my portfolio</h1>
    </>
  )
}

export default Homepage