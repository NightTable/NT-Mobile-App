// Imported Libraries

import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import OTPTextView from "react-native-otp-textinput";

//Moment

//Main Function
const Otp = ({ route, navigation }) => {
  const [confirm, setConfirm] = useState(null);
  const [isLoding, setIsLoading] = useState(false);
  //const [enableResendBut, setenableResendBut] = useState(false);

  //ResendOtp-Button State
  const [resendOtp, setresendOtp] = useState(true);

  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };

  return (
    <>
      <View>
        <Text>please enter otp </Text>
        <View style={{ alignItems: "center" }}>
          {/* <OTPInputView
            style={{width: '80%', height: 200}}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          /> */}
          <View>
            <OTPTextView
              handleTextChange={(e) => {}}
              // ref={(e) => (otpInput = e)}
              inputCount={4}
              keyboardType="numeric"
            />
            {/* <Button title="clear" onClick={clearText}></Button> */}
          </View>
        </View>
      </View>

      {/* 
        {isLoding ? <LoaderModel /> : null}
     */}
    </>
  );
};

// const styles = StyleSheet.create({
//   Container: {
//     margin: 0,
//     borderTopRightRadius: 30,
//     backgroundColor: 'white',
//     borderTopLeftRadius: 30,
//     height: '100%',
//     width: '100%',
//     left: 0,
//     bottom: 0,
//     justifyContent: 'flex-start',
//   },
//   HelpingContainer: {
//     ...Platform.select({
//       ios: {
//         height: verticalScale(64),
//       },
//       android: {
//         height: verticalScale(30),
//       },
//       default: {
//         // other platforms, web for example
//         height: verticalScale(30),
//       },
//     }),
//     backgroundColor: 'transparent',
//     width: '100%',
//   },
//   ImgContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   ImgStyle: {
//     height: 48,
//     width: 48,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//   },
//   Box: {
//     paddingHorizontal: 20,

//     ...Platform.select({
//       ios: {
//         paddingTop: 20,
//       },
//       android: {
//         paddingTop: 20,
//       },
//     }),
//   },
//   Boxtxt1: {
//     fontSize: verticalScale(20),
//     color: 'white',
//   },
//   Boxtxt2: {
//     color: 'white',

//     fontSize: verticalScale(12),
//   },
//   HelpingContainer2: {
//     ...Platform.select({
//       ios: {
//         height: verticalScale(10),
//       },
//       android: {
//         //  height: verticalScale(10),
//       },
//     }),
//     backgroundColor: 'transparent',
//     width: '100%',
//   },
//   borderStyleBase: {
//     width: 30,
//     height: 45,
//   },
//   borderStyleHighLighted: {
//     borderColor: '#03DAC6',
//   },
//   underlineStyleBase: {
//     width: 30,
//     height: 45,
//     borderWidth: 0,
//     borderBottomWidth: 1,
//   },
//   underlineStyleHighLighted: {
//     borderColor: 'black',
//   },
// });
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
