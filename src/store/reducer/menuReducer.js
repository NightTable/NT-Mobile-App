import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuData: [],
};

export const loginReducer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getClubMenu: (state, { payload }) => {
      state.menuData = payload;
    },
  },
});
