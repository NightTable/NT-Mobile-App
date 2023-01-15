import React, { useEffect, useState } from "react"; // navigation.navigate('Login')

import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Platform,
  Text,
  Image,
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
const Login = ({ navigation }) => {

 // console.log("countryCodes===>",countryCodes);
 

  const [phoneNumber, setphoneNumber] = useState("");
  const [number, onChangeNumber] = React.useState("");

  //dropdown value changed
  const [countryCodeData, setcountryCodeData] = useState(countryCodes)
  const [selectedCountry, setselectedCountry] = useState("");

  //validating number
  const validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(phoneNumber);
  };

  return (
    <>
      <Box
        SafeArea
         bgColor={"black"}
        flex={1}
        p={1}
      >
        <Box flexDir={"row"} pt={12}>
          <Box>
            <Dropdown
              width={100}
              bgColor={"red"}
              data={countryCodeData}
              value={selectedCountry}
              placeholder={"COuntry"}
              defaultValue={"India"}
              onValueChange={(item) => {
                setselectedCountry(item);
              }}
            />
          </Box>
          <Box>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
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
    margin: 12,
    borderWidth: 1,
    // padding: 10,
    backgroundColor: "white",
    borderColor: "white",
  },
});

export default Login;
