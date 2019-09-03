import { FetchMediaURL } from '../config/urls'
import { ADD_USER_MEDIA } from './types'
import { request } from './request'

export const fetchUserMedia = token => {
  return async dispatch => {
    let response = await request('get', FetchMediaURL, token)
    if (response) dispatch(addUserMedia(response.data))
  }
}

const addUserMedia = payload => {
  return { type: ADD_USER_MEDIA, payload: payload }
}
