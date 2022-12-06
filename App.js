import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigatorContainer from './navigators/AppNavigatorContainer';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { mainReducer } from './store/reducers/main';
import NewTableRequestScreen from './screens/NewTableRequestScreen';

// expo install expo-font expo-splash-screen

const rootReducer = combineReducers({
  main: mainReducer
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  const [fontsLoaded] = useFonts({
    VerahHumanaRegular: require("./assets/fonts/VerahHumana-Regular.ttf"),
    VerahHumanaBold: require("./assets/fonts/VerahHumana-Bold.ttf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <Provider store={store}>
      <NewTableRequestScreen></NewTableRequestScreen>
    </Provider>

  );
}
//      <AppNavigatorContainer></AppNavigatorContainer>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});