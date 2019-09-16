import axios from "axios";
import { ToastsStore } from "react-toasts";
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
      dispatch(setIsConnected(true));
      ToastsStore.success(`Connected with Facebook as ${res.data.first_name} ${res.data.last_name}.`);
    } catch (error) {
      ToastsStore.error("Unable to connected with Facebook.");
    }
  };
};

export { setIsConnected, fetchFacebookProfile };
