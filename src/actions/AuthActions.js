import { LoginURL, RegisterURL, FetchProfileURL } from '../config/urls'
import {
  AUTH_LOADING_SPINNER_START,
  AUTH_LOADING_SPINNER_STOP,
  SET_AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  UPDATE_PROFILE_DATA,
  UPDATE_AUTH_DATA,
  NEW_USER_CREATED,
  CLEAR_NEW_USER,
  LOGOUT_USER
} from './types'
import { request } from './request'
import { ToastsStore } from 'react-toasts'

export const loginUser = credentails => {
  return async dispatch => {
    dispatch(startAuthLoadingSpinner())
    dispatch(clearAuthError())
    let response = await request('post', LoginURL, null, credentails)
    if (!response) {
      dispatch(
        setAuthError(
          'Network error, check your internet connection or application server is down'
        )
      )
    } else if (response.status === 200) {
      ToastsStore.success('Login successfull')
      dispatch(updateAuthData(response.data))
      dispatch(fetchUserProfile(response.data.access))
    } else if (response.data.detail) {
      dispatch(setAuthError(response.data.detail))
    } else {
      dispatch(setAuthError('Unexpected error occured, please try again'))
    }
    dispatch(stopAuthLoadingSpinner())
  }
}

export const registerUser = credentails => {
  return async dispatch => {
    dispatch(startAuthLoadingSpinner())
    dispatch(clearAuthError())
    let response = await request('post', RegisterURL, null, credentails)
    if (!response) {
      dispatch(
        setAuthError(
          'Network error, Network error, check your internet connection or application server is down'
        )
      )
    } else if (response.statusText === 'Created') {
      dispatch(newUserCreated(response.data))
    } else if (response.data.username) {
      dispatch(setAuthError(response.data.username[0]))
    } else {
      dispatch(setAuthError('Unexpected error occured, please try again'))
    }
    dispatch(stopAuthLoadingSpinner())
  }
}

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER })
  }
}
export const clearError = () => {
  return dispatch => {
    dispatch(clearAuthError())
  }
}

export const clearNewUser = () => {
  return dispatch => {
    dispatch(clearUser())
  }
}

const fetchUserProfile = token => {
  return async dispatch => {
    let response = await request('get', FetchProfileURL, token)
    if (response) dispatch(updateProfileData(response.data.results[0]))
  }
}

const startAuthLoadingSpinner = () => {
  return { type: AUTH_LOADING_SPINNER_START }
}

const stopAuthLoadingSpinner = () => {
  return { type: AUTH_LOADING_SPINNER_STOP }
}

const updateAuthData = payload => {
  return { type: UPDATE_AUTH_DATA, payload }
}

const setAuthError = payload => {
  return { type: SET_AUTH_ERROR, payload }
}

const clearAuthError = () => {
  return { type: CLEAR_AUTH_ERROR }
}

const updateProfileData = payload => {
  return { type: UPDATE_PROFILE_DATA, payload }
}

const newUserCreated = payload => {
  return { type: NEW_USER_CREATED, payload }
}

const clearUser = () => {
  return { type: CLEAR_NEW_USER }
}
