import {API} from '../config/static';
import history from '../config/hisroty';


const axios = require('axios');

export const loginUser = (credentails) => {
    return dispatch => {
        dispatch({ type: 'LOADING_SPINNER' })
        dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
        axios.post(`${API}/accounts/login`, credentails)
            .then(function (response) {
                console.log('login user response: ', response)
                dispatch({ type: 'UPDATE_AUTH', payload: response.data })
                dispatch(fetchProfile(response.data.access))
                history.push('/igconnect')
            })
            .catch(function (error) {
                console.log('login user error: ', error)
                if (!error.response)
                    dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Network error, please check your internert connection' })
                else if (error.response.data.detail === "No active account found with the given credentials")
                    dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Username or password incorrect' })
                else
                    dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Unexpected error occured, please try again' })
            })
            .finally(function () {
                dispatch({ type: 'LOADING_SPINNER_STOP' })
            });
    }
}

export const registerUser = (credentails) => {
    console.log('inside registerUser1')
    return dispatch => {
        console.log('inside registerUser2')
        dispatch({ type: 'LOADING_SPINNER' })
        dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
        axios.post(`${API}/accounts/register`, credentails)
            .then(function (response) {
                console.log('register user response: ', response)
                if (response.data.success_messages) {
                    alert('Account created successfully, login and start using now!')
                    history.push('/login')
                }
                else if(response.data.error_messages){
                    dispatch({ type: 'SET_ERROR_MESSAGE', payload: response.data.error_messages[0] })
                }
            })
            .catch(function (error) {
                console.log('register user error: ', error)
                if (!error.response)
                    dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Network error, please check your internert connection' })
                else
                    dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Unexpected error occured, please try again' })
            })
            .finally(function () {
                dispatch({ type: 'LOADING_SPINNER_STOP' })
            });
    }
}

export const clearError = () => {
    return dispatch => {
        dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
    }
}

const fetchProfile = (token) => {
    let config = { headers: { 'Authorization': 'Bearer ' + token } }
    return dispatch => {
        axios.get(`${API}/instagram_benchmark/profile`, config)
            .then(function (response) {
                console.log('profile response: ', response);
                dispatch({ type: 'PROFILE_DATA', payload: response.data.results[0] })
            })
            .catch(function (error) {
                console.log('fetch profile error: ', error);
            });
    }
}