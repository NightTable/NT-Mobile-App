import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verifyNumberData: [],
  otpNumberData: [],
  countryData: [],
  userData: [],
  userInfoAddress:[],
  token: "",
  isProfileSetup: false,
  isUserLoggedIn: false,

};

export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      return {
        ...initialState,
      };
    },

    updateUserData: (state, { payload }) => {
      state.userData = payload;
    },
    updateCountryData: (state, { payload }) => {
      state.countryData = payload;
    },
    userAddress : (state, { payload }) => {
      state.userInfoAddress = payload;
    },
    otpGeneratedData: (state, { payload }) => {
      state.otpNumberData = payload;
    },
    verifyGeneratedData: (state, { payload }) => {
      state.verifyNumberData = payload;
    },
    checkUserLoggedIn: (state, { payload }) => {
      state.isUserLoggedIn = payload;
    },
    isProfileSetup: (state, { payload }) => {
      state.isProfileSetup = payload;
    },
    updateUserToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});
