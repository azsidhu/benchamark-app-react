import { FetchMediaURL, FetchNewDataURL, CrawlUserURL } from '../config/urls'
import {
  ADD_USER_MEDIA,
  DATA_LOADING
} from './types'
import { makeRequest } from './request'
import { ToastsStore } from 'react-toasts'
import history from '../config/history'

export const fetchUserMedia = (token, page, search = '') => {
  return dispatch => {
    let params = { page, search }
    makeRequest({ requestType: 'get', url: FetchMediaURL, params, token })
      .then(response => {
        console.log('fetch media response: ', response)
        dispatch(addUserMedia(response.data))
      })
      .catch(error => {
        console.log('fetch media error: ', error)
      })
  }
}

const addUserMedia = payload => {
  return { type: ADD_USER_MEDIA, payload: payload }
}

export const FetchNewData = (token, accessTokenIG) => {
  return dispatch => {
    dispatch(startDataLoadingSpinner())
    makeRequest({
      requestType: 'post',
      url: FetchNewDataURL,
      token,
      data: { access_token: accessTokenIG }
    })
      .then(response => {
        console.log('fetch new connected Insta user data response: ', response)
        history.push('/igconnected')
        ToastsStore.success(
          'You account has been connected and data crawled successfully'
        )
        dispatch(stopDataLoadingSpinner())
      })
      .catch(error => {
        console.log('fetch new Insta user error: ', error)
        dispatch(stopDataLoadingSpinner())
      })
  }
}

export const CrawlNewUser = (token, usertoCrawl) => {
  return dispatch => {
    dispatch(startDataLoadingSpinner())
    makeRequest({
      requestType: 'post',
      url: CrawlUserURL,
      token,
      data: {
        username: usertoCrawl
      }
    })
      .then(response => {
        console.log('Crawl new user response: ', response)
        ToastsStore.success('Crawler initiated successfully')
        dispatch(stopDataLoadingSpinner())
      })
      .catch(error => {
        console.log('Crawl new user error: ', error)
        dispatch(stopDataLoadingSpinner())
      })
  }
}

const startDataLoadingSpinner = () => {
  return { type: DATA_LOADING, payload: true }
}

const stopDataLoadingSpinner = () => {
  return { type: DATA_LOADING, payload: false }
}
