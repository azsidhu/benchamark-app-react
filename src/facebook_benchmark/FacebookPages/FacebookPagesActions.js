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

const fetchFacebookPages = (jwt, currentPage) => {
  return async dispatch => {
    try {
      const headers = {
        headers: { Authorization: `Bearer ${jwt}` }
      };
      let url;
      if (currentPage) {
        url = `${C.APIS.FETCH_FACEBOOK_PAGES}?page=${currentPage}`;
      } else {
        url = `${C.APIS.FETCH_FACEBOOK_PAGES}`;
      }
      const data = (await axios.get(url, headers)).data;
      dispatch(setFacebookPages(data.results, data.count));
    } catch (error) {
      ToastsStore.error("Unable to fetch Facebook pages.");
    }
  };
};

export { setFacebookPages, fetchFacebookPages };
