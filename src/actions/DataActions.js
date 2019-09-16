import { FetchMediaURL, FetchNewDataURL } from '../config/urls'
import {
  ADD_USER_MEDIA,
  DATA_LOADING_SPINNER_START,
  DATA_LOADING_SPINNER_STOP
} from './types'
import { request } from './request'

export const fetchUserMedia = (token, page) => {
  console.log(`${FetchMediaURL} ${page}`)
  return async dispatch => {
    let response = await request('get', `${FetchMediaURL}${page}`, token)
    if (response) dispatch(addUserMedia(response.data))
  }
}

const addUserMedia = payload => {
  return { type: ADD_USER_MEDIA, payload: payload }
}

export const FetchNewData = (token, accessTokenIG) => {
  return async dispatch => {
    dispatch(startDataLoadingSpinner())
    let response = await request('post', FetchNewDataURL, token, {
      access_token: accessTokenIG
    })
    console.log('FetchNewData response: ', response)
    if (response) dispatch(stopDataLoadingSpinner())
  }
}

const startDataLoadingSpinner = () => {
  return { type: DATA_LOADING_SPINNER_START }
}

const stopDataLoadingSpinner = () => {
  return { type: DATA_LOADING_SPINNER_STOP }
}
