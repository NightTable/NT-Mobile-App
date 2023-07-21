// Imported Libraries

import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, Dimensions, Alert } from "react-native";
import OTPTextView from "react-native-otp-textinput";
//libraries
import { Box } from "native-base";
//REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//components
import { Button } from "../../components/Buttons";
//Utils
import { StoretoLocalData } from "../../utils/SensitiveData/SensitiveData";
//Theme
import { typography, colors } from "../../theme";
import { updateToken, verifyOtp } from "../../store/action/login";
import {
  disableLoader,
  enableLoader,
} from "../../components/popUp/loader/trigger";
import { getAllClubfromdb } from "../../store/action/clubs";
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
    console.log("loginStore?.verifyNumberData", loginStore?.verifyNumberData);
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
        console.log("GO TO DASHBOARD");
        navigation.navigate("DrawerNavigator");
      }
    }

    return () => {};
  }, [loginStore?.verifyNumberData]);

  return (
    <>
      <Box safeArea style={styles.container}>
        <Text style={[typography.bold.bold16, styles.heading]}>
          Please enter the otp{" "}
        </Text>
        <Box style={{ marginTop: 100 }}>
          <OTPTextView
            tintColor={colors.black.black800}
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
        <Box>
          <Box style={{ height: "50%" }}>
            <Box style={{ paddinTop: 30 }}></Box>
          </Box>
          <Box
            style={{
              padding: 12,
              backgroundColor: colors.black.black800,
              flex: 1,
            }}
          >
            <Button
              onSubmit={() => {
                submit();
              }}
              disabled={otp.length === 6 ? false : true}
              backgroundColor={colors.gold.gold100}
              text={"Verify Otp"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black.black800,
    flex: 1,
    padding: 18,
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
    color: "white",
  },
  heading: { fontSize: 22, paddingTop: 18, color: colors.gold.gold100 },
});

export default Otp;
