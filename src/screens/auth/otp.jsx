// Imported Libraries

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Dimensions, SafeAreaView, View } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
// libraries
// REDUX
import { useDispatch, useSelector } from 'react-redux';
// components
import { Button } from '../../components/Buttons';
// Utils
// theme
import { typography, colors } from '../../theme';
import { updateToken, verifyOtp } from '../../store/action/login';
import { disableLoader, enableLoader } from '../../components/popUp/loader/trigger';
import { getAllClubfromdb } from '../../store/action/clubs';
import { HeaderWithLeftIcon } from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('screen');
// Main Function

const Otp = ({ route, navigation }) => {
  // REDUX
  const dispatch = useDispatch();

  // login store
  const loginStore = useSelector((state) => state.login);
  // ResendOtp-Button State
  const [resendOtp, setresendOtp] = useState(true);
  const [otp, setotp] = useState('');
  const [error_msg, seterror_msg] = useState('');
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  // const setText = () => {
  //   otpInput.current.setValue("1234");
  // };

  const submit = async (otp) => {
    enableLoader();
    const data = dispatch(verifyOtp(otp));
  };

  useEffect(() => {
    if (loginStore?.verifyNumberData?.messasge === 'Verification failed! Please try again.') {
      seterror_msg('Verification failed! Please try again.');
    } else if (loginStore?.verifyNumberData.status === true) {
      // if (loginStore?.verifyNumberData?.data?.isProfileSetup === false) {
      //   dispatch(updateToken(loginStore?.verifyNumberData));
      //   disableLoader();
      //   console.log("GO TO PROFILE PAGE ====>");
      //   navigation.navigate("DrawerNavigator");
      // } else
      // if (loginStore?.verifyNumberData?.data?.isProfileSetup != true) {
      dispatch(updateToken(loginStore?.verifyNumberData));
      dispatch(getAllClubfromdb());
      disableLoader();
      navigation.navigate('DrawerNavigator');
      console.log('GO TO DASHBOARD');
      AsyncStorage.setItem()
      // }
    }
  }, [loginStore]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithLeftIcon
        title='Please enter the OTP'
        icon='arrowleft'
        iconDirectory='AntDesign'
        onSubmit={() => {
          navigation.navigate('Login');
        }}
      />
      <View style={[styles.mainBox]}>
        <View style={{ marginTop: 20 }}>
          <Text
            style={[
              typography.bold.bold24,
              {
                color: colors.gold.gold100
              }
            ]}>
            Verify Details
          </Text>
          <Text
            style={[
              typography.semBold.semBold16,
              {
                color: colors.gold.gold100,
                paddingVertical: 20
              }
            ]}>
            OTP sent to your mobile number.
          </Text>
          <Text
            style={[
              typography.semBold.semBold16,

              {
                color: colors.gold.gold100,
                paddingBottom: 20
              }
            ]}>
            {loginStore?.otpNumberData?.data?.phoneNumber}
          </Text>
          <OTPTextView
            tintColor={colors.gold.gold100}
            autoFocus
            style={styles.roundedTextInput}
            handleTextChange={(e) => {
              if (e.length === 6) {
                // setotp(e);
                submit(e);
              }
              setotp(e);
            }}
            selectionColor={colors.gold.gold200}
            inputCount={6}
            keyboardType='numeric'
            getOTPTextChucks={(inputCount) => {
              console.log('inii', inputCount);
            }}
          />
        </View>
        <Text
          style={[
            typography.regular.regular14,
            {
              color: colors.red.red350,
              paddingTop: 10
            }
          ]}>
          {error_msg}
        </Text>
        <View
          style={{
            paddingTop: 100,
            backgroundColor: colors.black.black800
          }}>
          <Button
            onSubmit={() => {
              submit();
            }}
            disabled={otp.length !== 6}
            backgroundColor={colors.gold.gold100}
            text='Verify OTP'
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black.black800,
    flex: 1
  },
  mainBox: {
    paddingHorizontal: 18,
    flex: 1
  },
  borderStyleBase: {
    width: 40,
    height: 45
  },

  roundedTextInput: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.gold.gold200,
    height: 60,
    width: 40,
    paddingLeft: 10,
    color: colors.gold.gold100
  },
  heading: { fontSize: 22, paddingTop: 18, color: colors.gold.gold100 }
});

export default Otp;
