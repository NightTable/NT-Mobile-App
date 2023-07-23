import { Provider } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import { Dimensions, Modal, View, Text, StyleSheet } from "react-native";

import { NativeBaseProvider, StatusBar } from "native-base";
import { colors } from "./src/theme";
//STORE
import { store } from "./src/store/store";
//NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//FONTS LOADING
import { useFonts } from "expo-font";
import LogoSplash from "./src/screens/logo";
//net -info
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import RootStack from "./src/navigation/RootStack";
import { PopUpAlertUi } from "./src/components/popUp/PopUp";
import { EventRegister } from "react-native-event-listeners";

const Stack = createNativeStackNavigator();

export default function App() {
  //INTERNET CONNECTION CHECK

  const netInfo = useNetInfo();

  const [isConnected, setIsConnected] = useState(true);
  const [showConnectionStatus, setShowConnectionStatus] = useState(false);
  const [popUpShow, setpopUpShow] = useState(false);
  const [popUpTheme, setpopUpTheme] = useState(false);
  const [message, setmessage] = useState("");
  const [popUprenderfn, setpopUprenderfn] = useState();
  const [closeBtnEnable, setcloseBtnEnable] = useState(false);
  const [Image, setImage] = useState("");

  useEffect(() => {
    const globalSucessPopUp = EventRegister.addEventListener(
      "popupTriggerd",
      (data) => {
        UpdatePopData(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(globalSucessPopUp);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      // when no internet connection and if the state of the connection is true then need to set the status of connection true
      if (!isConnected && state.isConnected) {
        setShowConnectionStatus(true);
        setTimeout(() => {
          setShowConnectionStatus(false);
        }, 3000);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  const UpdatePopData = async (data) => {
    if (data) {
      setpopUprenderfn(data.renderfn);
      setmessage(data.Heading);
      setpopUpTheme(data.headingColor);
      setImage(data.img);
      setcloseBtnEnable(data.closeBtnEnable);

      setpopUpShow(true);
      timeout = setTimeout(
        () => {
          onPopUpClose();
        },
        data?.closingTime === undefined ? 2000 : data?.closingTime
      );
    } else {
      setpopUpShow(false);
      clearTimeout(timeout);
    }
  };

  const onPopUpClose = () => {
    EventRegister.emit("popupTriggerd", "");
    setpopUpShow(false);
    clearTimeout(timeout);
  };

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
            {popUpShow === false ? null : (
              <Modal
                animationType="slide"
                transparent={true}
                visible={popUpShow}
              >
                <PopUpAlertUi
                  onPopUpClose={() => {
                    onPopUpClose();
                  }}
                  message={message}
                  headingColor={popUpTheme}
                  renderfn={popUprenderfn}
                  closeBtnEnable={closeBtnEnable}
                  img={Image}
                />
              </Modal>
            )}
            <RootStack />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
const styles = StyleSheet.create({
  offline: {
    height: 30,
    backgroundColor: colors.red.red175,
    justifyContent: 'center',
  },
  greenText: {
    height: 30,
    backgroundColor: colors.green.green200,
    justifyContent: 'center',
  },
  textColor: {color: colors.white.white0, textAlign: 'center'},
});
