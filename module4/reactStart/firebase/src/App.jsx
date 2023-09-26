import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Fireauth from './Components/Fireauth'
import Firebase from './Components/firebase'
import Firestorage from './Components/Firestorage'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fireauth/>
      {/* <Firebase/> */}
      <Firestorage/>
    </>
  )
}

export default App
