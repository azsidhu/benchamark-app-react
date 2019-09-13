import axios from "axios";
import C from "../../utils/constants";

const setIsConnected = value => {
  return {
    type: C.SET_IS_CONNECTED,
    payload: value
  };
};

const fetchFacebookProfile = (userAccessToken, jwt) => {
  return async dispatch => {
    try {
      const headers = {
        headers: { Authorization: `Bearer ${jwt}` }
      };
      const res = await axios.get(
        `${C.APIS.FETCH_FACEBOOK_PROFILE}${userAccessToken}`, headers
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};

export { setIsConnected, fetchFacebookProfile };
