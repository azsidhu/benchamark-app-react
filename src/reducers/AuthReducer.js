const INITIAL_STATE = {
  auth: null,
  profile: {},
  loading: false,
  errorMessage: ''
}
INITIAL_STATE.auth = JSON.parse(localStorage.getItem('auth'))

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING_SPINNER':
      return { ...state, loading: true }
    case 'LOADING_SPINNER_STOP':
      return { ...state, loading: false }
    case 'SET_ERROR_MESSAGE':
      return { ...state, errorMessage: action.payload }
    case 'CLEAR_ERROR_MESSAGE':
      return { ...state, errorMessage: '' }
    case 'PROFILE_DATA':
      return { ...state, profile: action.payload }
    case 'UPDATE_AUTH':
      return { ...state, auth: action.payload }
    default:
      return state
  }
}
