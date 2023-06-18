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
import { typography } from "../../Theme/typography";

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
    if (otp.length < 6) {
      Alert.alert("Please enter the otp");
    } else {
      console.log("otp before verify ", otp)
      const data = await otpVerify(route.params.number, otp);
      console.log("data==>", data.status);
      if (data.status === true) {
        // await saveUserData("userData",data);
        navigation.navigate('Dashboard')
      }
    }
  };

  const saveUserData = async (key, data) => {
    const saveData = await StoretoLocalData(key, data);
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
        <Text
          style={[
            typography.bold.bold8,
            { fontSize: 22, paddingTop: 18, color: colors.gold.gold100 },
          ]}
        >
          Please enter the otp{" "}
        </Text>
        <View style={{ marginTop: 100 }}>
          <OTPTextView
            tintColor="#000000"
            autoFocus={true}
            style={styles.roundedTextInput}
            handleTextChange={(e) => {
              setotp(e);
            }}
            inputCount={6}
            keyboardType="numeric"
          />
        </View>
        <View>
          <View style={{ height: "50%" }}>
            <View style={{ paddinTop: 30 }}></View>
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

  roundedTextInput: {
    borderRadius: 6,
    borderWidth: 4,
    borderColor: colors.gold.gold200,
    height: 60,
    width: 40,
    paddingLeft: 10,
    color: "white",
  },
});

export default Otp;
