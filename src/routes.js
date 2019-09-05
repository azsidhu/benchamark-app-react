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
import {InstaRedirect} from './config/urls'

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
        <PrivateRoute exact path='/fbconnect' component={FbConnect} />
        <PrivateRoute exact path='/igconnect' component={IgConnect} />
        <PrivateRoute exact path='/twconnect' component={TwConnect} />
        <PrivateRoute exact path='/igconnected' component={IgConnected} />
        <PrivateRoute exact path='/igPageResults' component={IgPageResults} />
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
