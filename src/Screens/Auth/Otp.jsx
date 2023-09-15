// Imported Libraries

import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, Dimensions, Alert } from "react-native";
import OTPTextView from "react-native-otp-textinput";
//libraries
import { Box } from "native-base";
//REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//components
import { Button } from "../../Components/Buttons";
//Utils
//Theme
import { typography, colors } from "../../Theme";
import { updateToken, verifyOtp } from "../../store/action/login";
import {
  disableLoader,
  enableLoader,
} from "../../Components/popUp/loader/trigger";
import { getAllClubfromdb } from "../../store/action/clubs";
import { HeaderWithLeftIcon } from "../../Components/Header";
const { height, width } = Dimensions.get("screen");
//Main Function

const Otp = ({ route, navigation }) => {
  //REDUX
  const dispatch = useDispatch();

  //login store
  const loginStore = useSelector((state) => state.login);
  const clubStore = useSelector((state) => state.club);
  //ResendOtp-Button State
  const [resendOtp, setresendOtp] = useState(true);
  const [otp, setotp] = useState("");
  const [error_msg, seterror_msg] = useState("");
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };

  const submit = async () => {
    enableLoader();
    const data = dispatch(verifyOtp(otp));
  };

  useEffect(() => {
    if (
      loginStore?.verifyNumberData?.message ==
      "Verification failed! Please try again."
    ) {
      seterror_msg("Verification failed! Please try again.");
    } else if (loginStore?.verifyNumberData.status === true) {
      // if (loginStore?.verifyNumberData?.data?.isProfileSetup === false) {
      //   dispatch(updateToken(loginStore?.verifyNumberData));
      //   disableLoader();
      //   console.log("GO TO PROFILE PAGE ====>");
      //   navigation.navigate("DrawerNavigator");
      // } else
      if (loginStore?.verifyNumberData?.data?.isProfileSetup != true) {
        dispatch(updateToken(loginStore?.verifyNumberData));
        dispatch(getAllClubfromdb());
        disableLoader();
        navigation.navigate("DrawerNavigator");
        console.log("GO TO DASHBOARD");
      }
    }
  }, [loginStore]);

  return (
    <>
      <Box safeArea style={styles.container}>
        <HeaderWithLeftIcon
          title={"Please enter the OTP"}
          icon={"arrowleft"}
          iconDirectory={"AntDesign"}
          onSubmit={() => {
            navigation.navigate("Login");
          }}
        />
        <Box style={[styles.mainBox]}>
          <Box style={{ marginTop: 100 }}>
            <OTPTextView
              tintColor={colors.gold.gold100}
              autoFocus={true}
              style={styles.roundedTextInput}
              handleTextChange={(e) => {
                setotp(e);
              }}
              inputCount={6}
              keyboardType="numeric"
            />
          </Box>
          <Text
            style={[
              typography.regular.regular14,
              {
                color: colors.red.red350,
              },
            ]}
          >
            {error_msg}
          </Text>
          <Box
            style={{
              paddingTop: 100,
              backgroundColor: colors.black.black800,
            }}
          >
            <Button
              onSubmit={() => {
                submit();
              }}
              disabled={otp.length === 6 ? false : true}
              backgroundColor={colors.gold.gold100}
              text={"Verify OTP"}
            />
          </Box>
        </Box>

        <Box></Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black.black800,
    flex: 1,
  },
  mainBox: {
    paddingHorizontal: 18,
    flex: 1,
  },
  borderStyleBase: {
    width: 40,
    height: 45,
  },

  roundedTextInput: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.gold.gold200,
    height: 60,
    width: 40,
    paddingLeft: 10,
    color: colors.gold.gold100,
  },
  heading: { fontSize: 22, paddingTop: 18, color: colors.gold.gold100 },
});

export default Otp;
