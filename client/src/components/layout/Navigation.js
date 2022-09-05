import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Login from "../layout/Login"
import logo from '../images/logo.png'



class Navigation extends Component {
  render() {

    return (
      <Nav>
      <Bars />
      <NavLink to="/" >    
              <i className="material-icons">auto_awesome</i>
                DeadRhose_Games  
              <i className="material-icons">auto_awesome</i>
      </NavLink>
      <NavMenu>
        <NavLink to='/' >
          Home
        </NavLink>
        <NavLink to='/latest' >
          Latest
        </NavLink>
        <NavLink to='/about' >
          About
        </NavLink>
        <NavLink to='/botm' >
          BotM
        </NavLink>
        <NavLink to='/register' >
          Sign Up
        </NavLink>
        <NavLink to='#'>
          <Login />
        </NavLink>
      </NavMenu>       
    </Nav>
   
    );
  }
}
export default Navigation;
