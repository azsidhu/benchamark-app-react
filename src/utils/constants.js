const constants = {
  APP_ID: "349831992602224",
  FACEBOOK_SCOPES: ["manage_pages", "pages_show_list", "read_insights"],
  FACEBOOK_STATUS_UNKNOW: "unknown",
  CHECK_IS_CONNECTED: "CHECK_IS_CONNECTED",
  SET_IS_CONNECTED: "SET_IS_CONNECTED",
  SET_FACEBOOK_PAGES: "SET_FACEBOOK_PAGES",
  FETCH_FACEBOOK_PAGES: "FETCH_FACEBOOK_PAGES",
  MESSAGE_TYPES: {
    SUCCESS: "success",
    FAILURE: "failure",
    INFO: "info"
  },
  STATUS_CODES: {
    NOT_FOUND: 404
  },
  PAGE_SIZE: 1,
  PAGE_RANGE_DISPLAYED: 5,
  APIS: {
    ROOT: "http://localhost:8000/",
    get FACEBOOK_BENCHMARK() {
      return `${this.ROOT}facebook_benchmark/`;
    },
    get CHECK_IS_CONNECTED() {
      return `${this.FACEBOOK_BENCHMARK}check_is_connected/`;
    },
    get FETCH_FACEBOOK_PROFILE() {
      return `${this.FACEBOOK_BENCHMARK}fetch_facebook_profile/`;
    },
    get FETCH_FACEBOOK_PAGES() {
      return `${this.FACEBOOK_BENCHMARK}pages/`;
    }
  }
};

export default constants;
