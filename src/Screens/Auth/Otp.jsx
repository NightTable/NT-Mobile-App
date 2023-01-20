// Imported Libraries

import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";
//libraries
import { Box } from "native-base";
//components
import { Button } from "../../Components/Buttons";

//Themes
import { colors } from "../../Theme/colors";
//services
import { otpVerify } from "../../Services/Auth";
//Utils
import { StoretoLocalData } from "../../Utils/SensitiveData";

const { height, width } = Dimensions.get("screen");
//Main Function
const Otp = ({ route, navigation }) => {
  const [isLoding, setIsLoading] = useState(false);
  //const [enableResendBut, setenableResendBut] = useState(false);

  //ResendOtp-Button State
  const [resendOtp, setresendOtp] = useState(true);
  const [otp, setotp] = useState("");
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };

  const submit = async () => {
    if (otp.length < 4) {
      Alert.alert("Please enter the otp");
    } else {
      const data = await otpVerify(route.params.number, otp);
      console.log("data==>", data);
      if (data.status === true) {
        saveUserData(data);
        // navigation.navigate('Dashboard')
      }
    }
  };

  const saveUserData = async (data) => {
    const saveData = await StoretoLocalData(JSON.stringify(data));
    console.log("saveData===>", saveData);
  };

  return (
    <>
      <Box
        safeArea
        style={{
          backgroundColor: "black",
          flex: 1,
          padding: 20,
          paddinTop: 24,
        }}
      >
        <Text style={{ fontSize: 22, paddingTop: 18, color: "white" }}>
          Please enter the otp{" "}
        </Text>
        <View style={{ height: height }}>
          <View style={{ height: "50%" }}>
            <View style={{ paddinTop: 30 }}>
              <OTPTextView
                autoFocus={true}
                style={{ color: "white" }}
                handleTextChange={(e) => {
                  setotp(e);
                }}
                // ref={(e) => (otpInput = e)}
                inputCount={6}
                keyboardType="numeric"
              />
            </View>
          </View>
          <Box style={{ padding: 12, backgroundColor: "black", flex: 1 }}>
            <Button
              onSubmit={() => {
                submit();
              }}
              backgroundColor={colors.gold.gold100}
              text={"Verify Otp"}
            />
          </Box>
        </View>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 40,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 2,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

export default Otp;
