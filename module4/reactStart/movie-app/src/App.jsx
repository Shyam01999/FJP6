import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import MovieList from './Components/MovieList'
import Favourite from './Components/Favourite'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<><Banner/><MovieList/></>}/>
          <Route path='/favourites' element={<Favourite/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
