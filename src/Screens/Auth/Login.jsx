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
} from "react-native";
import { RouteProp, StackActions } from "@react-navigation/native";
import { Box } from "native-base";
import { Button } from "../../Components/Buttons";
// //Redux

// import { resetLoader } from "../../Redux/Actions/loader";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";

//Components
import { Dropdown } from "../../Components/Dropdown";

//json file
import { countryCodes } from "../../json/countriesCode";
import { colors } from "../../Theme/colors";
const Login = ({ navigation }) => {
  // console.log("countryCodes===>",countryCodes);

  const [phoneNumber, setphoneNumber] = useState("");
  const [number, onChangeNumber] = React.useState("");

  //dropdown value changed
  const [countryCodeData, setcountryCodeData] = useState(countryCodes);
  const [selectedCountry, setselectedCountry] = useState("");

  //validating number
  const validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(phoneNumber);
  };

  return (
    <>
      <Box SafeArea bgColor={"black"} flex={1} p={1}>
        <Box pt={12}>
          <Box
            style={{ paddingHorizontal: 10 }}
            flexDir={"row"}
            width={"100%"}
            alignItems={"center"}
          >
            <Box justifyContent={"center"} style={{ height: 40 }} width={"30%"}>
              <Dropdown
                width={"100%"}
                bgColor={colors.white.white0}
                data={countryCodeData}
                value={selectedCountry}
                placeholder={"Country"}
                defaultValue={"India"}
                onValueChange={(item) => {
                  setselectedCountry(item);
                }}
              />
            </Box>
            <Box style={{ paddingHorizontal: 10 }} width={"70%"}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone Number"
                keyboardType="numeric"
              />
            </Box>
          </Box>
        </Box>
        {/* <Button text={'Click on it'}
        /> */}
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    //margin: 12,
    borderWidth: 1,
    padding: 6,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 6,
  },
});

export default Login;
