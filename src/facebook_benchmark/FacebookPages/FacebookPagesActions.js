import axios from "axios";
import { ToastsStore } from "react-toasts";
import C from "../../utils/constants";

const setFacebookPages = (facebookPages, count) => {
  return {
    type: C.SET_FACEBOOK_PAGES,
    payload: {
      facebookPages,
      count
    }
  };
};

const fetchFacebookPages = (jwt, search, page, setPage) => {
  return async dispatch => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${jwt}`
        },
        params: {
          search,
          page
        }
      };
      const data = (await axios.get(`${C.APIS.FETCH_FACEBOOK_PAGES}`, config))
        .data;
      dispatch(setFacebookPages(data.results, data.count));
    } catch (error) {
      if (error.response.status === C.STATUS_CODES.NOT_FOUND) {
        setPage(null);
        dispatch(fetchFacebookPages(jwt, null, null, setPage));
      } else {
        ToastsStore.error("Unable to fetch Facebook pages.");
      }
    }
  };
};

const loadFacebookPageData = (jwt, id) => {
  return async dispatch => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      };
      const { messageType, message } = (await axios.get(
        `${C.APIS.LOAD_FACEBOOK_PAGE_DATA}${id}`,
        config
      )).data;
      if (messageType === C.MESSAGE_TYPES.INFO) {
        ToastsStore.info(message);
      } else if (messageType === C.MESSAGE_TYPES.SUCCESS) {
        ToastsStore.success(message);
      } else {
        throw new Error(message);
      }
    } catch (error) {
      ToastsStore.error("Unable to load Facebook page.");
    }
  };
};

export { setFacebookPages, fetchFacebookPages, loadFacebookPageData };
