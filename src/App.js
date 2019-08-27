import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './containers/Login';
import SignupScreen from './containers/Signup';
import FbConnect from './containers/FbConnect';
import IgConnect from './containers/IgConnect';
import TwConnect from './containers/TwConnect';
import IgConnected from './containers/IgConnected';
import IgPageResults from './containers/IgPageResults';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginScreen} />
        <Route exact path='/fbconnect' component={FbConnect} />
        <Route exact path='/igconnect' component={IgConnect} />
        <Route exact path='/twconnect' component={TwConnect} />
        <Route exact path='/igconnected' component={IgConnected} />
        <Route exact path='/igPageResults' component={IgPageResults} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/signup' component={SignupScreen} />
      </Switch>
    </Router>
  );
}

export default App;
