import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
//reducer & action
import {loginReducer, clubReducer} from './reducer/index';

//root reducer
export const rootReducer = {
  reducer: {
    login: loginReducer.reducer,
    club: clubReducer.reducer
  },
};

export const store = configureStore (rootReducer, applyMiddleware (thunk));

