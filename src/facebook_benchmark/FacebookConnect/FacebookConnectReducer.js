import C from "../../utils/constants";

const initialState = {
  isConnected: false,
  facebookProfile: {}
};

const FacebookConnectReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.CHECK_IS_CONNECTED:
      return {
        ...state
      };
    case C.SET_IS_CONNECTED:
      return {
        ...state,
        isConnected: action.payload
      };
    case C.FETCH_FACEBOOK_PROFILE:
      return {
        ...state,
        facebookProfile: action.payload
      };
    default:
      return state;
  }
};

export default FacebookConnectReducer;
