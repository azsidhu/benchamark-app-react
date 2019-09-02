import { API } from '../config/static'
import history from '../config/hisroty'

const axios = require('axios')

export const loginUser = credentails => {
  return dispatch => {
    dispatch({ type: 'LOADING_SPINNER' })
    dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
    axios
      .post(`${API}/accounts/login`, credentails)
      .then(function (response) {
        console.log('login user response: ', response)
        dispatch({ type: 'UPDATE_AUTH', payload: response.data })
        localStorage.setItem('auth', JSON.stringify(response.data))
        dispatch(fetchProfile(response.data.access))
        history.push('/igconnect')
      })
      .catch(function (error) {
        console.log('login user error: ', error)
        if (!error.response) {
          dispatch({
            type: 'SET_ERROR_MESSAGE',
            payload:
              'Network error, check your internet connection or application server is down'
          })
        } else if (
          error.response.data.detail ===
          'No active account found with the given credentials'
        ) {
          dispatch({
            type: 'SET_ERROR_MESSAGE',
            payload: 'Username or password incorrect'
          })
        } else {
          dispatch({
            type: 'SET_ERROR_MESSAGE',
            payload: 'Unexpected error occured, please try again'
          })
        }
      })
      .finally(function () {
        dispatch({ type: 'LOADING_SPINNER_STOP' })
      })
  }
}

export const registerUser = credentails => {
  return dispatch => {
    dispatch({ type: 'LOADING_SPINNER' })
    dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
    axios
      .post(`${API}/accounts/register`, credentails)
      .then(function (response) {
        console.log('register user response: ', response)
        if (response.statusText === 'Created') {
          alert('Account created successfully, login and start using now!')
          history.push('/login')
        }
      })
      .catch(function (error) {
        console.log('register user error: ', error)
        console.log('register user error.response: ', error.response)
        if (!error.response) {
          dispatch({
            type: 'SET_ERROR_MESSAGE',
            payload:
              'Network error, Network error, check your internet connection or application server is down'
          })
        } else if (error.response.data.username) {
          dispatch({
            type: 'SET_ERROR_MESSAGE',
            payload: error.response.data.username[0]
          })
        } else {
          dispatch({
            type: 'SET_ERROR_MESSAGE',
            payload: 'Unexpected error occured, please try again'
          })
        }
      })
      .finally(function () {
        dispatch({ type: 'LOADING_SPINNER_STOP' })
      })
  }
}

export const clearError = () => {
  return dispatch => {
    dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
  }
}

const fetchProfile = token => {
  let config = { headers: { Authorization: 'Bearer ' + token } }
  return dispatch => {
    axios
      .get(`${API}/instagram_benchmark/profile`, config)
      .then(function (response) {
        console.log('profile response: ', response)
        dispatch({ type: 'PROFILE_DATA', payload: response.data.results[0] })
      })
      .catch(function (error) {
        console.log('fetch profile error: ', error)
      })
  }
}
