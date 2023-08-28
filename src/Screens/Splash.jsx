import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import { Image } from "react-native";

//REDUX
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getAllCountriesData } from "../store/action/login";
import { colors } from "../Theme";

//Splash main function
const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  //states
  const loginStore = useSelector((state) => state.login, shallowEqual);

  //check auth
  useEffect(() => {
    const init = async () => {
      //check navigation


      console.log('====================================');
      console.log('loginStore',loginStore);
      console.log('====================================');
      if (loginStore.isUserLoggedIn === true) {
        console.log("USER IS LOGGED IN ======>");
        console.log("====================================>");
        console.log("CHECK TOKEN AUTHENTICATION::: ======>");
        console.log("====================================>");
        // navigation.dispatch(StackActions.replace('DrawerNavigator', {}));
         navigation.navigate("DrawerNavigator");
      } else {
        dispatch(getAllCountriesData());
        navigation.navigate("Login");
      }
    };

    init();

    //un subscribing the function
    unsubscribe = () => {
      return init();
    };
  }, []);

  // //checkAuthSession
  // const checkUserDatainLocal = async () => {
  //   const data = GetLocalPhoneData('');
  // }

  return (
    <>
      <Box
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.black.black800,
        }}
        safeArea
      >
        <Image
          style={{ height: 200, width: 220 }}
          source={require("../../assets/logo/logo.png")}
        />
      </Box>
    </>
  );
};

export default Splash;
