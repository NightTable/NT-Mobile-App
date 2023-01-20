import React, { useEffect, useState } from "react"; // navigation.navigate('Login')

import { StatusBar, StyleSheet, Platform, Text, Image } from "react-native";
import { RouteProp, StackActions } from "@react-navigation/native";
import { Box } from "native-base";

//api call for country codes
import { countryCodes } from "../json/countriesCode";
import { getCountriesCode } from "../Services/Countries";

//Splash main function
const Splash = ({ navigation }) => {
  //states
  const [LoggedIn, setLoggedIn] = useState(false);

  //check auth
  useEffect(() => {
    const init = async () => {
      //check navigation
      if (LoggedIn === true) {
        // navigation.dispatch(StackActions.replace('DrawerNavigator', {}));
      } else {
        getCountryCodes();
        //navigation.navigate("Login");
      }
    };

    init();

    //un subscribing the function
    unsubscribe = () => {
      return init();
    };
  }, [navigation]);

  const getCountryCodes = async () => {
    let tempArr = [];
    const data = await getCountriesCode();
    if (data.status === undefined) {
    } else {
      data.data.map((item) => {
        // console.log(item);
        item.phoneNumberCode[0] === "+"
          ? (item.phoneNumberCode = item.phoneNumberCode.replace("+", ""))
          : (item.phoneNumberCode = item.phoneNumberCode);
        tempArr.push({
          label: `+${item.phoneNumberCode}`,
          value: item.phoneNumberCode,
        });
      });

      navigation.navigate("Login", {
        countryCodes: tempArr,
      });
    }
  };

  return (
    <>
      <Box
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        bgColor={"black"}
        safeArea
      >
        {/* <Text color={"white"}>SPLASH SCREEN</Text> */}
        <Image
          style={{ height: 200, width: 220 }}
          source={require("../../assets/logo/logo.png")}
        />
      </Box>
    </>
  );
};

export default Splash;
