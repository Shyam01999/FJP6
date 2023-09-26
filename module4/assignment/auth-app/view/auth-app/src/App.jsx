import './App.css';
import Landing from './Components/Landing';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Signup from './Components/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='landing' element={<Landing/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
