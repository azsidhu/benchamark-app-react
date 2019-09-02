import authReducer from './AuthReducer'
import dataReducer from './DataReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user: authReducer,
  data: dataReducer
})

export default rootReducer
