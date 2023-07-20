import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verifyNumberData: [],
  otpNumberData: [],
  countryData: [],
  userData: [],
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
    otpGeneratedData: (state, { payload }) => {
      state.otpNumberData = payload;
    },
    verifyGeneratedData: (state, { payload }) => {
      state.verifyNumberData = payload;
    },
    checkUserLoggedIn: (state, { payload }) => {
      state.isUserLoggedIn = true;
    },
    isProfileSetup: (state, { payload }) => {
      state.isProfileSetup = payload;
    },
    updateUserToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});
