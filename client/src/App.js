import './App.css';
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store/store";
import Landing from './components/layout/Landing'
import Navigation from './components/layout/Navigation'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import About from './components/pages/About';
import BotM from './components/pages/BotM';
import Latest from './components/pages/Latest'

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
 
  const decoded = jwt_decode(token);
  
  store.dispatch(setCurrentUser(decoded));

const currentTime = Date.now() / 1000; 
if (decoded.exp < currentTime) {
  
  store.dispatch(logoutUser());
  
  window.location.href = "./login";
}
}  


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />   
      <Routes>      
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={ <Login />} />
          <Route element={<PrivateRoute/>}>
              <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
          <Route exact path="/about" element={ <About />} />
          <Route exact path="/botm" element={ <BotM />} />
          <Route exact path="/latest" element={ <Latest />} />


      </Routes>
      </div>
     
    );
  }
}

export default App;
