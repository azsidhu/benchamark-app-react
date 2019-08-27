const INITIAL_STATE = {
    auth:{},
    profile: {},
    loading: false,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'LOADING_SPINNER':
            return {...state, loading: true};
        case 'LOADING_SPINNER_STOP':
            return {...state, loading: false};
        case 'PROFILE_DATA':
            return {...state, profile: action.payload};
        case 'UPDATE_AUTH':
            return {...state, auth: action.payload};
        default:
            return state;
    }
};