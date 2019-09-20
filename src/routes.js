import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './config/history'
import Header from '../src/components/Header'
import {
  LoginScreen,
  SignupScreen,
  FbConnect,
  IgConnect,
  TwConnect,
  IgConnected,
  IgPageResults
} from './containers'
import { connect, useSelector } from 'react-redux'

const Routes = () => {
  const auth = useSelector(state => state.user.auth)
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        auth ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  )
  return (
    <Router history={history}>
      {auth ? <Header /> : <div />}
      <Route path='/login' component={LoginScreen} />
      <Route path='/signup' component={SignupScreen} />
      <Route exact path='/' component={LoginScreen} />
      <Switch>
        <PrivateRoute path='/fbconnect' component={FbConnect} />
        <PrivateRoute path='/igconnect' component={IgConnect} />
        <PrivateRoute path='/twconnect' component={TwConnect} />
        <PrivateRoute path='/igconnected' component={IgConnected} />
        <PrivateRoute path='/igPageResults/:mediaId' component={IgPageResults} />
      </Switch>
    </Router>
  )
}

export default connect(
  null,
  {}
)(Routes)
