import React from 'react';
import '../styles/Login.css';
import { loginUser } from "../actions/AuthActions";
import { connect, useSelector } from "react-redux";


function Login({ history,loginUser }) {
  const loading = useSelector(state => state.auth.loading);
  console.log('loading: ',loading)
  return (
    <div className="container">
      <div className="row loginRow">
        <div className="col-sm-5 offset-sm-4 loginColumn">
          <form>
            <div className="form-group">
              <label htmlFor="inputEmail">Username</label>
              <input type="text" className="form-control" id="inputEmail" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
          </form>
          <div className="col-sm-6 offset-sm-3">
            <button type="submit" className="btn btn-primary btn-sm btn-block" onClick={()=>loginUser({'username':'abdul','password':'abdul'})}>Login</button>
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


export default connect(null,{ loginUser })(Login);