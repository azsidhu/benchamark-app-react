import React, { useState } from 'react';
import '../styles/Login.css';
import { loginUser, clearError } from "../actions/AuthActions";
import { connect, useSelector } from "react-redux";


function Login({ history, loginUser, clearError }) {
  //local state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //redux state
  const errorMessage = useSelector(state => state.user.errorMessage);
  if (errorMessage.length !== 0) {
    alert(errorMessage)
    //setUsername('')
    setPassword('')
    clearError()
  }
  //local helper methods
  const loginHandler = () => {
    if (username.trim().length === 0) {
      alert('username can not be empty')
    }
    else if (password.trim().length === 0) {
      alert('password can not be empty')
    }
    else
      loginUser({ 'username': username, 'password': password })
  }
  const handleChange = (event) => {
    if (event.target.id === "inputUsername") {
      setUsername(event.target.value)
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
              <label htmlFor="inputPassword">Password</label>
              <input type="password" value={password} className="form-control" id="inputPassword" placeholder="Password" onChange={event => handleChange(event)} />
            </div>
          </form>
          <div className="col-sm-6 offset-sm-3">
            <button type="submit" className="btn btn-primary btn-sm btn-block" onClick={() => loginHandler()}>Login</button>
          </div>
          <div className="switchModeDiv">
            <p>Don't have an account?</p>
            <p className="switchModeLink" onClick={() => history.push('/signup')}>Signup</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default connect(null, { loginUser, clearError })(Login);