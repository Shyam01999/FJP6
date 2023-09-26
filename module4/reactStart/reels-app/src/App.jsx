import './App.css';
import { AuthProvider } from './Context/AuthContext';
import {Switch, Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Feed from './Components/Feed/Feed';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import Profile from './Components/Profile/Profile';



function App() {
  return (
      <AuthProvider>
          <Switch>
            <Route path='/forgetPassword' component={ForgetPassword}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <PrivateRoute path='/profile/:id' component={Profile}/>
            <PrivateRoute path='/' component={Feed}/>
          </Switch>
      </AuthProvider>   
  )
}

export default App
