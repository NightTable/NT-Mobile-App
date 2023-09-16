// Imported Libraries

import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, Dimensions, Alert, TextInput } from "react-native";
import OTPTextView from "react-native-otp-textinput";
//libraries
import { Box } from "native-base";
//REDUX
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//components
import { Button } from "../../components/Buttons";
//Utils
//Theme
import { typography, colors } from "../../theme";
import {
  disableLoader,
  enableLoader,
} from "../../components/popUp/loader/trigger";
import { HeaderWithLeftIcon } from "../../components/Header";
import { getProfileData } from "../../services/user";
import { GetRequest } from "../../utils/axios/Axios";
const { height, width } = Dimensions.get("screen");
//Main Function

const Profile = ({ route, navigation }) => {
  //REDUX
  const dispatch = useDispatch();

  const loginStore = useSelector((state) => state.login.otpNumberData);
  // console.log("loginStore====>", loginStore.data.phoneNumber);

  const [profileData, setprofileData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    instagram_id: "",
    linkedin_id: "",
  });

  useEffect(() => {
    async function loadData() {
      // if (loginStore?.data?.phoneNumber != undefined) {
      //   getUserProfileData(loginStore.data.phoneNumber);
      // }
      try {

        console.log('loading ');
        let obj = JSON.stringify({
          phoneNumber: "8770203998",
        });

        console.log('obj',obj);
        const response = await GetRequest(
          `http://localhost:3000/api/users/user`,
          obj,
          ""
        );
        console.log('response',response);
        console.log("response.data;", response);
      } catch (error) {
        return error;
      }
    }
    loadData();

    return () => {
      //  second
    };
  }, [loginStore?.data?.phoneNumber]);

  const getUserProfileData = async (phoneNumber) => {
   
    try {
      let obj = {
        phoneNumber: "8770203998",
      };
      const response = await GetRequest(
        `http://localhost:3000/api/user/user`,
        obj,
        ""
      );
      console.log("response.data;", response.data);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Box safeArea style={styles.container}>
        <HeaderWithLeftIcon
          title={"Profile"}
          icon={"arrowleft"}
          iconDirectory={"AntDesign"}
          onSubmit={() => {
            navigation.navigate("Home");
          }}
        />
        <Box style={[styles.mainBox]}>
          <Box style={styles.inputBox}>
            <Text style={[styles.heading, typography.bold.bold16]}>
              First Name
            </Text>
            <TextInput
              autoFocus={true}
              style={[typography.regular.regular16, styles.input]}
              onChangeText={(text) => {
                setprofileData((previousState) => {});
              }}
              value={profileData.phoneNumber}
              placeholder="Phone Number"
              placeholderTextColor={colors.grey.grey800}
              keyboardType="numeric"
            />
          </Box>
          <Box style={styles.inputBox}>
            <Text style={[styles.heading, typography.bold.bold16]}>
              Last Name
            </Text>
            <TextInput
              autoFocus={true}
              style={[typography.regular.regular16, styles.input]}
              onChangeText={(text) => {
                onChangeNumber(text);
              }}
              value={profileData.phoneNumber}
              placeholder="Phone Number"
              placeholderTextColor={colors.grey.grey800}
              keyboardType="numeric"
            />
          </Box>
          <Box style={styles.inputBox}>
            <Text style={[styles.heading, typography.bold.bold16]}>Email</Text>
            <TextInput
              style={[typography.regular.regular16, styles.input]}
              onChangeText={(text) => {
                onChangeNumber(text);
              }}
              value={profileData.email}
              placeholder="Email Id"
              placeholderTextColor={colors.grey.grey800}
              keyboardType="numeric"
            />
          </Box>
          {/* <Box style={styles.inputBox}>
            <Text style={[styles.heading, typography.bold.bold16]}>
              Phone Number
            </Text>
            <TextInput
              autoFocus={true}
              style={[typography.regular.regular16, styles.input]}
              onChangeText={(text) => {
                onChangeNumber(text);
              }}
              value={profileData.phoneNumber}
              placeholder="Phone Number"
              placeholderTextColor={colors.grey.grey800}
              keyboardType="numeric"
            />
          </Box> */}
          <Box
            style={{
              paddingTop: 60,
            }}
          >
            <Button
              onSubmit={() => {
                //  submit();
              }}
              //  disabled={otp.length === 6 ? false : true}
              backgroundColor={colors.gold.gold200}
              text={"Update Profile "}
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
  },
  mainBox: {
    paddingHorizontal: 18,
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 6,
    backgroundColor: colors.black.black900,
    borderColor: colors.gold.gold200,
    borderRadius: 6,
    color: colors.gold.gold200,
    fontSize: 22,
  },
  inputBox: {
    paddingVertical: 10,
  },
  heading: {
    color: colors.gold.gold200,
    paddingVertical: 8,
  },
});

export default Profile;
