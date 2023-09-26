import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Analytics from './Components/Pages/Analytics/Analytics'
import Filemanager from './Components/Pages/Filemanager/Filemanager'
import Messages from './Components/Pages/Messages/Messages'
import Order from './Components/Pages/Order/Order'
import Saved from './Components/Pages/Saved/Saved'
import Settings from './Components/Pages/Settings/Settings'
import User from './Components/Pages/User/User'
import Sidebar from './Components/Sidebar/Sidebar'


function App() {
  return (
    <BrowserRouter>
    <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/filemanager' element={<Filemanager/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/user' element={<User/>}/>  
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
