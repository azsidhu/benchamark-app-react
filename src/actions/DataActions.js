import { FetchMediaURL, FetchNewDataURL,CrawlUserURL } from '../config/urls'
import {
  ADD_USER_MEDIA,
  DATA_LOADING_SPINNER_START,
  DATA_LOADING_SPINNER_STOP
} from './types'
import { request } from './request'
import { clientURL } from '../config/urls'
import { ToastsStore } from 'react-toasts'

export const fetchUserMedia = (token, page,search='') => {
  return async dispatch => {
    let response = await request('get', `${FetchMediaURL}${page}&search=${search}`, token)
    if (response) dispatch(addUserMedia(response.data))
  }
}

const addUserMedia = payload => {
  return { type: ADD_USER_MEDIA, payload: payload }
}

export const FetchNewData = (token, accessTokenIG) => {
  console.log('accessTokenIG: ',accessTokenIG)
  return async dispatch => {
    dispatch(startDataLoadingSpinner())
    let response = await request('post', FetchNewDataURL, token, {
      access_token: accessTokenIG
    })
    console.log('FetchNewData response: ', response)
    if (response) dispatch(stopDataLoadingSpinner())
    window.location.href = `${clientURL}/igconnected`
    ToastsStore.success('You account has been connected and data crawled successfully')
  }
}

export const CrawlNewUser=(token,usertoCrawl)=>{
  return async dispatch=>{
    dispatch(startDataLoadingSpinner())
    let response = await request('post', CrawlUserURL, token, {
      username: usertoCrawl
    })
    console.log('Crawl new user response: ', response)
    if (response) dispatch(stopDataLoadingSpinner())
    ToastsStore.success('Crawler initiated successfully')
  }
}

const startDataLoadingSpinner = () => {
  return { type: DATA_LOADING_SPINNER_START }
}

const stopDataLoadingSpinner = () => {
  return { type: DATA_LOADING_SPINNER_STOP }
}
