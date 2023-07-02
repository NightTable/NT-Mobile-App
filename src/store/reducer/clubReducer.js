import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  allClubs: [],
  individualClubDetail: [],
  isLoading: true,
};

export const clubReducer = createSlice ({
  name: 'Club',
  initialState,
  reducers: {
    getAllClubs: (state, {payload}) => {
      state.token = payload;
      return {...state};
    },
    getClubDetails: (state, {payload}) => {
      state[payload.name] = payload.value;
    },
    addClub: (state, {payload}) => {
      return {...state, ...payload};
    },
    updateClub: (state, {payload}) => {
      return {...state, ...payload};
    },
    editClub: (state, {payload}) => {
      return {...state, ...payload};
    },
    deleteClub: (state, {payload}) => {
      return {...state, ...payload};
    },
    isLoaderActive: (state, {payload}) => {
      state.isLoading = payload;
      return {...state};
    },
  },
});
