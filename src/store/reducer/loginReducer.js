import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  number: '',
  countryData: [],
  isLoading: false,
  userData: [],
  token: 'default_token',
};

export const loginReducer = createSlice ({
  name: 'login',
  initialState,
  reducers: {
    loginSucess: (state, {payload}) => {
      state.token = payload;
    },

    logout: state => {
      return {
        ...initialState,
      };
    },

    setLoading: (state, {payload}) => {
      state.isLoading = payload;
    },
    updateCountryData: (state, {payload}) => {
      state.countryData = payload;


      console.log('====================================');
      console.log('state.countryData',payload);
      console.log('====================================');
    },
  },
});
