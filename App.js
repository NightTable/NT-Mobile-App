import { Provider } from "react-redux";
import React, {useEffect, useState, useRef} from 'react';
import { NativeBaseProvider, StatusBar } from "native-base";
//STORE
import { store } from "./src/store/store";
//NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//SCREENS
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Auth/Login";

//FONTS LOADING
import { useFonts } from "expo-font";
import LogoSplash from "./src/screens/logo";
//net -info 
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import RootStack from "./src/navigation/RootStack";

const Stack = createNativeStackNavigator();

export default function App() { 
   //INTERNET CONNECTION CHECK

  const netInfo = useNetInfo();

  const [isConnected, setIsConnected] = useState(true);
  const [showConnectionStatus, setShowConnectionStatus] = useState(false);

  //LOADING FONTS
  const [isLoaded] = useFonts({
    "vh-bold": require("./assets/fonts/VerahHumana-Bold.ttf"),
    "vh-regular": require("./assets/fonts/VerahHumana-Regular.ttf"),
  });

  if (!isLoaded) {
    return (
      <>
        <LogoSplash />
      </>
    );
  }



  return (
    <>
      {showConnectionStatus ? (
        <View style={styles.greenText}>
          <Text style={[styles.textColor, typography.semBold.semBold14]}>
            Device is Online
          </Text>
        </View>
      ) : (
        netInfo.isConnected == false && (
          <View style={styles.offline}>
            <Text style={[styles.textColor, typography.semBold.semBold14]}>
              Device is Offline
            </Text>
          </View>
        )
      )}
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <RootStack/>
            
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
