import { useState } from 'react'
import './App.css'
import Us from './Components/Us'
import Ue1 from './Components/Ue1'
import Ue2 from './Components/Ue2'
import Ue3 from './Components/Ue3'
import context from './Components/Context'
import Navbar from './Components/Navbar'
import Parent1 from './Components/Parent1'
import Parent2 from './Components/Parent2'


function App() {
  const [theme,setTheme] = useState(false)

  return (
  
    <context.Provider value={theme}>
      <button onClick={()=>setTheme(!theme)}>Change theme</button>
      <Navbar/>
      <Parent1/>
      <Parent2/>
      {/* <Us/> */}
      {/* <Ue1/> */}
      {/* <Ue2/> */}
      {/* <Ue3/> */}
    </context.Provider>
      
    
    
  )
}

export default App
