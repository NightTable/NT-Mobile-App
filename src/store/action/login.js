import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginReducer } from '../reducer/loginReducer';
import { getCountries } from '../../services/country';
import { loginApi, otpVerify } from '../../services/auths';
import { SensitiveKey } from '../../utils/SensitiveData/SInfoKeys';

const {
  logout,
  checkUserLoggedIn,
  updateUserToken,
  isProfileSetup,
  updateCountryData,
  otpGeneratedData,
  verifyGeneratedData,
  userAddress
} = loginReducer.actions;

export const loginUser = (number) => async (dispatch) => {
  const obj = {
    phoneNumberParam: number
  };
  const apiCall = await loginApi(obj);
  console.log(apiCall.data, 'login user\n');
  dispatch(otpGeneratedData(apiCall.data));
};

export const getAllCountriesData = () => async (dispatch) => {
  const tempArr = [];
  const apiData = await getCountries();
  apiData.map((item) =>
    tempArr.push({
      label: item.phoneNumberCode.slice(0, 1) === '+' ? `${item.phoneNumberCode}` : `+${item.phoneNumberCode}`,
      value: item.phoneNumberCode.slice(0, 1) === '+' ? `${item.phoneNumberCode}` : `+${item.phoneNumberCode}`,
      name: item.name
    })
  );
  dispatch(updateCountryData(tempArr));
};

export const verifyOtp = (otp) => async (dispatch, getState) => {
  const loginData = getState().login.otpNumberData;
  const obj = {
    isrepresentative: false,
    reqPhoneNumber: loginData.data.phoneNumber,
    reqOtp: otp
  };

  const otpVerifyData = await otpVerify(obj);
  if (otpVerifyData?.toString() === 'AxiosError: Request failed with status code 403') {
    dispatch(
      verifyGeneratedData({
        messasge: 'Verification failed! Please enter correct otp again.'
      })
    );
  } else {
    dispatch(verifyGeneratedData(otpVerifyData.data));
  }
  // dispatch(verifyGeneratedData(otpVerifyData));
};

export const updateToken = (data) => async (dispatch) => {
  console.log('data===>', data.data);
  AsyncStorage.setItem(SensitiveKey.USER.DATA, JSON.stringify(data?.data));
  dispatch(updateUserToken(data?.token));
  dispatch(isProfileSetup(data?.data?.isProfileSetup));
  dispatch(checkUserLoggedIn(true));

  // GET CLUBS
};

export const logoutFromApp = () => async (dispatch) => {
  dispatch(logout());
};

export const userProfileAddress = (data) => async (dispatch) => {
  dispatch(userAddress(data));
};

export function loginStore() {}
