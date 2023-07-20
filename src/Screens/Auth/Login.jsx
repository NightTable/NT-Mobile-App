import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import { TextInput, StyleSheet, Text, Dimensions, Alert } from "react-native";
//components
import SearchDropdown from "../../components/SearchDropdown";
import { Button } from "../../components/Buttons";
//Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//Theme
import { colors } from "../../theme/colors";
import { typography } from "../../theme";

import { loginUser } from "../../store/action/login";
import {
  disableLoader,
  enableLoader,
} from "../../components/popUp/loader/trigger";
//DIMENSIONS
const { height, width } = Dimensions.get("screen");

//MAIN FUNCTION
const Login = ({ navigation, route }) => {
  //REDUX
  const dispatch = useDispatch();

  //SELECTORS
  const loginReducer = useSelector((state) => state.login, shallowEqual);

  //STATES
  const [number, onChangeNumber] = useState("");
  //SELECTED COUNTRY DATA
  const [selectedCountry, setselectedCountry] = useState("");
  //ERROR MSG
  const [error_msg, seterror_msg] = useState("");

  // //API CALL
  const triggerOtp = async () => {
    // console.log("number::", `${selectedCountry}${number}`);
    enableLoader();
    dispatch(loginUser(`${selectedCountry}${number}`));
    seterror_msg("");
  };

  useEffect(() => {
    if (loginReducer?.otpNumberData?.status === false) {
      seterror_msg(loginReducer?.otpNumberData?.message);
      disableLoader();
    } else if (loginReducer?.otpNumberData?.status === true) {
      disableLoader();
      navigation.navigate("Otp");
    }

    return () => {};
  }, [loginReducer]);

  return (
    <>
      <Box safeArea style={styles.mainBox}>
        <Box style={[styles.container]}>
          <Text style={[typography.bold.bold16, styles.heading]}>
            NightTable{" "}
          </Text>
          <Text style={[typography.regular.regular16, styles.subtitle]}>
            tell us your mobile number
          </Text>
          <Box style={styles.mobileNumberContainer}>
            <Box style={styles.dropdownContainer1}>
              <SearchDropdown
                key={() => {
                  return Number(1);
                }}
                leftIconName={"search"}
                leftIconColor={"white"}
                leftIconDirectoryName={"Feather"}
                search={true}
                searchPopupHeading={"Select Country"}
                bgColor={colors.grey.grey275}
                borderColor={colors.gold.gold100}
                textColor={colors.white.white0}
                iconColor={colors.white.white0}
                actionSheetBgColor={colors.red.red800}
                selectedItemBgColor={colors.red.red800}
                data={loginReducer.countryData}
                defaultValue={""}
                placeholder={""}
                onValueChange={(itemValue) => {
                  console.log("itemValue====>", itemValue);
                  setselectedCountry(itemValue.value);
                }}
                height={58}
                width={"100%"}
                value={"Country"}
              />
            </Box>

            <Box style={styles.dropdownContainer2}>
              <TextInput
                autoFocus={true}
                style={[typography.regular.regular16, styles.input]}
                onChangeText={(text) => {
                  const numberRegex = /^[0-9]*\.?[0-9]*$/;
                  if (numberRegex.test(text)) {
                    onChangeNumber(text);
                  }
                }}
                value={number}
                placeholder="Phone Number"
                placeholderTextColor={colors.grey.grey800}
                keyboardType="numeric"
              />
            </Box>
          </Box>

          <Text
            style={[
              styles.termandconditionText,
              {
                color: colors.red.red300,
              },
            ]}
          >
            {error_msg}{" "}
          </Text>

          <Box style={{ paddingTop: 160 }}>
            <Button
              disabled={number.length >= 10 ? false : true}
              onSubmit={() => {
                if (selectedCountry.length >= 1) {
                  triggerOtp();
                } else {
                  seterror_msg("please select the country");
                }
              }}
              backgroundColor={colors.gold.gold100}
              text={"Agree & Continue "}
            />

            <Text
              style={[
                styles.termandconditionText,
                {
                  color: colors.gold.gold100,
                  textAlign: "center",
                },
              ]}
            >
              By logging in,you agree to the Terms of Use and Privacy Policy{" "}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 58,
    borderWidth: 1,
    padding: 6,
    backgroundColor: colors.black.black900,
    borderColor: colors.gold.gold100,
    borderRadius: 6,
    color: colors.gold.gold100,
    fontSize: 22,
  },
  container: {
    padding: 18,
  },
  mainBox: { flex: 1, backgroundColor: colors.black.black900 },
  heading: {
    fontSize: 34,
    color: colors.gold.gold100,
  },
  subtitle: {
    fontSize: 24,
    paddingTop: 18,
    color: colors.gold.gold100,
  },
  mobileNumberContainer: {
    marginTop: 60,
    width: "100%",
    flexDirection: "row",
  },
  dropdownContainer1: {
    width: "30%",
  },
  dropdownContainer2: {
    width: "70%",
    paddingLeft: 10,
  },
  termandconditionText: {
    fontSize: 12,
    paddingTop: 12,
    color: colors.gold.gold100,
  },
});

export default Login;
