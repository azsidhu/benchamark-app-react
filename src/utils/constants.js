const constants = {
  FACEBOOK_SCOPE: ["manage_pages", "pages_show_list", "read_insights"],
  FACEBOOK_CONNECTED: "connected",
  FACEBOOK_LOGGED_OUT: "unknown",
  SET_IS_CONNECTED: "SET_IS_CONNECTED",
  FACEBOOK_PERMISSION_STATUS_GRANTED: "granted",
  FACEBOOK_PERMISSION_STATUS_DECLINED: "declined",
  APIS: {
    ROOT: "http://localhost:8000/",
    get FACEBOOK_BENCHMARK() {
      return `${this.ROOT}facebook_benchmark/`;
    },
    get FETCH_FACEBOOK_PROFILE() {
      return `${this.FACEBOOK_BENCHMARK}fetch_facebook_profile/`;
    }
  }
};

export default constants;
