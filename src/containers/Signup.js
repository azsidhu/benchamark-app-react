import React, { useState, useEffect } from 'react'
import '../styles/Login.css'
import { registerUser, clearError, clearNewUser } from '../actions/AuthActions'
import { connect, useSelector } from 'react-redux'
import { validateEmail } from '../config/static'
import { ToastsStore } from 'react-toasts'

const Signup = ({ history, registerUser, clearError, clearNewUser }) => {
  // local state
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // redux state
  const errorMessage = useSelector(state => state.user.errorMessage)
  const newUser = useSelector(state => state.user.newUser)
  useEffect(
    () => {
      if (newUser) {
        ToastsStore.success('Account created successfully, login and start using now!')
        history.push('/login')
        clearNewUser()
      }
    },
    [newUser] // eslint-disable-line
  )
  if (errorMessage.length !== 0) {
    ToastsStore.error(errorMessage)
    setPassword('')
    clearError()
  }
  // local helper methods
  const handleSignupBtnClick = () => {
    if (username.trim().length === 0) {
      ToastsStore.error('username can not be empty')
      setPassword('')
    } else if (email.trim().length !== 0 && !validateEmail(email.trim())) {
      ToastsStore.error('Invalid Email address format')
      setPassword('')
    } else if (password.trim().length === 0) {
      ToastsStore.error('password can not be empty')
    } else if (password.trim().length < 4) {
      ToastsStore.error('minimum password length is 5')
      setPassword('')
    } else {
      registerUser({ username: username, email: email, password: password })
    }
  }
  const handleTextInputChange = event => {
    if (event.target.id === 'inputUsername') {
      setUsername(event.target.value)
    } else if (event.target.id === 'inputEmail') {
      setEmail(event.target.value)
    } else if (event.target.id === 'inputPassword') {
      setPassword(event.target.value)
    }
  }
  return (
    <div className='container'>
      <div className='row loginRow'>
        <div className='col-sm-5 offset-sm-4 loginColumn'>
          <form>
            <div className='form-group'>
              <label htmlFor='inputUsername' className='required'>
                Username
              </label>
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
              <label htmlFor='inputEmail'>Email address</label>
              <input
                type='email'
                value={email}
                className='form-control'
                id='inputEmail'
                placeholder='Enter email'
                onChange={handleTextInputChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='inputPassword' className='required'>
                Password
              </label>
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
            <button
              type='submit'
              className='btn btn-primary btn-sm btn-block'
              onClick={() => handleSignupBtnClick()}
            >
              Signup
            </button>
          </div>
          <div className='switchModeDiv'>
            <p>Already have an account?</p>
            <p
              className='switchModeLink'
              onClick={() => history.push('/login')}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { registerUser, clearError, clearNewUser }
)(Signup)
