import React, { useState, Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { registerUser } from '../../actions/authActions'


export default class Register extends Component{

  constructor(props) {
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: '',
        email: '',
        password: ''
    }
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
    } 
    onChangeEmail(e) {
    this.setState({ email: e.target.value })
    }

   onChangePassword(e){
    this.setState({ password: e.target.value})
   } 

   onSubmit(e) {
    e.preventDefault();
    const user = {
     name: this.state.name,
      email: this.state.email,
      password: this.state.password 
    };
   registerUser(user, "/")

    this.setState({ name: '', email: '', password: '', password2:'' })
   }
   render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  value={this.state.name}
                  id="name"
                  name="name"
                  type="text"
                  onChange={this.onChangeName}
                  
                  
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input
                 onChange={this.onChangeEmail}
                  name="email"
                  value={this.state.email}
                  id="email"
                  type="email"
                  
                />
                <label htmlFor="email">Email</label>

              </div>
              <div className="input-field col s12">
                <input
                 onChange={this.onChangePassword}
                 name="password"
                  value={this.state.password}
                  id="password"
                  type="password"
                  
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <input
                  name="password2"
                  id="password2"
                  type="password"
                  
                />
                <label htmlFor="password2">Confirm Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"  
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// function mapState(state){
  
//   const { registering } = state.registration;
//   Register.auth: state.auth,
//   Register.errors: state.errors
//   return { registering }
// } 

// const actionCreators ={
//   registerUser: registerUser
// }
