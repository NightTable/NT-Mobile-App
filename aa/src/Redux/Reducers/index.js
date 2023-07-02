import { combineReducers } from "redux";
// import { loaderReducer } from './loader';
import AuthReducer from './AuthReducer'



const rootReducer = combineReducers({
  //   userReducer: userReducer,
  //   rootReducer: appReducer,
  // loader: loaderReducer,
  auth: AuthReducer,
});

export default rootReducer;
