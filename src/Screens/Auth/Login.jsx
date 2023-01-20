import React, { useEffect, useState } from "react"; // navigation.navigate('Login')

import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Dimensions,
  Alert,
  Pressable,
} from "react-native";
import { RouteProp, StackActions } from "@react-navigation/native";
import { Box } from "native-base";
import { Button } from "../../Components/Buttons";

//API CALL
import { loginorSignUp } from "../../Services/Auth";
// //Redux

// import { resetLoader } from "../../Redux/Actions/loader";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";

//Components
import { Dropdown, ElementDropdown } from "../../Components/Dropdown";

const { height, width } = Dimensions.get("screen");
import { colors } from "../../Theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
const Login = ({ navigation, route }) => {
  const [number, onChangeNumber] = useState("");

  //dropdown value changed
  const [countryCodeData, setcountryCodeData] = useState(
    route.params.countryCodes
  );
  const [selectedCountry, setselectedCountry] = useState("");

  //validating number
  const validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(phoneNumber);
  };

  const validation = () => {
    // if (number.length < 14) {
    //   Alert.alert("Please enter the correct number");
    // } else {
    triggerOtp();
    //}
  };

  //API CALL
  const triggerOtp = async () => {
    console.log(
      "`+${selectedCountry}${number}`",
      `+${selectedCountry}${number}`
    );
    const data = await loginorSignUp(`+${selectedCountry}${number}`);
    console.log("loginorSignUp:data====>", data.status);
    if (data.status === true) {
      navigation.navigate("Otp", {
        number: `+${selectedCountry}${number}`,
      });
    }
  };

  //NAVIGATION
  const navigateTo = () => {
    navigation.navigate("Otp");
  };
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box height={height}>
            <Box style={styles.container} SafeArea bgColor={"black"}>
              <Box pt={20}>
                <Box style={{ padding: 12 }}>
                  <Text
                    style={{
                      fontSize: 34,
                      paddingTop: 12,
                      color: colors.gold.gold200,
                    }}
                  >
                    NightTable{" "}
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      paddingTop: 18,
                      color: colors.gold.gold200,
                    }}
                  >
                    Sign up or login
                  </Text>
                </Box>
                <Box
                  style={{ paddingHorizontal: 10, paddingTop: 18 }}
                  flexDir={"row"}
                  width={"100%"}
                  alignItems={"center"}
                >
                  <Box
                    justifyContent={"center"}
                    style={{ height: 40 }}
                    width={"22%"}
                  >
                    {/* <Dropdown
                width={"100%"}
                bgColor={colors.white.white0}
                data={countryCodeData}
                value={selectedCountry}
                placeholder={"Country"}
                defaultValue={"India"}
                onValueChange={(item) => {
                  setselectedCountry(item);
                }}
              /> */}
                    <ElementDropdown
                      value={selectedCountry}
                      onValueChange={(item) => {
                        setselectedCountry(item);
                      }}
                      data={countryCodeData}
                    />
                  </Box>
                  <Box style={{ paddingHorizontal: 10 }} width={"78%"}>
                    <TextInput
                      autoFocus={true}
                      style={styles.input}
                      onChangeText={(text) => {
                        onChangeNumber(text);
                      }}
                      value={number}
                      placeholder="Phone Number"
                      keyboardType="numeric"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box style={{ padding: 12, backgroundColor: "black", flex: 1 }}>
              <Button
                onSubmit={() => {
                  validation();
                }}
                backgroundColor={colors.gold.gold100}
                text={"Get Otp"}
              />

              <Text
                style={{
                  fontSize: 12,
                  paddingTop: 12,
                  textAlign: "center",
                  color: "white",
                }}
              >
                By logging in,you agree to the Terms of Use and Privacy Policy{" "}
              </Text>
            </Box>
          </Box>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 6,
    backgroundColor: "black",
    borderColor: colors.gold.gold100,
    borderRadius: 6,
    color: colors.gold.gold200,
  },
  container: {
    height: "50%",
  },
});

export default Login;
