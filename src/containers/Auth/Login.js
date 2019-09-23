import React, { useState, useEffect } from 'react'
import { loginUser, clearError } from '../../actions/AuthActions'
import { connect, useSelector } from 'react-redux'
import { ToastsStore } from 'react-toasts'
import Button from '../../components/Button'
import {
  LoginRow,
  LoginColumn,
  SwitchModeDiv,
  SwitchModeLink,
  RequiredLabel
} from './styled'

const Login = ({ history, loginUser, clearError }) => {
  // local state
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // redux state
  const errorMessage = useSelector(state => state.user.errorMessage)
  const auth = useSelector(state => state.user.auth)
  useEffect(
    () => {
      if (auth) {
        history.push('/igconnect')
      }
    },
    [auth] // eslint-disable-line
  )
  if (errorMessage.length !== 0) {
    ToastsStore.error(errorMessage)
    setPassword('')
    clearError()
  }
  // local helper methods
  const handleLoginBtnClick = () => {
    if (username.trim().length === 0) {
      ToastsStore.error('username can not be empty')
    } else if (password.trim().length === 0) {
      ToastsStore.error('password can not be empty')
    } else loginUser({ username: username, password: password })
  }
  const handleTextInputChange = event => {
    if (event.target.id === 'inputUsername') {
      setUsername(event.target.value)
    } else if (event.target.id === 'inputPassword') {
      setPassword(event.target.value)
    }
  }
  return (
    <div className='container'>
      <LoginRow className='row'>
        <LoginColumn className='col-sm-5 offset-sm-4'>
          <form>
            <div className='form-group'>
              <RequiredLabel htmlFor='inputUsername'>Username</RequiredLabel>
              <input
                type='text'
                value={username}
                className='form-control'
                id='inputUsername'
                placeholder='Enter Username'
                onChange={handleTextInputChange}
              />
            </div>
            <div className='form-group'>
              <RequiredLabel htmlFor='inputPassword'>Password</RequiredLabel>
              <input
                type='password'
                value={password}
                className='form-control'
                id='inputPassword'
                placeholder='Password'
                onChange={handleTextInputChange}
              />
            </div>
          </form>
          <div className='col-sm-6 offset-sm-3'>
            <Button type='submit' onClick={() => handleLoginBtnClick()}>
              Login
            </Button>
          </div>
          <SwitchModeDiv>
            <p>Don't have an account?</p>
            <SwitchModeLink onClick={() => history.push('/signup')}>
              Signup
            </SwitchModeLink>
          </SwitchModeDiv>
        </LoginColumn>
      </LoginRow>
    </div>
  )
}

export default connect(
  null,
  { loginUser, clearError }
)(Login)
