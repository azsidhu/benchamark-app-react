import React from 'react';
import '../styles/Login.css';


function Signup({ history }) {
  return (
    <div className="container">
      <div className="row loginRow">
        <div className="col-sm-5 offset-sm-4 loginColumn">
          <form>
            <div className="form-group">
              <label htmlFor="inputUsername">Username</label>
              <input type="text" className="form-control" id="inputUsername" placeholder="Enter Username" />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
          </form>
          <div className="col-sm-6 offset-sm-3">
            <button type="submit" className="btn btn-primary btn-sm btn-block" onClick={()=>history.push('/fbconnect')}>Signup</button>
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

export default Signup;
