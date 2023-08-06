import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allClubs: [],
  individualClubDetail: [],
  isLoading: true,
  individualClubEvents: [],
  individualClubTableConfig: [],
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
    getIndividualClubTableConfig: (state, { payload }) => {
      state.individualClubTableConfig = payload;
    },
    isLoaderState : (state, { payload }) => {
      state.isLoading = payload;
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
