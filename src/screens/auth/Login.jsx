import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

// components
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import SearchDropdown from '../../components/SearchDropdown';
import { Button } from '../../components/Buttons';
// Redux
// theme
import { colors } from '../../theme/colors';
import { typography } from '../../theme';

import { loginUser } from '../../store/action/login';
import { disableLoader, enableLoader } from '../../components/popUp/loader/trigger';
import { LocationPermission } from '../../permissions/location';
import { getAddressfromLatlong } from '../../services/address';
import { StoretoLocalData } from '../../utils/SensitiveData/SensitiveData';
import { SensitiveKey } from '../../utils/SensitiveData/SInfoKeys';
// DIMENSIONS

// MAIN FUNCTION
const Login = ({ navigation }) => {
  // REDUX
  const dispatch = useDispatch();

  // SELECTORS
  const loginReducer = useSelector((state) => state.login, shallowEqual);

  // STATES
  const [number, onChangeNumber] = useState('');
  // SELECTED COUNTRY DATA
  const [selectedCountry, setselectedCountry] = useState('+');
  // ERROR MSG
  const [errorMsg, seterrorMsg] = useState('');

  //const { abstractApiPartialUrl } = Constants.manifest.extra;

  // //API CALL
  const triggerOtp = async () => {
    enableLoader();
    try {
      // FOR VALIDATING PHONE-NO
      const abstractApiPartialUrl = 'https://phonevalidation.abstractapi.com/v1/?api_key=96832543ded64bbd92d9bb974e2437d8';
      const phoneNumber = `${selectedCountry}${number}`;
      const response = await axios.get(`${abstractApiPartialUrl}&phone=${phoneNumber}`);
      const isValid = response.data.valid;

      if (isValid) {
        dispatch(loginUser(phoneNumber));
        seterrorMsg('');
      } else {
        seterrorMsg('Invalid phone number.');
      }
    } catch (error) {
      console.log(error);
      seterrorMsg('An error occurred. Please try again.');
    } finally {
      disableLoader();
    }
  };

  const getAddressallReleatedData = async () => {
    // GET LOCATION OF THE USER
    const lotlong = await LocationPermission();
    let country = '';
    if (lotlong === undefined) {
      return false;
    }
    const obj = {
      lat: lotlong?.coords.latitude,
      lng: lotlong.coords.longitude
    };
    console.log("from login.jsx. obj is: ", obj)
    // API CALL
    const addressApiCall = await getAddressfromLatlong(obj);
    console.log("from login.jsx. addressApiCall is: ", addressApiCall.data)

    if (addressApiCall.message !== 'Request failed with status code 400') {
      const { address } = addressApiCall.data;
      const addressParts = address?.split(',');
      country = addressParts.pop().trim();
      let state = addressParts.pop().trim();
      state = state.replace(/\d+/g, '').trim();
      const city = addressParts.pop().trim();
      const userAddressObj = {
        country,
        state,
        city
      };
      await StoretoLocalData(SensitiveKey.USER.ADDRESS, userAddressObj);
      const data = loginReducer.countryData.filter((item) => (item.name === country ? item : ''));
      console.log("from login.jsx. loginReducer.countryData is: ", loginReducer.countryData.filter((item) => (item.name === country ? item : '')));
      console.log('====================================');
      console.log('data::>> LOGIN REDUCER ::>> ', data);
      console.log('====================================');

      if (data[0]?.value !== undefined) {
        setselectedCountry(data[0]?.value.toString());
      }
    }
  };

  useEffect(() => {
    async function loadData() {
      if (loginReducer?.otpNumberData?.status === false) {
        seterrorMsg(loginReducer?.otpNumberData?.message);
        disableLoader();
      } else if (loginReducer?.otpNumberData?.status === true) {
        disableLoader();
        navigation.navigate('Otp');
      } else {
        getAddressallReleatedData();
      }
    }

    loadData();
    return () => {};
  }, [loginReducer]);

  return (
    <SafeAreaView style={styles.mainBox}>
      <View style={[styles.container]}>
        <Text style={[typography.bold.bold16, styles.heading]}>NightTable </Text>
        <Text style={[typography.regular.regular16, styles.subtitle]}>Enter Phone Number</Text>
        <View style={styles.mobileNumberContainer}>
          <View style={styles.dropdownContainer1}>
            <SearchDropdown
              key={() => String(1)}
              leftIconName='search'
              leftIconColor='white'
              leftIconDirectoryName='Feather'
              search
              searchPopupHeading='Select Country'
              bgColor={colors.black.black900}
              borderColor={colors.gold.gold100}
              textColor={colors.white.white0}
              iconColor={colors.white.white0}
              actionSheetBgColor={colors.red.red800}
              selectedItemBgColor={colors.red.red800}
              placeholder={selectedCountry}
              height={58}
              width='100%'
              data={loginReducer.countryData}
              value={selectedCountry}
              onValueChange={(itemValue) => {
                console.log('itemValue.value===>', itemValue.value);
                setselectedCountry(itemValue.value);
              }}
            />
          </View>

          <View style={styles.dropdownContainer2}>
            <TextInput
              autoFocus
              style={[typography.regular.regular16, styles.input]}
              onChangeText={(text) => {
                const numberRegex = /^[0-9]*\.?[0-9]*$/;
                if (numberRegex.test(text)) {
                  onChangeNumber(text);
                }
              }}
              value={number}
              placeholder='Phone Number'
              placeholderTextColor={colors.grey.grey800}
              keyboardType='numeric'
            />
          </View>
        </View>

        <Text
          style={[
            styles.termandconditionText,
            {
              color: colors.red.red300
            }
          ]}>
          {errorMsg}{' '}
        </Text>

        <View style={{ paddingTop: 160 }}>
          <Button
            disabled={!(number.length >= 1)} // Singaporean phone numbers are 8 digits
            onSubmit={() => {
              if (selectedCountry.length >= 1) {
                triggerOtp();
              } else {
                seterrorMsg('please select the country');
              }
            }}
            backgroundColor={colors.gold.gold100}
            text='Agree & Continue'
          />

          <Text
            style={[
              styles.termandconditionText,
              {
                color: colors.gold.gold100,
                textAlign: 'center'
              },
              typography.regular.regular12
            ]}>
            By logging in,you agree to the Terms of Use and Privacy Policy.{' '}
          </Text>
          <Text
            style={[
              styles.termandconditionText,
              {
                color: colors.gold.gold100,
                textAlign: 'center'
              },
              typography.regular.regular12
            ]}>
            Please enable location sharing, as our system uses your live location to find the best clubs near you.
          </Text>
        </View>
      </View>
    </SafeAreaView>
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
    fontSize: 22
  },
  container: {
    padding: 18
  },
  mainBox: { flex: 1, backgroundColor: colors.black.black800 },
  heading: {
    fontSize: 34,
    color: colors.gold.gold100
  },
  subtitle: {
    fontSize: 24,
    paddingTop: 18,
    color: colors.gold.gold100
  },
  mobileNumberContainer: {
    marginTop: 60,
    width: '100%',
    flexDirection: 'row'
  },
  dropdownContainer1: {
    width: '30%'
  },
  dropdownContainer2: {
    width: '70%',
    paddingLeft: 10
  },
  termandconditionText: {
    fontSize: 12,
    paddingTop: 12,
    color: colors.gold.gold100
  }
});

export default Login;
