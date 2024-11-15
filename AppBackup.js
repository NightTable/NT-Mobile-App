// NightTable, LLC has been granted a license by John Nydam
// to use this document and the information contained in it
// for business objectives pertinent to the company.
// It must not be copied, duplicated, or used in any manner,
// or transmitted to others without the written consent of John Nydam.
// It must be returned to John Nydam if and/or when its authorized use is terminated.

import React, { useState } from 'react';

import { StyleSheet, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
//import configureStore from 'redux';
import { API_URL } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { mainReducer } from './store/reducers/main';
import AppNavigatorContainer from './navigators/AppNavigatorContainer';
import TableRequestsHomeScreen from './screens/TableRequestsHomeScreen';
import PollingRoomScreen from './screens/PollingRoomScreen';
import TableRequestsNavigator from './navigators/TableRequestsNavigator';
import EntryDashboardNavigator from './navigators/EntryDashboardNavigator';
import TableInvitesOverviewScreen from './screens/TableInvitesOverviewScreen';
import TableInvitesDetailScreen from './screens/TableInvitesDetailScreen'
import ClubFullDetailScreen from './screens/ClubFullDetailScreen'
import EntryDashboardScreen from './screens/EntryDashboardScreen';
import ClubFullDetailScreen2 from './screens/EventTableConfigurationScreen';
import * as RegularFont from './assets/fonts/VerahHumana-Regular.ttf';
import * as BoldFont from './assets/fonts/VerahHumana-Bold.ttf';
const rootReducer = combineReducers({
  main: mainReducer
});

//export const store = configureStore({rootReducer, middleware: applyMiddleware(ReduxThunk)})
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {

  /*let fontHasLoaded =  Font.useFonts({
    VerahHumanaRegular: './assets/fonts/VerahHumana-Regular.ttf',
    VerahHumanaBold: './assets/fonts/VerahHumana-Bold.ttf'
  })
  return fontHasLoaded;*/
  return Font.loadAsync({
    'VerahHumanaRegular': require('./assets/fonts/VerahHumana-Regular.ttf'),
    'VerahHumanaBold': require('./assets/fonts/VerahHumana-Bold.ttf')
  });
};

export default function App() {

  console.reportErrorsAsExceptions = false;

  const [ fontLoaded, setFontLoaded ] = useState(false);

  if (!fontLoaded) {

    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => {
        setFontLoaded(true);
      }}
      onError={(err) => {
        console.log(err);
      }}
      >
      </AppLoading>
    )
  }

  console.log(API_URL);

  return (
    <Provider store={store}>
      <AppNavigatorContainer></AppNavigatorContainer>
    </Provider>
  );
}

      /*<AppNavigatorContainer></AppNavigatorContainer>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});