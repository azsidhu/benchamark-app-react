import { AuthReducer } from "./AuthReducer";
import { DataReducer } from "./DataReducer";
import FacebookConnectReducer from "../facebook_benchmark/FacebookConnect/FacebookConnectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: AuthReducer,
  data: DataReducer,
  FacebookConnectReducer
});

export { rootReducer };
