import { configureStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/index";
import thunk from "redux-thunk";

const configuredStore = () => {
  const middlewaresEnhancer = applyMiddleware(thunk);
  const store = configureStore(rootReducer, middlewaresEnhancer);
  return store;
};

export default configuredStore;
