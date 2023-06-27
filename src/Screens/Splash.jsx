import React, { useEffect, useState } from "react"; 
import { StatusBar, StyleSheet, Platform, Text, Image } from "react-native";
import { Box } from "native-base";
import { useNavigation, StackActions } from '@react-navigation/native';

//utils 
import { GetLocalPhoneData } from "../Utils/SensitiveData";

//api call for country codes
import { getCountriesCode } from "../Services/Countries";
import { sessionTokenVerify } from "../Services/Auth";


//Splash main function
const Splash = ({ navigation }) => {
  //states
  const [LoggedIn, setLoggedIn] = useState(true);

  //check auth
  useEffect(() => {
    const init = async () => {
      //check navigation
      if (LoggedIn === true) {
        console.log(LoggedIn)
        navigation.dispatch(StackActions.replace('DrawerNavigator', {}));
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



  //checkAuthSession 
  const checkUserDatainLocal = async () => {
    const data = GetLocalPhoneData('');
    console.log(data,"data====> ")
  }

  //loading country codes data
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
