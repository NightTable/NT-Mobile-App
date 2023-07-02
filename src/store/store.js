import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// import rootReducer from "../Redux/Reducers";

//reducer & action
import {loginReducer, clubReducer} from './reducer/index';

// import {loginStore} from './action/login';

//root reducer
export const rootReducer = {
  reducer: {
    login: loginReducer.reducer,
    club: clubReducer.reducer
  },
};

// const root = ReactDOM.createRoot(document.getElementById('root'))


export const store = configureStore (rootReducer, applyMiddleware (thunk));



// export function StoreProvider({ children }) {
//     return <Provider store={store}>{children}</Provider>;
// }
