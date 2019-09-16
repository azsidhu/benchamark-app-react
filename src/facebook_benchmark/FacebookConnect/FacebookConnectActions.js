import axios from "axios";
import { ToastsStore } from "react-toasts";
import C from "../../utils/constants";

const checkIsConnected = jwt => {
  return async dispatch => {
    try {
      const headers = {
        headers: { Authorization: `Bearer ${jwt}` }
      };
      const { messageType, message } = (await axios.get(
        `${C.APIS.CHECK_IS_CONNECTED}`,
        headers
      )).data;
      if (messageType === C.MESSAGE_TYPES.INFO) {
        ToastsStore.info(message);
      } else if (messageType === C.MESSAGE_TYPES.SUCCESS) {
        dispatch(setIsConnected(true));
        ToastsStore.success(message);
      } else {
        throw new Error(message);
      }
    } catch (e) {
      ToastsStore.error(e.message);
    }
  };
};

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
      const data = (await axios.get(
        `${C.APIS.FETCH_FACEBOOK_PROFILE}${userAccessToken}`,
        headers
      )).data;
      dispatch(setIsConnected(true));
      ToastsStore.success(
        `Connected with Facebook as ${data.first_name} ${data.last_name}.`
      );
    } catch (error) {
      ToastsStore.error("Unable to connected with Facebook.");
    }
  };
};

export { setIsConnected, checkIsConnected, fetchFacebookProfile };
