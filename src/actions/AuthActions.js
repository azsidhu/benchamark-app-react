import API from '../config/API';
const axios = require('axios');


export const loginUser = (credentails) => {
    return dispatch => {
        dispatch({ type: 'LOADING_SPINNER' })
        axios.post(`${API}/api/token/`, credentails)
            .then(function (response) {
                console.log('response: ', response);
                fetchProfile(response.data.access)
            })
            .catch(function (error) {
                console.log('error: ', error);
            })
            .finally(function () {
                dispatch({ type: 'LOADING_SPINNER_STOP' })
            });
    }
}

const fetchProfile = async (token) => {
    let config = { headers: { 'Authorization': 'Bearer ' + token } }
    return await
        axios.get(`${API}/instagram_benchmark/profile`,config)
            .then(function (response) {
                console.log('response: ', response);
            })
            .catch(function (error) {
                console.log('error: ', error);
            });
}