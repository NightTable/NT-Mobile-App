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
const Login = ({ navigation, route }) => {
  const [phoneNumber, setphoneNumber] = useState("");
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
    // if (phoneNumber.length < 14) {
    //   Alert.alert("Please enter the correct number");
    // } else {
      console.log("triggered===>");
      triggerOtp();
    //}
  };

  //API CALL
  const triggerOtp = async () => {
    const data = await loginorSignUp(`+${selectedCountry}${phoneNumber}`);
    console.log("loginorSignUp:data====>", data);
    if(data.status === 'true'){
      navigation.navigate("Otp",{
        number: `${selectedCountry}${phoneNumber}`
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
                  <Image
                    resizeMode="contain"
                    style={{ height: 80, width: 80 }}
                    source={require("../../../assets/logo/logo.png")}
                  />
                  <Text
                    style={{ fontSize: 28, paddingTop: 12, color: "white" }}
                  >
                    Sign up or login by entering your phone number
                  </Text>
                </Box>
                <Box
                  style={{ paddingHorizontal: 10 }}
                  flexDir={"row"}
                  width={"100%"}
                  alignItems={"center"}
                >
                  <Box
                    justifyContent={"center"}
                    style={{ height: 40 }}
                    width={"30%"}
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
                  <Box style={{ paddingHorizontal: 10 }} width={"70%"}>
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
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 6,
  },
  container: {
    height: "50%",
  },
});

export default Login;
