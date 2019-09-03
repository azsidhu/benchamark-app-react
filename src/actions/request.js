const axios = require('axios')

export const request = async (requestType, url, token = null, data = null) => {
  let config = { headers: { Authorization: 'Bearer ' + token } }
  if (requestType === 'get') {
    try {
      const response = await axios.get(url, config)
      console.log('get response: ', response)
      return response
    } catch (error) {
      console.log('get error statusText: ', error.response.statusText)
      console.log('get error status: ', error.response.status)
    }
  } else if (requestType === 'post') {
    try {
      const response = await axios.post(url, data)
      console.log('post response: ', response)
      return response
    } catch (error) {
      return error.response
    }
  }
}
