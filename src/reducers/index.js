
import authReducer from './AuthReducer';
import FacebookConnectReducer from "../facebook_benchmark/FacebookConnect/FacebookConnectReducer"
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: authReducer,
    FacebookConnectReducer
  })
  
  export default rootReducer