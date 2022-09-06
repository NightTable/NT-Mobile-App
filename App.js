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
const rootReducer = combineReducers({
  main: mainReducer
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {

  return Font.loadAsync({
    'comfortaa-reg': require('./assets/fonts/Comfortaa-Regular.ttf'),
    'comfortaa-bold': require('./assets/fonts/Comfortaa-Bold.ttf')
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});