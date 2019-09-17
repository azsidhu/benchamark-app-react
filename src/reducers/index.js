import { AuthReducer } from "./AuthReducer";
import { DataReducer } from "./DataReducer";
import FacebookConnectReducer from "../facebook_benchmark/FacebookConnect/FacebookConnectReducer";
import FacebookPagesReducer from "../facebook_benchmark/FacebookPages/FacebookPagesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: AuthReducer,
  data: DataReducer,
  FacebookConnectReducer,
  FacebookPagesReducer
});

export { rootReducer };
