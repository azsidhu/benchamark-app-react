import { API } from '../config/static'

const axios = require('axios')

export const fetchMedia = token => {
  let config = { headers: { Authorization: 'Bearer ' + token } }
  return dispatch => {
    axios
      .get(`${API}/instagram_benchmark/media`, config)
      .then(function (response) {
        console.log('media fetch response: ', response)
        dispatch({ type: 'ADD_MEDIA_COUNT', payload: response.data.count })
        dispatch({ type: 'ADD_MEDIA_NEXT', payload: response.data.next })
        dispatch({ type: 'ADD_MEDIA_FETCHED', payload: response.data.results })
      })
      .catch(function (error) {
        console.log('media profile error: ', error)
      })
  }
}
