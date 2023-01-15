import React from "react";
import "react-native-gesture-handler";
//Components

//libraries
import { NativeBaseProvider } from "native-base";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/Navigation/RootStack";

//REDUX
// import { Provider } from "react-redux";
// import configuredStore  from "./src/Redux/Store";

//Utils

// const store = configuredStore();

const App = () => {
  return (
    <>
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
