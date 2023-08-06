import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allClubs: [],
  individualClubDetail: [],
  isLoading: true,
  individualClubEvents: [],
};

export const clubReducer = createSlice({
  name: "club",
  initialState,
  reducers: {
    getAllClubs: (state, { payload }) => {
      state.allClubs = payload;
    },
    getClubEventsData: (state, { payload }) => {
      state.individualClubEvents = payload;
    },
    // getClubDetails: (state, { payload }) => {
    //   state[payload.name] = payload.value;
    // },
    // isLoaderActive: (state, { payload }) => {
    //   state.isLoading = payload;
    //   return { ...state };
    // },
  },
});
