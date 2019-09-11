import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './config/hisroty'
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
import { InstaRedirect } from './config/urls'

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
      <Switch>
        <Route exact path='/' component={LoginScreen} />
        <PrivateRoute path='/fbconnect' component={FbConnect} />
        <PrivateRoute path='/igconnect' component={IgConnect} />
        <PrivateRoute path='/twconnect' component={TwConnect} />
        <PrivateRoute path='/igconnected' component={IgConnected} />
        <PrivateRoute path='/igPageResults' component={IgPageResults} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/signup' component={SignupScreen} />
        <Route
          path='/instaRedirect'
          component={() => {
            window.location.href = InstaRedirect
            return null
          }}
        />
      </Switch>
    </Router>
  )
}

export default connect(
  null,
  {}
)(Routes)
