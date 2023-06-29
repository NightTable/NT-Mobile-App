import React from "react";
import "react-native-gesture-handler";
//Components

//libraries
import { NativeBaseProvider } from "native-base";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/Navigation/RootStack";
import * as RegularFont from './assets/fonts/VerahHumana-Regular.ttf';
import * as BoldFont from './assets/fonts/VerahHumana-Bold.ttf';
import { StatusBar } from "expo-status-bar";
import{colors} from './src/Theme/colors';
//REDUX
// import { Provider } from "react-redux";
// import configuredStore  from "./src/Redux/Store";

//Utils

// const store = configuredStore();

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


const App = () => {
  console.reportErrorsAsExceptions = false;

  return (
    <>
    <StatusBar backgroundColor={colors.gold.gold200}/>
      <NativeBaseProvider>
        {/* <Provider store={store}> */}
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        {/* </Provider> */}
      </NativeBaseProvider>
    </>
  );
};

export default App;
