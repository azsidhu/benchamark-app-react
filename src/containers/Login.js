import React from 'react';
import '../styles/Login.css';


function Login({ history }) {
  return (
    <div className="container">
      <div className="row loginRow">
        <div className="col-sm-5 offset-sm-4 loginColumn" style={{backgroundColor:'#fff'}}>
          <form>
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
            <button type="submit" className="btn btn-primary btn-sm btn-block" onClick={()=>history.push('/fbconnect')}>Login</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
            <p>Don't have an account?</p>
            <p style={{ paddingLeft: 4, color: 'blue', cursor: 'pointer' }} onClick={() => history.push('/signup')}>Signup</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;