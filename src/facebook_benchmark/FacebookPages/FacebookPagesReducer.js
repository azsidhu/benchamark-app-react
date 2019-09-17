import C from "../../utils/constants";

const initialState = {
  facebookPages: [],
  count: 0
};

const FacebookPagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_FACEBOOK_PAGES:
      return {
        ...state,
        facebookPages: action.payload.facebookPages,
        count: action.payload.count
      };
    case C.FETCH_FACEBOOK_PAGES:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default FacebookPagesReducer;
