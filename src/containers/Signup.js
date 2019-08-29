import React, { useState } from 'react';
import '../styles/Login.css';
import { registerUser, clearError } from "../actions/AuthActions";
import { connect, useSelector } from "react-redux";
import {validateEmail} from '../config/static';


function Signup({ history, registerUser, clearError }) {
  //local state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //redux state
  const errorMessage = useSelector(state => state.user.errorMessage);
  const loading = useSelector(state => state.user.loading);
  console.log('loading: ', loading)
  if (errorMessage.length !== 0) {
    alert(errorMessage)
    // setUsername('')
    // setEmail('')
    setPassword('')
    clearError()
  }
  //local helper methods
  const signupHandler = () => {
    if (username.trim().length === 0) {
      alert('username can not be empty')
      setPassword('')
    }
    else if (email.trim().length === 0) {
      alert('email is required')
      setPassword('')
    }
    else if (!validateEmail(email.trim())) {
      alert('Invalid Email address format')
      setPassword('')
    }
    else if (password.trim().length === 0) {
      alert('password can not be empty')
    }
    else
      registerUser({ 'username': username, 'email': email, 'password': password })
  }
  const handleChange = (event) => {
    if (event.target.id === "inputUsername") {
      setUsername(event.target.value)
    }
    else if (event.target.id === "inputEmail") {
      setEmail(event.target.value)
    }
    else if (event.target.id === "inputPassword") {
      setPassword(event.target.value)
    }
  }
  return (
    <div className="container">
      <div className="row loginRow">
        <div className="col-sm-5 offset-sm-4 loginColumn">
          <form>
            <div className="form-group">
              <label htmlFor="inputUsername">Username</label>
              <input type="text" value={username} className="form-control" id="inputUsername" placeholder="Enter Username" onChange={event => handleChange(event)} />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" value={email} className="form-control" id="inputEmail" placeholder="Enter email" onChange={event => handleChange(event)} />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" value={password} className="form-control" id="inputPassword" placeholder="Password" onChange={event => handleChange(event)} />
            </div>
          </form>
          <div className="col-sm-6 offset-sm-3">
            <button type="submit" className="btn btn-primary btn-sm btn-block" onClick={() => signupHandler()}>Signup</button>
          </div>
          <div className="switchModeDiv">
            <p>Already have an account?</p>
            <p className="switchModeLink" onClick={() => history.push('/login')}>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default connect(null, { registerUser, clearError })(Signup);
