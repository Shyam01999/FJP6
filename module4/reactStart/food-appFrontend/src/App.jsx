import React from 'react';
import Home from './components/Home Page/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/Home Page/NavBar';
import Footer from './Components/Home Page/Footer';
import Login from './components/Login Page/Login';
import ForgetPassword from './components/Login Page/ForgetPassword';
import Profile from './components/Profile Page/Profile';
import AllPlans from './Components/Plan Page/AllPlans';
// import AuthProvider from './Components/Context/AuthProvider';
import PlanDetail from './Components/PlanDetail Page/PlanDetail';
import Signup from './components/Login Page/Signup';
import AuthProvider from './components/Context/AuthProvider';
function App() {
  return (
    <Router>
      {/* is providing the data that is your user logged in or not */}
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profilePage">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgetPassword">
            <ForgetPassword />
          </Route>
          <Route path="/allPlans">
            <AllPlans />
          </Route>
          <Route path="/planDetail/:id">
            <PlanDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}
export default App;
